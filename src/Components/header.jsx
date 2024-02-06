import React from "react";
import profile from "./../assets/profile.jpg";
import git from "./../assets/github.png";
import linked from "./../assets/linkedin.png";
import CV from "./../assets/cv.pdf";

const Header = () => {
  return (
    <section id="profile">
      <div class="section__pic-container">
        <img src={profile} alt="ck profile picture" className="profile" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Calvin Klein</h1>
        <p class="section__text__p2">Web Developer</p>
        <div class="btn-container">
          <button class="btn btn-color-2">
            <a href={CV} download>
              Download CV
            </a>
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contacts")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linked}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/calvin-klein-jed-andrie-ra%C3%B1a-56330920b/",
                "blank"
              )
            }
          />
          <img
            src={git}
            alt="My Github profile"
            className="icon"
            onClick={() => window.open("https://github.com/GrimCLown", "blank")}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
