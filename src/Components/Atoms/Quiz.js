import React, {useState} from 'react'
import questions from './QuizData'
import './Quiz.css'
import QuizResult from './QuizResult'
// import {useNavigate } from "react-router-dom"
// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { NativeRouter } from "react-router-native";
function Quiz() {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[score, setScore] = useState(0);
    const[correctAns, setCorrectAns] = useState(0);
    const[showResult, setShowResult] = useState(false);
    const[clicked , setClicked] = useState(false)
    // const navigate = useNavigate()
    const handleAnswerOption = (isCorrect) => {
        if(isCorrect){
            setScore(score+2)
            setCorrectAns(correctAns + 1);
        }
        // setClicked(true)
    };
    const handleNextOption = () => {
        const nextquestion = currentQuestion + 1
        if(nextquestion < questions.length){
            setCurrentQuestion(nextquestion)
        }else{
            setShowResult(true)

        }
     
    };
    const handlePlayAgain = () => {
        setCurrentQuestion(0)
        setScore(0);
        setCorrectAns(0);
        setShowResult(false);
    }
  return (
    <>
      <div className='app'>
      {showResult ? (<QuizResult score={score}
       correctAns={correctAns}  
       handlePlayAgain = {handlePlayAgain} 
       />
       ) : (  
        <>
      <div className='question-section'>
      <h5>Score:{score}</h5>
      <div className='question-counter'>
        <span>Question {currentQuestion + 1} to {questions.length}</span>
      </div>
      <div className='question-text'>
        {questions[currentQuestion].questionText}
      </div>
      </div>
      <div className='answer-section'>
      {questions[currentQuestion].answerOptions.map((ans,index) => {
return (
    <button 

    className={`button ${clicked & ans.isCorrect ? "correct":"button"}`}
    key={index} 
    onClick={() => handleAnswerOption(ans.isCorrect)}>
    {ans.answerText}
    </button> 
    );
      })}
        <div className='actions'>
        <button onClick={handlePlayAgain}>Quit</button>
        <button  onClick={handleNextOption}>Next</button>
        </div>
        {/* {questions === questions.length ? ( <div> <button onClick={() => navigate('./QuizResult')}>Submit</button></div>) : (
          <div>
          <button  onClick={handleNextOption}>Next</button>
          </div>
        )} */}

       
       

 
      </div> 
      </>
      )}
 
      </div>
    </>
  );
};

export default Quiz
