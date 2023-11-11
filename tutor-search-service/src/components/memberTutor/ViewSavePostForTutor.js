import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ViewSavePostForTutor(){
    const [getData , setData] = useState("")
    var authTutor = localStorage.getItem("authTutor")
    if(authTutor){
      authTutor=JSON.parse(authTutor);
      var id_tutor= authTutor.data.auth.id;
    }
    useEffect(()=>{
        axios.get(`http://localhost/projectnew/public/api/tutor/get/wishlist/blog/${id_tutor}`)
        .then(response=>{
          setData(response.data.listblog)
          console.log(response.data.listblog)
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
                    <div className="col-sm-11 padding">
                <div className="row ViewSavePostForTutor-content">
                  <div className="col-sm-2 mt-3">
                    <div className="ViewSavePostForTutor-content-avatar">
                      <img src={"http://localhost/projectnew/public/image/Image15.png"} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-8 mt-3">
                    <div className="ViewSavePostForTutor-content-name">
                      <h5>{value.name}</h5>
                    </div>
                    <div className="ViewSavePostForTutor-content-detail">
                      <div className="Post-content-detail-title">
                        <p>{value.title}</p>
                      </div>
                      <div className="ViewSavePostForTutor-content-detail-class">
                        <p>{value.class}</p>
                      </div>
                      <div className="ViewSavePostForTutor-content-detail-subject">
                        <p>{value.subject}</p>
                      </div>
                      <div className="ViewSavePostForTutor-content-detail-price">
                        <p>Tuition/ 1 student: <span>{value.price}k</span></p>
                      </div>
                      <div className="ViewSavePostForTutor-content-detail-address">
                        <p>Address: <span>{value.district},{value.country}</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 mt-3">
                    <div className="dropdown">
                      <a data-bs-toggle="dropdown">
                        <i className="fas fa-ellipsis-h" />
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 mb-3 ml30 mt-3">
                    <div className="ViewSavePostForTutor-content-detail-content">
                      <p className="w-90">{value.content}</p>
                    </div>
                  </div>
                  <div className="col-sm-12 mb-3">
                    <div className="ViewSavePostForTutor-btn-container-Apply ta-end">
                      <button className="btn btn-success">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
                )
            })
        }
      }
    return(
        <div id="ViewSavePostForTutor">
        <div className="container">
          <div className="row">
          <div className="col-sm-3 background-container mb-5">
            <Link to="/memberTutor/ViewSavePostForTutor" ><p>Post Saved </p></Link>
            <a data-bs-toggle="collapse" className="mb-3 arrow-link" data-bs-target="#demo"><p className="no-b-bt">Personal information <i className="fa-solid fa-chevron-down arrow-icon" /></p></a>
            <div id="demo" className="collapse">
              <ul>
                <li><Link to="/memberTutor/UpdateTutor" className="fs-14">Edit personal information</Link></li>
              </ul>
            </div>
          </div>
            <div className="col-sm-9">
              <div className="ViewSavePostForTutor-title">
                <p className="mbt-0">Post History</p>
              </div>
              <div className="border-bt" />
              {fetchData()}
            </div>
          </div>
        </div>
      </div>
    )
}
export default ViewSavePostForTutor;