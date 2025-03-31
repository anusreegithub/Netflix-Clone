import React from "react";
import { useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useUserAuth } from "../utils/userContext";

const Header = () => {
  const navigate = useNavigate();
  const {user} = useUserAuth();


  const handleSignOut = ()=>{
    console.log("called handle signout")
    signOut(auth).then(()=>{
      navigate("/")
    }).catch((error)=>{

      navigate("/error",error)
    })
  }
  return (
    <div className="absolute px-8 py-4 w-screen bg-gradient-to-b from-black flex justify-between items-center z-50">
      {/* Logo */}
      <div className="container w-55">
        <img src="/Logo/logo.png" alt="Netflix Logo" className="h-10" />
      </div>

      {user && (
        <div className="flex items-center space-x-2">
        <div className="relative">
            <select className="bg-transparent border border-gray-500 text-white px-6 py-3 rounded-3xl flex items-center text-sm pr-3 appearance-none cursor-pointer">
                <option value="en" className="text-black">
                    &nbsp;&nbsp;&nbsp; English
                </option>
                <option value="hi" className="text-black">
                    &nbsp;&nbsp; Hindi
                </option>
            </select>
            <Globe className="absolute left-4 top-4 h-4 w-4 text-white" />
        </div>
    
        <button onClick={
          handleSignOut
        } className="border border-gray-500 bg-white text-black font-semibold px-6 py-3 rounded-3xl text-sm hover:bg-gray-200 transition cursor-pointer">
            Sign Out
        </button>
    </div>
    
      )}
    </div>
  );
};

export default Header;
