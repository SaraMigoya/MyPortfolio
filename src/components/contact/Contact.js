import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./_Contact.scss"
 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tn8g47o','template_tgu0fhk', e.target,'user_z7mvGsvH3eiAlizgRVKeC')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-container" >
        <h2 className="title-contact">Contact</h2>
        <div className ="underline-contact"></div>
        <form ref={form} onSubmit={sendEmail} className="form">
        <label className="label">Name</label>
        <input className="input" type="text" name="name" />
        <label className="label">Email</label>
        <input className="input" type="email" name="user_email" />
        <label className="label">Message</label>
        <textarea className="textarea" name="message" />
        <input className="contact-botton" type="submit" value="Send" />
        </form>
    </div>
  );
};

export default Contact;