import { useState, useEffect } from 'react';

import './App.module.css';
import Feedback from '../Feedback/Feedback';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
function App() {
  const [feedbackType,setFeedbackType]=useState({good:0,neutral:0,bad:0,})
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const onLeaveFeedback = (option) => {
    setFeedbackType({
      ...feedbackType,
      [option]: feedbackType[option] + 1
    });
  };

  useEffect(() => {
    const newTotal = feedbackType.good + feedbackType.neutral + feedbackType.bad;
    const newPositive = newTotal ? ((feedbackType.good / newTotal) * 100).toFixed(2) : 0;
    setTotal(newTotal);
    setPositive(newPositive);
  }, [feedbackType]);

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
