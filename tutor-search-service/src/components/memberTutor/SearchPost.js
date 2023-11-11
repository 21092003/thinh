import axios from "axios";
import { useEffect, useState } from "react";

function SearchPost(){
      const[inputs,setInput]=useState({
        search:"",
      })
      const [getData , setData] = useState("")
      const [getCount, setCount] = useState(0)
      const handleInput = (e)=>{
        const nameInput = e.target.name;
        const value = e.target.value;
        console.log(value)
        setInput(state=>({...state,[nameInput]:value}))
      }
      var authTutor = localStorage.getItem("authTutor")
      if(authTutor){
        authTutor=JSON.parse(authTutor);
        var id_tutor= authTutor.data.auth.id;
      }
      function handleSubmit(e){
        e.preventDefault();
            const data={
                word:inputs.search
            }
            console.log(data)
            axios.post("http://localhost/projectnew/public/api/tutor/search",data)
            .then(response=>{
                console.log(response)
                setData(response.data.blog)
                setCount(response.data.blog.lenght)
            })
            .catch(function(error){
                alert("lỗi")
            })
    }
    function renderPostSearch(){
        if(Object.keys(getData).length>0){
            return getData.map((value)=>{
                console.log(value)
                return(
                  <div className="col-sm-7">
              <div className="row search-content">
                <div className="col-sm-2 mt-3">
                  <div className="search-content-avatar">
                    <img src={"http://localhost/projectnew/public/image/Image15.png"} alt="" />
                  </div>
                </div>
                <div className="col-sm-10 mt-3">
                  <div className="search-content-name">
                    <p>{value.member}</p>
                  </div>
                  <div className="search-content-detail">
                    <div className="search-content-detail-title">
                      <p>{value.title}</p>
                    </div>
                    <div className="search-content-detail-form">
                      <p>Class: <span>{value.class}</span></p>
                    </div>
                    <div className="search-content-detail-subject">
                      <p>Subject: {value.subject}</p>
                    </div>
                    <div className="search-content-detail-price">
                      <p>Tuition/ 1 student: <span>{value.price}k</span></p>
                    </div>
                    <div className="search-content-detail-address mb-2">
                      <p>Address: <span>{value.country},{value.district}</span></p>
                    </div>
                  </div>
                </div>
                <div className="search-content-detail-content mb-3">
                    <p>{value.content}</p>
                  </div>
                <div className="col-sm-12 mb-3">
                  <div className="flex justify-content-end">
                    <div className="btn-save">
                      <button onClick={() => savePost(
                            value.id
                        )}
                      className="btn btn-success">Save</button>
                    </div>
                    <div className="btn-apply">
                      <button className="btn btn-success">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
                )
            })
        }else{
          return(
            <div class="no-search">
              <p class="center">Không có bài đăng nào được hiển thị</p>
            </div>
          )
        }
    }
    function savePost(id_blog){
      const data={
          id_tutor:id_tutor,
          id_blog:id_blog,
      }
      axios.post("http://localhost/projectnew/public/api/tutor/add/wishlist/blog",data)
      .then(response=>{
          console.log(response)
      })
  }
    return(
        <div id="search">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <form className="search-normal" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Post Name" name="search" onChange={handleInput}/>
                <button type="submit" className="btn btn-search">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </form>
              <div className="content">
                <div className="title-content">
                  <p>Đã tìm kiếm được {getCount} bài đăng</p>
                </div>
                <div class="row justify-content-center mt-5">
                    {renderPostSearch()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default SearchPost;