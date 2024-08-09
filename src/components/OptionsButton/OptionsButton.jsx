import css from './OptionsButton.module.css';

const OptionsButton = ({classBut,DesBut,onClick}) => {

       

 return (   
 <button onClick={onClick}
    className={classBut}> 
    {DesBut}
    </button>)    
};

export default OptionsButton;