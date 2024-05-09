import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Modal = ({ item, onClose }) => {
  const [modalTop, setModalTop] = useState(0);

  useEffect(() => {
    const calculateModalTop = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const modalHeight =
        document.querySelector(".modal-content")?.offsetHeight || 0;
      const modalTop = scrollPosition + (windowHeight - modalHeight) / 2;
      setModalTop(modalTop);
    };

    calculateModalTop();
    window.addEventListener("resize", calculateModalTop);

    return () => {
      window.removeEventListener("resize", calculateModalTop);
    };
  }, []);

  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ top: `${modalTop}px` }}
      >
        <div className="modal-header">
          <h2>{item.title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.content}</h3>
          <Link to={`/${item.title.toLowerCase()}`} className="know-more-link">
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
