import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import LockedPage from "../setup/LockedPage"
import AddItems from "./components/AddItems";
import ItemCard from "./components/itemCard";
import Header from "./utils/header";

export default function MainPage({user}){
    const [currentItem, setCurrentItem] = React.useState({result: "", itemName: "", itemPrice:""})
    const [previewMode, setPreviewMode] = React.useState(false)
    return ( user.status === 200 ?
    <div className="h-screen w-screen">
        <Header />
    
    

        <div className="items-start justify-center sm:flex mt-10">
        <div className="mb-2"><AddItems user={user} setCurrentItem= {setCurrentItem} currentItem={currentItem} setPreviewMode={setPreviewMode} /></div>
      {previewMode &&  <div className="flex justify-center items-center ml-2"> <ItemCard currentItem={currentItem}></ItemCard></div>}
        </div>



    </div> :
    
    <LockedPage />
    
    )
}

