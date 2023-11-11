import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function ViewListTutor(){
    const [getData , setData] = useState("")
    const [savedTutors, setSavedTutors] = useState([]);
    var authParents = localStorage.getItem("authParents")
    if(authParents){
        authParents=JSON.parse(authParents);
        var idParents =authParents.data.auth.id
    }
    useEffect(()=>{
        axios.get(`http://localhost/projectnew/public/api/view/list/tutor`)
        .then(response=>{
          console.log(response)
          setData(response.data.tutor)
          console.log(response.data.tutor)
        })
        .catch(function(error){
          console.log(error)
        })
      },[])
    function renderData(){
        if(Object.keys(getData).length>0){
            return getData.map((value)=>{
                console.log(value)
                const isTutorSaved = savedTutors.includes(value.id);
                return(
                    <div className="box-content mb-5">
                        <div className="box-content-info">
                            <div className="box-content-info-left">
                            <img src={"http://localhost/projectnew/public/upload/"+value.avatar} alt="" />
                            <p>{value.name}</p>
                            </div>
                            <div class="saveTutor">
                                <i onClick={() => SaveTutor(value.id)}
                                    className={`fa-regular fa-bookmark ${isTutorSaved ? "saved" : ""}`} />
                            </div>
                        </div>
                        <div className="row detail">
                            <div className="col-sm-8 detail-info">
                            <p>{value.desc}</p>
                            </div>
                            <div className="col-sm-4 detail-subject">
                            <div className="subject mb-2">
                                <i className="fa-solid fa-book" />{value.subject}
                            </div>
                            <div className="price mb-2">
                                <i className="fa-solid fa-dollar-sign" />{value.time}k/student/hour
                            </div>
                            <div className="location">
                                <i className="fa-solid fa-location-dot" />{value.district},{value.country}
                            </div>
                            <div className="btn-view-container center">
                                <Link to={"/memberParents/ViewDetailTutor/" + value.id} className="btn btn-success btn-view-detail mb-2 pl-50 pr-50">View Profile</Link>
                            </div>
                            <div className="btn-appointment center">
                                <button className="btn btn-success">Make An Appointment</button>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    function SaveTutor(id_tutor){
        const data={
            id_member:idParents,
            id_tutor:id_tutor,
        }
        axios.post("http://localhost/projectnew/public/api/member/wishlist",data)
        .then((response)=>{
          console.log(response)
          setSavedTutors([...savedTutors, id_tutor]);
        })
    }
    return(
        <div id="ViewListTutor">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                    <div className="content">
                        <div className="content-title">
                        <p className="mbt-0">Tutor</p>
                        </div>
                        <div className="border-bt mb-4" />
                        {renderData()}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewListTutor;