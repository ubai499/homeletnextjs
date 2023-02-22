export default function Popup(){
    return(
        <>
        <div
    id="utf-signin-dialog-block"
    className="zoom-anim-dialog mfp-hide dialog-with-tabs"
  >
    <div className="utf-signin-form-part">
      <ul className="utf-popup-tabs-nav-item">
        <li>
          <a href="#login">Log In</a>
        </li>
        <li>
          <a href="#register">Register</a>
        </li>
      </ul>
      <div className="utf-popup-container-part-tabs">
        {/* Login */}
        <div className="utf-popup-tab-content-item" id="login">
          <div className="utf-welcome-text-item">
            <h3>Welcome Back Sign in to Continue</h3>
            <span>
              Don't Have an Account?{" "}
              <a href="#" className="register-tab">
                Sign Up!
              </a>
            </span>
          </div>
          <form method="post" id="login-form">
            <div className="utf-no-border">
              <input
                type="text"
                name="emailaddress"
                id="emailaddress"
                placeholder="Email Address"
                required=""
              />
            </div>
            <div className="utf-no-border">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required=""
              />
            </div>
            <div className="checkbox margin-top-0">
              <input type="checkbox" id="two-step" />
              <label htmlFor="two-step">
                <span className="checkbox-icon" /> Remember Me
              </label>
            </div>
            <a href="forgot_password.html" className="forgot-password">
              Forgot Password?
            </a>
          </form>
          <button
            className="button full-width utf-button-sliding-icon ripple-effect"
            type="submit"
            form="login-form"
          >
            Log In <i className="icon-feather-chevrons-right" />
          </button>
          <div className="utf-social-login-separator-item">
            <span>Or Login in With</span>
          </div>
          <div className="utf-social-login-buttons-block">
            <button className="facebook-login ripple-effect">
              <i className="icon-brand-facebook-f" /> Facebook
            </button>
            <button className="google-login ripple-effect">
              <i className="icon-brand-google" /> Google
            </button>
            <button className="twitter-login ripple-effect">
              <i className="icon-brand-twitter" /> Twitter
            </button>
          </div>
        </div>
        {/* Register */}
        <div className="utf-popup-tab-content-item" id="register">
          <div className="utf-welcome-text-item">
            <h3>Create your Account!</h3>
            <span>
              Don't Have an Account?{" "}
              <a href="#" className="register-tab">
                Sign Up!
              </a>
            </span>
          </div>
          <form method="post" id="utf-register-account-form">
            <div className="utf-no-border margin-bottom-20">
              <select
                className="utf-chosen-select-single-item utf-with-border"
                title="Single User"
              >
                <option>Single User</option>
                <option>Agent</option>
                <option>Multi User</option>
              </select>
            </div>
            <div className="utf-no-border">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="User Name"
                required=""
              />
            </div>
            <div className="utf-no-border">
              <input
                type="text"
                name="emailaddress-register"
                id="emailaddress-register"
                placeholder="Email Address"
                required=""
              />
            </div>
            <div className="utf-no-border">
              <input
                type="password"
                name="password-register"
                id="password-register"
                placeholder="Password"
                required=""
              />
            </div>
            <div className="utf-no-border">
              <input
                type="password"
                name="password-repeat-register"
                id="password-repeat-register"
                placeholder="Repeat Password"
                required=""
              />
            </div>
            <div className="checkbox margin-top-0">
              <input type="checkbox" id="two-step0" />
              <label htmlFor="two-step0">
                <span className="checkbox-icon" /> By Registering You Confirm
                That You Accept <a href="#">Terms &amp; Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
          </form>
          <button
            className="margin-top-10 button full-width utf-button-sliding-icon ripple-effect"
            type="submit"
            form="utf-register-account-form"
          >
            Register <i className="icon-feather-chevrons-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}