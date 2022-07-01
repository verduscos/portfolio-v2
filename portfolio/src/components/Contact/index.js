import React from "react";
import "./Contact.css"

function Contact() {

  return (
    <div id="contact">
      <h1>Hi there 👋</h1>
      <ul id="contact-inner">
        <li>
          <p>
            I'm Eddie, a full stack web developer passionate about development and someone who values the visual feedback of creating clean, usable products.</p>
          <p>Let's chat! How to reach me:</p>
        </li>
        <li id="contact-email">
          <a href="mailto:eduardo.verdusco@yahoo.com">
            eduardo.verdusco@yahoo.com
          </a>
        </li>
        <li>
          <a href="tel:7024266788" target='_blank'>
            702-426-6788
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;
