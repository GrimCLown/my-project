import React from "react";
import email from "./../assets/email.png";
import linkedin from "./../assets/linkedin.png";

const contacts = () => {
  return (
    <section id="contacts">
      <p class="section__text__p1 text-center font-semibold text-2xl my-3">
        Get in Touch
      </p>
      <h1 class="title text-center font-bold text-5xl mb-8">Contact Me</h1>
      <div class="details-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:examplemail@gmail.com">ranack21@gmail.com</a>
          </p>
        </div>
        <div class="contact-info-container">
          <img src={linkedin} alt="LinkedIn icon" class="icon contact-icon" />
          <p>
            <a href="https://www.linkedin.com/in/calvin-klein-jed-andrie-ra%C3%B1a-56330920b/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <footer></footer>
    </section>
  );
};

export default contacts;
