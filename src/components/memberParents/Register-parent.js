import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Country from "../Country";
import District from "../District";
import Error from "../Error";
import { useNavigate } from "react-router-dom";
function RegisterParents(){
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedDistrict ,setSelectedDistrict] = useState('');
    const navigate = useNavigate();
    const handleCountrySelect = (countryId) => {
      setSelectedCountry(countryId);
    };
    const handleDistrictSelect = (districtId)=>{
      setSelectedDistrict(districtId)
    }
    const[inputs,setInput]=useState({
      name:"",
      email:"",
      password:"",
      confirmpassword:"",
      phone:"",
      address:"",
    })
    
    const handleInput = (e)=>{
      const nameInput = e.target.name;
      const value = e.target.value;
      setInput(state=>({...state,[nameInput]:value}))
    }
    
    const[errors,setErrors]=useState({})
    const handleSubmit =(e) =>{
      e.preventDefault();
        let errorSubmit = {};
        let flag=true;
        if(inputs.name==""){
            errorSubmit.name="Vui lòng nhập tên";
            flag = false;
        }
        if(inputs.email==""){
            errorSubmit.email = "Vui lòng nhập email";
            flag = false;
        }
        
        if(inputs.password==""){
            errorSubmit.password="Vui lòng nhập pass";
            flag = false;
        }else if(inputs.password.length <8){
            errorSubmit.password ="Vui lòng nhập mật khẩu >8 ký tự";
            flag= false;
        }
        if(inputs.confirmpassword==""){
          errorSubmit.confirmpassword="Vui lòng nhập confirmPassword";
          flag =false;
        }else if(inputs.confirmpassword != inputs.password){
          errorSubmit.connfirmpassword ="Mật khẩu của confirmPassword không giống với password";
          flag=false;
        }
        if(inputs.phone==""){
            errorSubmit.phone="Vui lòng nhập số điện thoại";
            flag = false;
        }else if(inputs.phone.length != 10){
            errorSubmit.phone ="Vui lòng nhập số điện thoại =10 ký tự";
            flag= false;
        }
        if(inputs.address==""){
            errorSubmit.address="Vui lòng nhập địa chỉ";
            flag = false;
        }
        if(!flag){
            setErrors(errorSubmit);
        }
        if(flag){
            const data={
                name:inputs.name,
                email:inputs.email,
                password:inputs.password,
                phone:inputs.phone,
                address:inputs.address,
                id_country:selectedCountry,
                id_district:selectedDistrict,
                level:0
            }
            console.log(data)
            axios.post("http://localhost/projectnew/public/api/member/register",data)
            .then(response=>{
                if(response.data.errors){
                    setErrors(response.data.errors)
                    console.log(response)
                }else{
                    console.log(response)
                    navigate('/memberParents/LoginParents');
                    localStorage.clear();
                }
            })
            .catch(function(error){
                console.log(error)
                alert("loi")
            })
        }
    }
    return(
      <div id="register-parent">
        <div className="container">
          <div className="row">
            <div className="register-parent-background">
              <div className="flex">
                <Link to="/memberTutor/RegisterTutor"><h4>Tutor</h4></Link>
                <Link to="/memberParents/RegisterParents"><h4 className="background">Parents</h4></Link>
              </div>
              <div className="form-register">
                <form className="row" onSubmit={handleSubmit}>
                  <div className="col-sm-6">
                    <div>
                      <label htmlFor>Full name</label>
                      <input type="text" required name="name" onChange={handleInput} />
                    </div>
                    <div>
                      <label htmlFor>Password</label>
                      <input type="password" required name="password" onChange={handleInput} />
                    </div>
                    <div>
                      <label htmlFor>Phone number</label>
                      <input type="text" required name="phone" onChange={handleInput}/>
                    </div>
                    <div>
                        <p class="mbt-0 opacity">District</p>
                        <District selectedCountry={selectedCountry} selectedDistrict={handleDistrictSelect}/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <label htmlFor>Email Address</label>
                      <input type="text" required name="email" onChange={handleInput}/>
                    </div>
                    <div>
                      <label htmlFor>Confirm Password</label>
                      <input type="password" required name="confirmpassword" onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor>PROVINCE/CITY</label>
                        <Country onSelectCountry={handleCountrySelect}/>
                    </div>
                    <div>
                      <label htmlFor>Address</label>
                      <input type="text" required name="address" onChange={handleInput}/>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="btn-register">
                      <button className="btn btn-success">Register</button>
                    </div>
                  </div>
                  <div>
                    <Error errors={errors}/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default RegisterParents;