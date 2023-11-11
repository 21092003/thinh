import { Link, useLocation, useNavigate } from "react-router-dom";
import ForgotPassword from "../member/ForgotPassword";
import { useEffect,useState } from "react";
import axios from "axios";
import Error from "../Error";

function LoginParents(){
  const navigate = useNavigate();
  const[inputs,setInput]=useState({
      email:"",
      password:"",
    })
  const[errors,setErrors]=useState({})
  
  const handleInput = (e)=>{
    const nameInput = e.target.name;
    const value = e.target.value;
    setInput(state=>({...state,[nameInput]:value}))
  }
  function handleSubmit(e){
        e.preventDefault();
        let errorSubmit = {};
        let flag=true;
        if(inputs.email==""){
            errorSubmit.email = "Vui lòng nhập email";
            flag = false;
        }
        if(inputs.pass==""){
            errorSubmit.password="Vui lòng nhập pass";
            flag = false;
        }
        if(inputs.checkbox==""){
            errorSubmit.checkbox="Vui lòng chọn";
            flag = false;
        }
        if(!flag){
            setErrors(errorSubmit);
        }
        if(flag){
            const data={
                email:inputs.email,
                password:inputs.password
            }
            console.log(data)
            axios.post("http://localhost/projectnew/public/api/member/login",data)
            .then(response=>{

                if(response.data.errors){
                    setErrors(response.data.errors)
                }else{
                    console.log(response)
                    var authParents={}
                    authParents.data={}
                    // auth.user.auth_token=response.data
                    authParents.data.auth=response.data.member
                    
                    localStorage.setItem("authParents",JSON.stringify(authParents))
                    navigate('/');
                }
            })
            .catch(function(error){
                console.log(error)
            })
        }
  }
    return(
        <div id="login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="login-background">
                <div className="form-login">
                  <form className="row" onSubmit={handleSubmit}>
                    <div className="col-sm-12">
                      <div className="center">
                        <h3>Sign In</h3>
                      </div>
                    </div>
                    <div className="col-sm-12 mt-4">
                      <div className="row role">
                        <div className="col-sm-6 ta-end btn-parents mb-4 ">
                          <Link className="btn ml-5" to="/memberParents/LoginParents"><span className="background">Parents</span></Link>
                          <Link className="btn" to="/memberTutor/LoginTutor"><span>Tutor</span></Link>
                        </div>
                        
                       
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="center">
                        <div>
                          <h6 className="email">Email</h6>
                          <input type="text" name="email" onChange={handleInput} />
                        </div>
                        <div>
                          <h6 className="password">Password</h6>
                          <input type="password" name="password" onChange={handleInput}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="center btn-login">
                        <button className="btn btn-success">Sign In</button>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="center forgot-password">
                        <Link to="/member/ForgotPassword">Forgot password?</Link>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="center sign-up">
                        <p>If you dont have account Parents?<Link className="btn btn-outline-success" to="/memberParents/RegisterParents">Sign up</Link></p>
                      </div>
                    </div>
                    <Error errors={errors}/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default LoginParents;