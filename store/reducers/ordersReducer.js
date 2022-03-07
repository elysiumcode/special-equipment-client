import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {apiUrl} from '../../consts'

const addOrderThunk = createAsyncThunk(
    'orders/add',
    async (obj) => {
        const res = await axios
            .post(`${apiUrl}order`,
            {
                name: obj.fullName,
                pay: obj.payWay, 
                description: JSON.stringify(obj.desc),
                phone: obj.phone,
                email: obj.email,
                time: obj.time,
                address: obj.address,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            },)
            .then(({data}) => {
                console.log(data)
                return data
            })
        return res
    }
)

const getUserOrdersThunk = createAsyncThunk(
    'orders/getUser',
    async () => {
        const res = await axios
            .get(`${apiUrl}order/user`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(({data}) => {
                console.log(data)
                return data
            })
        return res
    }
)

const getAllOrdersThunk = createAsyncThunk(
    'orders/getAll',
    async () => {
        const res = await axios
            .get(`${apiUrl}order/all`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(({data}) => {
                console.log(data)
                return data
            })
        return res
    }
)

const initialState = {
    userOrders: [],
    allOrders: []
}


const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addOrderThunk.fulfilled, (state, action) => {
            state.allOrders.push(action.payload)
            state.userOrders.push(action.payload)
        })
        builder.addCase(getUserOrdersThunk.fulfilled, (state, action) => {
            state.userOrders = action.payload
        })
        builder.addCase(getAllOrdersThunk.fulfilled, (state, action) => {
            state.allOrders = action.payload
        })
    }

})

export const {logout} = ordersSlice.actions

export {addOrderThunk, getUserOrdersThunk, getAllOrdersThunk}

export default ordersSlice.reducer