import css from './Options';


import OptionsButton from '../OptionsButton/OptionsButton';

const Options = ({onGood,onNeutral,onBad,onReset,total}) =>{

return (<div>
        <OptionsButton onClick={onGood} DesBut='Good'/>
        <OptionsButton onClick={onNeutral} DesBut='Neutral'/>
        <OptionsButton onClick={onBad} DesBut='Bad'/>
        { total===0 ? <></>: <OptionsButton onClick={onReset} DesBut='Reset'/>}
        </div>
)
}

export default Options