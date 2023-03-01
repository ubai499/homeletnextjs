import Link from "next/link"
import { useState } from "react"
export default function Login(){

const[userName,setUserName] = useState("");
const[password,setPassword] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
}
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
                Do nott Have an Account? <Link href="/register">Sign Up!</Link>
                </span>
                </div>
                <form method="post" className="login" onSubmit={handleSubmit}>
                <div className="form-row form-row-wide">
                  <input
                    type="text"
                    className="input-text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    id="email"
                    placeholder="Email Address or Phone Number"
                    defaultValue=""
                    />
                </div>
                <div className="form-row form-row-wide">
                <input
                  className="input-text"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  <Link className="lost_password" href="forgotpassword">
                  Forgot Password?
                  </Link>
                </div>
                <input
                type="submit"
                className="button full-width border margin-top-10"
                name="login"
                defaultValue="Login"
                value="Login"
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