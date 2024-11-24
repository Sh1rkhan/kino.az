import React from "react";
import CardContainer from "../cardsContainer/bigContainer";
import cards from "@/public/db/cards";



const BigCards = ({startNumber, endNumber}) => {
 
  return (
    <div>
      {cards.slice(startNumber, endNumber).map(({ id, img, category, title, date, author }) => (
        <CardContainer
          key={id}
          img={img}
          category={category}
          title={title}
          date={date}
          author={author}
        />
      ))}
    </div>
  );
};

export default BigCards;
