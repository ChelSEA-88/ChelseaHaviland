import React from "react";
import "./style.css";

function Footer() {
  const style= {
    color: "#3e5965",
    padding: "50px",
  }
  return (
    
    <footer className="footer">
        <h4 className="text-center" style={style}>
                Thank you for taking the time to get to know me, and viewing my work!
              </h4>
      
    </footer>
  );
}

export default Footer;