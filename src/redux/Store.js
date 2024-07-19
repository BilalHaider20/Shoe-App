import { configureStore } from '@reduxjs/toolkit';
import Cartreducer from './Reducer';

const store = configureStore({
  reducer: Cartreducer
});

console.log(store.getState());

export default store;
