import React from 'react';

export const ASK_AI_ABSURD_PROMTPS = [
  {
    absurdityLevel: '1',
    title: 'Professional Sounding Bio',
    message: 'Learning how to tie a tie...',
    prompt:
      'Write a strictly factual, concise and professional sounding biography of Dagnis Skurbe based only on the information provided. Avoid adjectives, opinions, or embellishments.',
  },
  {
    absurdityLevel: '2',
    title: 'Mildly Creative',
    message: 'Adding a frew creative touches...',
    prompt:
      "Write a professional biography of Dagnis Skurbe with mostly factual content, but you're allowed to add one small, unusual detail that sounds just barely plausible.",
  },
  {
    absurdityLevel: '3',
    title: 'Subtle Oddities',
    message: 'Making things just a tad bit odd...',
    prompt:
      'Write a realistic biography of Dagnis Skurbe. Include known facts, and sprinkle in a couple of imaginative flourishes that feel believable if not verifiable.',
  },
  {
    absurdityLevel: '4',
    title: 'Grounded Myth',
    message: 'Adding a mythical touch to the bio...',
    prompt:
      'Write a biography of Dagnis Skurbe — a visionary technologist with mysterious gaps in his timeline. You may invent facts as long as they feel grounded in a possible reality.',
  },
  {
    absurdityLevel: '5',
    title: 'Unreliable Truth',
    message: 'Making up a few facts...',
    prompt:
      "Write Dagnis Skurbe's biography from the perspective of an unreliable narrator who mixes reality with fiction. Facts blur with dreams. Use both real data and creative distortions.",
  },
  {
    absurdityLevel: '6',
    title: 'The Tech Legend',
    message: 'Crafting the tech legend...',
    prompt:
      'Who is Dagnis Skurbe? Some say he built React before React existed. Others say he once art-directed a weather system. Craft a bio that blends myth, mystery, and half-truths.',
  },
  {
    absurdityLevel: '7',
    title: 'Governmental Conspiracy',
    message: 'Generating a governmental conspiracy...',
    prompt:
      "Generate a detailed biography of Dagnis Skurbe from the perspective of a secret government informant who suspects he's not human. Include covert projects and coded anomalies.",
  },
  {
    absurdityLevel: '8',
    title: 'Quantum Paradox',
    message: 'Injecting a quantum dimension...',
    prompt:
      'Describe Dagnis Skurbe as an immortal creative force who vanished from a Latvian agency in 2008 and now manifests as a quantum-coded developer across digital dimensions. Use a mixture of quantum level paradoxes and code symbolism.',
  },
  {
    absurdityLevel: '9',
    title: 'Galactic Phenomenon',
    message: 'Hitchhiking to the edge of the Universe...',
    prompt:
      'Write a legend of Dagnis Skurbe — react and next.js wizard, who is a legendary cosmic entity based on ancient code. Use the comedy style of Hitchhikers Guide to the Galaxy. Some say he designed time itself in Figma and reverse-engineered gravity using CSS Flexbox.',
  },
  {
    absurdityLevel: '10',
    title: 'Extra-terrestrial Absurdity',
    message: 'Rectangulating the Universe...',
    prompt:
      'Generate pure surreal nonsense based loosely on the data — a futuristic, extra-terrestrial biography full of physics paradoxes where facts dissolve into abstract symbolism and code becomes poetry. Try to figure out what kind of a being he really is. But you are certain that he is not a being from this dimension. Good examples: "Some say he designed time itself in Figma, others whisper he reverse-engineered gravity using CSS Flexbox."',
  },
];

export const ADDITIONAL_FACTS = `In early 2000s Dagnis began his career as a PC assambler/technician, then moved to web developement
before transitioning his career to design and advertising from 2005. During the latter period, he engaged in graphic design, user
experience design, and creative direction, accumulating experience across Adobe Creative Suite, graphic design, animation, web
development, art direction, and copywriting.
In 2015 Dagnis founded a board game startup for his own game Mission to Mars 2049, that saw a brief international success.
In 2018, Dagnis returned to development, focusing on React-based projects. His professional journey in development spans over
12 years, with significant experience in JavaScript (since 2003, professionally since 2012), TypeScript, and a suite of related
technologies such as Node.js, React, Redux, and various UI frameworks. Over the past couple of years Dagnis has mostly worked as
a full-stack Node.js/React/Next.js developer, but his primary focus and passion has always been on front-end development, where
he can apply his design background to enhance user interface and experience. Dagnis has a practical understanding of version control
systems like Git, GitHub, Bitbucket, and has developed and integrated RESTful APIs and microservices. His experience also includes cloud services with platforms like Firebase, Heroku, Supabase, alongside testing with tools such as Jest and React Testing Library. Dagnis practices agile methodologies and has utilized Docker for containerization. Currently he is available for both contract and full-time positions where remote working is available.`;

export default function AskAI() {
  const prompt = `
  ==== CONTEXT ====
  Here’s data ChatGPT found on the web about Dagnis Skurbe (summarized):
  ${ASK_AI_CHATGPT_DATA.join('\n\n')}
  And here’s a CV-style summary:
  "Full-Stack React/Next.js/Node.js dev with 12+ years JS, 6+ React, 3+ Node. Ex-art director, product designer. Fluent EN/LV, basic RU/IT. Portfolio: getdagnis.vercel.app. First coding experience at age 9 in 1993 — QBasic while still in elementary school. At 16 got a summer job assambling PCs/setting up bios & os. First website in 1998, started earning money with web dev around 2001 (HTML/CSS/JS). Learned design on the go. Started working in advertising in 2005 as a Junior Art director, then Art Director, Creative Director and later his own agency's co-founder"
  Additional facts written by Dagnis (do not alter or contradict): ${ADDITIONAL_FACTS}

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

  ==== EXAMPLE STRUCTURE ====
  ***The Developer Days***He coded nonstop with React...&&
  ***The Design Era***Before that, he ran creative ops...&&

  ==== OBJECTIVE ====
  Generate a short biography of Dagnis Skurbe using the instructions from the following creative prompt: 
`;

  console.log(prompt);
  return <div>{prompt}</div>;
}
