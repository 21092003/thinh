import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function ViewPost(){
    const [getData , setData] = useState("")
    useEffect(()=>{
        axios.get(`http://localhost/projectnew/public/api/blog`)
        .then(response=>{
          console.log(response)
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
              <div className="col-sm-7">
                <div className="row viewPost-content">
                  <div className="col-sm-3 mt-3">
                    <div className="viewPost-content-avatar">
                      <img src={"http://localhost/projectnew/public/image/Image15.png"} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-9 mt-3">
                    <div className="viewPost-content-name mb-2">
                      <p>{value.name}</p>
                    </div>
                    <div className="viewPost-content-detail">
                      <div className="viewPost-content-detail-title">
                        <p>{value.title}</p>
                      </div>
                      <div className="viewPost-content-detail-form">
                        <p>Class: <span>{value.class}</span></p>
                      </div>
                      <div className="viewPost-content-detail-subject">
                        <p>Subject: {value.subject}</p>
                      </div>
                      <div className="viewPost-content-detail-price">
                        <p>Tuition/ 1 student: <span>{value.price}k</span></p>
                      </div>
                      <div className="viewPost-content-detail-address mb-3">
                        <p>Address: <span>{value.country},{value.district}</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="viewPost-content-detail-content mb-4">
                      <p>{value.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
        })
    }
    }
    return(
      <div>
        <div id="viewPost">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="viewPost-title">
                  <p>Post</p>
                </div>
                <div className="border-bt" />
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-7">
                  <div className="row container-btn-post center mb-4">
                    <div className="col-sm-12 mb-4">
                      <div className="border">
                        <p>Bạn có muốn tìm gia sư ?</p>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <Link to="/memberParents/CreatePost" className="btn btn-success btn-post">Create Post</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {fetchData()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default ViewPost;