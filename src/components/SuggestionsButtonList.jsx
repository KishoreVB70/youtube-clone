import React from 'react'
const cards = [1,2,3,4,5,6,7,8, 9, 10, 11 , 12, 13, 14, 15];

function SuggestionsButtonList() {
  return (
    <div className='flex flex-row h-12 fixed w-full pt-2 my-2 bg-white' >
        {cards.map((itm, ind) =>{
          return (
            <button key={ind} className='flex justify-center items-center font-semibold mx-3 px-2 py-1 bg-gray-100 hover:bg-gray-200 h-8 rounded-md border-gray-200 border' >
              Gaming
            </button>
          )
        })}
    </div>
  )
}

export default SuggestionsButtonList