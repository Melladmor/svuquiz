import { configureStore } from "@reduxjs/toolkit";
import specSlice from "../slices/specSlice";
import courseSlice from "../slices/courseSlice";
import quizCourseSlice from "../slices/quizCourseSlice";
import quizSlice from "../slices/quizSlice";

const store = configureStore({
    reducer:{
        specSlice:specSlice,
        courseSlice:courseSlice,
        quizCourseSlice:quizCourseSlice,
        quizSlice:quizSlice
    }
})

export default store;