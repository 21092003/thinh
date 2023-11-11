import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
function Class({onSelectClass}){
    const[getClass,setClass]=useState("")
    
    useEffect(()=>{
        axios.get('http://localhost/projectnew/public/api/get/class')
        .then(response=>{
          setClass(response.data.class)  
        })
        .catch(function(error){
          console.log(error)
        })
      },[])
    function renderClass(){
        if(getClass.length>0){
          return getClass.map((value,key)=>{
              // console.log(value.name)
              // console.log(value.id)
            return(
              <option value={value.id}>{value.name}</option>
            )
          })
        }
      }
    function handleClassChange(e){
        const classId = e.target.value;
        onSelectClass(classId)
    }
    return(
        <div>
            <select onChange={handleClassChange} required name="class">
                <option value="">Hãy Chọn Lớp</option>
                {renderClass()}
            </select>
      </div>
    )
}
export default Class;