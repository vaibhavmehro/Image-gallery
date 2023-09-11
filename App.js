import  ReactDOM from "react-dom/client";
import React from "react";
import Header from "./Header";
import Body from "./body";

const Applayout =()=>
{
    return (
        <>
        <Header/>
        <Body/>
        
        </>
    )
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);