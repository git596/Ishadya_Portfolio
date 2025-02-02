import React from 'react';
import style from './Hero.module.css'
import HeroImg from "../../assets/hero/Ishadya.png"
import CV from "../../assets/hero/Ishadya - CV.pdf"

const Hero = () => {
      return (
            <section className={style.container}>
                  <div className={style.content}>
                        <h1 className={style.title}>
                              Hi There! I'm
                        </h1>
                        <h2 className={style.titleSecond}>
                              IT Undergraduate
                        </h2>
                        <p className={style.description}>
                              I am a dedicated Software Engineer and Full Stack Developer with one year of experience building innovative, user-focused applications using modern technologies.
                        </p>
                        <a href={CV} className={style.contactBtn} download="Ishadya_CV.pdf">Download CV</a>

                  </div>
                  <img src={HeroImg} alt="hero" className={style.heroImg} />
                  <div className={style.topBluer} />
                  <div className={style.bottomBlur} />

            </section>
      );
}

export default Hero;
