"""Deploy P0 claim fixes to jmconcepts.cloud (2026-09-01). Upload 3 patched files, verify remote hash == local."""
import os, ftplib, hashlib, datetime

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
pw = env["HOSTINGER_FTP_PASSWORD"]
LOCAL = r"C:/Users/josme/HOS/projects/jmconcepts"
FILES = ["index.html", "samenwerking.html", "lid-worden.html"]

ftp = ftplib.FTP()
ftp.connect("46.202.172.194", 21, timeout=25)
ftp.login("u236595646", pw)
base = "domains/jmconcepts.cloud/public_html"

for fname in FILES:
    local_path = os.path.join(LOCAL, fname)
    local_sha = hashlib.sha256(open(local_path, "rb").read()).hexdigest()
    with open(local_path, "rb") as f:
        ftp.storbinary(f"STOR {base}/{fname}", f)
    # verify remote hash
    buf = []
    ftp.retrbinary(f"RETR {base}/{fname}", buf.append)
    remote_sha = hashlib.sha256(b"".join(buf)).hexdigest()
    ok = "MATCH" if remote_sha == local_sha else "MISMATCH"
    print(f"{fname}: uploaded, remote sha256 {remote_sha[:16]}... {ok}")

# remote listing check for default.php
items = []
ftp.retrlines(f"LIST {base}", items.append)
print("root files:", ", ".join(it.split()[-1] for it in items[:20]))
ftp.quit()
print("DEPLOY_DONE", datetime.datetime.now().isoformat())
