import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import LockedPage from "../setup/LockedPage"
import AddItems from "./components/AddItems";
import ItemCard from "./components/itemCard";
import Header from "./utils/header";

export default function MainPage({user}){
    const [currentItem, setCurrentItem] = React.useState({result: "", itemName: "", itemPrice:""})
    const [previewMode, setPreviewMode] = React.useState(false)

    const previewWidth = ()=>{
      return previewMode ? "w-fit" : "w-full"
    }
    
    return ( user.status === 200 ?
    <>
      <div className="flex items-center justify-center mb-4">  
        <div className="">
            <Header />
        </div>
      </div>{/*  w-full */}
      <div className="sm:h-screen sm:w-screen p-2">
          <div>
                {<div className={`items-start flex overflow-x-auto pb-4 ${previewWidth()} sm:w-full justify-center`}>
                  <div className={`mb-2 self-center sm:ml-0`}>
                      <AddItems user={user} setCurrentItem= {setCurrentItem} currentItem={currentItem} setPreviewMode={setPreviewMode} />
                  </div>
                  {previewMode ? <div className="flex justify-center items-center mr-2 pb-6"> <ItemCard currentItem={currentItem}></ItemCard></div>: null}
            </div>}
          </div>
      </div>
    </>
     :
    
    <LockedPage />

    
    )
}

