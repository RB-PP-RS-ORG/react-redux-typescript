import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, Store, combineReducers } from 'redux'
import { Provider } from 'react-redux'


import reducer2 from './store/reducer-2';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  addRemoveReducer: reducer,
  editReducer: reducer2
})



const store: Store = createStore(reducers,
  composeWithDevTools(applyMiddleware(thunk))
)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
