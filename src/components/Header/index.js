import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const headerStyle = {
    color: "white",
    backgroundColor: "#99C5B5",
    padding: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center"
  };

  return (
    <div style={headerStyle}>
      <h2>
        <a style={{fontSize: "30px"}} href="/">Paige Altemare</a>
      </h2>
      <Navigation 
        className="space-between"
        content={props.content}
        setCurrentContent={props.setCurrentContent}
        currentContent={props.currentContent}
        ></Navigation>
    </div>
  );
}

export default Header;
