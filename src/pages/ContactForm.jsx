import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

import './ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm('mblrvgbl');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    localStorage.setItem('email', email);
    navigate({
      pathname: `/design`,
    });
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      setEmail('');
    }
  }, []);

  if (state.succeeded) {
    return (
      <div id="thanks-message">
        <div id="ty-wrapper">
          <h1 className="modal-h1">
            Thank you!
            <br /> I'll check my email soon.
          </h1>
          <div className="modal-button" onClick={handleClose}>
            back to portfolio
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contact-modal">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="top" style={{ animationDelay: '0.3s' }}>
          <label className="label" htmlFor="email">
            Reach out to me
          </label>
          <div className="subtitle" style={{ animationDelay: '0.6s' }}>
            (whatever is on your mind)
          </div>
        </div>
        <input
          id="email"
          style={{ animationDelay: '0.9s' }}
          type="email"
          name="email"
          autoFocus={email}
          placeholder="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          autoFocus={!email}
          id="message"
          style={{ animationDelay: '1.2s' }}
          name="message"
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          className="modal-button"
          style={{ opacity: message.length > 5 ? 1 : 0.5 }}
          type="submit"
          disabled={state.submitting || message.length <= 5}
        >
          send!
        </button>
        <div className="modal-close" onClick={handleClose}></div>
      </form>
    </div>
  );
}

export default ContactForm;
