import React from "react";
import "./index.css";
import useAnimateOnScroll from "./useAnimateOnScroll";

const Tech = () => {
  const techRef = useAnimateOnScroll();

  return (
    <div className="stuff-container">
      <div className="home-container" ref={techRef}>
        <h1>Tech Page</h1>
        <p className="tech-text">
          Some of the technologies I enjoy working with include React, Node.js,
          and MongoDB. I find joy in creating responsive and user-friendly web
          applications that solve real-world problems. One of my recent projects
          involved building a full-stack e-commerce platform using the MERN
          stack, which allowed me to delve into the world of APIs,
          authentication, and payment integration. I'm always excited to learn
          about the latest advancements in the tech industry and how I can
          leverage them to create impactful projects.
        </p>
      </div>
    </div>
  );
};

export default Tech;
