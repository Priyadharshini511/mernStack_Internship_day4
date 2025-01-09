

// function App() {
//   // const [count, setCount] = useState(0)
//   //  let data = "the parent data"
//   function getData(data) {
//     console.log(data);
//   }
//   return (
//     <>
//       {/* <Header /> */}
//       <Content pData={getData} />
//       {/* <Content />
//       <Component1/>
//       <Component2/>
//       <Component3/>
//       <Component4/>
//       <Component5/>
//       <Footer /> */}
//     </>

//   )
// }

// export default App

// //fragments are empty tags
// //all the tags must be wrapped using any tag or fragments 

// import React, { useState } from "react";
// import Content from "./Content";
// import Footer from "./Footer";

// function App() {
//     const [data, setData] = useState(""); // State to hold data from the child

//     function getData(cData) {
//         console.log(cData); // Logs the data from the child
//         setData(cData); // Updates the state with the received data
//     }

//     return (
//         <div>
//             <Content pData={getData} /> {/* Passes `getData` to Content */}
//             <Footer pData={data} /> {/* Passes received data to Footer */}
//         </div>
//     );
// }

// export default App;

import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import ApiCall from './ApiCall'
import Todo from './Todo'
import Site from './Site'

import { Component1, Component2, Component3, Component4, Component5 } from './Component'

function App() {
  return (
    <>
        {/* <Footer/> */}
    {/* <ApiCall/> */}
    {/* <Todo/> */}
    <Site/>
  
    </>
  )
}

export default App
