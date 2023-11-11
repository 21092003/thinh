import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function ViewDetailTutor(){
    const navigate =useNavigate();
    let params = useParams();
    const [getData , setData] = useState("")
    useEffect(()=>{
        axios.get(`http://localhost/projectnew/public/api/view/tutor/`+params.id)
        .then(response=>{
          console.log(response)
          setData(response.data.tutor)
        })
        .catch(function(error){
          console.log(error)
        })
      },[])
      function fetchData(){     
        if(Object.keys(getData).length>0){
            return getData.map((value)=>{
                console.log(value)
                return(
                    <div className="row mt-5">
                        <div className="col-sm-2">
                        <div className="viewTutor-avatar">
                            <img src={"http://localhost/projectnew/public/upload/"+value.avatar} alt="" />
                        </div>
                        </div>
                        <div className="col-sm-10">
                        <div className="viewTutor-name">
                            <h5>{value.name}</h5>
                        </div>
                        <div className="border-bt mb-2" />
                        <div className="viewTutor-Subject">
                            <h5><i className="fa-solid fa-book-bookmark" /> {value.subject}</h5>
                        </div>
                        <div className="border-bt mb-2" />
                        <div className="flex viewTutor-district-formTeach">
                            <h5 className="mr-20"><i className="fa-solid fa-location-dot" /> {value.district}</h5>
                            <h5><i className="fa-solid fa-briefcase" /> {value.type}</h5>
                        </div>
                        <div className="border-bt mb-2" />
                        </div>
                        <div className="col-sm-12 mt-4 ml-50 mb-5">
                        <div className="viewTutor-describe-yourself mt-3">
                            <div className="viewTutor-describe-yourself-title">
                            <h5>DESCRIBE YOURSELF EXPERIENCE AND QUALIFICATIONS</h5>
                            </div>
                            <div className="viewTutor-describe-yourself-details">
                            <p className="w-80">{value.desc}</p>
                            </div>
                        </div>
                        <div className=" row viewTutor-personal-info">
                            <div className="col-sm-12 viewTutor-personal-info-title mb-3">
                            <h5>PERSONAL INFORMATION</h5>
                            </div>
                            <div className="col-sm-5">
                            <div className="viewTutor-personal-info-name">
                                <p className="fs-14"><span className="font-weight">FIRST AND LASTNAME : </span> {value.name}</p>
                            </div>
                            <div className="viewTutor-personal-info-gender">
                                <p className="fs-14"><span className="font-weight">Gender : </span>{value.sex}</p>
                            </div>
                            <div className="viewTutor-personal-info-job">
                                <p className="fs-14"><span className="font-weight">Job : </span>{value.role}</p>
                            </div>
                            <div className="viewTutor-personal-info-schedule">
                                <p className="fs-14"><span className="font-weight">Class schedule : </span>{value.schedule}</p>
                            </div>
                            </div>
                            <div className="col-sm-7">
                            <div className="viewTutor-personal-info-address">
                                <p className="fs-14"><span className="font-weight">address: </span>{value.address}</p>
                            </div>
                            <div className="viewTutor-personal-info-birthday">
                                <p className="fs-14"><span className="font-weight">Birthday : </span>{value.birth}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return(
        <div id="viewTutor">
        <div className="container">
          {fetchData()}
        </div>
      </div>
    )
}
export default ViewDetailTutor;