import { NextResponse } from "next/server";

type QuoteBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  route?: unknown;
};

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { success: false, error: "Missing GOOGLE_SHEETS_WEBHOOK_URL" },
      { status: 500 },
    );
  }

  let body: QuoteBody;
  try {
    body = (await request.json()) as QuoteBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const name = asNonEmptyString(body.name);
  const email = asNonEmptyString(body.email);
  const phone = asNonEmptyString(body.phone);
  const route = asNonEmptyString(body.route);

  if (!name || !email || !phone || !route) {
    return NextResponse.json(
      { success: false, error: "Missing required fields: name, email, phone, route" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, route }),
      redirect: "follow",
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      return NextResponse.json(
        {
          success: false,
          error: "Google Sheets webhook request failed",
          status: response.status,
          detail: detail.slice(0, 300),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown webhook error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 502 },
    );
  }
}
