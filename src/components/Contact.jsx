import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const contactDetails = [
  {
    label: "Email",
    value: "mohdmerajansari76@gmail.com",
    href: "mailto:mohdmerajansari76@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 73041 85760",
    href: "tel:+917304185760",
  },
  { label: "Based in", value: "Mumbai, India" },
  { label: "GitHub", value: "github.com/Meraj-1", href: "https://github.com/Meraj-1" },
  {
    label: "LinkedIn",
    value: "Meraj Ansari",
    href: "https://www.linkedin.com/in/meraj-ansari-12bb132a9/",
  },
];

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setFormStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xnnqbwow", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setFormStatus({
          type: "error",
          message: "Your message couldn’t be sent. Please try again or email me directly.",
        });
        return;
      }

      form.reset();
      setFormStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "A network error stopped your message from sending. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="site-container contact-grid">
        <div className="contact-copy">
          <span className="section-index">09 — Start a conversation</span>
          <h2>Have an idea? Let’s build something meaningful.</h2>
          <p>
            I’m always open to thoughtful discussions, collaborations, and
            projects with a clear purpose. Tell me what you’re working on.
          </p>

          <div className="contact-details">
            {contactDetails.map((detail) => (
              <div className="contact-detail" key={detail.label}>
                <span className="contact-detail-label">{detail.label}</span>
                {detail.href ? (
                  <a href={detail.href}>{detail.value}</a>
                ) : (
                  <span>{detail.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a message</h3>
          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">What would you like to build?</label>
            <textarea id="contact-message" name="message" rows={5} required />
          </div>
          <button className="button-primary form-submit" type="submit" disabled={isSending}>
            {isSending ? "Sending…" : "Send message"}
            {!isSending && <ArrowUpRight size={16} aria-hidden="true" />}
          </button>
          {formStatus && (
            <p
              className={`form-status${formStatus.type === "error" ? " form-status-error" : ""}`}
              role={formStatus.type === "error" ? "alert" : "status"}
            >
              {formStatus.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
