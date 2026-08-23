import React, { useState } from "react";
import "./Style/Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact us</h2>
      <p>Have a question about a listing? Send us a message.</p>

      {submitted ? (
        <p className="contact-success">Thanks! We'll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows={4} required />
          <button type="submit">Send message</button>
        </form>
      )}
    </section>
  );
};

export default Contact;