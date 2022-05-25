import React from "react";
import CrudItem from "./CrudItem";
import axios from "axios";

export default function CrudComponent(){
    const [itemData, setItemData] = React.useState()

    const getData = async()=>{
        const data = await axios.get("http://localhost:1000/storeV1").catch(err =>{
            console.log(err)
        }) 

        const res = await JSON.stringify(data)
        console.log(res)
    }

    React.useEffect(()=>{
        getData()

    }, [])


    return <div>
        <h1 className="pt-16">Crud Component</h1>
        <CrudItem />
    </div>
}