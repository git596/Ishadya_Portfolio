import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import style from './GetInTouch.module.css';
import { FaHandPointLeft } from 'react-icons/fa';
import shakehand from '../../assets/getInTouch/shakehand1.png'

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
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gczdb8b', 'template_niznnux', e.target, 'CJnZaEfNKUs_O5A9-')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again.');
            });
    };

    return (
        <div>
            <h1 className={style.headerText}>
                Wanna talk about your <span className={style.headerSpan}>next project?</span><br />
                Let's Get Connected 🤩
            </h1>

            <form className={style.container} onSubmit={handleSubmit}>
                <div className={style.content}>
                    <div className={style.formContainer}>
                        <h2 className={style.title}>Get in Touch</h2>
                        <div className={style.row}>
                            <div className={style.formGroup}>
                                <label htmlFor="fullName" className={style.label}>
                                    Full Name<sup className={style.required}> *</sup>
                                </label>
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
                                <label htmlFor="email" className={style.label}>
                                    Email<sup className={style.required}> *</sup>
                                </label>
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
                            <label htmlFor="message" className={style.label}>
                                Message<sup className={style.required}> *</sup>
                            </label>
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

                    <div className={style.infoContainer}>
                        <div className={style.imageContainer}>
                            <img 
                                src={shakehand} 
                                alt="Shake hands" 
                                className={style.shakehandImage}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default GetInTouch;