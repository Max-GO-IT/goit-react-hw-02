import './MyButton.module.css';

const MyButton = ({classBut,DesBut,onClick}) => {
 return (   
 <button onClick={onClick}
    className={classBut}> 
    {DesBut}
    </button>)    
};

export default MyButton;