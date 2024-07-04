import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        searchResults: {
            
        }
    },
    reducers: {
        "addToSearch": (state, action) => {
            state.searchResults = { ...state, ...action.payload};
            state.searchResults = Object.assign(state.searchResults, action.payload);
        },

        "clearSearchCache": (state) => {
            state.searchResults.length = 0;
        }
    }
})

export const {addToSearch, clearSearchCache} = searchSlice.actions
export default searchSlice.reducer