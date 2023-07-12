import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slice/filterSlice';
import resultReducer from './slice/resultSlice';

export const store = configureStore({
  reducer: {
    results: resultReducer,
    filters: filterReducer,
  },
});
