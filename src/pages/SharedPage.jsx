import { useEffect, useState } from 'react';

function SharedPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('https://getdagnis-worker-prod.getdagnis.workers.dev/shared')
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error('Failed to load shared entries:', err));
  }, []);

  return (
    <div className="shared-page">
      <h1>Shared AI Responses</h1>
      <ul>
        {entries.map((entry) => (
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
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SharedPage;
