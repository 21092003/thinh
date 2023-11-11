function ForgotPassword(){
    return(
        <div id="forgot-password">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="login-background">
                <div className="form-forgot-password">
                  <form className="row">
                    <div className="col-sm-12">
                      <div className="center">
                        <h3>Forgot Password</h3>
                        <h6>Enter your email for the verification process</h6>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="center">
                        <div>
                          <h6 className="email">Email</h6>
                          <input type="text" required placeholder="Email account....." />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="center btn-forgot-password">
                        <button className="btn btn-success">Forgot Password</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default ForgotPassword;