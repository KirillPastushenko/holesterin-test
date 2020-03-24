import React, {Component} from 'react';
import DatePicker, {registerLocale } from "react-datepicker";
import { onCalc } from '../calculator/calculator';
import { addYears } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';
import ru from 'date-fns/locale/ru';  

registerLocale('ru', ru);


export default class DateTime extends  Component {
    state = {
      startDate: null
    };
  
    handleChange = date => {
      this.setState({
        startDate: null
      });
    };
    
    render() {
      return (
        <DatePicker
            selected={this.state.startDate} 
            locale="ru" 
            dateFormat="yyyy MMMM dd"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            openToDate={addYears(new Date(), -21)} 
            onChange={date => this.setStartDate(date)}
            maxDate={addYears(new Date(), -21)}
            placeholderText="Выберите дату"/>
      );
    }
  }
