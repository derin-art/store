import React from "react";

export default function AddItems({setCurrentItem, currentItem, setPreviewMode, user}){
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

    const userIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-green-400 mr-1" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" /></svg>
  const imageTick = <svg xmlns="http://www.w3.org/2000/svg" className="fill-green-400" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.602 13.76l1.412 1.412 8.466-8.466 1.414 1.414-9.88 9.88-6.364-6.364 1.414-1.414 2.125 2.125 1.413 1.412zm.002-2.828l4.952-4.953 1.41 1.41-4.952 4.953-1.41-1.41zm-2.827 5.655L7.364 18 1 11.636l1.414-1.414 1.413 1.413-.001.001 4.951 4.951z"/></svg>

  const imageLoadedText = <p> {imageTick}Image Loaded</p>

    

    return <div className="flex items-center justify-center flex-col">
       
                <div className="w-48 border border-gray-300 p-2 rounded-lg bg-gray-200">
                    <p className="text-sm font-bold mb-2 text-gray-700 uppercase flex justify-center items-center">{userIcon}{user.name}'s ITEM CARD</p>
                    <p className="text-xs mb-1 text-gray-400">Fill the following form to create a new item</p>
                    <form className="flex flex-col justify-center items-center w-full">
                        <label   for="img"  className={`bg-gray-700 rounded mb-4 py-2 px-3 w-full text-white hover:bg-gray-900`}> {itemInput.result ? imageLoadedText : "Click to input image"}
                         </label>
                         <input type="file" id="img" onChange={(e)=>{imageInput(e)}} className={`ml-2 mb-4 text-sm hidden `} accept="image/*" placeholder="Display Image"></input>
                         <input type="text" onChange={(e)=>{handleNameInput(e)}} className="mb-4 bg-gray-100 outline-gray-300 rounded placeholder:text-gray-500 p-2 w-full" placeholder="Name"></input>
                        <input type="number" onChange={(e)=>{handlePriceInput(e)}} className="bg-gray-100 mb-4 outline-gray-300 p-2 placeholder:text-gray-500 rounded w-full" placeholder="Price"></input>
                        <textarea onChange={(e)=>{handleDescriptionInput(e)}} className="bg-gray-100 p-2 outline-gray-300 placeholder:text-gray-500 rounded w-full" placeholder="Description"></textarea>
                    </form>

                </div>

                <button className="px-3 py-1 w-24 bg-green-400 text-xs rounded-sm font-bold mt-2 hover:bg-black hover:text-green-400 uppercase text-white" onClick={()=>{setPreviewMode(prev => !prev)}}>preview mode</button>
            </div>
}