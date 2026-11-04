import { createAsyncThunk } from '@reduxjs/toolkit'
import doctors from '../../doctors'

export const showDoctors = createAsyncThunk(
  'doctors/showDoctors',
  async () => doctors,
)
