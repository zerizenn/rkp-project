import { createSlice } from '@reduxjs/toolkit'
import {
  createVisit,
  deleteVisit,
  showVisits,
} from '../actions/visitsActions'

const visitsSlice = createSlice({
  name: 'visits',
  initialState: {
    visits: [],
    loading: false,
    loaded: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showVisits.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(showVisits.fulfilled, (state, action) => {
        state.visits = action.payload
        state.loading = false
        state.loaded = true
      })
      .addCase(showVisits.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Неизвестная ошибка'
      })
      .addCase(createVisit.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createVisit.fulfilled, (state, action) => {
        const nextId =
          Math.max(0, ...state.visits.map((visit) => visit.id)) + 1
        state.visits.push({ id: nextId, ...action.payload })
        state.loading = false
      })
      .addCase(createVisit.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Неизвестная ошибка'
      })
      .addCase(deleteVisit.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteVisit.fulfilled, (state, action) => {
        state.visits = state.visits.filter(
          (visit) => visit.id !== action.payload,
        )
        state.loading = false
      })
      .addCase(deleteVisit.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Неизвестная ошибка'
      })
  },
})

export default visitsSlice.reducer
