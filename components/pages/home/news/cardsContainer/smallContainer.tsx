import Image from 'next/image';
import React from 'react'

interface SmallContainerProps {
  img: string;
  category: string;
  title: string;
  date: string;
  author: string;
}
const SmallContainer: React.FC<SmallContainerProps> = ({
  img,
  category,
  title,
  date,
  author,
}) => {
  return (
    <>
      <div className="gap-3 mb-4 w-full">
        <div className="rounded-3xl flex gap-4 bg-cover bg-no-repeat">
          <div
            className="w-40 h-40 rounded-3xl bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
      
          <div className="flex flex-col w-3/5 items-start">
            <span className="bg-violet-200 rounded-3xl mb-4 py-1 px-2 inline-block">
              {category}
            </span>
            <p className="text-xl font-bold text-white">{title}</p>
            <p className="my-3 border-t-2 border-dashed border-foreground w-full"></p>
            <p className="text-base">
              {date} • {author}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallContainer


{/* <Image src={img} alt='news' layout='responsive' width={176} height={176}/> */}