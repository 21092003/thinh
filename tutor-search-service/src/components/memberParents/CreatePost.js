import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Country from "../Country";
import District from "../District";
import Class from "../Class";
import Subject from "../Subject";
import Error from "../Error";
function CreatePost(){
    const [isModalVisible, setModalVisible] = useState(false);
    const navigate =useNavigate();
    var authParents = localStorage.getItem("authParents")
    if(authParents){
      authParents=JSON.parse(authParents);
      var idParents= authParents.data.auth.id;
    }
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedDistrict ,setSelectedDistrict] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject ,setSelectedSubject] = useState('');

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

    const [inputs,setInput]=useState({
      price:"",
      content:"",
      title:"",
    })
    const[errors,setErrors]=useState({})
    const handleInput = (e)=>{
      const nameInput = e.target.name;
      const value = e.target.value;
      setInput(state=>({...state,[nameInput]:value}))
    }
    function handleCreatePost(e){
          e.preventDefault();
          let errorSubmit = {};
          let flag=true;
          if(inputs.title==""){
              errorSubmit.title = "Vui lòng nhập tiêu đề";
              flag = false;
          }
          if(inputs.price==""){
              errorSubmit.price = "Vui lòng nhập giá của 1 buổi dạy học";
              flag = false;
          }
          if(inputs.content==""){
              errorSubmit.content="Vui lòng nhập content(Lịch rảnh của bạn hoặc chú thích) ";
              flag = false;
          }
          if(!authParents){
            alert("vui lòng đăng nhập để đăng bài")
            navigate('/memberParents/LoginParents')
          }
          if(!flag){
              setErrors(errorSubmit);
          }
          if(flag){
              const data={
                title:inputs.title,
                id_member:idParents,
                id_class:selectedClass,
                id_subject:selectedSubject,
                price:inputs.price,
                content:inputs.content,
                id_country:selectedCountry,
                id_district:selectedDistrict,
              }
              console.log(data)
              axios.post("http://localhost/projectnew/public/api/member/post/blog",data)
              .then(response=>{
                  console.log(response)
                  setModalVisible(true);
              })
              .catch(function(error){
                  console.log(error)
              })
          }
    }
    function renderModal(){
        return (
            <div>
              {/* Your existing code */}
              {isModalVisible && (
                <div className="modal modal-notification mb-4" id="myModal" style={{ display: isModalVisible ? 'block' : 'none' }}>
                <div className="modal-dialog">
                  <div className="modal-content modal-createPost">
                    {/* Modal Header */}
                    <div className="modal-header mb-2">
                      <h4 className="modal-title">
                        Notification
                      </h4>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body mb-2">
                        Bạn Đã Đăng Bài Thành Công
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                        onClick={() => {
                            setModalVisible(false);
                            navigate('/memberParents/ViewPost');
                        }}
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
        <div id="createPost">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <div onSubmit={handleCreatePost} className="form-createPost">
                            <div className="form-title">
                            <p>Create a Post</p>
                            </div>
                            <div className="row">
                            <div className="col-sm-7">
                                <div className="createPost-content">
                                <div>
                                    <p>Title <span>*</span></p>
                                    <input type="text" required name="title" onChange={handleInput} />
                                </div>
                                <div>
                                    <p>Class <span>*</span></p>
                                    <Class onSelectClass={handleClassSelect}/>
                                </div>
                                <div>
                                    <p>Subjects <span>*</span></p>
                                    <Subject selectedClass={selectedClass} selectedSubject={handleSubjectSelect}/>
                                </div>
                                <div>
                                    <p>Cost <span>*</span></p>
                                    <input type="text" required placeholder="example:200,000" name="price" onChange={handleInput} />
                                </div>
                                <div>
                                    <p>Province/City <span>*</span></p>
                                    <Country onSelectCountry={handleCountrySelect}/>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="createPost-content-district">
                                <p>District <span>*</span></p>
                                    <District selectedCountry={selectedCountry} selectedDistrict={handleDistrictSelect}/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="createPost-content-schedule pb-4">
                                <p>Content  <span>*</span></p>
                                <input type="text" placeholder="Example shedule " name="content" onChange={handleInput}/>
                                </div>
                            </div>
                            </div>
                            <div className="btn-container center">
                                <button className="btn btn-success btn-post" onClick={handleCreatePost}>Post</button>
                                <Link to="/memberParents/ViewPost" className="btn btn-success btn-back" >Back</Link>
                            </div>
                            <Error errors={errors}/>
                        </div>
                    </div>
                </div>
            </div>
            {renderModal()}
        </div>
    )
}
export default CreatePost;