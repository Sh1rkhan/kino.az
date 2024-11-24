import React from 'react'

const Title = ({text}) => {
  return (
    <div className="pt-10 mb-5 mx-20 ">
      <p className="text-white text-3xl font-bold">{text}</p>
      {/* <div className="container flex justify-between ">
        <div className="flex gap-3 mt-1 "></div>
      </div> */}
    </div>
  );
}

export default Title