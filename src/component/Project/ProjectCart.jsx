import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./ProjectCart.module.css";

// Import images
import RasanjanaCom from "../../assets/projects/RasanjanaCom.png";
import RasanjanaCom1 from "../../assets/projects/RasanjanaCom1.png";
import RasanjanaCom2 from "../../assets/projects/RasanjanaCom2.png";
import RasanjanaCom3 from "../../assets/projects/RasanjanaCom3.png";
import RasanjanaCom4 from "../../assets/projects/RasanjanaCom4.png";
import WeatherApp from "../../assets/projects/WeatherApp.png";
import WeatherApp1 from "../../assets/projects/WeatherApp1.png";
import WeatherApp2 from "../../assets/projects/WeatherApp2.png";
import HospitalSystem from "../../assets/projects/HospitalSystem.png";
import HospitalSystem1 from "../../assets/projects/HospitalSystem1.png";
import HospitalSystem2 from "../../assets/projects/HospitalSystem2.png";
import HospitalSystem3 from "../../assets/projects/HospitalSystem3.png";
import HospitalSystem4 from "../../assets/projects/HospitalSystem4.png";
import HangmanGame from "../../assets/projects/HangmanGame.png";
import HangmanGame1 from "../../assets/projects/HangmanGame1.png";
import HangmanGame2 from "../../assets/projects/HangmanGame2.png";
import HangmanGame3 from "../../assets/projects/HangmanGame3.png";
import HangmanGame4 from "../../assets/projects/HangmanGame4.png";

const imageMap = {
      "Communication Shop Management System": [RasanjanaCom, RasanjanaCom1, RasanjanaCom2, RasanjanaCom3, RasanjanaCom4],
      "Weather Forecasting Mobile App": [WeatherApp, WeatherApp1, WeatherApp2],
      "Hospital Meal Management System": [HospitalSystem, HospitalSystem1, HospitalSystem2, HospitalSystem3, HospitalSystem4],
      "Hangman Game": [HangmanGame, HangmanGame1, HangmanGame2, HangmanGame3, HangmanGame4]
};

const ProjectCart = (
      {
            project: { title, skills, description, demo, source },
      }
) => {
      const imageSrcs = imageMap[title] || [];

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
