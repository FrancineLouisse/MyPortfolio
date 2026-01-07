// ContactSection.jsx
import { useState } from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const ENDPOINT =
    import.meta.env.DEV
      ? "http://localhost:8888/.netlify/functions/contact"
      : "/.netlify/functions/contact";

  async function handleSubmit(e) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries());

    try {
      setStatus({ loading: true, ok: null, msg: "Sending…" });

      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // We don't show the server JSON to the user—just a friendly message.
      if (!res.ok) {
        // Try to read error text, but keep our own message
        let errText = "";
        try { errText = await res.text(); } catch {}
        throw new Error(errText || "Send failed");
      }

      setStatus({ loading: false, ok: true, msg: "Message submitted!" });
      formEl.reset();
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: "Failed to send message." });
      console.error(err);
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__grid container">
        <div className="contact__copy">
          <h2 className="contact__title">Contact <span>Me</span></h2>
          <p className="contact__lead">Let’s work together</p>
          <p className="contact__text">
            I’m glad you’ve visited my personal portfolio website. If you have any
            questions, suggestions, or would like to collaborate, feel free to
            contact me through this form.
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Enter your name" required />

          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" required />

          <label className="sr-only" htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="Enter your subject" />

          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" rows={7} required />

          {/* Button + centered flash message directly below */}
          <div className="contact__actions">
            <button type="submit" className="contact__btn" disabled={status.loading}>
              {status.loading ? "SENDING…" : "SUBMIT"}
            </button>

            <p
              className={`contact__flash ${status.ok ? "ok" : status.ok === false ? "err" : ""}`}
              role="status"
              aria-live="polite"
            >
              {status.ok ? "Message submitted!" : status.ok === false ? status.msg : ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
