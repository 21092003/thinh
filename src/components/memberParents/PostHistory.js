import { Link, useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function PostHistory(){
    const [isModalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();
    const [getId ,setId] =useState("")
    var authParents = localStorage.getItem("authParents")
    if(authParents){
        authParents=JSON.parse(authParents);
        var idParents =authParents.data.auth.id
    }
    const [getData , setData] = useState("")
    useEffect(()=>{
        axios.get(`http://localhost/projectnew/public/api/member/blog/${idParents}`)
        .then(response=>{
        //   console.log(response)
          setData(response.data.blog)
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
                            <div className="row postHistory-content">
                                <div className="col-sm-2 mt-3">
                                    <div className="postHistory-content-avatar">
                                        <img src={"http://localhost/projectnew/public/image/Image15.png"} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-8 mt-3">
                                        <div className="postHistory-content-name">
                                        <h5>{value.name}</h5>
                                        </div>
                                        <div className="postHistory-content-detail">
                                        <div className="Post-content-detail-title">
                                            <p>{value.title}</p>
                                        </div>
                                        <div className="postHistory-content-detail-subject">
                                            <p>Subject: {value.subject}</p>
                                        </div>
                                        <div className="postHistory-content-detail-form">
                                            <p>Class: <span>{value.class}</span></p>
                                        </div>
                                        <div className="postHistory-content-detail-price">
                                            <p>Tuition/ 1 student: <span>{value.price}k</span></p>
                                        </div>
                                        <div className="postHistory-content-detail-address">
                                            <p>Address: <span>{value.country}, {value.district}</span></p>
                                        </div>
                                        </div>
                                </div>
                                <div className="col-sm-2 mt-3">
                                        <div className="dropdown">
                                        <a data-bs-toggle="dropdown">
                                            <i className="fas fa-ellipsis-h" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><button className="dropdown-item" onClick={()=> handleDelete(value.id)}>Delete</button></li>
                                            <li><Link to={"/memberParents/EditPost/"+ value.id} className="dropdown-item">Edit</Link></li>
                                        </ul>
                                        </div>
                                </div>
                                <div className="col-sm-12 mb-3 ml30 mt-3">
                                        <div className="postHistory-content-detail-content">
                                            <p className="w-90">{value.content}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
    }
    function handleDelete(id){
        setId(id)
        setModalVisible(true);
    }
    function Delete(id){   
        axios.get("http://localhost/projectnew/public/api/member/blog/delete/"+ id)
        .then((response)=>{
          setData(data => data.filter(post => post.id !== id));
        })
    }
    function renderModal(){
        return(
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
                      Bạn Có Muốn Xoá Bài Không
                  </div>
                  {/* Modal footer */}
                  <div className="modal-footer">
                  <button
                      type="button"
                      className="btn btn-success"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        Delete(getId);
                        setModalVisible(false);    
                      }}
                      >
                      Có
                  </button>
                  <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                      onClick={() => {
                          setModalVisible(false);
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
        )
    }
    return(
        <div id="postHistory">
            <div className="container mb-4">
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
                    <div className="postHistory-title">
                        <p className="mbt-0">Post History</p>
                    </div>
                    <div className="border-bt" />
                        {fetchData()}
                    </div>
                </div>
            </div>
            {renderModal()}
        </div>
    )
}
export default PostHistory;