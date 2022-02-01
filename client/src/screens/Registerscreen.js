import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Loader, {loader} from "../components/Loader"
import Error, {error} from "../components/Error"
import Success, {success} from "../components/Success"





export default function Registerscreen() {
  const registerstate=useSelector(state=>state.registerNewUserReducer)
  const{loading ,error,success}=registerstate
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const dispatch=useDispatch()
  function register(e){
      e.preventDefault()
      
        const user={
            name:name,
            email:email,
            password:password
        }
        if(password==cpassword)
        {
          dispatch(registerNewUser(user))

        }else{
            alert('password not matched')
        }
      
  }
  return (
    <div>
      <div className="row justify-content-center m-3">
        <div className="col-md-5 card p-3 shadow p-3 mb-5 bg-white rounded" style={{marginTop:'100px'}}>
          <div className="div">
            <h2 style={{display:'inline'}} className="text-center m-3">Register</h2>
            <i  style={{fontSize:'25px'}} className="fa fa-user-plus" aria-hidden="true"></i>
            {loading &&(<Loader/>)}
            {error &&(<Error error='Email is already register'></Error> )}
            {success &&(<Success success='Your registeration is successful'></Success> )}


          <form onSubmit={register}>
          <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              required
              onChange={(e) => {
                setname(e.target.value);
              }}
            ></input>

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
            <input
              type="password"
              placeholder="cpassword"
              className="form-control"
              value={cpassword}
              required
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            ></input>
            <div className="text-right">
                <button  type="submit" className="btn mt-3"  >Register</button>
            </div>
          </form>
         
          </div>
          <a style={{color:"black"}} href="/login" className="mt-5">Click here to login</a>
        </div>
      </div>
    </div>
  );
}
