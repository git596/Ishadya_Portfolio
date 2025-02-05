import React from 'react';
import style from './About.module.css';
import men2 from "../../assets/about/Damindu.png";
import { FaUserGraduate, FaExternalLinkAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";

const About = () => {
      return (
            <section className={style.container} id='about'>
                  <h2 className={style.title}>
                        About Me
                  </h2>
                  <div className={style.content}>
                        <img src={men2} alt="lap with me" className={style.aboutImg} />
                        <ul className={style.aboutItems}>
                              <li className={style.aboutItem}>
                                    <div className={style.aboutItemText}>
                                          <h2>I'm Ishadya Abeysinghe</h2>
                                          <a>
                                          As an IT undergraduate from the University of Kelaniya, I excel in collaborative projects with a strong IT foundation, am up-to-date with industry trends, and communicate effectively with diverse individuals. Committed to delivering high-quality results, seeks opportunities to contribute to innovative IT organizations..
                                          </a>
                                    </div>
                              </li>
                              <div className={style.columnItems}>
                                    <li className={style.aboutItem}>
                                          <div className={style.aboutItemText}>
                                                <h3>
                                                      <FaUserGraduate className={style.icon} />
                                                      Education
                                                </h3>
                                                <p>
                                                      Undergraduate
                                                      <br />
                                                      B.Sc. (Hons) in Information Technology
                                                      <br />
                                                      University of Kelaniya
                                                      <br />
                                                      <a>2022 - Present</a>
                                                </p>
                                          </div>
                                    </li>
                                    <li className={style.aboutItem}>
                                          <div className={style.aboutItemText}>
                                                <h3>
                                                      <BsPersonWorkspace className={style.icon} />
                                                      Work Experience
                                                </h3>
                                                <p>
                                                      Software Engineer Intern
                                                      <br />
                                                      MYNDi Labs (Pvt.) Ltd
                                                      <a href='https://www.myndinnovation.com' className={style.externalLink}>
                                                            <FaExternalLinkAlt />
                                                      </a>
                                                      <br />
                                                      Sri Lanka
                                                      <br />
                                                      <a>2023 - 2024</a>
                                                </p>
                                          </div>
                                    </li>
                                    <li className={style.aboutItem}>
                                          <div className={style.aboutItemText}>
                                                <h3>
                                                      <IoHome className={style.icon} />
                                                      Address
                                                </h3>
                                                <p>
                                                      No 62, N.H.S Wewalduwa,
                                                      Kelaniya
                                                      <br />
                                                      Sri Lanka
                                                </p>
                                          </div>
                                    </li>
                              </div>
                        </ul>
                  </div>
            </section>
      );
}

export default About;
