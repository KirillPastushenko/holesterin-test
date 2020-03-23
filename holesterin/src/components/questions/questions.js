import React from 'react';
import './questions.css';
import {questionsDB} from './question-db';
import QuestionRow from '../question-row/question-row'
import InputText from '../input-text/input-text';
import SelectBox from '../select-box/select-box';
import RadioButtons from '../radio-buttons/radio-buttons';
import CheckBoxes from '../check-boxes/check-boxes';
import DateTime from '../datepicker/datepicker';

 
const Questions = () => {
    const elems = questionsDB.map((el) => {
        const {id} = el;

        let input = {};
        if(el.type === 'radio') { input = <RadioButtons id={id} values={el.values} child={el.child} />};     
        if(el.type === 'selectbox') { input = <SelectBox id={id} values={el.values} />};     
        if(el.type === 'checkboxes') { input = <CheckBoxes id={id} values={el.values} />};   
        if(el.type === 'datetime') { input = <DateTime/>};   
        if(el.type === 'textinput') { input = <InputText id={id} ed={el.ed} />};   
        return (
            <QuestionRow key={id} id={id} title={el.text} input={input} />
        )
    });
    return (<div id="questions">{elems}</div>);
}



export default Questions;
 