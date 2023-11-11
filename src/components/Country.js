import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Country({onSelectCountry}){
  
    const[getCountry,setCountry]=useState("")
    // const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(()=>{
        axios.get('http://localhost/projectnew/public/api/get/country')
        .then(response=>{
          setCountry(response.data.country)
        })
        .catch(function(error){
          console.log(error)
        })
      },[])
    function renderCountry(){
        if(getCountry.length>0){
          return getCountry.map((value,key)=>{
              // console.log(value.name)
              // console.log(value.id)
            return(
              <option value={value.id}>{value.name}</option>
            )
          })
        }
      }
      function handleCountryChange(e){
        const countryId = e.target.value;
        // setSelectedCountry(countryId);
        onSelectCountry(countryId)
      }
    return(
      <div>
        <select onChange={handleCountryChange} required name="country">
            <option value="">Hãy Chọn Thành Phố/Tỉnh</option>
            {renderCountry()}
        </select>
      </div>
    )
}
export default Country;