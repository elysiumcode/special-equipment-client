import {configureStore, combineReducers} from "@reduxjs/toolkit";
import user from './reducers/userReducer'
import orders from './reducers/ordersReducer'

const rootReducer = combineReducers({
    user,
    orders
})

const store = configureStore({
    reducer: rootReducer
})

export default store
