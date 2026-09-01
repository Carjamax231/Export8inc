import { CONTACT } from "./constants";

export function getGmailComposeUrl(subject: string, body: string): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT.email,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}
