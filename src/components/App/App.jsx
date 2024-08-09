import { useState, useEffect } from 'react';

import './App.module.css';
import MyButton from '../MyButton/MyButton';
import List from '../List/List';

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
   const clNameUL = () =>{
    const clNameUL = () => total ? 'On' : 'Off';
   }

  return (
    <>
      <div>
        <MyButton onClick={onGood} DesBut='Good'/>
        <MyButton onClick={onNeutral} DesBut='Neutral'/>
        <MyButton onClick={onBad} DesBut='Bad'/>
        <MyButton onClick={onReset} DesBut='Reset'/>
      </div>
      <div>
        <List className={clNameUL} good={good} neutral={neutral} bad={bad} total={total} positive={positive} />
      </div>
    </>
  );
}

export default App;
