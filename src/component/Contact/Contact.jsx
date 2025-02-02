import React from 'react';
import style from "./Contact.module.css"
import gitIcon from "../../assets/contact/githubIcon.png"
import emailIcon from "../../assets/contact/emailIcon.png"
import linkInIcon from "../../assets/contact/linkedinIcon.png"
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import { TbBrandWhatsapp } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";

const Contact = () => {
      return (
            <footer className={style.container} id='contact'>
                  <div className={style.text}>
                        {/* <h2 >
                              Contact
                        </h2> */}
                        <div className={style.icons} style={{display: 'flex', flexDirection: 'row', gap: '15px', justifyContent: 'center', marginBottom: '20px'}}>
                              {/* <a style={{color: 'white'}} href="mailto:ishadyaap@gmail.com">ishadyaap@gmail.com</a>
                               */}
                              <a href="mailto:ishadyaap@gmail.com" style={{backgroundColor: 'GrayText', borderRadius: '100%', width: '55px', fontSize: '40px'}}><HiOutlineMail style={{paddingTop: '10px', color: '#76badc'}}/></a>
                              <a href="https://wa.me/9471634101"style={{backgroundColor: 'GrayText', borderRadius: '100%', width: '55px', fontSize: '40px'}}><TbBrandWhatsapp style={{paddingTop: '10px', color: '#76badc'}}/></a>
                              <a href="https://bit.ly/43gbxAv" style={{backgroundColor: 'GrayText', borderRadius: '100%', width: '55px', fontSize: '40px'}}><TbBrandLinkedin style={{paddingTop: '10px', color: '#76badc'}}/></a>
                              <a href="https://github.com/git596" style={{backgroundColor: 'GrayText', borderRadius: '100%', width: '55px', fontSize: '40px'}}><VscGithub style={{paddingTop: '10px', color: '#76badc'}}/></a>
                        </div>
                              <div style={{justifyContent: 'center', display: 'flex', marginBottom: '20px'}}>
                                    <hr className={style.separator} />
                              </div>
                        <p>
                        Copyright © 2025, All Rights Reserved.<br/>
                        Designed By A P D Ishadya
                        </p>
                  </div>
                  <ul className={style.links}>
                        {/* <li className={style.link}>
                              <img src={emailIcon} alt="Email" />
                              <a href="mailto:hasharamsankalpam@gmail.com">hasharamsankalpam@gmail.com</a>

                        </li>
                        <li className={style.link}>
                              <img src={linkInIcon} alt="LinkedIn" />
                              <a href="https://www.linkedin.com/in/hashara-sankalpa/">hashara-sankalpa</a>
                        </li>
                        <li className={style.link}>
                              <img src={gitIcon} alt="Github" />
                              <a href="https://github.com/hasharas">hasharas</a>
                        </li> */}
                  </ul>
            </footer>
      );
}

export default Contact;
