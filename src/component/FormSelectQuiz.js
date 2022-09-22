import React,{useState ,useEffect} from 'react'
import {useSelector} from 'react-redux'
import Loading from './Loading';
import { useDispatch } from 'react-redux';
import { setCourse } from '../redux/slices/courseSlice';
import { setQuizCourse } from '../redux/slices/quizCourseSlice';
import { setQuiz ,handleSpecChoise,handleCourseChoise} from '../redux/slices/quizSlice';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const FormSelectQuiz = () => {
    
    const {spec ,loading } =useSelector(state=>state.specSlice);
    const {course} =useSelector(state=>state.courseSlice);

    const {quizCourse} =useSelector(state=>state.quizCourseSlice);


    
    

    const [specChoise , setSpecChoise] = useState();
    const [courseChoise , setCourseChoise] = useState();
    const [quizCourseChoise,setQuizCourseChoise] =useState();

    const navigate = useNavigate();


    const dispatch = useDispatch()







    useEffect(()=>{
        const fetchCourse = async()=>{
            try {
                const resCourse = await axios.get(`https://graduation-site.000webhostapp.com/api/GetSub/${specChoise}`);
                const dataCourse =resCourse.data.data;
                dispatch(setCourse(dataCourse||[]))
                
            } catch (error) {
                console.log(error.resCourse)
            }
        }

        const fetchQuizCourse =async()=>{
            try {
                const resCourse = await axios.get(`https://graduation-site.000webhostapp.com/api/GetQuiz/${courseChoise}`);
                const dataQuizCourse =resCourse.data.data;

                dispatch(setQuizCourse(dataQuizCourse||[]))
                
            } catch (error) {
                console.log(error.resCourse)
            }
        }


        const fetchQuiz =async()=>{
        try {
        const resQuiz = await axios.get(`https://graduation-site.000webhostapp.com/api/GetQuestions/${quizCourseChoise}`);
        const dataQuiz =resQuiz.data;
        dispatch(setQuiz(dataQuiz.data||[]))
        } catch (error) {
        console.log(error)
        }
        }
    

        fetchCourse();
        fetchQuizCourse();
        fetchQuiz();
    },[dispatch,specChoise,courseChoise,quizCourseChoise])


    const handleClick = ()=>{
        if(specChoise.length !==0 && courseChoise.length !==0 && quizCourseChoise.length !==0){
            navigate('/quiz')
        }else{
            navigate('/svuquiz')
        }

    }


    
    return (
        <div>
            {loading?<Loading/>:
            <div dir='rtl' className='form__select__div'>
                <select className="form-select" aria-label="Default select example"
                onChange={(e)=>{
                    setSpecChoise(e.target.value)
                    dispatch(handleSpecChoise(e.target.value))

                    }}
                >
                <option>الاختصاص</option>
                {spec.map((el)=>{
                    return(
                        <option key={el.id} value={el.id}>
                        {el.name}
                        </option>
                    )
                })}
                </select>

                <select className="form-select" aria-label="Default select example"
                onChange={(e)=>{setCourseChoise(e.target.value)}}
                >
                <option >المادة</option>
                {course.map((el)=>{
                    return(
                        <option key={el.id} value={el.id}>
                        {el.name}
                        </option>
                    )
                })}
                </select>

                <select className="form-select" aria-label="Default select example"
                onChange={(e)=>{
                    setQuizCourseChoise(e.target.value)
                    dispatch(handleCourseChoise(e.target.value))
                    }
                    }
                >
                <option >الكويز</option>
                {quizCourse.map((el)=>{
    
                    return(
                        <option key={el.id} value={el.id}>
                        {el.name}
                        </option>
                    )
                })}
                </select>

                <button type="button" className="btn btn-dark"
                onClick={handleClick}
                >أبدأ الاختبار</button>

            </div>
            }
        </div>
    )
}

export default FormSelectQuiz
