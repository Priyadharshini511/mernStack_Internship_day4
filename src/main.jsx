
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContext from './ContextApi.jsx'

let data = "global data"
let data1 = "global data1"
createRoot(document.getElementById('root')).render(
<MyContext.Provider value={{data,data1}}>
    <App/>
</MyContext.Provider>
)

//render appends everything 