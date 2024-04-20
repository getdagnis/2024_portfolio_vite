import './SkillsPage.css';

function SkillsPage() {
  return (
    <div id="skills-container">
      <h3>Dev Skills</h3>
      <div id="dev-skills-grid">
        <ul>
          <h2>Languages</h2>
          <li className="skill">HTML5/CSS/SASS/JSS</li>
          <li className="skill">JavaScript</li>
          <li className="skill">TypeScript</li>
          <li className="skill">PHP</li>
          <li className="skill">SQL</li>
          <li className="skill">Python</li>
          <li className="skill">Luau</li>
          <li className="skill">Bash</li>
        </ul>

        <ul>
          <h2>Hard Skills</h2>
          <li className="skill">Frameworks/libraries</li>
          <li className="skill">Tools</li>
          <li className="skill">Testing</li>
          <li className="skill">Debugging</li>
          <li className="skill">APIs</li>
          <li className="skill">Cloud services</li>
          <li className="skill">Networking</li>
          <li className="skill">Version control</li>
          <li className="skill">Data storage</li>
        </ul>

        <ul>
          <h2>Soft Skills</h2>
          <li className="skill">Communication</li>
          <li className="skill">Problem-solving</li>
          <li className="skill">Teamwork</li>
          <li className="skill">Adaptability</li>
          <li className="skill">Time management</li>
          <li className="skill">Critical thinking</li>
          <li className="skill">Attention to detail</li>
          <li className="skill">Collaboration</li>
          <li className="skill">Decision-making</li>
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
