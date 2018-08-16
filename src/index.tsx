import React from 'react'
import ReactDOM from 'react-dom'
import FinalApp from './examples/FinalApp'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<FinalApp />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
