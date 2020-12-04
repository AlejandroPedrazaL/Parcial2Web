import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabla from './components/Tabla'
import Grafica from './components/Grafica'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl'

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={getBrowserLang()} messages={getMessages()}>
      <nav>
        <h1>Series</h1>
      </nav>
      <br></br>
      <Tabla 
        url={getMessages()}
      />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function getBrowserLang() {
  const lang = navigator.language || navigator.userLanguage;
  console.log(lang);
  return lang;
}


function getMessages(){
  const lang = getBrowserLang();
  if(lang==="en"){
      return "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json";
  }else{
      return "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
  }
}