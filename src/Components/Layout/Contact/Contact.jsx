import "./Contact.scss";
import { useState } from "react";

const Contact = () => {
  const handleSubmit = () => {
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 100);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
          value={name}
          type="text"
          name="entry.606424351"
          id="entry.606424351"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="Email">Email</label>
        <input
          value={email}
          type="email"
          name="entry.1555727373"
          id="entry.1555727373"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Message">Message</label>
        <textarea
          value={message}
          name="entry.1013502747"
          id="entry.1013502747"
          required
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      />
    </section>
  );
};

export default Contact;
