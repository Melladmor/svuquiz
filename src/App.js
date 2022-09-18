import React,{useEffect} from 'react';
import './App.css';
// import {Form , FormGroup ,Label,Input ,Spinner} from 'reactstrap'
import { useDispatch } from 'react-redux';
import { fetchSpec } from './redux/slices/specSlice';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import FormSelectQuiz from './component/FormSelectQuiz';
import Quiz from './component/Quiz';
import LOGO from './assets/images/logo.png'
function App() {

  const disaptch = useDispatch();
  useEffect(()=>{
    disaptch(fetchSpec())
  })






  return (
    <div className="App">
        <div className='app__content'>
            <div className='logo__div'>
              <img src={LOGO} alt='logo.png'/>
            </div>

            

            <div className='quizContent'>
              <Router>
                <Routes>
                  <Route path='/svuquiz' element={<FormSelectQuiz/>}/>
                  <Route path='svuquiz/quiz' element={<Quiz/>}/>

                </Routes>
              </Router>
            </div>
        </div>
      
    </div>
  );
}

export default App;
