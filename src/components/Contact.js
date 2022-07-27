import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { serviceId } from "../private/keys";
import { templateId } from "../private/keys";
import { publicKey } from "../private/keys";
import "./contact.scss";
import { phone } from "../private/info";
import github from "./assets/icons/github.png";
import linkedin from "./assets/icons/linkedin.png";
import emailLogo from "./assets/icons/email.svg";
import phoneIcon from "./assets/icons/phone.svg";
import mailIcon from "./assets/icons/mail.svg";
import send from "./assets/icons/send.svg";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    alert("Thank you for your contact!");
  };

  return (
    <div id="contact">
      <div id="contact-box" data-aos="fade-up" data-aos-duration="3000">
        <div id="contact-left">
          <div id="contact-title1">
            <img src={send} alt="send" />
            Contact
          </div>
          <div id="contact-title2">Feel free to contact me!</div>
          <div id="contact-line1">
            <img src={phoneIcon} alt="phone number" /> {phone}
          </div>
          <div id="contact-line2">
            <img src={emailLogo} alt="email" />
            1542shin@gmail.com
          </div>
          <div id="contact-links">
            <a id="mail" href="mailto:1142shin@gmail.com">
              <img className="link-icons" src={mailIcon} alt="mail" />
            </a>
            <a
              id="github"
              href="https://github.com/1542shin/shin-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img className="link-icons" src={github} alt="github" />
            </a>
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/aahan-shin-300722235"
              target="_blank"
              rel="noreferrer"
            >
              <img className="link-icons" src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <div id="contact-right">
          <form id="form" ref={form} onSubmit={sendEmail}>
            <div id="name">
              {" "}
              <label>Your Name *</label>
              <input type="text" name="from_name" required />
            </div>
            <div id="email">
              {" "}
              <label>Your Email *</label>
              <input type="email" name="reply_to" required />
            </div>
            <div id="message">
              {" "}
              <label>Message *</label>
              <textarea name="message" required />
            </div>
            <input id="submit" type="submit" value="Send Message!"></input>
          </form>
        </div>
      </div>
    </div>
  );
};
