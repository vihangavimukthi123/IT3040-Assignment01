
const { test, expect } = require("@playwright/test");

test.use({ headless: false });      
test.describe.configure({ retries: 1 });


const cases = [{
    id: 'Pos_UI_01',
    
    input: 'mama',
    expected: 'මම',
   
  },
  {
    id: 'Pos_Fun_01',
    
    input: 'api heta trip ekak yamu',
    expected: 'අපි හෙට ට්‍රිප් එකක් යමු',
   
  },
  {
    id: 'Pos_Fun_02',
  
    input: 'mama paadam karaa eeth mata mathaka naee',
    expected: 'මම පාඩම් කරා ඒත් මට මතක නෑ',
   
  },
  {
    id: 'Pos_Fun_03',
   
    input: 'oyaa enakan mama methana innavaa',
    expected: 'ඔයා එනකන් මම මෙතන ඉන්නවා',
   
  },
  {
    id: 'Pos_Fun_04',
   
    input: 'adha kaempas ekee ivent ekakdha?',
    expected: 'අද කැම්පස් එකේ ඉවෙන්ට් එකක්ද?',
   
  },
  {
    id: 'Pos_Fun_05',
   
    input: 'mata pen eka dhenna',
    expected: 'මට පෙන් එක දෙන්න',
   
  },
  {
    id: 'Pos_Fun_06',
   
    input: 'mata eeka karanna baee',
    expected: 'මට ඒක කරන්න බෑ',
    
  },
  {
    id: 'Pos_Fun_07',
   
    input: 'Lamayi sellam karanavaa',
    expected: 'ළමයි සෙල්ලම් කරනවා',
   
  },
  {
    id: 'Pos_Fun_08',
   
    input: 'api giya sathiyee muuvii ekak baeluvaa',
    expected: 'අපි ගිය සතියේ මූවී එකක් බැලුවා',
    
  },
  {
    id: 'Pos_Fun_09',
   
    input: 'mama labana avurudhdhee digrii eka ivara karanavaa',
    expected: 'මම ලබන අවුරුද්දේ ඩිග්‍රී එක ඉවර කරනවා',
   
  },
  {
    id: 'Pos_Fun_10',
   
    input: 'aayuboovan sar, mata podi udhavvak oona',
    expected: 'ආයුබෝවන් සර්, මට පොඩි උදව්වක් ඕන',
   
  },
  {
    id: 'Pos_Fun_11',
   
    input: 'adoo machQQ mokadha vennee',
    expected: 'අඩෝ මචං මොකද වෙන්නේ',
   
  },
  {
    id: 'Pos_Fun_12',
   
    input: 'himin himin yamudha',
    expected: 'හිමින් හිමින් යමුද',
   
  },
  {
    id: 'Pos_Fun_13',
   
    input: 'mama gedhara yanavaa',
    expected: 'මම ගෙදර යනවා',
   
  },
  {
    id: 'Pos_Fun_14',
   
    input: 'mama Python projekt eka sabmit karaa',
    expected: 'මම Python ප්‍රොජෙක්ට් එක සබ්මිට් කරා',
   
  },
  {
    id: 'Pos_Fun_15',
   
    input: 'api nuwara eLiyee trip ekak giyaa',
    expected: 'අපි නුවර එළියේ ට්‍රිප් එකක් ගියා',
   
  },
  {
    id: 'Pos_Fun_16',
   
    input: 'mata PC eka on karanna',
    expected: 'මට PC එක ඔන් කරන්න',
  
  },
  {
    id: 'Pos_Fun_17',
   
    input: 'oyaa enavadha? naeththam man yannadha?',
    expected: 'ඔයා එනවද? නැත්තම් මන් යන්නද?',
    
  },
  {
    id: 'Pos_Fun_18',
   
    input: 'meekee gaaNa Rs. 2500',
    expected: 'මේකේ ගාණ Rs. 2500',
   
  },
  {
    id: 'Pos_Fun_19',
   
    input: '2026-05-21 udhee 8.30 ta miitin eka',
    expected: '2026-05-21 උදේ 8.30 ට මීටින් එක',
  
  },
  {
    id: 'Pos_Fun_20',
  
    input: 'mata kiri 1Lk ganna oona',
    expected: 'මට කිරි 1Lක් ගන්න ඕන',
    
  },
  {
    id: 'Pos_Fun_21',
   
    input: 'api kaeema kamu',
    expected: 'අපි කෑම කමු',
   
  },
  {
    id: 'Pos_Fun_22',
   
    input: 'softveyaar iQQjiniyarin kiyannee amaaru proses ekak. api mulinma rikavayarmants ganna oona, iita passee disayin karanna oona. koodin karadhdhii bags enavaa, eevaa fiks karanna oona. testin kiyannee godak vaedhagath dheyak. anthimata api projekt eka klayant ta dilivar karanavaa.',
    expected: 'සොෆ්ට්වෙයාර් ඉංජිනියරින් කියන්නේ අමාරු ප්‍රොසෙස් එකක්. අපි මුලින්ම රිකවයර්මන්ට්ස් ගන්න ඕන, ඊට පස්සේ ඩිසයින් කරන්න ඕන. කෝඩින් කරද්දී බග්ස් එනවා, ඒවා ෆික්ස් කරන්න ඕන. ටෙස්ටින් කියන්නේ ගොඩක් වැදගත් දෙයක්. අන්තිමට අපි ප්‍රොජෙක්ට් එක ක්ලයන්ට් ට ඩිලිවර් කරනවා.',
   
  },
  {
    id: 'Pos_Fun_23',
    
    input: 'lakShaNa',
    expected: 'ලක්ෂණ',
    
  },
  {
    id: 'Pos_Fun_24',
   
    lengthType: 'S',
    input: 'eyaalaa heta enavalu',
    expected: 'එයාලා හෙට එනවලු',
    
  },
  {
    id: 'Pos_Fun_25',
   
    input: 'samaavenna mata eeka karanna amaaruyi',
    expected: 'සමාවෙන්න මට ඒක කරන්න අමාරුයි',
   
  },
  {
    id: 'Neg_Fun_01',
   
    input: 'www.sliit.lk link eka',
    expected: 'www.sliit.lk link එක',
    
  },
  {
    id: 'Neg_Fun_02',
   
    input: 'setup.exe eka',
    expected: 'setup.exe එක',
    
  },
  {
    id: 'Neg_Fun_03',
   
    input: 'user@sliit.lk email eka',
    expected: 'user@sliit.lk email එක',
    
  },
  {
    id: 'Neg_Fun_04',
    
    input: 'tag eka <html>',
    expected: 'tag එක <html>',
   
  },
  {
    id: 'Neg_Fun_05',
   
    input: 'mage image type eka image.jpeg',
    expected: 'mage image type එක image.jpeg',
    
  },
  {
    id: 'Neg_Fun_06',
   
    input: 'mee thamaa coordinates 6.9N, 79.8E',
    expected: 'මේ තමා coordinates 6.9N, 79.8E',
   
  },
  {
    id: 'Neg_Fun_07',
   
    input: 'linux command eka sudo apt-get update',
    expected: 'linux command එක sudo apt-get update',
  
  },
  {
    id: 'Neg_Fun_08',
   
    input: 'meeka thamaa syntax eka { "id": 1 }',
    expected: 'මේක තමා syntax එක { "id": 1 }',
 
  },
  {
    id: 'Neg_Fun_09',
   
    input: 'meka thamaa Shortcut eka Ctrl + Z',
    expected: 'මෙක තමා Shortcut එක Ctrl + Z',
    
  },
  {
    id: 'Neg_Fun_10',
   
    input: 'mee nama gahalaa balanna @kamal_perera',
    expected: 'මේ නම ගහලා බලන්න @kamal_perera',
    
  }
];

test.describe("SwiftTranslator - Positive functional tests", () => {
  for (const tc of cases) {
    test(`${tc.id}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "domcontentloaded",
      });

      const inputBox = page.getByRole("textbox", {
        name: "Input Your Singlish Text Here.",
      });

      await inputBox.fill(tc.input);

      
      await expect(
        page.getByText(tc.expected, { exact: false })
      ).toBeVisible({ timeout: 10000 });
    });
  }
});
