import puppeteer from "puppeteer";

const runPuppeteer = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  let check = null;

  try {
    await page.goto(url);

    const bodyText = await page.evaluate(() => document.body.innerText);

    check = bodyText.includes(process.env.TEXT_TO_CHECK) ? "Success" : "Fail";
  } catch (error) {
    console.error("An error occurred while checking the page for text:", error);

    check = "Fail";
  } finally {
    await browser.close();

    return check;
  }
};

export default runPuppeteer;
