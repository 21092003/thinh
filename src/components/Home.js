function Home(){
    return(
      <div>
        <div id="slider">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="slider_content">
                  <h3>Find an expert tutor</h3>
                  <p>Connect with professional tutors. Learn easy-to-understand and valuable lessons, skills, and improve your grades with the assistance of expert tutors. Post your learning needs and let qualified tutors get in touch with you.</p>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="slider_img">
                  <img src={"http://localhost/projectnew/public/image/Image1.jpg"} alt={8888} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content-why">
          <div className="container">
            <div className="row">
              <div className="content-why-header">Why Should You Find a Tutor on TSS?</div>
              <div className="col-sm-4">
                <div className="content-why-img center">
                  <img src={"http://localhost/projectnew/public/image/Image2.jpg"} alt={8888} />
                  <h6>Learn Anything</h6>
                  <p>At TSS, we take pride in offering you limitless diversity and flexibility when it comes to subjects and educational levels. You can search for tutors in any subject, from fundamental knowledge to advanced levels. We are committed to helping you find the most suitable teacher for your learning needs.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="content-why-img center">
                  <img src={"http://localhost/projectnew/public/image/Image3.jpg"} alt={8888} />
                  <h6>Search for Tutors with Flexibility</h6>
                  <p>TSS offers unlimited flexibility in finding tutors for all subjects and educational levels. No longer constrained by time and space, you can access our tutor search platform whenever you wish and schedule sessions with tutors according to your own timetable.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="content-why-img center">
                  <img src={"http://localhost/projectnew/public/image/Image4.jpg"} alt={8888} />
                  <h6>Learn with Excellent Tutors</h6>
                  <p>At TSS, we exclusively partner with top-notch tutors who are experienced and highly rated by students. You will have the opportunity to learn alongside tutors with extensive knowledge and excellent teaching skills, ensuring you absorb knowledge optimally and effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content-how">
          <div className="container">
            <div className="row">
              <div className="content-how-header">How it works for students/parents?</div>
              <div className="col-sm-4">
                <div className="content-how-img center">
                  <img src={"http://localhost/projectnew/public/image/Image5.jpg"} alt={8888} />
                  <h6>Post your learning needs</h6>
                  <p>Post your tutor requirements. Our experts will analyze it and make it live on our job board.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="content-how-img center">
                  <img src={"http://localhost/projectnew/public/image/Image6.jpg"} alt={8888} />
                  <h6>Search for tutors according to your needs.</h6>
                  <p>Find your tutor. Tutors matching your criteria will be suggested to you.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="content-how-img center">
                  <img src={"http://localhost/projectnew/public/image/Image7.jpg"} alt={8888} />
                  <h6>Select the best tutor &amp; start learning.</h6>
                  <p>Choose the best tutors for you.<br />
                    Request the tutors "apply" to your posting before scheduling appointments.<br />
                    Please provide us with your feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="request-tutor">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <div className="request-tutor-img">
                  <img src={"http://localhost/projectnew/public/image/Image8.jpg"} alt={8888} />
                </div>
              </div>
              <div className="col-sm-5">
                <div className="request-tutor-post">
                  <h6>Request tutors for<br />
                    FREE
                  </h6>
                  <p>Post your learning requirement and let interested tutors contact you.</p>
                  <button className="btn btn-success">Request a Tutor</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="become-tutor">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="become-tutor-content">
                  <h6>Teach what you<br />
                    LOVE
                  </h6>
                  <p>Join hundreds of other professionals who earn doing what they love.</p>
                  <button className="btn btn-success">Become a Tutor</button>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="become-tutor-img">
                  <img src={"http://localhost/projectnew/public/image/Image9.jpg"} alt={8888} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="contact-content">
                  <h6>TAKE ACTION NOW TO HELP YOUR CHILD<br />
                    EXCEL IN STUDIES
                  </h6>
                  <p>Utilizing our platform not only helps your child make significant academic progress but also provides them with a true companion.</p>
                  <button className="btn contact-btn-phone"><i className="fa-solid fa-phone" /> Hotline: 0777118502</button>
                  <span>Or</span>
                  <button className="btn contact-btn-gmail"><i className="fa-regular fa-envelope" /> C1SE.42@gmail.com</button>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="contact-img">
                  <img src={"http://localhost/projectnew/public/image/Image10.jpg"} alt={8888} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Home;