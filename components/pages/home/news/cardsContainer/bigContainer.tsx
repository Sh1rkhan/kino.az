import React from "react";

interface CardContainerProps {
  img: string;
  category: string;
  title: string;
  date: string;
  author: string;
}
const CardContainer: React.FC<CardContainerProps> = ({
  img,
  // category,
  title,
  date,
  author,
}) => {
  return (
    <div className="grid grid-cols-1 mb-10 text-white mx-10 w-full">
      <div className="rounded-3xl grid grid-cols-1 justify-center">
        <div className="flex justify-center">
        
          <div
            className="w-full h-60 rounded-3xl bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
        {/* <img src={img} className="rounded-3xl mb-1" /> */}
        
        <p className="my-5 text-xl font-bold text-center">{title}</p>
        <p className="my-1 border-t-2 border-dashed border-foreground"></p>
        <p className="text-center">
          {date} • {author}
        </p>
      </div>
    </div>
  );
};

export default CardContainer;

// div className="grid grid-cols-1 mb-10">
//       <div className="w-full rounded-3xl grid grid-cols-1 text-center">
