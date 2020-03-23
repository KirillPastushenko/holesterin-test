import React from 'react';
import './question-row.css';

const QuestionRow = ({ id, title, input }) => {
  return (
    <div className="columns">
        <div className="column question-text is-half">{title} </div>
        <div className="column is-half">
            {input}
        </div>
    </div>
  );
};

export default QuestionRow;
