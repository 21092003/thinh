import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Country from "../Country";
import District from "../District";
import Class from "../Class";
import Subject from "../Subject";
import Error from "../Error";
function EditPost(){
    const [isModalVisible, setModalVisible] = useState(false);
    const navigate =useNavigate();
    let params = useParams();
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
    useEffect(()=>{
        axios.get(`http://localhost/projectnew/public/api/member/blog/detail/`+params.id)
        .then(response=>{
          console.log(response.data.blog)
          setInput({
            title:response.data.blog.title,
            price:response.data.blog.price,
            content:response.data.blog.content,
          })
        })
        .catch(function(error){
          console.log(error)
        })
    },[])
    function handleSubmit(e){
        e.preventDefault()
        let errorSubmit = {};
        let flag=true;
        if(inputs.price==""){
            errorSubmit.name = "Vui lòng nhập số tiền bạn mong muốn/buổi";
            flag = false;
        }
        if(inputs.title==""){
            errorSubmit.price="Vui lòng nhập tiêu đề";
            flag = false;
        }
        if(inputs.content==""){
            errorSubmit.profile="vui lòng nhập content";
            flag = false;
        }
        if(!flag){
            setErrors(errorSubmit);
        }else{
            const data={
                title:inputs.title,
                id_class:selectedClass,
                id_subject:selectedSubject,
                price:inputs.price,
                content:inputs.content,
                id_country:selectedCountry,
                id_district:selectedDistrict,
            }
            axios.post("http://localhost/projectnew/public/api/member/blog/detail/"+params.id,data)
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
                  <div className="modal-content modal-editPost">
                    {/* Modal Header */}
                    <div className="modal-header mb-2">
                      <h4 className="modal-title">
                        Notification
                      </h4>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body mb-2">
                        Bạn Đã Cập Nhập Bài Đăng Thành Công
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                        onClick={() => {
                            setModalVisible(false);
                            navigate('/memberParents/PostHistory');
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
        <div id="editPost">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <form className="form-editPost" onSubmit={handleSubmit}>
                            <div className="form-title">
                            <p>Edit Post</p>
                            </div>
                            <div className="row">
                            <div className="col-sm-7">
                                <div className="editPost-content">
                                <div>
                                    <p>Title <span>*</span></p>
                                    <input type="text" required name="title" value={inputs.title} onChange={handleInput}/>
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
                                    <input type="text" required placeholder="example:200,000" name="price" value={inputs.price} onChange={handleInput} />
                                </div>
                                <div>
                                    <p>Province/City <span>*</span></p>
                                    <Country onSelectCountry={handleCountrySelect}/>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="editPost-content-district">
                                    <p>District <span>*</span></p>
                                    <District selectedCountry={selectedCountry} selectedDistrict={handleDistrictSelect}/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="editPost-content-schedule pb-4">
                                    <p>Content <span>*</span></p>
                                    <input type="text" placeholder="Example shedule (monday,thurdays,sunday)" name="content" value={inputs.content} onChange={handleInput} />
                                </div>
                            </div>
                            </div>
                            <div className="btn-save center">
                                <button className="btn btn-success">Edit</button>
                                <Link to="/memberParents/PostHistory" className="btn btn-success btn-back" >Back</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {renderModal()}
        </div>
    )
}
export default EditPost;