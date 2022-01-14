import React from 'react';

function Resume() {
    return (
        <section className='resume'>
            <h1 id="resume">Resume</h1>
            <div>
                <a href={require("../../assets/Paige Altemare - Resume.pdf")} target="blank">
                    Download My Resume    
                </a>
                <h3>Front-End Proficiencies:</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Responsive design</li>
                    <li>React</li>
                </ul>
                <h3>Back-End Proficiencies:</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;
