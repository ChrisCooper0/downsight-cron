import runPuppeteer from "@/app/utils/puppeteer";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "nodejs";

export async function GET(_request: Request) {
  const result = await runPuppeteer(process.env.WEBSITE_TO_CHECK ?? "");

  if (result === "Fail") console.log("Failed website check");
  else if (result === "Success") console.log("Successful website check");

  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
