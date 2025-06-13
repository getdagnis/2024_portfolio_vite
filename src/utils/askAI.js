import { ASK_AI_CHATGPT_DATA, ASK_AI_ABSURD_PROMTPS, ADDITIONAL_FACTS } from '../constants/constants';

export async function askAI(question, cvText, absurdity) {
  const absurdPromptText = ASK_AI_ABSURD_PROMTPS[absurdity - 1].prompt;

  const prompt = `
  ==== CONTEXT ====
  Here’s data ChatGPT found on the web about Dagnis Skurbe (summarized):
  ${ASK_AI_CHATGPT_DATA.join('\n\n')}
  And here’s a CV-style summary:
  "Full-Stack React/Next.js/Node.js dev with 12+ years JS, 6+ React, 3+ Node. Ex-art director, product designer. Fluent EN/LV, basic RU/IT. Portfolio: getdagnis.vercel.app. First coding experience at age 9 in 1993 — QBasic while still in elementary school. At 16 got a summer job assambling PCs/setting up bios & os. First website in 1998, started earning money with web dev around 2001 (HTML/CSS/JS). Learned design on the go. Started working in advertising in 2005 as a Junior Art director, then Art Director, Creative Director and later his own agency's co-founder"
  Additional facts written by Dagnis (do not alter or contradict): ${ADDITIONAL_FACTS}

  ==== OBJECTIVE ====
  Generate a short biography of Dagnis Skurbe using the instructions from the following creative prompt: "${absurdPromptText}"

  ==== FORMAT ====
  - Use data provided by ChatGPT and the CV-style summary
  - Write 4 to 5 short paragraphs
  - Use only English as the language
  - Start with recent (developer), end with earlier (designer) facts
  - Each paragraph MUST begin with a title in the format: ***Title Here***
  - Each paragraph MUST end with: &&
  - Keep total output between **1000 and 1500 characters**
  - Do not mention age but you can mention the birth date of 7th September, 1984. You can also mention the place of birth (Riga), that he worked as an indesign artist for a tech startup in london 2010—2013. Mention his name at least once per paragraph.
  - Never mention anything about Russia or in Russian language or in any other language than English or perhaps on rare occasion in Latvian.
  - Write based based on these instructions: ${absurdPromptText}

  ==== EXAMPLE STRUCTURE ====
  ***The Developer Days***He coded nonstop with React...&&
  ***The Design Era***Before that, he ran creative ops...&&
`;

  try {
    const res = await fetch('https://getdagnis-worker.getdagnis.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    return data.content || 'No content received from worker.';
  } catch (err) {
    console.error('Worker call failed:', err);
    return 'Sorry. Cloudflare Worker request failed.';
  }
}
