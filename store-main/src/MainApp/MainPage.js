import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import LockedPage from "../setup/LockedPage"
import AddItems from "./components/AddItems";
import ItemCard from "./components/itemCard";


export default function MainPage({user}){
    const welcomeText = <h1>MainPage{<p>Welcome {user.name}</p>}</h1>
    const [currentItem, setCurrentItem] = React.useState({result: "", itemName: "", itemPrice:""})
    const [previewMode, setPreviewMode] = React.useState(false)
    return ( user.status === 200 ?
    <div className="h-screen w-screen">
        {welcomeText}

        <AddItems setCurrentItem= {setCurrentItem} currentItem={currentItem} setPreviewMode={setPreviewMode} />
      {previewMode &&  <div className="flex justify-center items-center mt-2"> <ItemCard currentItem={currentItem}></ItemCard></div>}



    </div> :
    
    <LockedPage />
    
    )
}

