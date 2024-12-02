
import SmallCards from "@/components/pages/home/news/cardsSmall/page";
import React from "react";

const News = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="container flex justify-center mt-3 m-auto">
          <p className=" border-l-2 border-dashed border-spacing-2 border-foreground h-end ml-20 mr-9"></p>
          <SmallCards />
          <p className=" border-l-2 border-dashed border-spacing-2 border-foreground h-end ml-20 mr-9"></p>
        </div>
      </div>
    </div>
  );
};

export default News;
