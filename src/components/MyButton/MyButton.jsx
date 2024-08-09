import css from './MyButton.module.css';

const MyButton = ({classBut,DesBut,onClick,total}) => {

        let buttonClass;
        
        if (DesBut === 'Reset') {
          buttonClass = total > 0 ? css.on : css.off;
        } else {
          buttonClass = css.default; 
        } 

 return (   
 <button onClick={onClick}
    className={buttonClass}> 
    {DesBut}
    </button>)    
};

export default MyButton;