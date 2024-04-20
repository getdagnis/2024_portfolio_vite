import './SkillsPage.css';

function SkillsPage() {
  return (
    <div id="skills-container">
      <h3>Dev Skills</h3>
      <div id="dev-skills-grid">
        <ul>
          <h2>Languages</h2>
          <li className="skill">JavaScript / ES6</li>
          <li className="skill">TypeScript</li>
          <li className="skill">HTML5 / CSS / SASS / LESS</li>
          <li className="skill">SQL / NoSQL</li>
          <li className="skill">Bash / Shell / Luau</li>
          <li className="skill">Some PHP / Python</li>
        </ul>
        <ul>
          <h2>Tools / Libraries</h2>
          <li className="skill">React</li>
          <li className="skill">Redux / Redux Toolkit / MobX</li>
          <li className="skill">Next.js / Gatsby</li>
          <li className="skill">Node.js / Express.js</li>
          <li className="skill">Material UI / Chakra UI / Mantine</li>
          <li className="skill">Webpack / Babel / ESLint / Jest</li>
          <li className="skill">React Native / Expo</li>
        </ul>
        <ul>
          <h2>Hard Skills</h2>
          <li className="skill">Testing</li>
          <li className="skill">Debugging</li>
          <li className="skill">Rest APIs</li>
          <li className="skill">Cloud services</li>
          <li className="skill">Networking</li>
          <li className="skill">Version control</li>
          <li className="skill">Data storage</li>
        </ul>
      </div>
      <h3>Design Skills</h3>
      <div id="design-skills-grid">
        <ul>
          <h2>Applications</h2>
          <li className="skill">Adobe Illustrator</li>
          <li className="skill">Adobe Photoshop</li>
          <li className="skill">Adobe InDesign</li>
          <li className="skill">Adobe Animator</li>
          <li className="skill">Adobe Premiere</li>
          <li className="skill">Combustion</li>
          <li className="skill">Maya/3Ds Max</li>
          <li className="skill">Cinema 4D</li>
          <li className="skill">FontLab (designer)</li>
        </ul>

        <ul>
          <h2>Hard Skills</h2>
          <li className="skill">Logos and branding</li>
          <li className="skill">Illustrations, icon design</li>
          <li className="skill">Font design</li>
          <li className="skill">Vector animation</li>
          <li className="skill">Video editing/animation</li>
          <li className="skill">HTML5 animation</li>
          <li className="skill">Rastra/GIF animation</li>
          <li className="skill">3D modeling</li>
          <li className="skill">3D texturing/lighting</li>
          <li className="skill">3D animation</li>
        </ul>

        <ul>
          <h2>Soft Skills</h2>
          <li className="skill">Creative direction</li>
          <li className="skill">Art direction</li>
          <li className="skill">Design team lead</li>
          <li className="skill">Brand guidance</li>
          <li className="skill">Copywriting</li>
          <li className="skill">User experience</li>
          <li className="skill">Product design</li>
          <li className="skill">Product ownership</li>
          <li className="skill">Campaign management</li>
          <li className="skill">Design budgeting</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillsPage;
