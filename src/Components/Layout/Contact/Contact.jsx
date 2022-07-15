import "./Contact.scss";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    var btn = document.getElementById("btn");
    var btnText = document.getElementById("btnText");
    btnText.innerHTML = "Thanks";
    btn.classList.add("submitted");
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 100);
  };

  return (
    <section id="contact">
      <h2>Contact me</h2>
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
          <p id="btnText">Submit</p>
          <div class="checked">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
            </svg>
          </div>
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
