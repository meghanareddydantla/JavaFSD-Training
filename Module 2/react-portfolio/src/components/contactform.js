import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "D Meghana Reddy",
    email: "dantlameghanareddy@gmail.com",
    message: "Hi Im open to Work",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contact Me</h2>

      <p className="section-description">
        Feel free to contact me about projects or opportunities.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Send Message
        </button>

        {submitted && (
          <p className="success-message" role="status">
            Thank you! Your form has been submitted.
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;