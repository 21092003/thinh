import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header(){
  const navigate = useNavigate();
  var authParents = localStorage.getItem("authParents")
  var authTutor = localStorage.getItem("authTutor")
    if(authParents){
      authParents=JSON.parse(authParents);
      var nameParents =authParents.data.auth.name;
    }
    if(authTutor){
      authTutor = JSON.parse(authTutor)
      var nameTutor = authTutor.data.auth.username;
    }
    function renderLogin(){
      if(authParents){
          return(
            <div>
              <div className="dropdown">
                <a data-bs-toggle="dropdown">
                  <i class="fa-solid fa-user"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/memberParents/PersonalInfo" className="dropdown-item">Thông tin cá nhân</Link></li>
                  <li><Link to="/memberParents/UpdateAccount" className="dropdown-item">Nâng Cấp Tài Khoản</Link></li>
                  <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#myModal">Đăng xuất</button></li>
                </ul>
                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* Modal Header */}
                      <div className="modal-header">
                        <h4 className="modal-title mb-4">Bạn Có Muốn Đăng Xuất Không?</h4>
                      </div>
                      {/* Modal body */}
                      {/* Modal footer */}
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success btn-yes" data-bs-dismiss="modal" onClick={logout}>Có</button>
                        <button type="button" className="btn btn-danger btn-no" data-bs-dismiss="modal">Không</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      }else if(authTutor){
        return(
          <div>
            <div>
              <div className="dropdown">
                <a data-bs-toggle="dropdown">
                  <i class="fa-solid fa-user"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/memberTutor/PersonalInfoTutor" className="dropdown-item" >Thông tin cá nhân</Link></li>
                  <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#myModal">Đăng xuất</button></li>
                </ul>
                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* Modal Header */}
                      <div className="modal-header">
                        <h4 className="modal-title mb-4">Bạn Có Muốn Đăng Xuất Không?</h4>
                      </div>
                      {/* Modal body */}
                      {/* Modal footer */}
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success btn-yes" data-bs-dismiss="modal" onClick={logout}>Có</button>
                        <button type="button" className="btn btn-danger btn-no" data-bs-dismiss="modal">Không</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      else{
          return(
            <div>
              <Link to="/memberParents/LoginParents" className="btn header-btn-login"><i className="fa-solid fa-right-to-bracket" />  Login</Link>
              <Link to="/memberParents/RegisterParents" className="btn header-btn-register"><i className="fa-solid fa-user-plus" />  Register</Link>
            </div>
          )
      }
    }
    function logout(){  
      navigate("/memberParents/LoginParents")
      localStorage.clear();
    }
    function renderPost(){
      if(authParents){
        return(
          <Link to="/memberParents/ViewPost">Posts</Link>
        )
      }else{
        return(
          <Link to="/memberTutor/ViewPostTutor">Posts</Link>
        )
      }
    }
    function renderTutor(){
      if(authParents){
        return(
          <Link to="/memberParents/ViewListTutor">Tutor</Link>
        )
      }
    }
    function Search(){
      if(authParents){
        return(
          <Link to="/memberParents/SearchTutor">Search</Link>
        )
      }else if(authTutor){
        return(
          <Link to="/memberTutor/SearchPost">Search</Link>
        )
      }
    }
    return(
      <div>
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="header-main">
                  <div className="header-logo">
                    <Link to="/"><img src={"http://localhost/projectnew/public/image/Image12.jpg"} alt={8888} /></Link>
                  </div>
                  <h6>Tutor Search <br />
                    <span>Service</span></h6>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="header-contact">
                  <div className="header-contact-gmail"><span><i className="fa-regular fa-envelope" /> </span>C1SE.42@gmail.com<span className="header-contact-border-right" /></div>
                  <div className="header-contact-phone"><span><i className="fa-solid fa-phone" /> </span>0777118502</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="header-login">
                  {renderLogin()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-page">
          <div className="header-page-home">
            <Link to="/">
              <i className="fa-solid fa-house" />  Home
            </Link>
          </div>
          <div className="header-page-menu">
            {renderPost()}
            {renderTutor()}
            <a href>Blog</a>
            <a href>About us</a>
            {Search()}
          </div>
        </div>
      </div>
    )
}
export default Header;