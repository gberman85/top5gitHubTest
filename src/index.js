import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';


const querystring = window.location.search
const params = new URLSearchParams(querystring);
const user = params.get('user');

if (!user) {
  ReactDOM.render(
    <React.StrictMode>
      <App />    
    </React.StrictMode>,
    document.getElementById('root')
  );
}else{

fetch('https://api.github.com/users/' + user) //simonsmith
  .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
      
      ReactDOM.render(
          <App2 username={data.name}/>
        ,
        document.getElementById('root')
      );

    // this.setState({ totalReactPackages: data.total })
  })
  .catch(error => {
      //this.setState({ errorMessage: error.toString() });
      console.error('There was an error!', error);
  });
 
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
