import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

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
            openToDate={new Date("1990/03/22")} 
            onChange={date => this.setStartDate(date)}
            maxDate={addDays(new Date(), -10958)}
            placeholderText="Выберите дату"/>
      );
    }
  }


 