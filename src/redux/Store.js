import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./Slices/CartSlice"
import Menucheck from './Slices/Menucheck'
import userSlice from './Slices/Singupslice'
import Olduser from './Slices/LoginSlice'
import WishSlice from './Slices/WishlistSlice'
import Username from './Slices/Username'



export const Store = configureStore({
    reducer:{
        cart: CartSlice,
        sidebar: Menucheck,
        user: userSlice,
        olduser: Olduser,
        wish: WishSlice,
        username: Username

    }
})
