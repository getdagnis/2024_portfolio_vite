import { useEffect, useState } from 'react';
import { formatAIResponse } from './AboutPage';

import './SharedPage.css';

function SharedPage() {
  const [entries, setEntries] = useState([]);
  const [itemExpanded, setItemExpanded] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://getdagnis-worker-prod.getdagnis.workers.dev/shared')
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error('Failed to load shared entries:', err));
    setLoading(false);
  }, []);

  return (
    <div id="shared-page">
      <h1>Shared AI Responses</h1>
      <ul className="shared-list">
        {loading && <p>Loading user shared AI bios...</p>}
        {!loading && entries.length === 0 && <p>Sorry, no shared entries found this time...</p>}
        {!loading && entries.length > 0 && (
          <p>
            Below are the AI generated bios that the site visitors liked and decided to share with others. Vote for your
            favorite ones!
          </p>
        )}
        {!loading &&
          entries.length > 0 &&
          entries.map((entry) => (
            <li
              className="shared-item"
              key={entry.id}
              onClick={() => setItemExpanded(itemExpanded === entry.id ? '' : entry.id)}
            >
              <div className="shared-item-top">
                <div>
                  <strong>Absurdity: {entry.absurdity_level}</strong>
                </div>
                <div className="date">Date: {new Date(entry.created_at).toLocaleString()}</div>
              </div>
              <div className="shared-item-bottom">
                {!entry.summary || entry.summary === 'No summary available' ? (
                  <p className={itemExpanded === entry.id ? 'shared-item-content' : ''}>
                    {itemExpanded !== entry.id
                      ? formatAIResponse(entry.content.slice(0, 120) + '... ')
                      : formatAIResponse(entry.content)}
                  </p>
                ) : (
                  <p>{entry.summary}</p>
                )}
                <p className="published-by" style={{ color: entry.color, filter: 'brightness(0.7)' }}>
                  Published by:{' '}
                  <strong>
                    {entry.color ? entry.color : 'Anonymous'} {entry.alias}
                  </strong>
                </p>
                <div className="avatar-container" style={{ backgroundColor: entry.color }}>
                  <img className="avatar" src={entry.img_url} alt={entry.alias} />
                </div>
                <div id="expand-button" style={{ rotate: itemExpanded === entry.id ? '180deg' : '0deg' }}>
                  <div className="expand-arrow"></div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SharedPage;
