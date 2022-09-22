import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import Loading from './Loading';
import {useNavigate} from 'react-router-dom'
import Score from './Score';
const Qustion = ({currentQustion,setQurrentQustion ,options,correct,score,setScore}) => {
    const {quiz} =useSelector(state=>state.quizSlice);

    const [selected ,setSelected] =useState();
    const [error , setError] =useState(false)
    const [endQustion ,setEndQustion] =useState(false)

    const navigate = useNavigate()

    const handleSelect=(el)=>{
        if(selected === el && selected===correct){
            return 'selectRigthChoise'
        }else if(selected ===el && selected!== correct){
            return 'rongAnswer'
        }else if(el === correct){
            return 'selectRigthChoise'
        }
    }

    const handleChek =(el)=>{
        setSelected(el)
        if(el === correct) setScore(score +1);
        setError(false)
    }


    const next =()=>{

        if(currentQustion === quiz.length -1){
            setEndQustion(true)
            localStorage.setItem('cuurentQustion',JSON.stringify(0))

        }else if(currentQustion === quiz.length -1 && !selected){
            setError(true)
        }
        else if(selected){
            setQurrentQustion(currentQustion +1)
            localStorage.setItem('cuurentQustion',JSON.stringify(currentQustion +1))

            setSelected('')
        }else{
            setError(true)
        }



    }

    // console.log("cur", currentQustion, "quiz",quiz.length -1)

    const quit =()=>{
        navigate('/svuquiz')
    }
    return (
        <div>
            {endQustion?<Score score={score}/>:
            <>
            <h5><span>السؤال</span> {currentQustion +1} <span>من</span> {quiz.length}</h5>
            <h6 className='mt-3 mb-5'>{` السؤال: ${quiz[currentQustion]?.quest} ؟`}</h6>
            {error&&<p>قم بأختيار اجابة</p>}
            <div className='options__content' >
                {options?
                options.map((el,idx)=>{
                    return(
                        <button key={idx} 
                        className={`singleOption ${selected && handleSelect(el)}`}
                        disabled={selected}
                        onClick={()=>handleChek(el)}
                        >{el}</button>
                    )
                })
                :<Loading/>}
                <div className='next__quit__div'>
                    <button className='btn next'
                    onClick={next}
                    disabled={endQustion}
                    >السؤال التالي</button>
                    <button className='btn quit'
                    onClick={quit}
                    >
                    خروج
                    </button>
                </div>
            </div>
            </>
            }         
        </div>
    )
}

export default Qustion
