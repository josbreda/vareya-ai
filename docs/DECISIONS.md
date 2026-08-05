# Vareya.ai — Decisions Log

## 2026-08-05

### D001: Project scaffold
- **Decision:** Next.js 15+ with App Router, TypeScript strict, Tailwind CSS v4
- **Rationale:** Specified in architecture. Vercel-native deployment.
- **Alternatives:** Remix, Astro, plain React. Rejected for Vercel integration.

### D002: Package manager
- **Decision:** npm (not pnpm/yarn)
- **Rationale:** Default Next.js choice, zero config on Vercel.

### D003: Repository name
- **Decision:** `vareya-ai` under `josbreda` GitHub
- **Rationale:** vareya.ai domain target. Separate from legacy vareya-dashboard.

### D004: No CMS
- **Decision:** Hardcoded content in TypeScript/JSON, no headless CMS
- **Rationale:** Sprint scope limit. CMS can be added post-launch.

### D005: British English
- **Decision:** All copy uses British English ("fulfilment", not "fulfillment")
- **Rationale:** Specified in brief. European audience.

### D006: Image strategy
- **Decision:** Abstract logistics visuals, no AI-generated warehouse imagery
- **Rationale:** Must not falsely imply facilities Vareya doesn't own.

### D007: Branch strategy
- **Decision:** Protected branches: agent/frontend, agent/funnel, agent/qa
- **Rationale:** Prevent conflicts, enforce PR review by Agent 1.
