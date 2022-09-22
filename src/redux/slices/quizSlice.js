import { createSlice } from "@reduxjs/toolkit";

const quizContent = localStorage.getItem('quiz');
const specChoise = localStorage.getItem('specChoise');
const courseChoise = localStorage.getItem('courseChoise');




const quizSlice = createSlice({
    name:"quizSlice",
    initialState:{
        quiz:quizContent?JSON.parse(quizContent):[],
        specChoise:specChoise?JSON.parse(specChoise):'',
        courseChoise:courseChoise?JSON.parse(courseChoise):'',
        mark:""
    },
    reducers:{
        setQuiz:(state,action)=>{
            state.quiz = action.payload
            localStorage.setItem('quiz',JSON.stringify(action.payload));

        },
        handleSpecChoise:(state,action)=>{
            state.specChoise = action.payload
            localStorage.setItem('specChoise',JSON.stringify(action.payload));
        },
        handleCourseChoise:(state,action)=>{
            state.courseChoise = action.payload
            localStorage.setItem('courseChoise',JSON.stringify(action.payload));

        }
    }


})

export const {setQuiz,handleSpecChoise,handleCourseChoise } = quizSlice.actions

export default quizSlice.reducer