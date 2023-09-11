import Card from "./card";
import { useState } from "react";
import { useEffect } from "react";

const Body =()=>{

    const [list,setList]=useState([]);

    useEffect(()=>{
        getData();
    },[])

    async function getData()
    {
        const value = await fetch ("https://picsum.photos/v2/list?page=2&limit=100");
        const json = await value.json();
        setList(json);

    }


    return (
     
        <div className="body">
            {list.map((data)=> {return <Card {...data}/>})}
        </div>
    )
}

export default Body;
