import React from "react";

export default function CrudItem({name, price, img, description}){
    return <div className="flex max-w-screen">
        <div>
           <input id="img" name="img" type="file" className="hidden"></input>
           <label htmlFor="img" className="h-10">
                 <img src={`data:image/jpeg;base64,${img}`} className="h-20"></img>{/* data:image/jpeg;base64, */}
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