import React from 'react';

function Navigation(props) {
    const navStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center"
    };

    const { content, setCurrentContent, currentContent } = props;

    return (
        <div style={navStyle}>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
