import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './reducers/flightReducer';

const store = configureStore({
    reducer: {
        flights: flightReducer
    }
});

export default store;
