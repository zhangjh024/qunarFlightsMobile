import { createSlice } from '@reduxjs/toolkit';
import { fetchFlights} from '../actions/flightActions';

const flightSlice = createSlice({
    name: 'flights',
    initialState: {
        loading: false,
        flights: [],
        lowestPrice: null,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlights.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFlights.fulfilled, (state, action) => {
                state.loading = false;
                state.flights = action.payload;
                state.error = '';
            })
            .addCase(fetchFlights.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default flightSlice.reducer;
