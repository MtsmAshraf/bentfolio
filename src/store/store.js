import {configureStore} from '@reduxjs/toolkit'
import theme from "./theme/themeSlice.js"
const store = configureStore({
    reducer: {
        theme,
    },
})

export default store;