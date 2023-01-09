// without JSX 
import React from "react";
function JSXcomponents()
{
    // return React.createElement(tag ,class/id , content);
    // return React.createElement('div',null, "Hello");
    return React.createElement('div',null,React.createElement('p', null, "Hello inner"));
}
// function JSXcomponents()
// {
//     return (
//         <div>Hello</div>
//         // <div>{20+30}</div>
//     )
// }

export default JSXcomponents;