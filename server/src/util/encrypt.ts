import crypto from "crypto";

export function encrypt(text: string[]) {
  return crypto
    .createHmac("sha256", "abcd")
    .update(text.sort().toString())
    .digest("hex");
}
