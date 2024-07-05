import { createSlice } from "@reduxjs/toolkit";

const liveChatMessageSlice = createSlice({
    name: "liveChatMessageSlice",
    initialState: {
        liveChatMessages: []
    },
    reducers: {
        addToLiveChat: (state, action) => {
            state.liveChatMessages.splice(20,1);
            state.liveChatMessages.unshift(action.payload); 
        }
    }
})

export const {addToLiveChat} = liveChatMessageSlice.actions;
export default liveChatMessageSlice.reducer;