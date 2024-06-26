import React from 'react';
import '../styles/ShortInfo.css';

const ShortInfo = () => {
    return (
        <div className="short-info-container">
            <div className="skills-required">
                <div className="skills-heading">Skills Required</div>
                <div className="skills-values">
                    <div className="figma skill-value">Figma</div>
                    <div className="illustrator skill-value">Adobe Illustrator</div>
                    <div className="adobe skill-value">Adobe XD</div>
                </div>
            </div>
            <div className="language">
                <div className="language-heading">Preferred Language</div>
                <div className="language-type">English</div>
            </div>
            <div className="type">
                <div className="type-heading">Type</div>
                <div className="type-type">Full time</div>
            </div>
            <div className="experience">
                <div className="experience-heading">Experience</div>
                <div className="experience-type">3+ Years of Experience</div>
            </div>
        </div>
    );
};

export default ShortInfo;
