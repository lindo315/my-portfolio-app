import React from "react";
import "./index.css";

const Timeline = () => {
  const redirectToPage = (url) => {
    window.location.href = url;
  };

  return (
    <div className="timeline">
      <div
        className="block"
        data-year="2021"
        onClick={() => redirectToPage("2021.html")}
      >
        <div className="year1">2021</div>
        <div className="content1">Starting University</div>
      </div>
      <div
        className="block"
        data-year="2022"
        onClick={() => redirectToPage("2022.html")}
      >
        <div className="year2">2022</div>
        <div className="content2">Game Design: C#</div>
      </div>
      <div
        className="block"
        data-year="2023"
        onClick={() => redirectToPage("2023.html")}
      >
        <div className="year1">2023</div>
        <div className="content1">Interactive Media: HTML, CSS, JavaScript</div>
      </div>
      <div
        className="block"
        data-year="2024"
        onClick={() => redirectToPage("2024.html")}
      >
        <div className="year2">2024</div>
        <div className="content2">Web App Design: JavaScript, React.Js</div>
      </div>
    </div>
  );
};

export default Timeline;
