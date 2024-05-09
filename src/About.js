import React from "react";
import "./index.css";
import useAnimateOnScroll from "./useAnimateOnScroll";
import SkillsSection from "./SkillsSection";
import Timeline from "./Timeline";

const About = () => {
  const lindoRef = useAnimateOnScroll();
  const aboutRef = useAnimateOnScroll();
  const photoRef = useAnimateOnScroll();

  return (
    <div className="stuff-container">
      <section className="lindo hidden" ref={lindoRef}>
        <h1>I'm Lindo.</h1>
      </section>
      <section className="about-container1 hidden">
        <div className="text-container" ref={aboutRef}>
          <h2 className="lindo-about">
            I'm a Wits Student majoring in Web Design situated in Joburg, South
            Africa
          </h2>
          <p className="lindo-about2">
            For the past 2yrs, I've been coding and creating mini-projects for
            school and for myself for experience.
          </p>
          <p className="lindo-about2">
            My main focus is to advance my skills and learn more from
            professionals way ahead.
          </p>
        </div>
        <div className="image-container" ref={photoRef}>
          <img
            src={`${process.env.PUBLIC_URL}/images/image4.png`}
            alt="profile"
          />
        </div>
      </section>
      <section className="about-container2 hidden">
        <h2 className="more-about">Timeline</h2>
        <p className="more-about2">
          For the past 4yrs, I've dedicated myself to a few programming
          languages
        </p>
        <Timeline />
      </section>
      <section className="about-container2 hidden">
        <h2 className="more-about">Skills</h2>
        <p className="more-about2">
          As a growing web developer, I've acquired some different skills over
          my years of programming.
        </p>
        <SkillsSection />
      </section>
    </div>
  );
};

export default About;
