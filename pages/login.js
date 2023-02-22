import Head from "next/head"
import Link from "next/link"
export default function Login(){
    return(
        <>
        <div class="margin-top-65"></div>
        <div className="container">
  <div className="row">
    <div className="col-md-6 col-md-offset-3">
      <div className="my-account">
        <div className="tabs-container">
          {/* Login */}
          <div className="utf-welcome-text-item">
            <h3>Welcome Back Sign in to Continue</h3>
            <span>
              Don't Have an Account? <Link href="/register">Sign Up!</Link>
            </span>
          </div>
          <form method="post" className="login">
            <div className="form-row form-row-wide">
              <input
                type="text"
                className="input-text"
                name="email"
                id="email"
                placeholder="Email Address"
                defaultValue=""
              />
            </div>
            <div className="form-row form-row-wide">
              <input
                className="input-text"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <div className="form-row">
              <div className="checkbox margin-top-10 margin-bottom-10">
                <input type="checkbox" id="two-step" />
                <label htmlFor="two-step">
                  <span className="checkbox-icon" /> Remember Me
                </label>
              </div>
              <a className="lost_password" href="forgot_password.html">
                Forgot Password?
              </a>
            </div>
            <input
              type="submit"
              className="button full-width border margin-top-10"
              name="login"
              defaultValue="Login"
            />
            <div className="utf-social-login-separator-item">
              <span>Or Login in With</span>
            </div>
            <div className="utf-social-login-buttons-block">
              <button className="button social-login via-twitter">
                <i className="icon-brand-facebook-f" /> Facebook
              </button>
              <button className="button social-login via-gplus">
                <i className="icon-brand-google" /> Google
              </button>
              <button className="button social-login via-facebook">
                <i className="icon-brand-twitter" /> Twitter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
        </div>
        <div class="margin-top-65"></div>
        </>
    )
}