import React from "react";
import "./Aboutus.css";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

const teamMembers = [
  {
    name: "GARCIA, IVAHNN B.",
    image: "/images/ivahnpic.jpg",
    description: "FRONTEND DEVELOPER",
  },
  {
    name: "Member 2",
    image: "/images/ivahnpic.jpg",
    description: "Description for member 2.",
  },
  {
    name: "Member 3",
    image: "/images/ivahnpic.jpg",
    description: "Description for member 3.",
  },
  {
    name: "Member 4",
    image: "/images/ivahnpic.jpg",
    description: "Description for member 4.",
  },
  {
    name: "Member 5",
    image: "/images/ivahnpic.jpg",
    description: "Description for member 5.",
  },
  {
    name: "Member 6",
    image: "/images/ivahnpic.jpg",
    description: "Description for member 6.",
  },
];

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h2>About MedQuery</h2>
          </div>
          <div>
            <h2>What is MedQuery</h2>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>

          {/* Card section */}
          <div className="about-cards">
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
