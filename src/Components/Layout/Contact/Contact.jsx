import "./Contact.scss";
import { useState } from "react";
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

  const handleMailClass = () => {
    const validateMail = () => {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if (email.length > 0) {
      if (validateMail()) {
        return "activeMail";
      } else {
        return "wrongMail";
      }
    } else {
      return "";
    }
  };

  return (
    <section id="contact">
      <Toaster />
      <h2 data-aos="fade-up">
        Contact me
        <div className="headersLine"></div>
      </h2>
      <form
        name="gform"
        className="contactForm"
        encType="text/plain"
        action="https://docs.google.com/forms/d/e/1FAIpQLSeuAY60cHY1ObpLORogk_D5_buCYRtk3cwKrB7QNLR9UGhl0Q/formResponse?"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <input
          data-aos="fade-right"
          required
          value={name}
          type="text"
          name="entry.606424351"
          id="nameInput"
          className={name.length > 0 ? "activeName" : ""}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="Name" id="nameLabel" data-aos="fade-left">
          Name
        </label>

        <input
          data-aos="fade-right"
          required
          value={email}
          type="email"
          name="entry.1555727373"
          id="mailInput"
          className={handleMailClass()}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Email" id="mailLabel" data-aos="fade-left">
          Email
        </label>

        <textarea
          data-aos="fade-right"
          required
          value={message}
          name="entry.1013502747"
          id="messageTextArea"
          className={message.length > 0 ? "activeMessage" : ""}
          onChange={(e) => setMessage(e.target.value)}
        />
        <label htmlFor="Message" id="messageLabel" data-aos="fade-left">
          Message
        </label>
        <button
          id="btn"
          type="submit"
          className="submitButton"
          data-aos="fade-right"
        >
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
