import React from 'react';
import skills from '../../data/skills.json'
import style from './Experience.module.css';

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
                                                      <img src={skill.imageSrc}
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
