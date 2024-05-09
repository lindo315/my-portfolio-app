import React, { useEffect, useRef } from "react";
import "./index.css";

const SkillsSection = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillProgress = skillsRef.current.querySelectorAll(".skill-progress");
    const skillCircles = skillsRef.current.querySelectorAll(".skill-circle");

    skillProgress.forEach((progress) => {
      const value = progress.getAttribute("data-progress");
      progress.style.width = `${value}%`;
    });

    skillCircles.forEach((circle) => {
      const value = circle.getAttribute("data-progress");
      const circumference = 2 * Math.PI * 50;
      const offset = circumference - (value / 100) * circumference;
      circle.style.setProperty("--offset", offset);
    });
  }, []);

  return (
    <div className="skills-container" ref={skillsRef}>
      <div className="skills-container">
        <div className="skills-section">
          <h2 className="skill-title">Technical Skills</h2>
          <div className="skill-bar">
            <div className="skill-label1">React.js</div>
            <div className="skill-progress" data-progress="80"></div>
          </div>
          <div className="skill-bar">
            <div className="skill-label1">JavaScript</div>
            <div className="skill-progress" data-progress="60"></div>
          </div>
          <div className="skill-bar">
            <div className="skill-label1">HTML</div>
            <div className="skill-progress" data-progress="68"></div>
          </div>
          <div className="skill-bar">
            <div className="skill-label1">CSS</div>
            <div className="skill-progress" data-progress="56"></div>
          </div>
        </div>
        <div class="skills-section">
          <h2 className="skill-title">Professional Skills</h2>
          <div className="skill-circle-container">
            <div className="skill-circle" data-progress="95">
              <div className="skill-label2">Communication</div>
            </div>
            <div className="skill-circle" data-progress="86">
              <div className="skill-label2">Project Management</div>
            </div>
          </div>
          <div className="skill-circle-container">
            <div className="skill-circle" data-progress="56">
              <div className="skill-label2">Team work</div>
            </div>
            <div className="skill-circle" data-progress="60">
              <div className="skill-label2">Creativity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
