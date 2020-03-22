import React from 'react';
import './question-row.css';

 

const QuestionRow = ({ id, title, input }) => {
  return (
    <div className="columns">
        <div className="column question-text">{title} </div>
        <div className="column">
            {input}
        </div>
    </div>
  );
};

export default QuestionRow;
