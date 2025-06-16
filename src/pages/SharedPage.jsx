import { useEffect, useState } from 'react';

import './SharedPage.css';

function SharedPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('https://getdagnis-worker-prod.getdagnis.workers.dev/shared')
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error('Failed to load shared entries:', err));
  }, []);

  return (
    <div id="shared-page">
      <h1>Shared AI Responses</h1>
      <ul>
        {entries.length === 0 && <p>No shared entries found.</p>}
        {entries.length > 0 &&
          entries.map((entry) => (
            <li key={entry.id}>
              <div>
                <strong>Absurdity:</strong> {entry.absurdity_level}
              </div>
              <div>
                <strong>Date:</strong> {new Date(entry.created_at).toLocaleString()}
              </div>
              <div>
                <strong>Type:</strong> {entry.type}
              </div>
              <p>{entry.content}</p>
              <div>
                <img
                  className="avatar"
                  src={`https://dodo.ac/np/images/thumb/4/4e/${entry.alias}_NH_Character_Icon.png/100px-${entry.alias}_NH_Character_Icon.png`}
                  alt={entry.alias}
                />
                <div>
                  <strong>Alias:</strong> {entry.alias}
                </div>
              </div>
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SharedPage;
