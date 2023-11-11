import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../Error";
import Country from "../Country";
import District from "../District";
import Class from "../Class";
import Subject from "../Subject";
function UpdateTutor(){
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedDistrict ,setSelectedDistrict] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject ,setSelectedSubject] = useState('');
    const[getFilesAvatar,setFilesAvatar]=useState("")
    const[avatar,setAvatar]=useState("")
    const[getFilesCertificate,setFilesCertificate]=useState("")
    const[certificate,setCertificate]=useState("")
    const [isAvatarChanged, setAvatarChanged] = useState(false);
    const [isCertificateChanged, setCertificateChanged] = useState(false);
    const handleCountrySelect = (countryId) => {
      setSelectedCountry(countryId);
    };
    const handleDistrictSelect = (districtId)=>{
      setSelectedDistrict(districtId)
    }
    const handleClassSelect =(classId) =>{
        setSelectedClass(classId)
      }
      const handleSubjectSelect = (subjectId)=>{
        setSelectedSubject(subjectId)
      }
    const[inputs,setInputs]=useState({
        username:"",
        pass:"",
        name:"",
        phone:"",
        sex:"",
        birthday:"",
        address:"",
        desc:"",
        role:"",
        price:"",
        type:"",
        schedule:"",
    })
    const [isModalVisible, setModalVisible] = useState(false);
    const[errors,setErrors]=useState({})
    const handleInput = (e)=>{
        const nameInput = e.target.name;
        const value = e.target.value;
        setInputs((state) => ({ ...state, [nameInput]: value }));
      };
    function handleAvatarInputs(e){
          const file =e.target.files;
          let reader=new FileReader();
          reader.onload = (e)=>{
              setAvatar(e.target.result);
              setFilesAvatar(file[0]);
            };
            reader.readAsDataURL(file[0]);
            setAvatarChanged(true);
    }
    function handleCertificateInputs(e){
          const file =e.target.files;
          let reader=new FileReader();
          reader.onload = (e)=>{
            setCertificate(e.target.result);
            setFilesCertificate(file[0]);
        };
        reader.readAsDataURL(file[0]);
        setCertificateChanged(true);
    }
    let authTutor=localStorage.getItem("authTutor");
    if(authTutor){
        authTutor = JSON.parse(authTutor);
    }
    useEffect(()=> {
        setInputs({
            username:authTutor.data.auth.username,
            name:authTutor.data.auth.name,
            sex:authTutor.data.auth.sex,
            email:authTutor.data.auth.email,
            address:authTutor.data.auth.address,
            phone:authTutor.data.auth.phone,
            birthday:authTutor.data.auth.birth,
            desc:authTutor.data.auth.desc,
            role:authTutor.data.auth.role,
            type:authTutor.data.auth.type,
            price:authTutor.data.auth.time,
            schedule:authTutor.data.auth.schedule,
        });
    },[])
    
    function handleSubmit(e){
        e.preventDefault();
        let errorSubmit = {};
        let flag=true;
        if(inputs.name==""){
            errorSubmit.name="Vui lòng nhập tên ";
            flag = false;
        }
        if(inputs.phone==""){
            errorSubmit.phone="Vui lòng nhập số điện thoại";
            flag = false;
        }
        if(inputs.address==""){
            errorSubmit.address="Vui lòng nhập địa chỉ";
            flag = false;
        }
        if(inputs.username==""){
            errorSubmit.username="Vui lòng nhập username ";
            flag = false;
        }
        if(inputs.sex==""){
            errorSubmit.sex="Vui lòng chọn giới tính";
            flag = false;
        }
        if(inputs.desc==""){
            errorSubmit.desc="Vui lòng nhập giới thiệu bản thân về bạn";
            flag = false;
        }
        if(inputs.role==""){
            errorSubmit.role="Vui lòng nhập hiện tại bạn đang làm gì";
            flag = false;
        }
        if(inputs.type==""){
            errorSubmit.type="Vui lòng chọn hình thức dạy";
            flag = false;
        }
        if(inputs.price==""){
            errorSubmit.price="Vui lòng giá tiền/buổi học mà bạn mong muốn";
            flag = false;
        }
        if(inputs.schedule==""){
            errorSubmit.schedule="Vui lòng nhập lịch dạy mà bạn có thể dạy";
            flag = false;
        }
        
        if(getFilesAvatar){
            // Validate avatar file
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
        if(getFilesCertificate){
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
        }else{
            const data={
                id:authTutor.data.auth.id,
                username:inputs.username,
                name:inputs.name,
                email:inputs.email,
                password:inputs.pass ? inputs.pass : "",
                phone:inputs.phone,
                address:inputs.address,
                birth:inputs.birthday,
                id_country:selectedCountry,
                id_district:selectedDistrict,
                desc:inputs.desc,
                role:inputs.role,
                time:inputs.price,
                id_class:selectedClass,
                id_subject:selectedSubject,
                type:inputs.type,
                schedule:inputs.schedule,
                avatar: isAvatarChanged ? avatar : "",
                certificate: isCertificateChanged ? certificate : "",
            }
            console.log(data)
            axios.post("http://localhost/projectnew/public/api/tutor/update",data)
            .then(response=>{
                console.log(response)
                    // Cập nhật trạng thái trong ReactJS 
                var authUpdateTutor={}
                authUpdateTutor.data={}
                    // auth.user.auth_token=response.data
                authUpdateTutor.data.auth=response.data.tutor
                localStorage.setItem("authTutor",JSON.stringify(authUpdateTutor))
                setModalVisible(true);
            })
        }
    }
    function renderModal(){
        return (
            <div>
              {/* Your existing code */}
              {isModalVisible && (
                <div className="modal modal-notification" id="myModal" style={{ display: isModalVisible ? 'block' : 'none' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header mb-2">
                      <h4 className="modal-title">
                        Notification
                      </h4>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body mb-2">
                        Bạn Đã Cập Nhập Tài Khoản Thành Công 
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                        onClick={() => setModalVisible(false)}
                        >
                        Đóng
                    </button>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
        );
    }
    return(
        <div id="editInfoTutor">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 background-container mb-5">
                        <Link to="/memberTutor/ViewSavePostForTutor" ><p>Post Saved </p></Link>
                        <a data-bs-toggle="collapse" className="mb-3 arrow-link" data-bs-target="#demo"><p className="no-b-bt">Personal information <i className="fa-solid fa-chevron-down arrow-icon" /></p></a>
                        <div id="demo" className="collapse show">
                        <ul>
                            <li><Link to="/memberTutor/UpdateTutor" className="fs-14 red">Edit personal information</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-sm-9">
                    <div className="mt-5 padding">
                    <form className="row edit-profile-tutor" onSubmit={handleSubmit}>
                        <div className="col-sm-12">
                            <div className="edit-profile-tutor-title">
                            <p>Profile Tutor</p>
                            </div>
                            <div className="edit-profile-tutor-information">
                            <p>Personal information</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <p className="mb-0">USERNAME</p>
                                <input type="text" required name="username" onChange={handleInput} value={inputs.username}/>
                            </div>
                            <div>
                                <p className="mb-0">FULL NAME</p>
                                <input type="text" required name="name" onChange={handleInput} value={inputs.name}/>
                            </div>
                            <div>
                                <p className="mb-0">PHONE</p>
                                <input type="text" required name="phone" onChange={handleInput} value={inputs.phone}/>
                            </div>
                            
                            <div>
                                <p className="mb-0">SEX</p>
                                <select name="sex" id required onChange={handleInput} value={inputs.sex}>
                                    <option>Vui lòng chọn giới tính</option>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                            <div>
                                <p className="mb-0">ADDRESS CURRENT</p>
                                <input type="text" required name="address" onChange={handleInput} value={inputs.address}/>
                            </div>
                        </div>
                        <div className="col-sm-6 pdl">
                            <div>
                                <p className="mb-0">Email</p>
                                <div className="ta-end">
                                    <input type="text" required name="email" onChange={handleInput} value={inputs.email} readOnly/>
                                </div>
                            </div>
                            <div>
                                <p className="mb-0">Password</p>
                                <div className="ta-end">
                                    <input type="text" name="pass" onChange={handleInput}/>
                                </div>
                            </div>
                            <div>
                                <p className="mb-0">BIRTHDAY</p>
                                <div className="ta-end">
                                    <input type="date" name="birthday" id="txtDate" min="1900-01-01" max="2023-11-05" onChange={handleInput} value={inputs.birthday}/>
                                </div>
                            </div>
                            <div>
                                <p className="mb-0">PROVINCE/CITY</p>
                                <div className="ta-end">
                                    <Country onSelectCountry={handleCountrySelect}/>
                                </div>
                            </div>
                            <div>
                                <p className="mb-0">District</p>
                                <div className="ta-end">
                                    <District selectedCountry={selectedCountry} selectedDistrict={handleDistrictSelect}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 form-introduce-yourself">
                            <div>
                                <p className="mb-0">INTRODUCE YOURSELF</p>
                                <p className="italic">(You need to write down all your strengths and some of your experience to be accepted into the class as soon as possible)</p>
                                <input type="text" required name="desc" onChange={handleInput} value={inputs.desc}/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="register-profile-professional mb-4 ">
                            <p className="mb-0">PROFESSIONAL PROFILE</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                            <div>
                                <p className="mb-0">JOB?</p>
                                <input type="text" required name="role" onChange={handleInput} value={inputs.role}/>
                            </div>
                            <div>
                                <p className="mb-0">CLASS WILL TEACH</p>
                                <Class onSelectClass={handleClassSelect}/>
                            </div>
                            <div>
                                <p className="mb-0">TEACHING FORMS</p>
                                <select name="type" id required onChange={handleInput} value={inputs.type}>
                                    <option>Hình thức dạy</option>
                                    <option>Online</option>
                                    <option>Offline</option>
                                    <option>Online/Offline</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-sm-6 pdl">
                            <div>
                                <p className="mb-0">TEACHING DETAILS/HOURS</p>
                                <div className="ta-end">
                                    <input type="text" name="price" required onChange={handleInput} value={inputs.price}/>
                                </div>
                            </div>
                            <div>
                                <p className="mb-0">SUBJECTS TEACH ?</p>
                                <div className="ta-end">
                                    <Subject selectedClass={selectedClass} selectedSubject={handleSubjectSelect}/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 form-class-schedule">
                            <div>
                                <p className="mb-0">SCHEDULE AVAILABLE</p>
                                <input type="text" name="schedule" required onChange={handleInput} value={inputs.schedule}/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="edit-tutor-confirmation mb-4">
                                <p className="mb-0">PHOTO CONFIRMING TUTOR INFORMATION</p>
                            </div>
                        </div>
                        <div className="row form-upload-image">
                            <div className="col-sm-6 center">
                                <p className="fs-14">REPRESENTATIVE PHOTO (MUST SHOW FACE, SHOOTED ALONE)</p>
                                <img src={"http://localhost/projectnew/public/image/Image13.jpg"} alt="" className="w426-h250" /><br />
                                <p className="btn" id="chooseAvatar" ><i className="fa-solid fa-download" /> Select photo</p>
                                <input type="file" id="fileInputAvatar" style={{display: 'none'}} name="avatar" onChange={handleAvatarInputs} />
                                <p id="textAvatar" />
                            </div>
                            <div className="col-sm-6 center">
                                <p className="fs-14">STUDENT CARD/DEGREE (ABSOLUTELY CONFIDENTIAL, NOT DISPLAYED)</p>
                                <img src={"http://localhost/projectnew/public/image/Image14.jpg"} alt="" /><br />
                                <p id="chooseDegree" className="btn"><i className="fa-solid fa-download" /> Select photo</p>
                                <input type="file" id="fileInputDegree" style={{display: 'none'}}  onChange={handleCertificateInputs} name="certificate"/>
                                <p id="textDegree" />
                            </div>
                        </div>
                        <div className="col-sm-12 center mt-4">
                            <button className="btn btn-success btn-edit mb-5">Edit</button>
                        </div>
                            <Error errors={errors}/>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            {renderModal()}
        </div>
    )
}
export default UpdateTutor;