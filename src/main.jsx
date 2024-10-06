import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import './App.css'
import { Delybary } from './Context/ApiDataProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Delybary>
    <App />
    </Delybary>
  </React.StrictMode>,
)
