import React from 'react';
import skills from '../../data/skills.json'
import style from './Experience.module.css';

// Import images
import HTML from '../../assets/skills/html.png';
import CSS from '../../assets/skills/CSS3.png';
import CPlusPlus from '../../assets/skills/C++.png';
import Cloudinary from '../../assets/skills/Cloudinary.png';
import GitHub from '../../assets/skills/GitHub.png';
import Java from '../../assets/skills/Java.png';
import JavaScript from '../../assets/skills/JavaScript.png';
import MySQL from '../../assets/skills/MySQL.png';
import Node from '../../assets/skills/Node.png';
import ReactJS from '../../assets/skills/react.png';
import PostgreSQL from '../../assets/skills/PostgresSQL.png';
import Postman from '../../assets/skills/Postman.png';
import TailwindCSS from '../../assets/skills/TailwindCSS.png';
import TypeScript from '../../assets/skills/TypeScript.png';
import VSCode from '../../assets/skills/VSCode.png';
import Python from '../../assets/skills/Python.jpg';
import Flutter from '../../assets/skills/Flutter.png';
import Dart from '../../assets/skills/Dart.png';
import Figma from '../../assets/skills/figma.png';
import Odoo from '../../assets/skills/Odoo1.png';
import Vite from '../../assets/skills/Vite.png';

const imageMap = {
      "HTML": HTML,
      "CSS": CSS,
      "C++": CPlusPlus,
      "Cloudinary": Cloudinary,
      "GitHub": GitHub,
      "Java": Java,
      "JavaScript": JavaScript,
      "MySQL": MySQL,
      "Node": Node,
      "React": ReactJS,
      "PostgreSQL": PostgreSQL,
      "Postman": Postman,
      "TailwindCSS": TailwindCSS,
      "TypeScript": TypeScript,
      "VSCode": VSCode,
      "Python": Python,
      "Flutter": Flutter,
      "Dart": Dart,
      "Figma": Figma,
      "Odoo": Odoo,
      "Vite": Vite
};

const Experience = () => {
      return (
            <section id="skills" className={style.container} >

                  <h2 className={style.title}>
                        Technical Skills
                  </h2>
                  <div className={style.content}>
                        <div className={style.skills}>
                              {skills.map((skill, id) => {
                                    return (
                                          <div key={id} className={style.skill}>
                                                <div className={style.skillImageContainer}>
                                                      <img src={imageMap[skill.title]}
                                                            alt={skill.title}
                                                            className={style.skillImage} />
                                                </div>
                                                <div className={style.skillTitlediv}>
                                                      <p className={style.skillTitle}>{skill.title}</p>
                                                </div>
                                          </div>

                                    )
                              })}
                        </div>
                  </div>
            </section>

      );
}

export default Experience;
