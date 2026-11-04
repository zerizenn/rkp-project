import { createSlice } from '@reduxjs/toolkit'
import { showDoctors } from '../actions/doctorsActions'

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctors: [],
    loading: false,
    loaded: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showDoctors.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(showDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload
        state.loading = false
        state.loaded = true
      })
      .addCase(showDoctors.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Неизвестная ошибка'
      })
  },
})

export default doctorsSlice.reducer
