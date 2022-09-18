import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

const Score = ({score}) => {
    const {quiz ,specChoise ,courseChoise} =useSelector(state=>state.quizSlice);
    const navigate = useNavigate()
    return (
    <div className='score__content'
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    >
        <h4>{`لقد قمت بالاجابة عن ${score} من الاسئلة بشكل صحيح من اصل ${quiz.length}`}</h4>
        <button className='btn'
        onClick={
            ()=>navigate('/svuquiz')
        }>إعادة الاختبار</button>
    </div>
    )
}

export default Score
