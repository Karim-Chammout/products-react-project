import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { bgColor, textColor, btnColor } = themeContextAPI.themeObj;

  return (
    <div
      className={[bgColor, textColor, "text-center", "mt-4"].join(
        " "
      )}
    >
      <div>
        <h4 className="py-4 display-6">Made By Karim Chammout</h4>
        <span>Kodluyouruz</span>
      </div>
    </div>
  );
}

export default Footer;
