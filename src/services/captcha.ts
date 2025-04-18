export async function verifyRecaptcha(token: string, secret: string) {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );
  const json = (await response.json()) as {
    success: boolean;
    score: number;
    action: string;
  };

  if (!json.success) {
    throw new Error("invalid recaptcha token");
  }

  // Check if the score is above 0.5 (you can adjust this threshold based on your needs)
  if (json.score < 0.5) {
    throw new Error("recaptcha score too low");
  }
}
