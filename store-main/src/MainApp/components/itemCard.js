import React from "react";
import CardInfo from "./itemCardInfo";

export default function ItemCard({currentItem}){

    return ( <div className="border w-48 bg-gray-100">
                <div className="w-full h-64">
                    <img  className="w-full" src={currentItem.result}></img>
                </div>
                <CardInfo currentItem={currentItem} />
             

            </div>
    )
}