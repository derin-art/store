import React from "react";
import CardInfo from "./itemCardInfo";

export default function ItemCard({currentItem}){

    return ( <div className="border w-48 bg-gray-100 rounded-sm border-gray-300">
                {currentItem ? <>
                    <div className="w-full h-64 mb-2">
                    <img  className="w-full" src={currentItem.result}></img>
                </div>
                <CardInfo currentItem={currentItem} /></>: 
                <p className="self-center">
                    No data is Given
                    </p>}
             

            </div>
    )
}