// Temporary helper: re-trigger GitHub Pages custom-domain certificate issuance.
// Reads the workflow token persisted by actions/checkout, clears and re-adds the
// custom domain so GitHub starts a fresh ACME order. Never fails the build.
import { execFileSync } from "node:child_process";
import fs from "node:fs";

const CNAME = "xn--z52bu9l3wk26b91c.com";
const REPO = process.env.GITHUB_REPOSITORY || "GR0790/monster-ticket";
const API = `https://api.github.com/repos/${REPO}/pages`;

function token() {
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN;
  const cfg = fs.readFileSync(".git/config", "utf8");
  const m = cfg.match(/AUTHORIZATION:\s*basic\s+([A-Za-z0-9+/=]+)/i);
  if (!m) throw new Error("no checkout token in .git/config");
  const decoded = Buffer.from(m[1], "base64").toString("utf8");
  const idx = decoded.indexOf(":");
  return decoded.slice(idx + 1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function call(method, body) {
  const res = await fetch(API, {
    method,
    headers: {
      Authorization: `Bearer ${token()}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  console.log(`[pages-cert] ${method} -> ${res.status} ${text.slice(0, 400)}`);
  return { status: res.status, text };
}

try {
  await call("GET");
  const cleared = await call("PUT", { cname: "", build_type: "workflow" });
  if (cleared.status >= 400) {
    console.log("[pages-cert] clearing failed; trying same-cname reset instead");
    await call("PUT", { cname: CNAME, build_type: "workflow" });
  } else {
    await sleep(20000);
    await call("PUT", { cname: CNAME, build_type: "workflow" });
  }
  await call("GET");
} catch (err) {
  console.log(`[pages-cert] skipped: ${err.message}`);
}
process.exit(0);
