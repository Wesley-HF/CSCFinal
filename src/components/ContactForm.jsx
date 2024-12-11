import React from 'react';

function ContactForm() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Let's Talk!</h2>
      
      <p className="contact-subtitle">
        If you have a project in mind or you just want to chat, feel free to get in touch.
      </p>
      
      <form
        className="contact-form"
        action="https://formspree.io/f/xbljeykj" // Replace with your Formspree endpoint
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name" // Key for Formspree submission
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email" // Key for Formspree submission
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message" // Key for Formspree submission
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </section>
  );
}

export default ContactForm;
