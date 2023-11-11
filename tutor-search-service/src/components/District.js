import { useState,useEffect } from "react";
import axios from "axios";
function District({selectedCountry,selectedDistrict}){
    const [getDictrict,setDistrict] = useState("");
    useEffect(() => {
        if (selectedCountry) {
          axios.get(`http://localhost/projectnew/public/api/get/district/${selectedCountry}`)
            .then(response => {
              setDistrict(response.data.district);
            })
            .catch(error => {
              console.error('Error fetching districts: ', error);
            });
        } else {
          setDistrict([]); // Reset danh sách quận/huyện nếu không có tỉnh/thành phố được chọn
        }
      }, [selectedCountry]);
      function handleDistrictChange(e){
        const districtId = e.target.value;
        selectedDistrict(districtId)
      }
    function renderDistrict(){
        if(getDictrict.length>0){
          return getDictrict.map((value)=>{
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
            <select onChange ={handleDistrictChange} name="district" id required>
                <option value="">Chọn Quận/Huyện</option>
                {renderDistrict()}
            </select>
        </div>
    )
}
export default District;