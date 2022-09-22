import { createSlice } from "@reduxjs/toolkit";

const dataQuizCourse = localStorage.getItem('dataQuizCourse');

const quizCourseSlice = createSlice({
    name:"quizCourseSlice",
    initialState:{
        quizCourse:dataQuizCourse?JSON.parse(dataQuizCourse):[]
    }
    ,
    reducers:{
        setQuizCourse:(state,action)=>{
            state.quizCourse = action.payload
            localStorage.setItem('dataQuizCourse',JSON.stringify(action.payload));

        }
    }
})

export const {setQuizCourse} = quizCourseSlice.actions

export default quizCourseSlice.reducer