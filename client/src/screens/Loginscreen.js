import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loader from "../components/Loader"
import Error from "../components/Error"



export default function Loginscreen() {

const loginreducer=useSelector(state=>state.loginreducer)
const loading =loginreducer
const error =loginreducer

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  const dispatch=useDispatch()
  function login(e){
      e.preventDefault()
      
        const user={
          
            email:email,
            password:password
        }
      dispatch(loginUser(user))
  }
  useEffect(() => {
     if(localStorage.getItem('currentUser'))
     {
         window.location.href='/'
     }
  }, [])
  return (
    <div>
      <div className="row justify-content-center m-3">
        <div className="col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded" style={{marginTop:'100px'}}>
          <div className="div">
            <h2 className="text-center m-3" style={{display:"inline"}}>Login</h2>
            <i style={{fontSize:'20px'}} className="fa fa-sign-in" aria-hidden="true"></i>
            {error &&(<Error error='invaild credential' />)}
            {loading &&(<Loader/>)}
          <form onSubmit={login}>
         

            <input
              type="email"
              placeholder="email"
              className="form-control"
              value={email}
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
               <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></input>
            
            <div className="text-right">
                <button  type="submit" className="btn mt-3"  >Login</button>
            </div>
          </form>
         
          </div>
          <a style={{color:"black"}} href="/register" className="mt-3">Click here to Register</a>
        </div>
      </div>
    </div>
  );
}
