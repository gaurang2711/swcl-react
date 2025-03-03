import React from 'react';
import './Services.css';

function Services() {
    return (
        <section className="about" id="services">
            <h2 style={{ fontWeight: '300' }}>Services @<span className="spaan">SineWaveCreativeLabs</span> </h2><br />

            <div className="services-grid">
                <div className="service-item app-dev">
                    <h3>App Development 📱</h3> <br />
                    <p>Building intuitive and scalable mobile applications for iOS and Android.</p>
                </div>
                <div className="service-item web-dev">
                    <h3>Web Development 🌐</h3> <br />
                    <p>Creating responsive and engaging websites tailored to your brand.</p>
                </div>
                <div className="service-item graphic-design">
                    <h3>Graphic Designing 🎨</h3> <br />
                    <p>Crafting visually stunning designs for branding and marketing.</p>
                </div>
                <div className="service-item video-edit">
                    <h3>Video Production 🎬</h3> <br />
                    <p>Producing high-quality video content that captivates your audience.</p>
                </div>
            </div>

        </section>
    );
}

export default Services;