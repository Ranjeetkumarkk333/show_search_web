import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter> 
  </React.StrictMode>
)
