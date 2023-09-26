import React from "react";
import { useParams } from "react-router-dom";

const articlesData = [
  {
    id: 1,
    title: "Article 1",
    price: 20.0,
    description: "Description de l'article 1",
    image: "article1.jpg",
  },
  {
    id: 2,
    title: "Article 2",
    price: 25.0,
    description: "Description de l'article 2",
    image: "article2.jpg",
  },
];

function Article() {
  const { id } = useParams();
  const article = articlesData.find((item) => item.id === Number(id));

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <div className="article-details">
        <img src={article.image} alt={article.title} />
        <div className="article-info">
          <h2>{article.title}</h2>
          <p>Prix: {article.price} €</p>
          <p>{article.description}</p>
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

export default Article;
