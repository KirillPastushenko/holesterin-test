import React from 'react';
import Header from '../header/header';
import Questions from '../questions/questions';
import BtnGetResult from '../btn-get-result/btn-get-result';
import Results from '../results/results';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducer/reducer';
import './app.css';


const store = createStore(reducer);
 
const App = () => {
    return (
        <div className="content is-medium"> 
            <div className="container">
                <Provider store={store}>
                    <Header/>
                    <Questions/>
                    <BtnGetResult/>
                    <Results/>
                </Provider>
            </div>
        </div>
    );
};
      
export default App;
      
 