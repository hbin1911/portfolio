import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assests/data.json";
import "../styles/work.css"

const Work = () => {
  return (
    <div id="work">
      {
        data.projects.map((i)=>(
          <div className="slide-container">
        <div className="slide-content">
          <div className="card-wrapper">
            <div className="card">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src={i.imgSrc} alt="" />
                </div>

                <div className="card-content">
                  <h2 className="name">{i.title}</h2>
                  <p className="description">{i.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        ))
      }
      
      {/* <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section> */}
    </div>
  );
};

export default Work;