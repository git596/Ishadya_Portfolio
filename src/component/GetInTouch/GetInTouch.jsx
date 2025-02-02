import React, { useState } from 'react';
import style from './GetInTouch.module.css';
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import { TbBrandWhatsapp } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { FaHandPointLeft } from "react-icons/fa";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div>
            <div>
                <h1 style={{color: '#FFFFFF',
                            textAlign: 'center',
                            marginTop: '60px',
                            fontWeight: 300,
                            fontFamily: 'cursive',
                            fontSize: '3.5rem',
                            letterSpacing: '1px'
                            }}>
                    Wanna talk about your <span style={{color: '#cd0b5f', fontFamily: 'cursive'}}>next project ?</span><br/>
                    Let's Get Connected 🤩
                </h1>
            </div>
                <form className={style.container} onSubmit={handleSubmit}>
                                            <div className={style.content} style={{display: 'flex', flexDirection: 'row'}}>
                                                <div style={{width: '70%', paddingRight: '60px'}}>
                                                <h2 className={style.title}>Get in Touch</h2>
                                                    <div className={style.row}>
                                                        <div className={style.formGroup}>
                                                            <label htmlFor="fullName" className={style.label}>Full Name<sup style={{color: '#cd0b5f', fontSize: "medium"}}> *</sup></label>
                                                            <input
                                                                type="text"
                                                                id="fullName"
                                                                name="fullName"
                                                                value={formData.fullName}
                                                                onChange={handleChange}
                                                                className={style.input}
                                                                required
                                                            />
                                                        </div>
                                                        <div className={style.formGroup}>
                                                            <label htmlFor="email" className={style.label}>Email<sup style={{color: '#cd0b5f', fontSize: "medium"}}> *</sup></label>
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                className={style.input}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={style.row}>
                                                        <div className={style.formGroup}>
                                                            <label htmlFor="phone" className={style.label}>Phone</label>
                                                            <input
                                                                type="tel"
                                                                id="phone"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                className={style.input}
                                                            />
                                                        </div>
                                                        <div className={style.formGroup}>
                                                            <label htmlFor="subject" className={style.label}>Subject</label>
                                                            <input
                                                                type="text"
                                                                id="subject"
                                                                name="subject"
                                                                value={formData.subject}
                                                                onChange={handleChange}
                                                                className={style.input}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={style.formGroup}>
                                                        <label htmlFor="message" className={style.label}>Message<sup style={{color: '#cd0b5f', fontSize: "medium"}}> *</sup></label>
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            className={style.textarea}
                                                            required
                                                        ></textarea>
                                                    </div>
                                                    <button type="submit" className={style.button}>Send Message</button>
                                                </div>
                                                <div style={{ width: '30%'}} className={style.infoContainer}>
                                                 {/* <h2 className={style.title} style={{paddingBottom: '30px'}}>Reach me via,</h2> */}
                                                    <p style={{paddingTop: '140px',
                                                                color: '#cd0b5f',
                                                                textAlign: 'center',
                                                                fontSize: '1.6rem', 
                                                                fontFamily: 'cursive',
                                                                fontWeight: 'bold',
                                                                letterSpacing: '0.3rem'}}>
                                                                Discuss <br/>or<br/> Just Wanna Say Hi?
                                                    </p>
                                                    <div style={{color: '#dcb732', fontSize: '3.8rem', textAlign: 'center', justifyContent: 'center'}}>
                                                        <FaHandPointLeft/>
                                                    </div>
                                                {/* <div className={style.infoItem}>
                                                        <BsTelephone className={style.icon} />
                                                        <span>+94 71634101&nbsp;&nbsp;/&nbsp;&nbsp;+94 713753456</span>
                                                    </div>
                                                    <div className={style.infoItem}>
                                                        <TbBrandWhatsapp className={style.icon} />
                                                        <a style={{color: 'white'}} href="https://wa.me/9471634101" target="_blank" rel="noopener noreferrer">+94 71634101</a>
                                                    </div>
                                                    <div className={style.infoItem}>
                                                        <HiOutlineMail className={style.icon} />
                                                        <a style={{color: 'white'}} href="mailto:ishadyaap@gmail.com">ishadyaap@gmail.com</a>
                                                    </div>
                                                    <div className={style.infoItem}>
                                                        <TbBrandLinkedin className={style.icon} />
                                                        <a style={{color: 'white'}} href="https://bit.ly/43gbxAv" target="_blank" rel="noopener noreferrer">https://bit.ly/43gbxAv</a>
                                                    </div>
                                                    <div className={style.infoItem}>
                                                        <VscGithub className={style.icon} />
                                                        <a style={{color: 'white'}} href="https://github.com/git596" target="_blank" rel="noopener noreferrer">https://github.com/git596</a>
                                                    </div> */}
                            </div>
                        </div>
                </form>
        </div>
    );
};

export default GetInTouch;