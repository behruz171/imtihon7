import { configureStore } from "@reduxjs/toolkit";
import{Search_input} from '../search'

const store = configureStore({
    reducer: {
        data : Search_input
    }
})

export {store}