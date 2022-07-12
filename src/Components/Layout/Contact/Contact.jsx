import "./Contact.scss";
import { useState } from "react";

const Contact = () => {
  const [Submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <h2>Contact me</h2>
      <form
        name="gform"
        id="gform"
        encType="text/plain"
        action="https://docs.google.com/forms/d/e/1FAIpQLSeuAY60cHY1ObpLORogk_D5_buCYRtk3cwKrB7QNLR9UGhl0Q/formResponse?"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="entry.606424351"
          id="entry.606424351"
          required
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="entry.1555727373"
          id="entry.1555727373"
          required
        />
        <label htmlFor="Message">Message</label>
        <textarea name="entry.1013502747" id="entry.1013502747" required />
        <button type="submit">Send</button>
      </form>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      />
      {Submitted ? <p>Thank you for your message!</p> : null}
    </section>
  );
};

export default Contact;
