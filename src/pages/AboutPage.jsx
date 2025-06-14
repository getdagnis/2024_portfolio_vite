import { useState, useEffect } from 'react';
import { useNavigate, ScrollRestoration } from 'react-router-dom';

import { ASK_AI_ABSURD_PROMTPS } from '../constants/constants';
import { askAI } from '../utils/askAI';
import './AboutPage.css';

function formatAIResponse(rawText) {
  const segments = rawText
    .split('&&')
    .map((block) => block.trim())
    .filter(Boolean);

  const jsxElements = [];
  let displayIndex = 1;

  segments.forEach((segment) => {
    // Match ***Title*** or **Title**
    const match = segment.match(/\*{2,3}(.*?)\*{2,3}/s);

    if (match) {
      const title = match[1].trim();
      const rest = segment.replace(match[0], '').trim();

      jsxElements.push(
        <h2 key={`h2-${displayIndex}`} data-index={displayIndex++}>
          {title}
        </h2>
      );

      if (rest) {
        jsxElements.push(
          <p key={`p-${displayIndex}`} data-index={displayIndex++}>
            {rest}
          </p>
        );
      }
    } else {
      jsxElements.push(
        <p key={`p-${displayIndex}`} data-index={displayIndex++}>
          {segment}
        </p>
      );
    }
  });

  return jsxElements;
}

function AboutPage() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState(1);
  const [absurdity, setAbsurdity] = useState(1);
  const [utcCountdown, setUtcCountdown] = useState('00:00:00');

  const navigate = useNavigate();
  const failed = response === 'Sorry. Cloudflare Worker request failed.';

  // Open router status screenshot to display in case of fetch failure
  const openRouterUrl = encodeURIComponent('https://status.openrouter.ai/#active-incidents');
  const orScreenshotUrl = `https://api.microlink.io/?url=${openRouterUrl}&screenshot=true&meta=false&embed=screenshot.url`;

  const handleAskAI = async () => {
    setLoading(true);
    setResponse('');

    const question = 'Describe who is Dagnis Skurbe';
    const cvText = ``;

    try {
      const result = await askAI(question, cvText, absurdity);
      setResponse(result);
    } catch (err) {
      setResponse('Error fetching AI response.');
    } finally {
      setLoading(false);
    }
  };

  const AbsurdityList = () => {
    return Array.from({ length: 10 }, (_, index) => (
      <li key={index} className={index + 1 === absurdity ? 'active' : ''} onClick={() => setAbsurdity(index + 1)}>
        {index + 1}
      </li>
    ));
  };

  const LoadingStatus = () => {
    if (loadingStage === 1) {
      setTimeout(() => setLoadingStage(2), 1500);
      return (
        <div className="loading">
          <p className="loading">Contacting the API...</p>
        </div>
      );
    }

    if (loadingStage === 2) {
      setTimeout(() => {
        setLoadingStage(3);
      }, 1500);
      setTimeout(() => {
        setLoadingStage(1);
      }, 5000);
      return (
        <div className="loading">
          <p className="loading">Analyzing the web...</p>
        </div>
      );
    }

    return (
      <div className="loading">
        <p className="loading">{ASK_AI_ABSURD_PROMTPS[absurdity - 1].message}</p>
      </div>
    );
  };

  const handleShare = () => {
    navigate('/contact', { state: { userMessage: response } });
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const utcNow = new Date(now.toUTCString());

      const nextMidnight = new Date(
        Date.UTC(
          utcNow.getUTCFullYear(),
          utcNow.getUTCMonth(),
          utcNow.getUTCDate() + 1, // tomorrow
          0,
          0,
          0
        )
      );

      const diff = nextMidnight.getTime() - utcNow.getTime();

      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

      setUtcCountdown(`${hours}:${minutes}:${seconds}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about">
      <div className="about-grid">
        <div className="about-left">
          <div className="dag-img" />
          {!failed && <h1>Who is Dagnis Skurbe?</h1>}
        </div>
        <div className="about-middle">
          {!failed && <h1>Who is Dagnis Skurbe?</h1>}
          <div className="about-response">
            {!loading && !response && !failed && (
              <div className="about-intro">
                <p>
                  Instead of writing a bio about myself I thought — why not let AI do it based on the stuff that can be
                  found on the internet — articles, social profiles, LinkedIn etc. So here you go — have fun with it.
                </p>
                <>
                  {' '}
                  <div className="absurdity-level">
                    <div>Absurdity level:</div>{' '}
                    <div>
                      <strong>{ASK_AI_ABSURD_PROMTPS[absurdity - 1].title}</strong>
                    </div>
                  </div>
                  <ul>
                    <AbsurdityList />
                  </ul>
                  <div onClick={!loading && handleAskAI} className={`btn btn-animated`}>
                    Ask AI about Dagnis...
                  </div>
                </>
              </div>
            )}
            {loading && <LoadingStatus />}
            {response && (
              <div className="output">
                {!failed && formatAIResponse(response)}
                {failed && (
                  <>
                    <h3>{formatAIResponse(response)}</h3>
                    <p className="error">
                      Call to the API did not succeed.{' '}
                      <a href="https://status.openrouter.ai/#active-incidents" className="error">
                        Hover this link <img src={orScreenshotUrl} alt="OpenRouter status preview" />
                      </a>{' '}
                      to see if the OpenRouter API status is currently down. <br />
                      In case it&apos;s not green, you can try again when it&apos;s back up (usually in minutes).
                    </p>
                    <p className="error">
                      Otherwise the daily query limit probably has been exceeded (too high user activity) and that will
                      be <br /> reset at midnight UTC time in <strong>{utcCountdown}</strong>
                    </p>
                    <div className="btns">
                      <div onClick={!loading && handleAskAI} className={`btn btn-animated`}>
                        Try once again...
                      </div>{' '}
                      {/* TODO: implement a static bio */}
                      {/* <div onClick={!loading && handleAskAI} className={`btn btn-animated btn-grey`}>
                        Show a static bio
                      </div> */}
                    </div>
                  </>
                )}
                {!failed && (
                  <div className="about-bottom">
                    <div className="absurdity-level">
                      <div>Absurdity level:</div>{' '}
                      <div>
                        <strong>{ASK_AI_ABSURD_PROMTPS[absurdity - 1].title}</strong>
                      </div>
                    </div>
                    <ul>
                      <AbsurdityList />
                    </ul>
                    <div onClick={!loading && handleAskAI} className={`btn btn-animated ${!loading && 'btn-disabled'}`}>
                      <h3>Regenerate!</h3>
                    </div>
                    <p>
                      Is it good?{' '}
                      <em onClick={() => navigate('/contact', { state: { userMessage: response } })}>
                        Share with me too!
                      </em>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <ScrollRestoration />
    </div>
  );
}

export default AboutPage;
