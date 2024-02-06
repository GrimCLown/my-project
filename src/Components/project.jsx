import React from "react";
import profile from "./../assets/bnw.png";
import ecom from "./../assets/EcomProj.png";
import proj2 from "./../assets/project2Movie.jpg";

const project = () => {
  return (
    <section id="project">
      <p class="section__text__p1 text-center font-semibold text-2xl my-3">
        Browse My Recent
      </p>
      <h1 class="title text-center font-bold text-5xl mb-8">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers flex gap-3">
          <div class="details-container color-container">
            <div class="article-container">
              <img src={ecom} alt="Project 1" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project One</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://github.com/GrimCLown/ecommerce", "blank")
                }
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://grimclown-cartwish.netlify.app/",
                    "blank"
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img src={proj2} alt="Project 2" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Two</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/GrimCLown/movieworld",
                    "blank"
                  )
                }
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://app.netlify.com/sites/grimsmovieworld/overview",
                    "blank"
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* <div class="details-container color-container">
            <div class="article-container">
              <img src={profile} alt="Project 3" class="project-img" />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default project;
