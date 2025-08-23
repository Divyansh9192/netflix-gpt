import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg" alt="bg-img" />
            </div>
            <form className="absolute w-4/12 p-12 bg-black/80 rounded-2xl my-24 mx-auto right-0 left-0">
            <h1 className="font-bold py-4 text-3xl text-white" >{isSignIn ?"Sign In" :"Sign Up" }</h1>
                {!isSignIn && <input type="text" placeholder="Full Name" className="bg-gray-400/70 p-2 my-2 rounded w-full" />}
                <input type="text" placeholder="Email Address" className="bg-gray-400/70 p-2 my-2 rounded w-full" />
                <input type="password" placeholder="Password" className="bg-gray-400/70 p-2 my-2 rounded w-full" />
                <input type="password" placeholder="Confirm Password" className="bg-gray-400/70 p-2 my-2 rounded w-full" />
                <button className=" bg-red-700  p-2 my-4 rounded w-full">{isSignIn ?"Sign In" :"Sign Up" }</button>
                <span className="text-white">{isSignIn ?"New to Netflix?" :"Already a User?" }</span>
                <span className="text-white cursor-pointer underline" onClick={toggleSignIn}>{isSignIn ?"Sign In Now." :"Sign Up" }</span>    
            </form>
        </div>
    )
}
export default Login