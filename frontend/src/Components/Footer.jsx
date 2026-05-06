import React from "react";
import footerImg from "../assets/footer.png"; // apni generated image yahan import karo

const Footer = () => {
  return (
    <div className="w-full">
      <img 
        src={footerImg} 
        alt="Footer" 
        className="w-full object-cover"
      />
    </div>
  );
};

export default Footer;