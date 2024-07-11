import React, { useRef, useEffect } from "react";
import "./Aboutus.css";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

const teamMembers = [
  {
    name: "Del Campo, Zyrhian",
    image: "/images/zy.png",
    description: "Back-end Developer",
  },
  {
    name: "Dela Cruz, Jovineil",
    image: "/images/jov.jpg",
    description: "Front-end Developer",
  },
  {
    name: "Garcia, Ivahnn",
    image: "/images/ivahnpic.jpg",
    description: "Front-end Developer",
  },
  {
    name: "Gatdula, Julia",
    image: "/images/julia.jpg",
    description: "Project Manager",
  },
  {
    name: "Gonzales, Jace",
    image: "/images/jace.jpg",
    description: "Back-end Developer",
  },
  {
    name: "Ronquillo, Rafael",
    image: "/images/raf.jpg",
    description: "Back-end Developer",
  },
];

function About() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let previousTimestamp = null;
    let currentScrollLeft = 0;
    const step = 3;

    const animateScroll = (timestamp) => {
      if (!previousTimestamp) {
        previousTimestamp = timestamp;
      }

      const deltaTime = timestamp - previousTimestamp;
      previousTimestamp = timestamp;

      currentScrollLeft += step * deltaTime / 16;

      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        if (currentScrollLeft >= scrollWidth) {
          currentScrollLeft = 0;
        }

        scrollRef.current.scrollLeft = currentScrollLeft;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId); 
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <div>
            <h2 style={{ fontFamily: "Constantia", color: "#000000", textAlign: "center" }}>
              Behind <b style={{ fontFamily: "Winthorpe" }}>MedQuery</b>
            </h2>
          </div>

          {/* Card section */}
          <div className="about-cards" ref={scrollRef}>
            {teamMembers.map((member, index) => (
              <div key={index} className="card">
                <img src={member.image} alt={`${member.name} Image`} />
                <div className="card-content">
                  <h3>{member.name}</h3>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
