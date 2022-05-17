import React from "react";

export default function AddItems({setCurrentItem, currentItem, setPreviewMode}){
    const [itemInput, setItemInput] = React.useState({})
  

    const handleNameInput = (e)=>{
        setItemInput(prev => ({...prev, itemName : e.target.value }))
      

    }

    const handlePriceInput = (e)=>{
        setItemInput(prev => ({...prev, itemPrice : e.target.value}))
        
    }

    const imageInput = (e)=>{
        const imgFile = e.target.files[0]
        if(!imgFile){
            return
        }
        console.log(imgFile)
        const fileReader = new FileReader()
       
       
        fileReader.onload = ()=>{
            const result = fileReader.result
            setItemInput(prev => ({...prev, result}))
        }

        fileReader.readAsDataURL(imgFile)
      
        

    }



    const handleDescriptionInput = (e)=>{
        setItemInput(prev => ({...prev, itemDescription : e.target.value }))
 

    }

    console.log(itemInput)
    setCurrentItem(itemInput)

  


    

    return <div className="flex items-center justify-center flex-col">
       
                <div className="w-48 border border-gray-300 p-2 rounded">
                    <p className="text-sm font-bold mb-2 text-gray-600">Item Card</p>
                    <form className="flex flex-col justify-center items-center w-full">
                        <label   for="img"  className={`bg-blue-400 rounded mb-2 py-2 px-3 w-full text-white`}> Click to input image
                         </label>
                         <input type="file" id="img" onChange={(e)=>{imageInput(e)}} className={`ml-2 mb-4 text-sm hidden `} accept="image/*" placeholder="Display Image"></input>
                         <input type="text" onChange={(e)=>{handleNameInput(e)}} className="mb-4 bg-gray-100 outline-gray-300 rounded placeholder:text-gray-500 p-2 w-full" placeholder="Name"></input>
                        <input type="number" onChange={(e)=>{handlePriceInput(e)}} className="bg-gray-100 mb-4 outline-gray-300 p-2 placeholder:text-gray-500 rounded w-full" placeholder="Price"></input>
                        <textarea onChange={(e)=>{handleDescriptionInput(e)}} className="bg-gray-100 p-2 outline-gray-300 placeholder:text-gray-500 rounded w-full" placeholder="Description"></textarea>
                    </form>

                </div>

                <button className="px-2 w-24 bg-green-400 text-sm font-serif mt-2 rounded hover:bg-green-500 text-white" onClick={()=>{setPreviewMode(prev => !prev)}}>preview mode</button>
            </div>
}