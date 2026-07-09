import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistEntry = {
  email: string;
  instrument: string;
  submittedAt: string;
  userAgent: string | null;
  ref: string | null;
};

async function persistLocal(entry: WaitlistEntry) {
  // Local/dev persistence: append to data/waitlist.jsonl in the repo.
  // Vercel serverless filesystems are read-only, so this call will
  // silently no-op in production — the console.log below is the durable
  // record. Swap for Vercel Postgres / KV / Google Sheets / Resend when ready.
  try {
    const file = path.join(process.cwd(), "data", "waitlist.jsonl");
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.appendFile(file, JSON.stringify(entry) + "\n", "utf8");
  } catch {
    // Read-only FS or permissions issue — ignore and rely on logs.
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, instrument } = (body ?? {}) as {
    email?: string;
    instrument?: string;
  };

  const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (!cleanEmail || !EMAIL_RE.test(cleanEmail) || cleanEmail.length > 254) {
    return NextResponse.json(
      { error: "That doesn't look like a valid email." },
      { status: 400 }
    );
  }

  const cleanInstrument =
    typeof instrument === "string" && ["guitar", "piano", "both", "undecided"].includes(instrument)
      ? instrument
      : "undecided";

  const entry: WaitlistEntry = {
    email: cleanEmail,
    instrument: cleanInstrument,
    submittedAt: new Date().toISOString(),
    userAgent: req.headers.get("user-agent"),
    ref: req.headers.get("referer"),
  };

  // Durable record on Vercel: visible in the Logs tab of the deployment.
  // eslint-disable-next-line no-console
  console.log("[waitlist]", JSON.stringify(entry));

  await persistLocal(entry);

  return NextResponse.json({
    ok: true,
    message: "You're on the list. We'll email you when lessons drop 🎸",
  });
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. POST { email, instrument }." },
    { status: 405 }
  );
}
