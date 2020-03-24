import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions';



export const calc = ({id, el}) => {
    switch (id) {
      case 1: { console.log(1) }; break;
      case 2: { console.log(2) }; break;
      case 3: { console.log(3) }; break;
      case 4: { console.log(4) }; break;
      case 5: { console.log(5) }; break;
      case 6: { console.log(6) }; break;
      case 7: { console.log(7) }; break;
      case 8: { console.log(8) }; break;
      case 9: { console.log(9) }; break;
      case 10: { console.log(10) }; break;
      case 11: { 
        switch(el){
          case 'Нет' : { console.log('нет') }; break;
          case 'Курю менее 10 лет подряд' : { actions.addYears(1) }; break;
          case 'Курю более 10 лет подряд, менее 1 пачки в день' : { actions.addYears(2) }; break;
          case 'Курю более 10 лет подряд, более 2 пачек в день' : { actions.addYears(3) }; break;
          default: console.log('default');
        } 
      }; break;
      case 12: { console.log(12) }; break;
      case 13: { console.log(13) }; break;
      case 14: { console.log(14) }; break;
      default: console.log('default');
    }
}

/*
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
 

*/

 