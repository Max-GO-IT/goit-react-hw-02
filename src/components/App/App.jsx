import { useState, useEffect } from 'react';

import './App.module.css';
import Feedback from '../Feedback/Feedback';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    const newTotal = good + neutral + bad;
    const newPositive = newTotal ? (good / newTotal) * 100 : 0;
    setTotal(newTotal);
    setPositive(newPositive);
  }, [good, neutral, bad]);

  const onGood = () => setGood(good + 1);
  const onNeutral = () => setNeutral(neutral + 1);
  const onBad = () => setBad(bad + 1);
  const onReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    
  };
    

  return (
    <>
      <Description/>
      <Options onBad={onBad} onGood={onGood} onNeutral={onNeutral} onReset={onReset} total={total}/>
      { total===0 ? <Notification/> :<Feedback  good={good} neutral={neutral} bad={bad} total={total} positive={positive} /> }
      
    </> 
    
  );
}

export default App;
