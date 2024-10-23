import React from 'react'

const Button=({onClick })=> {
  return (
   // components/Button.js
  
    <button
      onClick={onClick}
      className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
    >
    </button>




  )
}

export default Button