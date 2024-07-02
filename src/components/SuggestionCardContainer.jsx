import React from 'react'

function SuggestionCardContainer({cards}) {
  return (
    <div className='flex flex-row' >
        {cards.map(itm => <button> itm.name </button>)}
    </div>
  )
}

export default SuggestionCardContainer