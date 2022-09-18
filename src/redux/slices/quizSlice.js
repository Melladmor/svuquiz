import { createSlice } from "@reduxjs/toolkit";


const quizSlice = createSlice({
    name:"quizSlice",
    initialState:{
        quiz:[],
        specChoise:"",
        courseChoise:"",
        mark:""
    },
    reducers:{
        setQuiz:(state,action)=>{
            state.quiz = action.payload
        },
        handleSpecChoise:(state,action)=>{
            state.specChoise = action.payload
        },
        handleCourseChoise:(state,action)=>{
            state.courseChoise = action.payload
        }
    }


})

export const {setQuiz,handleSpecChoise,handleCourseChoise } = quizSlice.actions

export default quizSlice.reducer