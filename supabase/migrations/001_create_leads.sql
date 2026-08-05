-- ============================================================================
-- Vareya.ai — Supabase Migration 001: Core Tables
-- Run: supabase db push OR manual SQL
-- ============================================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- LEADS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.leads (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id     TEXT UNIQUE NOT NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Form metadata
  form_type         TEXT NOT NULL CHECK (form_type IN ('scan', 'quote')),
  status            TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'disqualified', 'customer')),

  -- Owner
  owner             TEXT,

  -- Contact info
  name              TEXT NOT NULL,
  company           TEXT NOT NULL,
  work_email        TEXT NOT NULL,
  phone             TEXT,
  website           TEXT,

  -- Business info
  company_country         TEXT,
  monthly_order_volume    TEXT,
  sku_count               TEXT,
  product_category        TEXT,
  target_markets          JSONB DEFAULT '[]'::jsonb,
  ecommerce_platform      TEXT,
  amazon_fbm              BOOLEAN DEFAULT FALSE,
  returns_required        BOOLEAN DEFAULT FALSE,
  desired_start_date      TEXT,
  comments                TEXT,

  -- Scan answers (JSONB for flexibility)
  scan_answers            JSONB,

  -- Attribution
  landing_page            TEXT,
  referrer                TEXT,
  utm_source              TEXT,
  utm_medium              TEXT,
  utm_campaign            TEXT,
  utm_content             TEXT,
  device                  TEXT,

  -- Privacy
  privacy_acknowledged_at TIMESTAMPTZ
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_leads_submission_id ON public.leads(submission_id);
CREATE INDEX IF NOT EXISTS idx_leads_work_email ON public.leads(work_email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_form_type ON public.leads(form_type);

-- Row Level Security — public users can NEVER read leads
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Only allow insert from anon key (service role bypasses RLS)
CREATE POLICY "Allow anon insert" ON public.leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Nobody (except service role) can read, update, or delete
-- No SELECT policy = denied by default

-- ============================================================================
-- LEAD EVENTS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.lead_events (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id     UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  event_name  TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  metadata    JSONB DEFAULT '{}'::jsonb
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_lead_events_lead_id ON public.lead_events(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_events_created_at ON public.lead_events(created_at DESC);

-- RLS — same pattern
ALTER TABLE public.lead_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert" ON public.lead_events
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- ============================================================================
-- Updated_at trigger
-- ============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
