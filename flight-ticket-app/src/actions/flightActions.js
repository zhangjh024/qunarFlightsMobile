import { createAsyncThunk } from '@reduxjs/toolkit';

// Fetch all flights for a specific date
export const fetchFlights = createAsyncThunk(
    'flights/fetchFlights',
    async (date, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3011/flights?date=${date || new Date().toISOString().split('T')[0]}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.toString());
        }
    }
);


