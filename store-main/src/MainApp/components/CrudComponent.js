import React from "react";
import CrudItem from "./CrudItem";
import axios from "axios";

export default function CrudComponent(){
    const [itemData, setItemData] = React.useState()
    const [resStatus, setResStatus] = React.useState()
    const [ItemArray, setItemArray] = React.useState()
    const getData = async()=>{
        const response = await axios.get("http://localhost:1000/storeV1").catch(err =>{
            console.log(err)
        }) 

        const res = await JSON.parse(JSON.stringify(response))
        const {data} = res
        const resItemArray = data.data
        console.log(res.status)
        setItemData(resItemArray)
        console.log(resItemArray)
        setResStatus(res.status)
    }

    const CrudItemArray = []
/* CrudItemArray = itemData.map(item => <CrudItem key={item._id} name={item.name}
                price ={item.price} description = {item.description} img={item.img}
                />) */

    React.useEffect(()=>{
        if(resStatus === 200){
            setItemArray(itemData.map(item => <CrudItem key={item._id} name={item.name}
                price ={item.price} description = {item.description} img={item.img}
                />))
      
        } 
        

        
        
    }, [itemData, resStatus])

    React.useEffect(()=>{
        getData()

    }, [])


    return <div>
        <h1 className="pt-16">Crud Component</h1>
        {ItemArray}
    </div>
}