import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="about" id="contact">
            <h2 style={{ fontWeight: '300' }}>Contact<span className="spaan"> Us</span></h2><br />
            <p>Email: <a href="mailto:sinewavecreativelabs@gmail.com">sinewavecreativelabs@gmail.com</a></p>
        </section>
    );
}

export default Contact;