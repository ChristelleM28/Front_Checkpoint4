import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="container-pages">
        <h1>Contact</h1>
        <form className="contactMeForm">
          <div className="containerForm">
            <div>
              <label htmlFor="firstName" className="firstName">
                <input
                  className="contactInput"
                  type="texte"
                  id="firstName"
                  placeholder="Name"
                  // value={newMessage.firstName}
                  // onChange={(e) =>
                  //   setNewMessage({ ...newMessage, firstName: e.target.value })
                  // }
                />
              </label>
            </div>

            <div>
              <label htmlFor="email" className="email">
                <input
                  className="contactInput"
                  type="email"
                  id="email"
                  placeholder="Email address"
                  // value={newMessage.email}
                  // onChange={(e) =>
                  //   setNewMessage({ ...newMessage, email: e.target.value })
                  // }
                />
              </label>
            </div>

            <div>
              <label htmlFor="message" className="message">
                <textarea
                  className="textAreaContact"
                  type="message"
                  id="message"
                  placeholder="Message"
                  // value={newMessage.message}
                  // onChange={(e) =>
                  //   setNewMessage({ ...newMessage, message: e.target.value })
                  // }
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
