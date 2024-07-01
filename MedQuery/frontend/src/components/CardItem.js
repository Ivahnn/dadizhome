import React from 'react';
import './CardItem.css';
import { Link } from 'react-router-dom';

function CardItem({ external, path, label, src, text }) {
  const ItemComponent = external ? (
    <a className="cards__item__link" href={path} target="_blank">
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

  return (
    <li className="cards__item">
      {ItemComponent}
    </li>
  );
}

function Cards() {
  const articles = [
    {
      src: 'images/article1.jpg',
      text: 'Coronavirus disease (COVID-19) pandemic',
      label: 'Medicine',
      external: true,
      path: 'https://www.who.int/europe/emergencies/situations/covid-19'
    },
    {
      src: 'images/article2.jpg',
      text: 'What is Modern Medicine?',
      label: 'Medicine',
      external: true,
      path: 'https://www.medicalnewstoday.com/articles/323538?fbclid=IwAR01LhmYwYZdUywJ4f7yVv8uG84HlIYCeWdqLpo8HMd3hPjb47-URQ3cW8c#infectious-diseases'
    },
    {
      src: 'images/oste.jpg',
      text: 'Symptoms and signs of Osteoporosis',
      label: 'Disease',
      external: true,
      path: 'https://www.mayoclinic.org/diseases-conditions/osteoarthritis/symptoms-causes/syc-20351925'
    },
    {
      src: 'images/breast.jpg',
      text: 'Early Indicators and Symptoms of Breast Cancer: Preventative Measures',
      label: 'Disease',
      external: true,
      path: 'https://www.who.int/news-room/fact-sheets/detail/breast-cancer'
    },
    {
      src: 'images/PREGNANCY.jpg',
      text: 'Promoting Optimal Health and Wellness during Pregnancy: A Comprehensive Guide to Supporting a Healthy Pregnancy Journey',
      label: 'Health',
      external: true,
      path: 'https://www.who.int/activities/promoting-healthy-pregnancy'
    },
    {
      src: 'images/heat.jpg',
      text: 'Mitigating the Risk of Heat-Related Illness: Recognizing Symptoms, Preventive Measures, and Treatment Options',
      label: 'Health',
      external: true,
      path: 'https://www.mayoclinic.org/diseases-conditions/heat-stroke/symptoms-causes/syc-20353581'
    }
  ];

  // Function to chunk the articles array into groups of 2
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  // Chunk the articles array into pairs
  const chunkedArticles = chunkArray(articles, 2);

  return (
    <div className="cardsarticle">
      <h1>LATEST HEALTH ARTICLES</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {chunkedArticles.map((chunk, index) => (
            <ul key={index} className="cards__items">
              {chunk.map((article, idx) => (
                <CardItem key={idx} {...article} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
