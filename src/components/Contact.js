import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Find Me</h1>
      
      <div className="contact-links">
          <a href="https://www.linkedin.com/in/aivy-nguyen-122b97351/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:aivynguyenx@gmail.com">Email</a>
        
      </div>

      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="text" name="company" placeholder="Company Name"/>
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
