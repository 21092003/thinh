import { Link, useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function ViewSaveTutor(){
    var authParents = localStorage.getItem("authParents")
    if(authParents){
        authParents=JSON.parse(authParents);
        var idParents =authParents.data.auth.id
    }
    const [getData , setData] = useState("")
    useEffect(()=>{
        axios.get(`http://localhost/projectnew/public/api/member/get/list/wish/${idParents}`)
        .then(response=>{
          console.log(response)
          setData(response.data.listutor)
        })
        .catch(function(error){
          console.log(error)
        })
    },[])
    function fetchData(){
      if(Object.keys(getData).length>0){
        return getData.map((value)=>{
            return(
              <div className="box-content mb-5">
                <div className="box-content-info">
                  <div className="box-content-info-left">
                    <img src={"http://localhost/projectnew/public/upload/"+value.tutor.avatar} alt="" />
                    <p>{value.name}</p>
                  </div>
                </div>
                <div className="row detail">
                  <div className="col-sm-8 detail-info">
                    <p>{value.tutor.desc}</p>
                  </div>
                  <div className="col-sm-4 detail-subject">
                    <div className="subject mb-2">
                      <i className="fa-solid fa-book" />{value.subject}
                    </div>
                    <div className="price mb-2">
                      <i className="fa-solid fa-dollar-sign" />{value.tutor.time}k/student/hour
                    </div>
                    <div className="location">
                      <i className="fa-solid fa-location-dot" />{value.district},{value.country} City
                    </div>
                    <div className="btn-view-container center">
                      <Link to={"/memberParents/ViewDetailTutor/" + value.tutor.id} className="btn btn-success btn-view-detail mb-2 pl-50 pr-50">View Profile</Link>
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
    return(
      <div id="saveTutor">
        <div className="container">
          <div className="row">
          <div className="col-sm-3 background-container">
                    <Link to="/memberParents/PostHistory" ><p>Post History </p></Link>
                    <a href ><p>Tutor Saved </p></a>
                    <a data-bs-toggle="collapse" className="mb-3 arrow-link" data-bs-target="#demo"><p className="no-b-bt">Personal information <i className="fa-solid fa-chevron-down arrow-icon" /></p></a>
                    <div id="demo" className="collapse">
                        <ul>
                        <li><Link className="fs-14 red" to="/memberParents/UpdateMember">Edit personal information</Link></li>
                        </ul>
                    </div>
                </div>
            <div className="col-sm-9">
              <div className="content">
                <div className="content-title">
                  <p className="mbt-0">Tutor saved</p>
                </div>
                <div className="border-bt mb-4" />
                {fetchData()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default ViewSaveTutor;