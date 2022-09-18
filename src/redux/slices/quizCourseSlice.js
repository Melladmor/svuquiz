import { createSlice } from "@reduxjs/toolkit";



const quizCourseSlice = createSlice({
    name:"quizCourseSlice",
    initialState:{
        quizCourse:[]
    }
    ,
    reducers:{
        setQuizCourse:(state,action)=>{
            state.quizCourse = action.payload
        }
    }
})

export const {setQuizCourse} = quizCourseSlice.actions

export default quizCourseSlice.reducer