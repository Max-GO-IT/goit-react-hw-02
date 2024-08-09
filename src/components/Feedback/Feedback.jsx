import './Feedback.module.css';

const Feedback = ({good,neutral,bad,total,positive,className}) => {
    
   
        return (   
            <ul className={className}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive: {positive}%</li>
            </ul>
            )    

    
 
   };

export default Feedback;