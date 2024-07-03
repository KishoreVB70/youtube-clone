import { configureStore } from "@reduxjs/toolkit";
import popularVideoSlice from "./popularVideoSlice";

const appStore = configureStore({
    reducer: {
        popularVideoSlice: popularVideoSlice,
    }
})

export default appStore;