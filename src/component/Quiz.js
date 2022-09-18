import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import Loading from './Loading';
import Qustion from './Qustion';
// import {useNavigate} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Quiz = () => {
    const {quiz ,specChoise ,courseChoise} =useSelector(state=>state.quizSlice);
    const {spec } =useSelector(state=>state.specSlice);
    const {quizCourse} =useSelector(state=>state.quizCourseSlice);

    const [score , setScore] = useState(0);

    const [currentQustion , setQurrentQustion] = useState(0)

    const [options ,setOptions] =useState()


    const filterSpecialization = spec.find(el => {
        return el.id === Number(specChoise)
    })

    const filterCourse = quizCourse.find(el => {
        return el.id === Number(courseChoise)
    })

    useEffect(()=>{
        setOptions(quiz.length!==0? 
            handleShuffle([
                quiz[currentQustion]?.t_answer,
                quiz[currentQustion]?.one_answer,
                quiz[currentQustion]?.two_answer,
                quiz[currentQustion]?.three_answer,


            ])
            : quiz)
    },[quiz,setOptions,currentQustion])


    


    



    

    const handleShuffle =(option)=>{
        return option.sort(()=>Math.random()-0.5)
    }



return (
    <div className='quiz'>
        <div className='headerTitle'>
            <h4>{`الاختصاص: ${filterSpecialization.name}`}</h4>
            <h4>{`المادة: ${filterCourse.name}`}</h4>
            <h4>{`الأجوبة الصحيحة: ${score}`}</h4>
        </div>

        <div className='quiz__qustion__content'>

            {quiz.length === 0?
            <div className='div__noquiz'>
                <p>لا يوجد اختبارات لهذا الاختصاص الأن</p>
            </div>:
            <div className='qustion__content'>
                <div className='qustion__and__option__Content'>
                <Qustion 
                    currentQustion={currentQustion}
                    setQurrentQustion={setQurrentQustion}
                    options={options}
                    correct={quiz[currentQustion]?.t_answer}
                    score={score}
                    setScore={setScore}
                />
                </div>
            </div>
            }
        </div>
    </div>
    )
}

export default Quiz
