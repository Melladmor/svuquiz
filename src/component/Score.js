import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

const Score = ({score}) => {
    const {quiz} =useSelector(state=>state.quizSlice);
    const navigate = useNavigate()
    return (
    <div className='score__content'>
        <h4>{`لقد قمت بالاجابة عن ${score} من الاسئلة بشكل صحيح من اصل ${quiz.length}`}</h4>
        <button className='btn'
        onClick={
            ()=>navigate('/svuquiz')
        }>إعادة الاختبار</button>
    </div>
    )
}

export default Score
