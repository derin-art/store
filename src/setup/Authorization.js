import React from "react";
import defaultImg from "../img/545053.jpg"
import axios from "axios"


export default function Authorization(){
    const [register, setRegister] = React.useState(true)
    const [backgroundImageDetails, setBackGroundPhoto] = React.useState({backGroundPhoto: defaultImg, backGroundPhotoAuthor: "Image by coporation"})
    
    
    const [registerFormData, setRegisterFormData] = React.useState({
        name: "",
        email: "",
        setPassword: "",
        checkPassword: ""
        
     })
     const [goodPassword, setGoodPassword] = React.useState(false)

    const [signInFormData, setSignInFormData] = React.useState({email: "", password: ""})

    React.useEffect(()=>{
        setGoodPassword(registerFormData.checkPassword === registerFormData.setPassword)
    }, [registerFormData.setPassword, registerFormData.checkPassword])

    React.useEffect(()=>{
        setRegisterFormData(prev => ({
            name: "",
            email: "",
            setPassword: "",
            checkPassword: ""
        }))

        setSignInFormData(prev=>({
            email: "", password: ""
        }))


    }, [register])



    const updateRegisterForm =(e)=>{
        const formKey = e.target.name
        const formKeyValue = e.target.value
        setRegisterFormData(prev => ({...prev,  [formKey] : formKeyValue}))
        
        
    }
    const updateSignInForm =(e)=>{
     const formKey = e.target.name
        const formKeyValue = e.target.value
        setSignInFormData(prev => ({...prev, [formKey]: formKeyValue})) 
        
    }

   /*  React.useEffect(()=>{
    const passwordSetWell = registerFormData.checkPassword === registerFormData.setPassword
    console.log(goodPassword, registerFormData.setPassword, registerFormData.checkPassword)
    setGoodPassword(passwordSetWell)
    console.log(goodPassword, passwordSetWell)
    }, [registerFormData.checkPassword, registerFormData.setPassword]) */
    
   /*  fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then((res) => 
       { if(!res.ok){
           throw Error("hey you have an error")
       }
      return res.json()})
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(./31774.png)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })
 */
    const getBackGroundImages = async ()=>{
        const width = window.innerWidth
        const param = width > 600 ? "landscape" : "portrait"
        const data = await fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=${param}&query=snow`)
        const image = await data.json()
        console.log(image.urls.regular)
        const Image = image.urls.regular
        const Author = image.user.name
     
       
        setBackGroundPhoto(prev =>{
            const backGroundPhoto = prev.backGroundPhoto
            const backGroundPhotoAuthor = prev.backGroundPhotoAuthor
            return {backGroundPhoto: Image, backGroundPhotoAuthor: Author}
        })
    
       

    }

    React.useEffect(()=>{
        getBackGroundImages()
    }, [])
   
    const createUser = async ()=>{
        const data =  await axios.post("http://localhost:1000/users", {name: registerFormData.name, email: registerFormData.email, password: registerFormData.setPassword}).catch(err =>{
            console.log(err)
        })
         console.log(JSON.stringify(data))
    }

 const registerForm =  <form className="flex flex-col pl-2 sm:items-center sm:justify-center" >
        <input className="p-2 pr-0 w-32 mt-4 text-sm border rounded outline-none focus:bg-gray-100 text-gray-600" placeholder="name"  name="name" value={registerFormData.name} onChange={(event)=>{updateRegisterForm(event)}}></input>
        <input className="p-2 pr-0 w-32 mt-4 text-sm border rounded outline-none focus:bg-gray-100 text-gray-600" placeholder="email" type="email" name="email" value={registerFormData.email} onChange={(event)=>{updateRegisterForm(event)}}></input>
        <input className="p-2 pr-0 w-32 mt-4 text-sm border rounded outline-none focus:bg-gray-100 text-gray-600" type="password" placeholder="set password" name="setPassword" value={registerFormData.setPassword} onChange={(event)=>{updateRegisterForm(event)}}></input>
        <input className="p-2 pr-0 w-32 mt-4 text-sm border rounded outline-none focus:bg-gray-100 text-gray-600" type="password" placeholder="confirm password" name="checkPassword" value={registerFormData.checkPassword}  onChange={(event)=>{updateRegisterForm(event)}}></input>
        <button type="button" onClick={createUser} className="w-24 pr-0 mt-4 p-2 text-blue-400 border border-blue-900 focus:bg-blue-700 focus:text-white hover:bg-gray-900 ">register</button>
    </form>


const signInForm =   <form className="flex flex-col pl-2 sm:items-center sm:justify-center">
        <input className="p-2 w-24 mt-4 text-sm border rounded outline-none focus:bg-gray-100 text-gray-600" type="email" placeholder="email" name="email" value={signInFormData.email} onChange={(event)=>{updateSignInForm(event)}}></input>
        <input className="p-2 w-24 mt-4 text-sm border rounded outline-none text-gray-600 focus:bg-gray-100" type="password" placeholder="password" value={signInFormData.password} name="password" onChange={(event)=>{updateSignInForm(event)}}></input>
        <button type="submit" className="w-24 mt-4 p-2 text-blue-400 border border-blue-900 focus:bg-blue-700 focus:text-white hover:bg-gray-900 ">login</button>
    </form>
     
     console.log(backgroundImageDetails)
     console.log(registerFormData)
   
    return <div className="h-screen  flex ">
        <div className="w-3/4 flex flex-col item-center">
        <h1 className="text-xl pt-12 text-gray-700 text-center">{register? "Login": "Register"}</h1>
        {register? signInForm : registerForm}
        <button className="p-2 text-xs text-left mt-6 text-blue-900 sm:text-center" onClick={()=>{setRegister(prev => !prev)}}>{register? "don't have an account yet": "want to regsiter?"}</button>
        </div>

        <div className="w-3/4 h-screen bg-blue-100 overflow-x-hidden sm:w-full max-w-screen">
            <img src={backgroundImageDetails.backGroundPhoto} className="h-3/4 sm:h-full w-full inline object-none sm:object-fill"/>
            <div className="flex flex-col p-1 pb-0 font-sans italic inline text-shadow z-10 sm:absolute sm:top-6 ">
            <div className="text-4xl sm:text-6xl text-gray-900 text-shadow -ml-1 inline">Discover</div>
            <div className="text-2xl sm:text-4xl text-gray-700 inline">Découvrir</div>
            <div className="text-lg text-gray-600 inline">Descubrir</div>
            </div>
            <p className="text-xs font-sans sm:-mt-10 text-right mr-2 ">photo by ${backgroundImageDetails.backGroundPhotoAuthor}</p>
        </div>
       
    </div>
}

