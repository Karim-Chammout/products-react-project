import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;
  
  return (
    <div className={[bgColor, textColor, "text-center", "mt-4"].join(" ")}>
      <h4 className="py-4"><b>Made By Karim Chammout</b></h4>
    </div>
  );
}

export default Footer;