import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import LockedPage from "../setup/LockedPage"
import AddItems from "./components/AddItems";
import ItemCard from "./components/itemCard";


export default function MainPage({user}){
    const welcomeText = <h1>MainPage{<p>Welcome {user.name}</p>}</h1>
    const [currentItem, setCurrentItem] = React.useState()

    return ( user.status === 200 ?
    <div>
        {welcomeText}

        <AddItems setCurrentItem= {setCurrentItem} currentItem={currentItem} />
        <ItemCard currentItem={currentItem}></ItemCard>



    </div> :
    
    <LockedPage />
    
    )
}

