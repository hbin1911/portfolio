import React from "react";
// import "../styles/skills.css";
import "../styles/skills.scss"
import check from "../assests/checkmark.png";

const Skills = () => {
  return (
    <div id="skills">
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Bootstrap</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SQL</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>MySql</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>MongoDB</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={check}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#projects'"
        /> */}
      </section>
    </div>
  );
};

export default Skills;
