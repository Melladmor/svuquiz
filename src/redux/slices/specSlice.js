import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const specUrl ='https://graduation-site.000webhostapp.com/api/GetSpec'

export const fetchSpec = createAsyncThunk('',async(_,thunkApi)=>{
    try {
        const resSpec = await axios.get(specUrl);
        return resSpec.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue('somting went rong')
    }
})

const specSlice = createSlice({
    name:"specSlice",

    initialState:{
        spec:[],
        loading:null,
    },


    extraReducers:{
        [fetchSpec.pending]: (state)=>{
            state.loading = true
        },
        [fetchSpec.fulfilled]:(state, action)=>{
            state.spec = action.payload;
            state.loading = false;
        },
        [fetchSpec.rejected]:(state)=>{
            state.loading = true;
        }
    }


})

export default specSlice.reducer