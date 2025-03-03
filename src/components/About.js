import React from 'react';
import './About.css'; // Create a About.css

function About() {
    return (
        <section className="about" id="about">
            <h2 style={{ fontWeight: '300' }}>About <span className="spaan">SineWaveCreativeLabs</span> </h2>
            <p>Founded in January 2023, Sine Wave Creative Labs (SWCL) is a dynamic hub of innovation, driven by a
                passion for creating impactful digital experiences. We house two distinct ventures: SineWave Studios,
                specializing in visual creativity, and Sine Wave Code Labs, focusing on technical excellence.</p>
            <p>We offer a comprehensive suite of services including app development, web development, graphic designing,
                and video editing, all tailored to meet the diverse needs of our clients. Our mission is to transform ideas
                into reality, leveraging cutting-edge technology and creative prowess.</p>
        </section>
    );
}

export default About;