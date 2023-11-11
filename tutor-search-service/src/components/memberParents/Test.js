import axios from "axios";
import { useState, useEffect } from "react";


function Test(){
      const[inputs,setInput]=useState(2000000);
      const [getData , setData] = useState("")
      function handleSubmit(e){
            const total={
                inputs
            }
            axios.post("http://localhost/projectnew/public/api/member/payment",total)
            .then(response=>{
                window.location.href = response.data;
            })
            .catch(function(error){
                console.log(error);
            })
    }
    return(
        <div>
            <p>Total:</p>
            <input type="text" className="input" name="total" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Test;