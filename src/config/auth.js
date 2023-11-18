import { Children } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
const AuthContext=createContext(null);
export const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);
    const login=(user)=>{
        setUser(user)
    }
    const logout=(user)=>{
        setUser(null)
    }
    return (<AuthContext.Provider value={{user,login}} >{children}</AuthContext.Provider>)
}
export const useAuth=()=>{
    useContext(AuthContext)
}