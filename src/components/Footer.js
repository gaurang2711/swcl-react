import React from 'react';
import './Footer.css'; // Create a Footer.css

function Footer() {
    return (
        <footer>
            <p>© 2025 SineWaveCreativeLabs, All Right Reserved. </p>
            <div className="social-media">
                <a href="https://www.facebook.com/profile.php?id=61573192063228" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://x.com/swclabs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com/sinewavecl/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>

            <p>Designed, Developed and Maintained by <span style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>SineWaveCodeLabs</span><sup>TM</sup></p>
        </footer>
    );
}

export default Footer;