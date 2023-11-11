import { useState,useEffect } from "react";
import axios from "axios";
function Subject({selectedClass,selectedSubject}){
    const [getSubject,setSubject] = useState("");
    useEffect(() => {
        if (selectedClass) {
          axios.get(`http://localhost/projectnew/public/api/get/subject/${selectedClass}`)
            .then(response => {
              setSubject(response.data.subject);
            })
            .catch(error => {
              console.error('Error fetching subject: ', error);
            });
        } else {
          setSubject([]); // Reset danh sách quận/huyện nếu không có tỉnh/thành phố được chọn
        }
      }, [selectedClass]);
      function handleSubjectChange(e){
        const subjectId = e.target.value;
        selectedSubject(subjectId)
      }
    function renderSubject(){
        if(getSubject.length>0){
          return getSubject.map((value)=>{
                // console.log(value.name)
                // console.log(value.id)
              return(
                <option value={value.id}>{value.name}</option>
              )
            })
        }
    }
    return(
        <div>
            <select onChange ={handleSubjectChange} name="subject" id required>
                <option value="">Chọn Môn Học Sẽ Dạy</option>
                {renderSubject()}
            </select>
        </div>
    )
}
export default Subject;