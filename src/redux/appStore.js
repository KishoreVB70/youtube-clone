import { configureStore } from "@reduxjs/toolkit";
import popularVideoSlice from "./popularVideoSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer: {
        popularVideoSlice: popularVideoSlice,
        searchSlice: searchSlice
    }
})

export default appStore;