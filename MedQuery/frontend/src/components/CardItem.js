import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";

function CardItem({ external, path, label, src, text }) {
  const ItemComponent = external ? (
    <a
      className="cards__item__link"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure className="cards__item__pic-wrap" data-category={label}>
        <img src={src} alt={text} className="cards__item__img" />
      </figure>
      <div className="cards__item__info">
        <h5 className="cards__item__text">{text}</h5>
      </div>
    </a>
  ) : (
    <Link className="cards__item__link" to={path}>
      <figure className="cards__item__pic-wrap" data-category={label}>
        <img src={src} alt={text} className="cards__item__img" />
      </figure>
      <div className="cards__item__info">
        <h5 className="cards__item__text">{text}</h5>
      </div>
    </Link>
  );

  return <li className="cards__item">{ItemComponent}</li>;
}

function Cards() {
  return (
    <div className="cardsarticle">
      <h1>LATEST HEALTH ARTICLES</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/article1.png"
              text="AR/VR innovations: Transforming healthcare through advanced technologies"
              label="Medicine"
              external={true}
              path="https://www.news-medical.net/whitepaper/20240708/ARVR-innovations-Transforming-healthcare-through-advanced-technologies.aspx"
            />
            <CardItem
              src="images/article2.png"
              text="60 years in the making: Nanoparticles revolutionize nucleotide delivery"
              label="Medicine"
              external={true}
              path="https://www.news-medical.net/news/20240710/60-years-in-the-making-Nanoparticles-revolutionize-nucleotide-delivery.aspx"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/article3.png"
              text="Symptoms and signs of Diabetes"
              label="Disease"
              external={true}
              path="https://www.health.harvard.edu/topics/diabetes"
            />
            <CardItem
              src="images/article4.png"
              text="Everything you need to know about stroke"
              label="Disease"
              external={true}
              path="https://www.medicalnewstoday.com/articles/7624#definition"
            />
            <CardItem
              src="images/article5.png"
              text="Everything you need to know about hypertension (high blood pressure)"
              label="Health"
              external={true}
              path="https://www.medicalnewstoday.com/articles/150109"
            />
            <CardItem
              src="images/article6.png"
              text="Cough and cold medications: Use them safely"
              label="Health"
              external={true}
              path="https://www.medicalnewstoday.com/articles/16181"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
