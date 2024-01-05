import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://lawyerappwebapi.azurewebsites.net';

/**
 * POST @ /api/Offers/Create
 * @param {Object} offerData - The data for creating a new offer
 */
export const addOffers = createAsyncThunk('api/Offers/Create', async (offerData, thunkAPI) => {
    try {
        const { data } = await axios.post('/api/Offers/Create', offerData);
        console.log('created offer:', data);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

/**
 * POST @ /api/Offers/Update
 * @param {Object} offerData - The data for updating an existing offer
 */
export const updateOffers = createAsyncThunk('api/Offers/Update', async (offerData, thunkAPI) => {
    try {
        const { data } = await axios.put('/api/Offers/Update', offerData);
        console.log('update offer:', data);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});