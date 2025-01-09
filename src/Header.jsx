import React from 'react';

const Header = () => {
// if(true){
//     return(
//         <h1> it's for client</h1>
//     )
// }

let data = []
return (
    <>
    {/* {!data.length>0 &&
    <h1>yeah its</h1>} */}

    {!data.length > 0 ?<h1>yes there is a data</h1>:<h1>no more data</h1>}
    {/* //ternary operator */}
    </>
)
}


//if it is true it returns else ntng prints 
//flipping :true means false and false means true



export default Header;

    
// const Header = () => {
//     let data = [1, 2, 3, 4, 5];
//     return (
//         <div>
//             <ul> {/* Wrap the <li> elements in a <ul> or <ol> */}
//                 {data.map((i, k) => (
//                     <li key={k}>{i}</li> // Use a unique key for each <li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// const Header=()=>{    //functional component
//     return( 
//         <>         
//         <div>          
//             <ul>
//                 <li>Home</li>
//                 <li>Product</li>
//                 <li>Contact</li>
//             </ul>
//         </div>
//         </>
//     )
// }
// export default Header;    //default export       //to export to other files
//export { Header };         //named export  






//<></> - fragments
// import React from 'react'      //type rfce

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header

// import React from 'react'

// const Header = () => {
//     let data = [1,2,3,4,5]
//   return (
//     (data)
    
//   )
// }

// export default Header

