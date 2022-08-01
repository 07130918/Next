import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const person = {
    name: 'John',
    age: 20
}

// createContextで作成したオブジェクトは下位コンポーネントでuseContextメソッドを使い取得できる
// これにより状態変数の伝搬の煩雑さを減らすことができる
const PersonContext = createContext(person);

ReactDOM.createRoot(document.getElementById('root')).render(
    <PersonContext.Provider value={person}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </PersonContext.Provider>
)

export default PersonContext;