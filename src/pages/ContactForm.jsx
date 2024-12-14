import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

import './ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm('mblrvgbl');
  const navigate = useNavigate();

  const handleClose = () => {
    navigate({
      pathname: `/design`,
    });
  };

  useEffect(() => {
    // Set the body's overflow to hidden when the component mounts
    document.body.style.overflow = 'hidden';

    // Add the 'Escape' key listener
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Clean up on unmount: remove event listener and reset body overflow
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  if (state.succeeded) {
    return (
      <div id="thanks-message">
        <h3>Thank you!</h3>
        <h3> I'll check my email soon.</h3>
        <button onClick={() => navigate({ pathname: `/design` })} className="thanks-message-button">
          Back to portfolio
        </button>
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
          autoFocus
          placeholder="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" style={{ animationDelay: '1.2s' }} name="message" placeholder="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button style={{ animationDelay: '1.5s' }} type="submit" disabled={state.submitting}>
          Send!
        </button>
        <div className="modal-close" onClick={handleClose}></div>
      </form>
    </div>
  );
}

export default ContactForm;
