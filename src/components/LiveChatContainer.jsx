import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToLiveChat } from '../redux/liveChatMessageSlice'
import LiveChatMessage from './LiveChatMessage'
import { generateRandomDialogue } from '../utils/helper'


const LiveChatContainer = () => {
    const [liveChatInput, setLiveChatInput] = useState("")
    const livechat = useSelector(store => store.liveChatMessageSlice.liveChatMessages);
    console.log(livechat);
    const dispatch = useDispatch()

    const handleAddMessage = () => {
        if(liveChatInput.length < 1){
            return
        }
        dispatch(addToLiveChat({name: "User", message: liveChatInput}));
        setLiveChatInput("");
    }

    useEffect(() => {
        const timeInterval = setInterval(() => {
            let randomDialogue = generateRandomDialogue()
            dispatch(addToLiveChat(randomDialogue));
        }, 1000)
        return(() => clearInterval(timeInterval));
    }, [])

  return (
    <div className='flex flex-col h-5/6 items-center w-full p-2 border-b border-black' >
        <h1 className='text-lg font-semibold  border-b border-black' >Live Chat</h1>
        <div className='flex items-center mt-2 h-full w-full overflow-y-scroll flex-col-reverse border-y border-black' >
            <>
                {livechat.length > 0 && livechat.map( (i, ind) => <LiveChatMessage key={ind} message={i} />)}
            </>
        </div>
        <div className='flex flex-row mt-2 w-full justify-center' >
            <input type="text" className='border border-black p-2 h-9 mr-3 w-4/5' value={liveChatInput} onChange={(e => setLiveChatInput(e.target.value))}  placeholder='Add message' />
            <button onClick={handleAddMessage} className='hover:bg-gray-600 hover:text-white h-9 w-14 rounded-md bg-gray-200 hover:rounded-md text-black border border-black ' >Send</button>
        </div>
    </div>
  )
}

export default LiveChatContainer