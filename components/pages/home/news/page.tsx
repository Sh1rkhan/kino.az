import Title from "@/components/common/Title";
import React from "react";
import BigCards from "./cardsBig/page";
import SmallCards from "./cardsSmall/page";

const News = () => {
  return (
    <div className="">
     
      <Title text={"Son xəbərlər"}/>

      <div className="container flex justify-center mt-3">
        <BigCards startNumber={0} endNumber={1} />
        <p className=" border-l-2 border-dashed border-spacing-2 border-foreground h-end ml-20 mr-9"></p>
        <SmallCards startNumber={1} endNumber={4} />
      </div>
    </div>
  );
};

export default News;
