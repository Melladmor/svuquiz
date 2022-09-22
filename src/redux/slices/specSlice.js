import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const specUrl ='https://graduation-site.000webhostapp.com/api/GetSpec';
const specData = localStorage.getItem('spec');

export const fetchSpec = createAsyncThunk('',async(_,thunkApi)=>{
    try {
        const resSpec = await axios.get(specUrl);
        localStorage.setItem('spec',JSON.stringify(resSpec.data.data))
        return resSpec.data.data;
    } catch (error) {
        return thunkApi.rejectWithValue('somting went rong')
    }
})

const specSlice = createSlice({
    name:"specSlice",

    initialState:{
        spec:specData?JSON.parse(specData):[],
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