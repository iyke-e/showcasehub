import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    isloading: true
}

const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login: (state, ) => {
            state.isLoggedIn = true,
                state.isloading = false
        },
        loading: (state) => {
            state.isloading = true,
                state.isLoggedIn = false
        }
    }
})


export const { login, loading} = AuthSlice.actions
export default AuthSlice.reducer