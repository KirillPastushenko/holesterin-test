import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


export const onCalc = ({id, value}) => {
    console.log({id, value});
}
const Calculator = ({id, value}) => {
    console.log({id, value});
}

const mapStateToProps = (state) => {
    return {
      counter: state
    };
};
 
//export default connect(mapStateToProps, actions)(Calculator);
export default Calculator;