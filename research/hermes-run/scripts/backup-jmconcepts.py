"""Backup live jmconcepts.cloud pages via FTP before P0 claim fixes (2026-09-01)."""
import os, ftplib, datetime, hashlib

def load_env(path):
    env = {}
    with open(path, encoding="utf-8", errors="replace") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            env[k.strip()] = v.strip().strip('"').strip("'")
    return env

env = load_env(r"C:/Users/josme/HOS/.env")
pw = env.get("HOSTINGER_FTP_PASSWORD")
assert pw, "HOSTINGER_FTP_PASSWORD missing"

ftp = ftplib.FTP()
ftp.connect("46.202.172.194", 21, timeout=25)
ftp.login("u236595646", pw)
base = "domains/jmconcepts.cloud/public_html"
ts = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
bak = rf"C:/Users/josme/HOS/projects/jmconcepts/backups/ftp-live-{ts}"
os.makedirs(bak, exist_ok=True)

manifest = []
for fname in ["index.html", "samenwerking.html", "lid-worden.html"]:
    out_path = os.path.join(bak, fname)
    with open(out_path, "wb") as out:
        ftp.retrbinary(f"RETR {base}/{fname}", out.write)
    size = os.path.getsize(out_path)
    sha = hashlib.sha256(open(out_path, "rb").read()).hexdigest()
    manifest.append((fname, size, sha))
    print(f"backed up: {fname} {size} bytes sha256:{sha[:16]}...")
ftp.quit()

with open(os.path.join(bak, "MANIFEST.txt"), "w", encoding="utf-8") as m:
    m.write("timestamp: " + datetime.datetime.now().isoformat() + "\n")
    for fname, size, sha in manifest:
        m.write(f"{fname}\t{size}\t{sha}\n")
print("BACKUP_DIR=" + bak)
