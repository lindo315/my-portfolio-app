// Home.js
import React, { useState } from "react";
import "./index.css";
import Modal from "./Modal";
import useAnimateOnScroll from "./useAnimateOnScroll";

const Home = () => {
  const [showModal, setShowModal] = useState(null);

  const handleClick = (item) => {
    setShowModal(item);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  // Fade
  const hiRef = useAnimateOnScroll();

  const items = [
    {
      title: "Tech",
      imageUrl: "./images/image.png",
      bg: "#f5fffa",
      content:
        "As a web developer, I have a deep passion for technology. I love exploring new programming languages, frameworks, and tools that enable me to build innovative and efficient solutions.",
    },
    {
      title: "Idols",
      imageUrl: "./images/image4.png",
      bg: "#d9feff",
      content:
        "Throughout my coding journey, I have been inspired by several remarkable individuals in the tech industry. One of my biggest idols is Linus Torvalds, the creator of Linux.",
    },
    {
      title: "Blogs",
      imageUrl: "./images/image3.png",
      bg: "#ebdfff",
      content:
        "Writing blogs is an integral part of my coding journey. It allows me to share my knowledge, experiences, and insights with the wider developer community. On my personal blog, I write about a variety of topics, including web development tutorials, coding best practices, and my own projects. Some of my recent blog posts include 'Getting Started with React Hooks,' 'Optimizing Web Performance,' and 'The Benefits of Test-Driven Development.' I find blogging to be a great way to solidify my own understanding of concepts and engage with fellow developers. I invite you to visit my blog, read my posts, and leave your thoughts or questions in the comments section.",
    },
    {
      title: "Inspirations",
      imageUrl: "./images/image6.png",
      bg: "#d2fae7",
      content:
        "Inspiration plays a crucial role in my coding journey. I find inspiration in various forms, from the beauty of nature to the intricacies of architectural designs. Whenever I feel stuck or need a creative boost, I take a walk in the park near my house. The lush greenery and serene ambiance help clear my mind and spark new ideas. I also draw inspiration from visiting art galleries and observing the way artists use color, composition, and perspective to convey emotions and stories. These experiences often translate into my coding projects, where I strive to create visually appealing and intuitive user interfaces. I believe that finding inspiration in the world around us can greatly enhance our ability to craft meaningful and impactful code.",
    },
    {
      title: "School",
      bg: "#ede8f5",
      imageUrl: "./images/image5.png",
      content: "Additional information about this item",
    },
  ];
  return (
    <div className="stuff-container" ref={hiRef}>
      <div className="home-container">
        <h1>Hi, I'm Lindo.</h1>
        <h2>A Web Developer.</h2>
      </div>
      <div className="stuff-div">
        <p className="text">
          I'm very passionate about coding and using AI to learn, below you'll
          find some of my thoughts on stuff.
        </p>
        <div className="item-grid">
          <div
            className="item-card"
            onClick={() => handleClick(items[0])}
            style={{
              backgroundColor: `${items[items.length - 1].bg}`,
            }}
          >
            <div
              className="item-image"
              style={{
                backgroundImage: `url(${items[0].imageUrl})`,
              }}
            ></div>
            <h3>{items[0].title}</h3>
          </div>
          <div className="item-card-group">
            {items.slice(1).map((item, index) => (
              <div
                key={index}
                className="item-card"
                onClick={() => handleClick(item)}
                style={{
                  backgroundColor: `${items[index].bg}`,
                }}
              >
                <div
                  className="item-image"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                ></div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && <Modal item={showModal} onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
