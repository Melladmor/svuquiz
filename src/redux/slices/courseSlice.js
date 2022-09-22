import { createSlice } from "@reduxjs/toolkit";


const dataCourse = localStorage.getItem('dataCourse')
const courseSlice = createSlice({
    name:'courseSlice',
    initialState:{
        course:dataCourse?JSON.parse(dataCourse):[],
        loadingCourse:null
    },
    reducers:{
        setlodaing:(state)=>{
            state.loadingCourse =true
        },
        setCourse:(state,action)=>{
            state.course =action.payload;
            localStorage.setItem('dataCourse',JSON.stringify(action.payload));
            state.loadingCourse =false
        },
        setError:(state)=>{
            state.loadingCourse = false
        }
    }
})

export const {setCourse,setlodaing ,setError } = courseSlice.actions

export default courseSlice.reducer