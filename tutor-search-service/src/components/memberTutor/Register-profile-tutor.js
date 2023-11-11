import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Error from "../Error";
import District from "../District";
import Country from "../Country";
import { useNavigate } from "react-router-dom";
import Class from "../Class";
import Subject from "../Subject";
function RegisterProfileTutor(){
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDistrict ,setSelectedDistrict] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject ,setSelectedSubject] = useState('');
  const[getFilesAvatar,setFilesAvatar]=useState("")
  const[avatar,setAvatar]=useState("")
  const[getFilesCertificate,setFilesCertificate]=useState("")
  const[certificate,setCertificate]=useState("")
  /*district and country*/
  const handleCountrySelect = (countryId) => {
    setSelectedCountry(countryId);
  };
  const handleDistrictSelect = (districtId)=>{
    setSelectedDistrict(districtId)
  }

  /*class and subject*/
  const handleClassSelect =(classId) =>{
    setSelectedClass(classId)
  }
  const handleSubjectSelect = (subjectId)=>{
    setSelectedSubject(subjectId)
  }
  const navigate = useNavigate();
  const[errors,setErrors]=useState({})
  var tutor = localStorage.getItem("tutor")
  if(tutor){
      tutor=JSON.parse(tutor)
  }
  var username = tutor.username;
  var email = tutor.email;
  var password= tutor.password;
  const[inputs,setInput]=useState({
    name:"",
    phone:"",
    sex:"",
    birthday:"",
    address:"",
    desc:"",
    role:"",
    price:"",
    level:"",
    special:"",
    type:"",
    schedule:"",
  })
  const handleInput = (e)=>{
    const nameInput = e.target.name;
    const value = e.target.value;
    setInput((state) => ({ ...state, [nameInput]: value }));
  };
  function handleAvatarInputs(e){
    const file =e.target.files;
    let reader=new FileReader();
    reader.onload = (e)=>{
        setAvatar(e.target.result);
        setFilesAvatar(file[0]);
    };
    reader.readAsDataURL(file[0]);

  }
  function handleCertificateInputs(e){
    const file =e.target.files;
    let reader=new FileReader();
    reader.onload = (e)=>{
        setCertificate(e.target.result);
        setFilesCertificate(file[0]);
    };
    reader.readAsDataURL(file[0]);
  }
  const handleSubmit= (e)=>{
    e.preventDefault();
        let errorSubmit = {};
        let flag=true;
        if(inputs.name==""){
            errorSubmit.name="Vui lòng nhập tên";
            flag = false;
        }
        if(inputs.phone==""){
            errorSubmit.email = "Vui lòng nhập số điện thoại";
            flag = false;
        }
        
        if(inputs.sex==""){
            errorSubmit.password="Vui lòng chọn giới tính";
            flag = false;
        }
        if(inputs.birthday==""){
          errorSubmit.birthday="Vui lòng chọn sinh nhật của bạn";
          flag =false;
        }
        if(inputs.address==""){
          errorSubmit.address="Vui lòng nhập địa chỉ hiện tại";
          flag =false;
        }
        if(inputs.desc==""){
          errorSubmit.desc="Vui lòng nhập mô tả về bản thân";
          flag =false;
        }
        if(inputs.role==""){
          errorSubmit.role="Vui lòng nhập nghề nghiệp hiện tại";
          flag =false;
        }
        if(inputs.price==""){
          errorSubmit.price="Vui lòng nhập giá dạy mà bạn mong muốn";
          flag =false;
        }
        if(inputs.level==""){
          errorSubmit.level="Vui lòng nhập trình độ học vấn";
          flag =false;
        }
        if(inputs.special==""){
          errorSubmit.special ="Vui lòng nhập chuyên ngành của bạn ";
          flag=false;
        }
        if(inputs.type==""){
          errorSubmit.type ="Vui lòng chọn hình thức dạy";
          flag=false;
        }
        if(getFilesAvatar==""){
          errorSubmit.files="vui lòng gửi ảnh avatar của bạn";
          flag =false;
        }else{
            let size = getFilesAvatar['size'];
            
            let allowtypes = ['png','jpg','jpeg',"PNG","JPG"];
            let name =getFilesAvatar['name'];
            //console.log(name)
            let split = name.split(".")
            let typesplit= split[1]; 
            //console.log(typesplit)
            if(size>1024*1024){
                errorSubmit.files="Lỗi kích thước quá lớn vui lòng chọn tệp có lượng MB nhỏ hơn";
                flag =false;
            }
            else if(!(allowtypes.includes(typesplit))){
                errorSubmit.files="lỗi";
                flag =false;
            }
        }
        if(getFilesCertificate==""){
          errorSubmit.files="vui lòng gửi ảnh bằng cấp của bạn";
          flag =false;
        }else{
            let size = getFilesCertificate['size'];
            let allowtypes = ['png','jpg','jpeg',"PNG","JPG"];
            let name =getFilesCertificate['name'];
            //console.log(name)
            let split = name.split(".")
            let typesplit= split[1]; 
            //console.log(typesplit)
            if(size>1024*1024){
                errorSubmit.files="Lỗi kích thước quá lớn vui lòng chọn tệp có lượng MB nhỏ hơn";
                flag =false;
            }
            else if(!(allowtypes.includes(typesplit))){
                errorSubmit.files="lỗi";
                flag =false;
            }
        }
        
        if(!flag){
            setErrors(errorSubmit);
        }
        if(flag){
            const data={
              username:username,
              email:email,
              password:password,
              name:inputs.name,
              phone:inputs.phone,
              sex:inputs.sex,
              birth:inputs.birthday,
              id_country:selectedCountry,
              id_district:selectedDistrict,
              address:inputs.address,
              desc:inputs.desc,
              role:inputs.role,
              time:inputs.price,
              level:inputs.level,
              special:inputs.special,
              id_class:selectedClass,
              id_subject:selectedSubject,
              type:inputs.type,
              schedule:inputs.schedule,
              avatar:avatar,
              certificate:certificate,
              
            }
            axios.post("http://localhost/projectnew/public/api/tutor/register",data)
            .then(response=>{
                alert("Đăng Ký Thành Công")
                navigate("/memberTutor/LoginTutor")
                localStorage.clear();
            })
            .catch(function(error){
                console.log(error)
                alert("loi")
            })
        }
  }
    return(
      <div id="register-profile-tutor">
        <div className="container">
          <div className="row">
            <div className="register-profile-tutor-background">
              <div className="padding">
                <form className="row form-profile-tutor" onSubmit={handleSubmit}>
                  <div className="col-sm-12">
                    <div className="register-profile-tutor-title">
                      <p>Profile Tutor</p>
                    </div>
                    <div className="register-profile-tutor-information">
                      <p>Personal information</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <p>FULL NAME</p>
                      <input type="text" required name="name" onChange={handleInput}/>
                    </div>
                    <div>
                      <p>SEX</p>
                      <select name="sex" id required onChange={handleInput}>
                          <option>Vui lòng chọn giới tính</option>
                          <option>Nam</option>
                          <option>Nữ</option>
                        </select>
                    </div>
                    <div>
                      <p>PROVINCE/CITY</p>
                      <Country onSelectCountry={handleCountrySelect}/>
                    </div>
                    <div>
                      <p>ADDRESS CURRENT</p>
                      <input type="text" required name="address" onChange={handleInput}/>
                    </div>
                  </div>
                  <div className="col-sm-6 pdl">
                    <div>
                      <p>PHONE</p>
                      <div className="ta-end">
                        <input type="text" required name="phone" onChange={handleInput}/>
                      </div>
                    </div>
                    <div>
                      <p>BIRTHDAY</p>
                      <div className="ta-end">
                      <input type="date" name="birthday" id="txtDate" min="1900-01-01" max="2023-11-05" onChange={handleInput} />
                      </div>
                    </div>
                    <div>
                      <p>District</p>
                      <div className="ta-end">
                        <District selectedCountry={selectedCountry} selectedDistrict={handleDistrictSelect}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 form-introduce-yourself">
                    <div>
                      <p>INTRODUCE YOURSELF</p>
                      <p className="italic">(You need to write down all your strengths and some of your experience to be accepted into the class as soon as possible)</p>
                      <input type="text" required name="desc" onChange={handleInput}/>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="register-profile-professional mb-4 ">
                      <p>PROFESSIONAL PROFILE</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div>
                        <p>JOB?</p>
                        <input type="text" required name="role" onChange={handleInput}/>
                      </div>
                      <div>
                        <p>ACADEMIC LEVEL</p>
                        <input type="text" required name="level" onChange={handleInput}/>
                      </div>
                      <div>
                        <p>CLASS WILL TEACH</p>
                        <Class onSelectClass={handleClassSelect}/>
                      </div>
                      <div>
                        <p>TEACHING FORMS</p>
                        <select name="type" id required onChange={handleInput}>
                          <option>Hình thức dạy</option>
                          <option>Online</option>
                          <option>Offline</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 pdl">
                      <div>
                        <p>TEACHING DETAILS/HOURS</p>
                        <div className="ta-end">
                          <input type="text" name="price" required onChange={handleInput}/>
                        </div>
                      </div>
                      <div>
                        <p>SPECIALIZED</p>
                        <div className="ta-end">
                          <input type="text" name="special" required onChange={handleInput}/>
                        </div>
                      </div>
                      <div>
                        <p>SUBJECTS TEACH ?</p>
                        <div className="ta-end">
                          <Subject selectedClass={selectedClass} selectedSubject={handleSubjectSelect}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 form-class-schedule">
                    <div>
                      <p>SCHEDULE CAN ACCEPT CLASS</p>
                      <input type="text" name="schedule" required onChange={handleInput}/>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="register-tutor-confirmation mb-4">
                      <p>PHOTO CONFIRMING TUTOR INFORMATION</p>
                    </div>
                  </div>
                  <div className="row form-upload-image">
                    <div className="col-sm-6 center">
                      <p className="fs-14">REPRESENTATIVE PHOTO (MUST SHOW FACE, SHOOTED ALONE)</p>
                      <img src={"http://localhost/projectnew/public/image/Image13.jpg"} alt="" className="w426-h250" /><br />
                      <p className="btn" id="chooseAvatar" ><i className="fa-solid fa-download" /> Select photo</p>
                      <input type="file" id="fileInputAvatar" style={{display: 'none'}} required name="avatar" onChange={handleAvatarInputs} />
                      <p id="textAvatar" />
                    </div>
                    <div className="col-sm-6 center">
                      <p className="fs-14">STUDENT CARD/DEGREE (ABSOLUTELY CONFIDENTIAL, NOT DISPLAYED)</p>
                      <img src={"http://localhost/projectnew/public/image/Image14.jpg"} alt="" /><br />
                      <p id="chooseDegree" className="btn"><i className="fa-solid fa-download" /> Select photo</p>
                      <input type="file" id="fileInputDegree" style={{display: 'none'}} required onChange={handleCertificateInputs} name="certificate"/>
                      <p id="textDegree" />
                    </div>
                  </div>
                  <div className="col-sm-12 center mt-4">
                    <button className="btn btn-success btn-register">Register</button>
                  </div>
                  <Error errors={errors}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default RegisterProfileTutor;