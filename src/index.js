import React from 'react'
import ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'
/* import App from './App'
import Header from './Header' */
/* import Acco from './Acco' */
import Form from '../src/Formink/Form1'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/*  <App />
    <Header /> */}
    {/*  <Acco /> */}
    <Form />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
