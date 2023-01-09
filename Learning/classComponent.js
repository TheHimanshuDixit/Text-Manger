import React, { Component } from "react";

// class classComponent extends React.Component
export default class classComponent extends Component
{
    render()
    {
        return (
            <h1>Hello users</h1>
        )
    }
}

{/* <classComponent></classComponent> */}

// Component inside Component

// function App()
// {
//     function Apple()
//     {
//         return (<div>Apple Component</div>)
//     }
//     return (
//         <classComponent></classComponent>
//         // <Apple></Apple> 
//         {Apple()}
//     )
// }