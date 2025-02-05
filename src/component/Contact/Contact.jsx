import React from 'react';
import style from "./Contact.module.css"
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandWhatsapp, TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";

const socialLinks = [
    {
        icon: HiOutlineMail,
        href: "mailto:ishadyaap@gmail.com",
        ariaLabel: "Email"
    },
    {
        icon: TbBrandWhatsapp,
        href: "https://wa.me/9471634101",
        ariaLabel: "WhatsApp"
    },
    {
        icon: TbBrandLinkedin,
        href: "https://bit.ly/43gbxAv",
        ariaLabel: "LinkedIn"
    },
    {
        icon: VscGithub,
        href: "https://github.com/git596",
        ariaLabel: "GitHub"
    }
];

const Contact = () => {
      return (
            <footer className={style.container} id='contact'>
                  <div className={style.text}>
                        {/* <h2 >
                              Contact
                        </h2> */}
                        <div className={style.socialIcons}>
                              {socialLinks.map((link, index) => (
                                    <a 
                                          key={index}
                                          href={link.href}
                                          className={style.socialLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          aria-label={link.ariaLabel}
                                    >
                                          <link.icon className={style.socialIcon} />
                                    </a>
                              ))}
                        </div>
                              <div className={style.separatorContainer}>
                                    <hr className={style.separator} />
                              </div>
                        <p className={style.copyright}>
                        © {new Date().getFullYear()} Ishadya. All Rights Reserved.<br/>
                        Designed and Developed by A P D Ishadya
                        </p>
                  </div>
                  <ul className={style.links}>
                        
                  </ul>
            </footer>
      );
}

export default Contact;
