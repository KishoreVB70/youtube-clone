import { configureStore } from "@reduxjs/toolkit";
import popularVideoSlice from "./popularVideoSlice";
import searchSlice from "./searchSlice";
import liveChatMessageSlice from "./liveChatMessageSlice";

const appStore = configureStore({
    reducer: {
        popularVideoSlice: popularVideoSlice,
        searchSlice: searchSlice,
        liveChatMessageSlice: liveChatMessageSlice,
    }
})

export default appStore;