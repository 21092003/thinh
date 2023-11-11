import { Link } from "react-router-dom";
function PersonalInfo(){
    return(
        <div className="container">
        <div className="row">
          <div className="col-sm-3 background-container mb-5">
            <Link to="/memberParents/PostHistory" ><p>Post History </p></Link>
            <a href ><p>Tutor Saved </p></a>
            <a data-bs-toggle="collapse" className="mb-3 arrow-link" data-bs-target="#demo"><p className="no-b-bt">Personal information <i className="fa-solid fa-chevron-down arrow-icon" /></p></a>
            <div id="demo" className="collapse">
              <ul>
                <li><Link className="fs-14" to="/memberParents/UpdateMember">Edit personal information</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}
export default PersonalInfo;