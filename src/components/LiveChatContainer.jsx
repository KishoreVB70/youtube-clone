import React from 'react'
import LiveChatMessage from './LiveChatMessage'



const LiveChatContainer = () => {
    const livechat = [ 
        {
            name: "Kishore",
            message: "Moto rolla king rolla kajflka ukmjer ajksdh  owiuert genhis kahn rolla alsdkf"
        },
        {
            name: "Tanya",
            message: "Sup habibi"
        },
]
  return (
    <div className='flex flex-col items-center border border-black h-5/6 w-full p-2' >
        {livechat.map( (i, ind) => <LiveChatMessage key={ind} message={i} />)}
    </div>
  )
}

export default LiveChatContainer