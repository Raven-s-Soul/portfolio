import "../App.css";
import React, { useState, useEffect } from "react";
import Discord from "../images/Discord.png";
import GitHub from "../images/github-logo.png";
import Gmail from "../images/Gmail.png";
import Linkedin from "../images/Linkedin.png";

function Footer() {
  const [Year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  });

  return (
    <div className="app">
      <div className="footer">
        <hr />
        <div className="FooterLinks">
          <button
            type="button"
            className="FooterButton"
            onClick={(e) => {
              var input = document.createElement("input");
              input.setAttribute("value", "Raven's Soul#9583");
              document.body.appendChild(input);
              input.select();
              var result = document.execCommand("copy");
              document.body.removeChild(input);
              alert("Copied Raven's Soul#9583 in the clipboard");
              return result;
            }}
          >
            <img
              src={Discord}
              loading="lazy"
              className="footer-Img"
              alt="..."
            />
            {/*Raven's Soul#9583*/}
          </button>

          <button
            type="button"
            className="FooterButton"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/sario-tedesco");
            }}
          >
            <img src={GitHub} loading="lazy" className="footer-Img" alt="..." />
            {/*Sario-Tedesco*/}
          </button>
          <button
            type="button"
            className="FooterButton"
            onClick={(e) => {
              e.preventDefault();
              window.open("mailto:sariotedesco@gmail.com");
              var input = document.createElement("input");
              input.setAttribute("value", "sariotedesco@gmail.com");
              document.body.appendChild(input);
              input.select();
              var result = document.execCommand("copy");
              document.body.removeChild(input);
              alert("Copied sariotedesco@gmail.com in the clipboard");
              return result;
            }}
          >
            <img src={Gmail} loading="lazy" className="footer-Img" alt="..." />
            {/*sariotedesco@gmail.com*/}
          </button>
          <button
            type="button"
            className="FooterButton"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.linkedin.com/in/sario-tedesco/");
            }}
          >
            <img
              src={Linkedin}
              loading="lazy"
              className="footer-Img"
              alt="..."
            />
            {/*Sario Tedesco*/}
          </button>
        </div>
        <hr />
        <section>
          <p>Copyright © {Year}, Sario Tedesco</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
