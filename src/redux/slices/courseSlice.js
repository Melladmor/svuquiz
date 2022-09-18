import { createSlice } from "@reduxjs/toolkit";



const courseSlice = createSlice({
    name:'courseSlice',
    initialState:{
        course:[],
        loadingCourse:null
    },
    reducers:{
        setlodaing:(state)=>{
            state.loadingCourse =true
        },
        setCourse:(state,action)=>{
            state.course =action.payload;
            state.loadingCourse =false
        },
        setError:(state)=>{
            state.loadingCourse = false
        }
    }
})

export const {setCourse,setlodaing ,setError } = courseSlice.actions

export default courseSlice.reducer