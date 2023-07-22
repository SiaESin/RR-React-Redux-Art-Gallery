import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'
import { logger } from './features/middleware'  //why is logger in {} when dataReducer is not

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})