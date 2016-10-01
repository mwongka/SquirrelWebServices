import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import router from './router';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
//import redux reducers
import homeReducer from './redux/homeReducer';

//add reducers here separated by commas
const reducers = combineReducers({
  homeReducer,
})

const store = createStore(reducers);


render(
  <Provider store={store}> 
    {router}
  </Provider>
  , document.getElementById('app'));
