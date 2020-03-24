import React from 'react';
import { connect } from 'react-redux';
import './results.css';

const Results = ({ counter  }) => {
    return (
        <div>{counter}</div>
    )
}
 
const mapStateToProps = (state) => {
    return {
      counter: state
    };
};

export default connect(mapStateToProps)(Results);