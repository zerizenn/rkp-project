import { createAsyncThunk } from '@reduxjs/toolkit'

const initialVisits = [
  {
    id: 1,
    petName: 'Барсик',
    species: 'Кот',
    age: '3',
    ownerName: 'Иван Петров',
    ownerPhone: '+375(33)345-60-12',
    doctorName: 'Смирнова А.В.',
  },
  {
    id: 2,
    petName: 'Рекс',
    species: 'Собака',
    age: '5',
    ownerName: 'Мария Орлова',
    ownerPhone: '+375(29)123-45-67',
    doctorName: 'Кузнецов Д.С.',
  },
]

export const showVisits = createAsyncThunk(
  'visits/showVisits',
  async () => initialVisits,
)

export const createVisit = createAsyncThunk(
  'visits/createVisit',
  async (visitData) => visitData,
)

export const deleteVisit = createAsyncThunk(
  'visits/deleteVisit',
  async (visitId) => visitId,
)
