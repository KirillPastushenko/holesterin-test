import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import { addYears } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css';
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
            locale="ru-RU" 
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


 