import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import LockedPage from "../setup/LockedPage"


export default function MainPage({user}){
    const welcomeText = <h1>MainPage{<p>Welcome {user.name}</p>}</h1>

    return ( user.status === 200 ?
    <div>
        {welcomeText}


    </div> :
    
    <LockedPage />
    
    )
}

