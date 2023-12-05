import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase";
import "./css/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore(app);
    const messagesCollection = collection(db, "Messages");
    await addDoc(messagesCollection, {
      name,
      email,
      message,
      timestamp: new Date(),
      isNew: true
    });

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-background">
      <section className="contact-info">
        <h1>Contact Info</h1>
        <p>If you have any questions or need further information, feel free to contact Uncle Chess directly. He is always open to discussing music, collaborations, and other opportunities.</p>
        <h2>Email: <a href="mailto:chesterp0525@gmail.com">chesterp0525@gmail.com</a></h2>
      </section>
  
      <section className="contact-form">
        <h1>Contact Uncle Chess Directly</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
  
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
  
};

export default Contact;