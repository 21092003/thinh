import { Link } from "react-router-dom";
function PersonalInfoTutor(){
    return(
        <div className="container">
        <div className="row">
          <div className="col-sm-3 background-container mb-5">
            <Link to="/memberTutor/ViewSavePostForTutor" ><p>Post Saved </p></Link>
            <a data-bs-toggle="collapse" className="mb-3 arrow-link" data-bs-target="#demo"><p className="no-b-bt">Personal information <i className="fa-solid fa-chevron-down arrow-icon" /></p></a>
            <div id="demo" className="collapse">
              <ul>
                <li><Link to="/memberTutor/UpdateTutor" className="fs-14">Edit personal information</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}
export default PersonalInfoTutor;