import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm('mblrvgbl');
  if (state.succeeded) {
    return (
      <div id="thanks-message">
        <h3>Thanks for reaching out!</h3>
        <h3> I'll check my email soon.</h3>
        <button className="thanks-message-button">Back to portfolio</button>
      </div>
    );
  }
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Reach out to me!</label>
      <input id="email" type="email" name="email" autoFocus placeholder="Type your email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Leave your message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Send!
      </button>
    </form>
  );
}

export default ContactForm;
