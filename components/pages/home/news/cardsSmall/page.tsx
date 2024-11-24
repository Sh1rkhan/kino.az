import React from "react";
import cards from "@/public/db/cards";
import SmallContainer from "../cardsContainer/smallContainer";

const SmallCards = ({ startNumber, endNumber }) => {
  return (
    <div>
      {cards
        .slice(startNumber, endNumber)
        .map(({ id, img, category, title, date, author }) => (
          <SmallContainer
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

export default SmallCards;
