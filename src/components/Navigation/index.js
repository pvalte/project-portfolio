import React from 'react';

function Navigation() {
  return (
    <div>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li>
            Portfolio
          </li>
          <li>
            Contact
          </li>
          <li>
            Resume
          </li>
        </ul>
    </div>
  );
}

export default Navigation;
