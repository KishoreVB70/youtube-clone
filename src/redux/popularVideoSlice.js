import { createSlice } from "@reduxjs/toolkit"


const popularVideoSlice = createSlice({
    name: "popularVideoSlice",

    initialState: {
        popularVideos: [],
        filteredPopularVideos: []
    },

    reducers: {
        setPopularVideo: (state, action) => {
            state.popularVideos = action.payload;
        },  
        setFilteredPopularVideo: (state, action) => {
            state.filteredPopularVideos = action.payload;
        } 
    },
})

export const {setPopularVideo, setFilteredPopularVideo} = popularVideoSlice.actions;

export default popularVideoSlice.reducer;