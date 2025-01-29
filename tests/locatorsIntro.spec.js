import { test } from "@playwright/test";

test("Google test", async ({ page }) => {
  // navigate to google https://www.google.com
  await page.goto("https://www.google.com");
  

  let searchBox = page.locator("//textarea[@id='APjFqb']");
  

  await searchBox.fill("Cydeo");
    

  await searchBox.press("Enter");
  

});


/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id"
 autofocus="" title="Search" value="" jsaction="paste:puy29d;" 
 aria-label="Search" placeholder="" aria-autocomplete="both" 
 aria-expanded="false" aria-haspopup="false" autocapitalize="off" 
 autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" 
 name="q" role="combobox" rows="1" spellcheck="false" 
 data-ved="0ahUKEwjOo8qirdOKAxUtOjQIHYE0DT4Q39UDCAY"></textarea>
*/
//textarea[@class = 'gLFyf']