import React from 'react';
import './Team.css'; // Create a Team.css
import placeholder1 from '../Core Team/placeholder-profile-1.jpg';
import placeholder2 from '../Core Team/placeholder-profile-2.jpg';
import placeholder3 from '../Core Team/placeholder-profile-3.jpg';
import placeholder4 from '../Core Team/placeholder-profile-4.jpg';


function Team() {
    return (
        <section className="team" id="team">
            <h2 style={{ fontWeight: '300' }}>Our<span className="spaan"> Team Members</span></h2><br />
            <div className="team-grid">
                <div className="team-member">
                    <img src={placeholder1} alt="Gaurang Dalal" />
                    <h3>Gaurang Dalal</h3>
                    <p>Founder & Co-CEO</p>
                </div>
                <div className="team-member">
                    <img src={placeholder2} alt="Aman Bele" />
                    <h3>Aman Bele</h3>
                    <p>Founder & Co-CEO</p>
                </div>
                <div className="team-member">
                    <img src={placeholder3} alt="Sonal Pawar" />
                    <h3>Sonal Pawar</h3>
                    <p>Desigining Head</p>
                </div>
                <div className="team-member">
                    <img src={placeholder4} alt="Prachi Suryavanshi" />
                    <h3>Prachi Suryavanshi</h3>
                    <p>Managing Director</p>
                </div>

            </div>
        </section>
    );
}

export default Team;