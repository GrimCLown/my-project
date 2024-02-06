import React from "react";
import profile from "./../assets/bnw.png";
import exp from "./../assets/experience.png";
import edu from "./../assets/education.png";

const about = () => {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img src={profile} alt="Profile picture" class="about-pic profile" />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img src={exp} alt="Experience icon" class="icon" />
              <h3>Experience</h3>
              <p>
                1+ year <br />
                Web Development
              </p>
            </div>
            <div class="details-container">
              <img src={edu} alt="Education icon" class="icon" />
              <h3>Education</h3>
              <p>Bachelor of Science in Computer Engineering</p>
            </div>
          </div>
          <div class="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
