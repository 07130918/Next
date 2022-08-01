import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const person = {
    name: 'John',
    age: 20
}

const PersonContext = createContext(person);

ReactDOM.createRoot(document.getElementById('root')).render(
    <PersonContext.Provider value={person}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </PersonContext.Provider>
)

export default PersonContext;