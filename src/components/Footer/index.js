import React from 'react';

function Footer() {
    const footerStyle = {
        color: "white",
        backgroundColor: "#899E8B",
        padding: "10px",
        margin: "20px 0 0 0"
    };

    return (
        <div style={footerStyle}>
            <h2 style={{padding: "0 10px"}}>
                Thanks for visiting!
            </h2>
            <ul className="flex-row">
                <li>
                    <a href="tel: 216-870-3756">216-870-3756</a>
                </li>
                <li>
                    <a href="mailto: pvaltemare@gmail.com">pvaltemare@gmail.com</a>
                </li>
                <li>
                    <a href="https://github.com/pvalte">Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/paige-altemare/">LinkedIn</a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/16346695/pvalte">Stack Overflow</a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
