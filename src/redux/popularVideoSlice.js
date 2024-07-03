import { createSlice } from "@reduxjs/toolkit"


const popularVideoSlice = createSlice({
    name: "popularVideoSlice",

    initialState: {
        popularVideos: [],
        filteredPopularVideos: []
    },

    reducers: {
        setPopularVideo: (state, action) => state.popularVideos.push(action.payload),
        setFilteredPopularVideo: (state, action) => state.popularVideos.push(action.payload)
    },
})

export const {setPopularVideo, setFilteredPopularVideo} = popularVideoSlice.actions;

export default popularVideoSlice.reducer;