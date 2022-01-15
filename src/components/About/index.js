import React from 'react';
import profilePic from '../../assets/avatar.JPG';

function About() {
    return (
        <section className='about'>
            <h1 id="about">About Me</h1>
            <div className="flex-row">
                <img src={profilePic} alt="avatar" />
                <p>
                    Hi! My name is Paige Altemare and I am a Coder living in Chicago, Illinois. I graduated from Case Western Reserve University (CWRU) in 2016 with a BS in Chemical Engineering. I became a Systems Engineer in January 2021, working in primarily C# and JavaScript.
                    <br></br>
                    <br></br>
                    I am taking a Coding Bootcamp through CWRU to become certified in full stack coding. I believe that there need to be more women in technology and hope that I can help break down barriers for other women entering the field.
                </p>
            </div>
        </section>
    );
}

export default About;
