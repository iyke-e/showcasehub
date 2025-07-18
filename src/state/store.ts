import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./reduxSlices/AuthSlice"


const store = configureStore({
    reducer: {
        auth: authReducer
    }
})
export default store