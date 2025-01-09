// const Footer = () => {    //functional component
//     return (
//             <div>

//                 <p>This is  a Footer file</p>
//             </div>
//     )
// }
// export default Footer;

// import React from "react";

// function Footer({ pData }) {
//     return (
//         <div>
//             <h3>Footer</h3>
//             <p>Data from Content: {pData}</p> {/* Display the received data */}
//         </div>
//     );
// }

// export default Footer;



// function Footer() {
//     const refer = useRef()
//     // const [data,setdata]= useState(0);
//     function handleClick(){
//        console.log( refer.current.value);

//     }
// console.log("state",data);
// function handleclick(){
//     // setdata(data + 1)
//     // setdata(data+1)
//     setdata((pr)=>pr+1)
//     setdata((pr)=>pr+1)

//know accuracy somewhere it is updated but the ither function does'nt know about it 
//prev is diiferent 
import React from 'react'
import { useState, useRef } from 'react';
import { useContext } from 'react';
import MyContext from './ContextApi';
function Footer() {
    const refer = useRef()

    function handleClick() {
        console.log(refer.current.value);

    }
    let {data:d,data1} = useContext(MyContext)

    return (
        <div>
            {data1}
            <input ref={refer} type="text" />
            <button onClick={handleClick}>focus</button>
            {/* <button onClick={() => setdata((prev)=>prev+1)}> add one</button> */}
        </div>
    )
}

export default Footer