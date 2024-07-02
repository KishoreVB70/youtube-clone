import React from 'react'
const cards = [1,2,3,4,5,6,7,8];

function SuggestionsButtonList() {
  return (
    <div className='flex flex-row h-16' >
        {cards.map(itm => 
          <button>Gaming</button>
        )}
    </div>
  )
}

export default SuggestionsButtonList