import { useState, useEffect } from 'react';

import css from './App.module.css';
import Feedback from '../Feedback/Feedback';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';


function App() {

  const [feedbackType,setFeedbackType]=useState(() =>{
    const savedObject = window.localStorage.getItem("feedbackType");

	
  if (savedObject !== null) {
    return JSON.parse(savedObject);
  }
  return {good:0,neutral:0,bad:0,};

  }) 


  useEffect(() => {
    window.localStorage.setItem("feedbackType", JSON.stringify(feedbackType));
  }, [feedbackType]);



  const onLeaveFeedback = (option) => {
    setFeedbackType({
      ...feedbackType,
      [option]: feedbackType[option] + 1,
    });
  };


    const total = feedbackType.good + feedbackType.neutral + feedbackType.bad;
    const positive = total ? ((feedbackType.good / total) * 100).toFixed(2) : 0;
    
  


  const onGood = () => onLeaveFeedback('good');
  const onNeutral = () => onLeaveFeedback('neutral');
  const onBad = () => onLeaveFeedback('bad');

  
  const onReset = () => {
    setFeedbackType({good:0,neutral:0,bad:0,})
   
  };
    

  return (
    <>
      <Description/>
      <Options onBad={onBad} onGood={onGood} onNeutral={onNeutral} onReset={onReset} total={total}/>
      { total===0 ? <Notification/> :<Feedback  good={feedbackType.good} neutral={feedbackType.neutral} bad={feedbackType.bad} total={total} positive={positive} /> }
      
    </> 
    
  );
}

export default App;
