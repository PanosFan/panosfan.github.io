import "./Contact.scss";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      toast("Thanks for contacting me! \n Will be in touch with you shortly.");
    }, 0);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section data-aos="fade-up" id="contact">
      <Toaster />
      <h4>Contact me</h4>
      <form
        name="gform"
        className="contactForm"
        encType="text/plain"
        action="https://docs.google.com/forms/d/e/1FAIpQLSeuAY60cHY1ObpLORogk_D5_buCYRtk3cwKrB7QNLR9UGhl0Q/formResponse?"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <input
          required
          value={name}
          type="text"
          name="entry.606424351"
          id="nameInput"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="Name" id="nameLabel">
          Name
        </label>

        <input
          required
          value={email}
          type="email"
          name="entry.1555727373"
          id="mailInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Email" id="mailLabel">
          Email
        </label>

        <textarea
          required
          value={message}
          name="entry.1013502747"
          id="messageTextArea"
          onChange={(e) => setMessage(e.target.value)}
        />
        <label htmlFor="Message" id="messageLabel">
          Message
        </label>
        <button id="btn" type="submit" className="submitButton">
          <span>Submit</span>
          <div className="wave"></div>
        </button>
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
