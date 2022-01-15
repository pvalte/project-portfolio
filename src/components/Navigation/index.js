import React, { useEffect } from 'react';

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
                <li className={`${
                currentContent === content[0] && 'navActive'}`}>
                    <a onClick={() => {
                  setCurrentContent(content[0]);
                }}>About Me</a>
                </li>
                <li className={`${
                currentContent === content[1] && 'navActive'}`}>
                    <a onClick={() => {
                  setCurrentContent(content[1]);
                }}>Portfolio</a>
                </li>
                <li className={`${
                currentContent === content[2] && 'navActive'}`}>
                    <a onClick={() => {
                  setCurrentContent(content[2]);
                }}>Contact</a>
                </li>
                <li className={`${
                currentContent === content[3] && 'navActive'}`}>
                    <a onClick={() => {
                  setCurrentContent(content[3]);
                }}>Resume</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
