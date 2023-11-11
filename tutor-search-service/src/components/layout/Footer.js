function Footer(){
    return(
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="footer-logo">
                <img src={"http://localhost/projectnew/public/image/Image12.jpg"} alt={8888} />
              </div>
              <div className="footer-contact">
                <p><i className="fa-solid fa-phone" /> 0777118502</p>
                <p><i className="fa-regular fa-envelope" /> C1SE.42@gmail.com</p>
                <p><i className="fa-solid fa-location-dot" /> 254 Nguyen Van Linh Street, Thac Gian Ward, Thanh Khe District, Da Nang City</p>
              </div>
              <div className="footer-follow-us">
                <h6>Follow us</h6>
                <div className="footer-follow-us-icon">
                  <a href="#" className="footer-follow-us-icon-facebook"><i className="fa-brands fa-facebook ml-8" /></a>
                  <a href="#" className="footer-follow-us-icon-twitter"><i className="fa-brands fa-twitter" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="flex">
                <div className="footer-top-location">
                  <p className="footer-icon-top-location"><i className="fa-solid fa-location-dot" /> Top Locations</p>
                  <div className="footer-top-location-detail">
                    <p>Da Nang</p>
                    <p>Ho Chi Minh</p>
                    <p>HaNoi</p>
                    <p>Hue</p>
                    <p>Quang Tri</p>
                    <p>All Locations</p>
                  </div>
                </div>
                <div className="footer-top-subject">
                  <p className="footer-icon-top-subject"><i className="fa-solid fa-graduation-cap" /> Top subject</p>
                  <div className="footer-top-subject-detail">
                    <p>Math</p>
                    <p>Physics</p>
                    <p>English</p>
                    <p>Chemistry</p>
                    <p>Biology</p>
                    <p>All Subjects</p>
                  </div>
                </div>
                <div className="footer-other">
                  <p className="footer-icon-other">Others</p>
                  <div className="footer-other-detail">
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                  </div>
                </div>
              </div>
              <div className="footer-about">
                <h6>About Us</h6>
                <p>Tutor Search Service is an online platform with a simple mission - to help students and tutors find each other. Tutor Search Service has facilitated connections between millions of tutors and students across more than 64 provinces and cities in Vietnam.</p>
              </div>
              <div className="footer-end">
                <div className="flex">
                  <p>Copyright © 2002 - 2023</p>
                  <p className="footer-end-padding">Sitemap | Terms of Use | Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Footer;