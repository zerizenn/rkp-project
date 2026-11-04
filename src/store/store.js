import { configureStore } from '@reduxjs/toolkit'
import doctorsReducer from './slices/doctorsSlice'
import visitsReducer from './slices/visitsSlice'

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    visits: visitsReducer,
  },
})

export default store