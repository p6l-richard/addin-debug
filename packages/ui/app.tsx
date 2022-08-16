import React from 'react'
import ReactDOM from 'react-dom/client'
import './app.scss'
import { ExampleButton, MicrosoftLogo } from './index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="p-2">
      <ExampleButton>Example Button</ExampleButton>
    </div>
    <div className="p-2">
      <MicrosoftLogo />
    </div>
  </React.StrictMode>,
)
