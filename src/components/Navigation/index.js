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
                <li>
                    <a href="#about" onClick={() => {
                  setCurrentContent(content[0]);
                }}>About Me</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => {
                  setCurrentContent(content[1]);
                }}>Portfolio</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => {
                  setCurrentContent(content[2]);
                }}>Contact</a>
                </li>
                <li>
                    <a href="#resume" onClick={() => {
                  setCurrentContent(content[3]);
                }}>Resume</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
