import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store'  //so this is in {} too
import { Provider } from 'react-redux'

ReactDOM.render(    //what is StrictMode??? 
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);