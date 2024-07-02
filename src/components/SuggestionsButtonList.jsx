import React from 'react'
const cards = [1,2,3,4,5,6,7,8, 9, 10, 11 , 12, 13, 14, 15, 16, 17, 18];

function SuggestionsButtonList() {
  return (
    <div className='flex flex-row h-9 my-2' >
        {cards.map(itm => 
          <button className='font-semibold mx-3 px-2 py-1 bg-gray-100 hover:bg-gray-200 h-full rounded-md border-gray-200 border' >
            Gaming
          </button>
        )}
    </div>
  )
}

export default SuggestionsButtonList