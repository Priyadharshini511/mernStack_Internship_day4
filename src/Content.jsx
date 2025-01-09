// import React from "react";


// function Content({pData}){ //functional component
//     let {data1,data} = {data1:1,data:2}
//     console.log(data1);
//     return( 
//         <>         
//         <div> 
//             {
//         pData
//             }         
//         </div>
//         </>
//     ) 
// }
// export default Content;

// import React from "react";

// function Content({ pData }) {
//     let cData = "this data is from child"; // Data to send to the parent

//     function handleClick() {
//         pData(cData); // Call the parent's function with `cData`
//     }
// let styleObj = {background:"red"}
//     return (
//         <div>
//             <button style ={styleObj}onClick={handleClick}>submit</button>
//         </div>
//     );
// }

// export default Content;

import React from "react";

function Content({ pData }){
    function handleClick(){
        pData(data)
    }
    let styleObj = {background:"red"}
    let tags = (
        <div style={styleObj}onClick={handleClick}>
            <p>hello there</p>
            </div>
    )
        
    return(
        <div>
            {tags}
        </div>
    )

}

export default Content