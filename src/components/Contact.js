import React, { useState } from "react";
import "../styles/Contact.css"

function Contact() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
  };

  return (
    <form className='container text-center row'>
      <h2>Contact Me</h2>
      <div className="contact-form col-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={nameInput}
          name="name"
          className="contact-name form-control row mb-3"
          onChange={handleNameChange}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={emailInput}
          name="email"
          className="contact-email form-control row mb-3"
          onChange={handleEmailChange}
        ></input>
        <textarea
          type="text"
          placeholder="Message"
          value={messageInput}
          name="message"
          rows="5"
          className="contact-message form-control row mb-3"
          onChange={handleMessageChange}
        ></textarea>
        <button onClick={handleSubmit} className="contact-button btn btn-primary btn-lg">Submit</button>
      </div>
    </form>
  );
}

export default Contact;
