import React from 'react';
import style from './Hero.module.css';
import HeroImg from "../../assets/hero/Ishadya.png";
import CV from "../../assets/hero/Ishadya - CV.pdf";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { TbBrandWhatsapp, TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";

const Hero = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>
                    Hi There! I'm an
                </h1>
                <h2 className={style.titleSecond}>
                    IT Undergraduate
                </h2>
                <p className={style.description}>
                    I am an IT undergraduate with a keen interest in full-stack development for web applications.
                    With 6 months of internship experience, I have honed my skills in delivering innovative solutions and diagnosing complex problems.
                    I am passionate about developing innovative, user-focused applications using modern technologies and am open to new opportunities in this dynamic field.
                </p>
                
                <div className={style.contact}>
                    <HiOutlineMail className={style.contactIcon} />
                    <a href="mailto:ishadyaap@gmail.com" className={style.contactLink}>ishadyaap@gmail.com</a>
                </div>
                <div className={style.contact}>
                    <HiOutlinePhone className={style.contactIcon} />
                    <a href="https://wa.me/9471634101" className={style.contactLink}>+94 716034101</a>
                </div>
                
                <div className={style.actionContainer}>
                    <div className={style.cvContainer}>
                        <a href={CV} className={style.contactBtn} download="Ishadya_CV.pdf">
                            Download CV
                        </a>
                    </div>
                    <div className={style.icons}>
                        <a href="https://wa.me/94716034101">
                            <TbBrandWhatsapp />
                        </a>
                        <a href="https://bit.ly/43gbxAv">
                            <TbBrandLinkedin />
                        </a>
                        <a href="https://github.com/git596">
                            <VscGithub />
                        </a>
                    </div>
                </div>
            </div>
            
            <img src={HeroImg} alt="hero" className={style.heroImg} />
            <div className={style.topBluer} />
            <div className={style.bottomBlur} />
        </section>
    );
}

export default Hero;
