import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {apiUrl} from '../../consts'

const loginThunk = createAsyncThunk(
    'user/login',
    async (user) => {
        console.log(user.email, user.password);
        const res = await axios
            .post(`${apiUrl}auth/login`, {
                email: user.email, 
                password: user.password
            })
            .then(({data}) => {
                console.log(data)
                localStorage.setItem('token', data.token)
                return data.user
            })
        return res
    }
)

const regThunk = createAsyncThunk(
    'user/registration',
    async (user) => {
        console.log(user.email, user.password);
        const res = await axios
            .post(`${apiUrl}auth/registration`, {
                email: user.email, 
                password: user.password
            })
            .then(() => {
                return axios
                .post(`${apiUrl}auth/login`, {
                    email: user.email, 
                    password: user.password
                })
                .then(({data}) => {
                    localStorage.setItem('token', data.token)
                    return data.user
                })
            })
        return res
    }
)

const authThunk = createAsyncThunk(
    'user/auth',
    async () => {
        console.log('auth')
        const res = await axios
            .get(`${apiUrl}auth/auth`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(({data}) => {
                console.log(data)
                localStorage.setItem('token', data.token)
                return data.user
            })
        return res
    }
)

const initialState = {
    auth: false,
    user: {}
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            console.log('logged out')
            localStorage.removeItem('token')
            state.auth = false
            state.user = {}
        }
    },
    extraReducers: builder => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.user = action.payload
            state.auth = true
        }),
        builder.addCase(regThunk.fulfilled, (state, action) => {
            state.user = action.payload
            state.auth = true
        }),
        builder.addCase(authThunk.fulfilled, (state, action) => {
            state.user = action.payload
            state.auth = true
        })
    }

})

export const {logout} = userSlice.actions

export {loginThunk, regThunk, authThunk}

export default userSlice.reducer