import { useContext } from "react"
import { authContext } from "../context/AuthContext/AuthProvider"

const UseAuth = () =>{
    return  useContext(authContext)
}

export default UseAuth;