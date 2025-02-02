import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./ProjectCart.module.css";

const ProjectCart = (
      {
            project: { title, skills, imageSrcs, description, demo, source },
      }
) => {
      return (
            <div className={style.container}>
                  <div style={{ position: "relative", marginRight: "4rem", width: "390px" }}>
                        <Carousel showThumbs={false} showIndicators={false} infiniteLoop useKeyboardArrows autoPlay>
                              {imageSrcs.map((src, index) => (
                                    <div key={index}>
                                          <img src={src} alt={`Image ${index + 1 } of ${title}`} className={style.image} />
                                    </div>
                              ))}
                              {/* <img src={imageSrc}
                                    alt={`Image of ${title}`}
                                    className={style.image} /> */}
                        </Carousel>
                        
                  </div>
                  <div className={style.content}>
                        <h3 className={style.title}>{title}</h3>
                        <p className={style.description}>{description}</p>
                        <ul className={style.skills}>
                              {skills.map((skill, id) => (
                                    <li key={id} className={style.skill}>{skill}</li>

                              ))}
                        </ul>
                        <div className={style.links}>
                              <a href={demo} className={style.link}>Demo</a>
                              <a href={source} className={style.link}>Source</a>
                        </div>
                  </div>
            </div>
      );
}

export default ProjectCart;
