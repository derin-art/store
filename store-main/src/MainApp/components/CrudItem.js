import React from "react";

export default function CrudItem(){
    return <div className="flex max-w-screen">
        <div>
           <input id="img" className="hidden"></input>
           <label htmlFor="img">
               Hey
                 <img></img>
           </label>
        </div>

        <input type="text" className="border w-24 overflow-hidden">
        </input>

        <input type="number" className="border w-24 overflow-hidden">
        </input>

        <textarea className="border w-24 overflow-hidden">

        </textarea>
    </div>
}