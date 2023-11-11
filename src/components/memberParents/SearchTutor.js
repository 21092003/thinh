import axios from "axios";
import { useEffect, useState } from "react";

function SearchTutor(){
      const[inputs,setInput]=useState({
        search:"",
      })
      const[getCount,setCount]=useState(0)
      const [getData , setData] = useState("")
      const handleInput = (e)=>{
        const nameInput = e.target.name;
        const value = e.target.value;
        console.log(value)
        setInput(state=>({...state,[nameInput]:value}))
      }
      function handleSubmit(e){
        e.preventDefault();
            const data={
                word:inputs.search
            }
            console.log(data)
            axios.post("http://localhost/projectnew/public/api/member/search",data)
            .then(response=>{
                console.log(response)
                setData(response.data.tutor)
                setCount(response.data.tutor.length)
            })
            .catch(function(error){
                alert("lỗi")
            })
    }
    function renderTutorSearch(){
        if(Object.keys(getData).length>0){
            return getData.map((value)=>{
                console.log(value)
                return(
                    <div className="box-content mb-5">
                        <div className="box-content-info">
                            <div className="box-content-info-left">
                            <img src={"http://localhost/projectnew/public/upload/"+value.avatar} alt="" />
                                <p>{value.name}</p>
                            </div>
                            <i className="fa-regular fa-bookmark" />
                        </div>
                        <div className="row detail">
                            <div className="col-sm-8 detail-info">
                                <p>{value.desc}</p>
                            </div>
                            <div className="col-sm-4 detail-subject">
                            <div className="subject mb-2">
                                <i className="fa-solid fa-book" />Math
                            </div>
                            <div className="price mb-2">
                                <i className="fa-solid fa-dollar-sign" />150,000/student/hour
                            </div>
                            <div className="location">
                                <i className="fa-solid fa-location-dot" />Hai Chau District,Da Nang City
                            </div>
                            <div className="btn-view-container center">
                                <button className="btn btn-success">View Profile</button>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }else{
          return(
            <div class="no-search">
              <p class="center">Không có gia sư nào được hiển thị</p>
            </div>
          )
        }
    }
    return(
        <div id="search">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <form className="search-normal" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter tutor name" name="search" onChange={handleInput}/>
                <button type="submit" className="btn btn-search">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </form>
              <div className="content">
                <div className="title-content">
                  <p class="mb-5">Đã tìm được {getCount} gia sư</p>
                </div>
              {renderTutorSearch()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default SearchTutor;