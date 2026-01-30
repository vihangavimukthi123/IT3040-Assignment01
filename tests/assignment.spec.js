const { test, expect } = require('@playwright/test');

test.use({ headless: false });
test.setTimeout(120000);

const testCases = [
  { 
    id: 'Pos_Fun_01', 
    name: 'Convert deadline reminder', 
    lengthType: 'M', 
    input: 'assignment eka heta submit karanna one', 
    expected: 'අසයිමන්ට් එක හෙට සබ්මිට් කරන්න ඕනේ', 
    justification: 'Sinhala spelling is correct. "Submit" transliterated correctly.', 
    coverage: 'Daily language usage, Simple sentence, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_02', 
    name: 'Convert location inquiry', 
    lengthType: 'M', 
    input: 'lecture eka thiyenne new building ekeda?', 
    expected: 'ලෙක්චර් එක තියෙන්නේ නිව් බිල්ඩින් එකේද?', 
    justification: 'Question mark preserved. Mixed English terms converted accurately.', 
    coverage: 'Mixed Singlish + English, Interrogative (question), M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_03', 
    name: 'Convert casual food plan', 
    lengthType: 'M', 
    input: 'ada hawasa canteen eken bath kamu', 
    expected: 'අද හවස කැන්ටිමෙන් බත් කමු', 
    justification: 'Meaning preserved. "Canteen" converted phonetically.', 
    coverage: 'Daily language usage, Simple sentence, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_04', 
    name: 'Convert technical issue', 
    lengthType: 'M', 
    input: 'mama liyapu code eke error ekak enawa', 
    expected: 'මම ලියපු කෝඩ් එකේ එරර් එකක් එනවා', 
    justification: 'Tech terms "code" and "error" mapped correctly to Sinhala phonetics.', 
    coverage: 'Mixed Singlish + English, Simple sentence, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_05', 
    name: 'Convert weekend activity', 
    lengthType: 'M', 
    input: 'senasurada api cricket gahanna yamu', 
    expected: 'සෙනසුරාදා අපි ක්‍රිකට් ගහන්න යමු', 
    justification: 'Day of the week and sport name converted accurately.', 
    coverage: 'Daily language usage, Future tense, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_06', 
    name: 'Convert travel delay', 
    lengthType: 'M', 
    input: 'bus eka enna thawa payak yanawa', 
    expected: 'බස් එක එන්න තව පැයක් යනවා', 
    justification: 'Time reference "payak" (one hour) converted correctly.', 
    coverage: 'Daily language usage, Simple sentence, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_07', 
    name: 'Convert future promise', 
    lengthType: 'M', 
    input: 'mama gedara gihin call ekak dennam', 
    expected: 'මම ගෙදර ගිහින් කෝල් එකක් දෙන්නම්', 
    justification: 'Future action verb "dennam" is grammatically correct.', 
    coverage: 'Greeting/request/response, Future tense, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_08', 
    name: 'Convert weather check', 
    lengthType: 'M', 
    input: 'ada wahina paatak thiyenawa neda', 
    expected: 'අද වහින පාටක් තියෙනවා නේද', 
    justification: '"Neda" particle handled correctly at the end.', 
    coverage: 'Daily language usage, Interrogative (question), M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_09', 
    name: 'Convert cost complaint', 
    lengthType: 'S', 
    input: 'me phone eka maarama ganan', 
    expected: 'මේ ෆෝන් එක මාරම ගණන්', 
    justification: '"Phone" mapped to "ෆෝන්" correctly using "f" sound.', 
    coverage: 'Mixed Singlish + English, Simple sentence, S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_10', 
    name: 'Convert study stress', 
    lengthType: 'M', 
    input: 'exam ekata padam karanna wela madi', 
    expected: 'එක්සෑම් එකට පාඩම් කරන්න වෙලා මදි', 
    justification: '"Exam" converted accurately. Sentence meaning is clear.', 
    coverage: 'Daily language usage, Simple sentence, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_11', 
    name: 'Convert location check', 
    lengthType: 'S', 
    input: 'machan umba dan koheda inne', 
    expected: 'මචං උඹ දැන් කොහෙද ඉන්නේ', 
    justification: 'Informal address "machan" and "umba" converted correctly.', 
    coverage: 'Slang/informal language, Interrogative (question), S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_12', 
    name: 'Convert battery status', 
    lengthType: 'M', 
    input: 'laptop eke battery bahala thiyenne', 
    expected: 'ලැප්ටොප් එකේ බැටරි බැහැලා තියෙන්නේ', 
    justification: '"Laptop" and "Battery" transliterated correctly.', 
    coverage: 'Mixed Singlish + English, Simple sentence, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_13', 
    name: 'Convert movie plan', 
    lengthType: 'S', 
    input: 'aluth film eka balanna yamu', 
    expected: 'අලුත් ෆිල්ම් එක බලන්න යමු', 
    justification: '"Film" with "f" sound and "l" combination works.', 
    coverage: 'Daily language usage, Future tense, S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_14', 
    name: 'Convert health condition', 
    lengthType: 'M', 
    input: 'oluwa ridenawa beheth ganna one', 
    expected: 'ඔලුව රිදෙනවා බෙහෙත් ගන්න ඕනේ', 
    justification: 'Medical context words converted accurately.', 
    coverage: 'Daily language usage, Simple sentence, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_15', 
    name: 'Convert birthday msg', 
    lengthType: 'S', 
    input: 'heta mage birthday eka', 
    expected: 'හෙට මගේ බර්ත්ඩේ එක', 
    justification: '"Birthday" transliterated correctly as commonly used.', 
    coverage: 'Daily language usage, Simple sentence, S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_16', 
    name: 'Convert social media', 
    lengthType: 'M', 
    input: 'facebook eke photos damma balapan', 
    expected: 'ෆේස්බුක් එකේ ෆොටෝස් දැම්මා බලපන්', 
    justification: 'Brand name "Facebook" and informal verb "balapan" correct.', 
    coverage: 'Names/places/common English, Imperative (command), M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_17', 
    name: 'Convert traffic update', 
    lengthType: 'S', 
    input: 'pare traffic eka wadi ada', 
    expected: 'පාරේ ට්‍රැෆික් එක වැඩි අද', 
    justification: '"Traffic" converted with correct "tra" sound.', 
    coverage: 'Daily language usage, Simple sentence, S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_18', 
    name: 'Convert borrow request', 
    lengthType: 'S', 
    input: 'mata pen eka poddak denawada', 
    expected: 'මට පෙන් එක පොඩ්ඩක් දෙනවද', 
    justification: 'Polite request marker "denawada" formed correctly.', 
    coverage: 'Greeting/request/response, Interrogative (question), S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_19', 
    name: 'Convert time check', 
    lengthType: 'S', 
    input: 'dan welawa keeyada kiyapan', 
    expected: 'දැන් වෙලාව කීයද කියපන්', 
    justification: 'Informal command "kiyapan" converted correctly.', 
    coverage: 'Slang/informal language, Imperative (command), S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_20', 
    name: 'Convert multitasking', 
    lengthType: 'S', 
    input: 'sindu ahana gaman wada karamu', 
    expected: 'සින්දු අහන ගමන් වැඩ කරමු', 
    justification: 'Continuous action phrasing preserved correctly.', 
    coverage: 'Daily language usage, Simple sentence, S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_21', 
    name: 'Convert msg from mom', 
    lengthType: 'M', 
    input: 'amma kiwwa ilanga sathiye enna kiyala', 
    expected: 'අම්මා කිව්වා ඊළඟ සතියේ එන්න කියලා', 
    justification: 'Reported speech format "enna kiyala" is accurate.', 
    coverage: 'Word combination/phrase pattern, Past tense, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_22', 
    name: 'Convert internship', 
    lengthType: 'M', 
    input: 'internship ekak hoyaganna amarui', 
    expected: 'ඉන්ටර්න්ශිප් එකක් හොයාගන්න අමාරුයි', 
    justification: 'Complex word "Internship" transliterated correctly.', 
    coverage: 'Daily language usage, Simple sentence, M (31-299 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_23', 
    name: 'Convert sleep issue', 
    lengthType: 'S', 
    input: 'eye ra ninda giye na', 
    expected: 'ඊයේ රෑ නින්ද ගියේ නෑ', 
    justification: 'Negation "na" and time "eye" handled correctly.', 
    coverage: 'Daily language usage, Negation (negative form), S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Pos_Fun_24', 
    name: 'Convert surprise phrase', 
    lengthType: 'S', 
    input: 'ade eka maarama wadakne', 
    expected: 'අඩේ ඒක මාරම වැඩක්නේ', 
    justification: 'Exclamatory slang "Ade" and "wadakne" correct.', 
    coverage: 'Slang/informal language, Simple sentence, S (≤30 characters), Accuracy validation',
    type: 'positive' 
  },
  { 
    id: 'Neg_Fun_01', 
    name: 'Convert Web URL', 
    lengthType: 'S', 
    input: 'www.sliit.lk', 
    expected: 'www.sliit.lk', 
    justification: 'System incorrectly converts URL characters to Sinhala phonetics.', 
    coverage: 'Mixed Singlish + English, S (≤30 characters), Robustness validation',
    type: 'negative' 
  },
  { 
    id: 'Neg_Fun_02', 
    name: 'Convert Email Address', 
    lengthType: 'S', 
    input: 'student@sliit.lk', 
    expected: 'student@sliit.lk', 
    justification: 'Email format is disrupted; "@" and domain extensions are transliterated.', 
    coverage: 'Mixed Singlish + English, S (≤30 characters), Robustness validation',
    type: 'negative' 
  },
  { 
    id: 'Neg_Fun_03', 
    name: 'Convert Code Snippet', 
    lengthType: 'M', 
    input: 'print("Hello World")', 
    expected: 'print("Hello World")', 
    justification: 'Programming syntax is corrupted by phonetic conversion logic.', 
    coverage: 'English technical/brand terms, Simple sentence, M (31-299 characters), Robustness validation',
    type: 'negative' 
  },
  { 
    id: 'Neg_Fun_04', 
    name: 'Convert Roman Numeral', 
    lengthType: 'S', 
    input: 'Part II', 
    expected: 'Part II', 
    justification: 'Roman numeral "II" is converted phonetically to "ඉඉ" instead of "II".', 
    coverage: 'English technical/brand terms, S (≤30 characters), Robustness validation',
    type: 'negative' 
  },
  { 
    id: 'Neg_Fun_05', 
    name: 'Convert Hashtag', 
    lengthType: 'S', 
    input: '#Colombo', 
    expected: '#Colombo', 
    justification: 'Social media tag is transliterated, breaking the tag utility.', 
    coverage: 'Mixed Singlish + English, S (≤30 characters), Robustness validation',
    type: 'negative' 
  },
  { 
    id: 'Neg_Fun_06', 
    name: 'Convert File Extension', 
    lengthType: 'S', 
    input: 'assignment.pdf', 
    expected: 'assignment.pdf', 
    justification: 'File extension ".pdf" is converted to Sinhala phonetics.', 
    coverage: 'English technical/brand terms, S (≤30 characters), Robustness validation',
    type: 'negative' 
  },
  { 
    id: 'Neg_Fun_07', 
    name: 'Convert Wi-Fi term', 
    lengthType: 'S', 
    input: 'connect to Wi-Fi', 
    expected: 'connect to Wi-Fi', 
    justification: '"Wi-Fi" brand term is phonetically mapped incorrectly.', 
    coverage: 'Names/places/common English, S (≤30 characters), Robustness validation',
    type: 'negative' 
  },
  { 
    id: 'Neg_Fun_08', 
    name: 'Convert Acronym (caps)', 
    lengthType: 'S', 
    input: 'SLIIT campus', 
    expected: 'SLIIT campus', 
    justification: 'Uppercase acronym "SLIIT" is converted phonetically instead of preserved.', 
    coverage: 'English abbreviations and short forms, S (≤30 characters), Robustness validation',
    type: 'negative' 
  },
  { 
    id: 'Neg_Fun_09', 
    name: 'Convert Dollar Value', 
    lengthType: 'S', 
    input: 'Price is $500', 
    expected: 'Price is $500', 
    justification: 'While number is kept, the sentence structure usually breaks or maps $ weirdly.', 
    coverage: 'Punctuation/numbers, S (≤30 characters), Robustness validation',
    type: 'negative' 
  },
  { 
    id: 'Neg_Fun_10', 
    name: 'Convert long joined text', 
    lengthType: 'M', 
    input: 'mamagedarayanawa', 
    expected: 'මම ගෙදර යනවා', 
    justification: 'System fails to identify word boundaries when spaces are omitted.', 
    coverage: 'Formatting (spaces/line breaks), M (31-299 characters), Robustness validation',
    type: 'negative' 
  }
];

test.describe('Assignment 01 - SwiftTranslator Automation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForTimeout(3000); 
  });

  for (const data of testCases) {
    test(`${data.id}: ${data.name}`, async ({ page }) => {

      console.log(`\n--- Running Test: ${data.id} (${data.name}) ---`);

      const inputLocator = page.locator('textarea').first(); 

      await inputLocator.click();
      await inputLocator.clear();

      const words = data.input.split(' ');

      for (const word of words) {
        await inputLocator.pressSequentially(word, { delay: 100 });
        await inputLocator.press('Space');
        await page.waitForTimeout(500);
      }

      await page.waitForTimeout(2000); 

      const actualOutput = await inputLocator.inputValue();

      console.log(`Input: "${data.input}"`);
      console.log(`Expected: "${data.expected}"`);
      console.log(`Actual: "${actualOutput.trim()}"`);

      let isPass = actualOutput.trim() === data.expected;
      console.log(`Status: ${isPass ? 'PASS' : 'FAIL'}`);

      if (data.type === 'positive') {
        expect(actualOutput.trim()).toBe(data.expected);
      } else {
        console.log('Negative test executed.');
      }
    });
  }
});
