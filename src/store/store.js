import { configureStore } from '@reduxjs/toolkit';
import listReadingReducer from '../Reducers/listReadingSlice.js';

export const store = configureStore({
  reducer: {
        listReadingBooks:listReadingReducer
  },
})