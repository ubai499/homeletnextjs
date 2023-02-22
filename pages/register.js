import Heads from "components/Head"
import Head from "next/head"
import Link from "next/link"
export default function Register(){
    return(
        <>
        <div class="margin-top-65"></div>
        
        <div className="container">
  <div className="row">
    <div className="col-md-6 col-md-offset-3">
      <div className="my-account">
        <div className="tabs-container">
          {/* Register */}
          <div className="utf-welcome-text-item">
            <h3>Create Your New Account!</h3>
            <span>
              Don't Have an Account? <Link href="/login">Log In!</Link>
            </span>
          </div>
          <form method="post" className="login">
            <div className="form-row form-row-wide margin-bottom-15">
              <select
                className="utf-chosen-select-single-item utf-with-border"
                title="Single User"
                style={{ display: "none" }}
              >
                <option>Single User</option>
                <option>Agent</option>
                <option>Multi User</option>
              </select>
              <div
                className="chosen-container chosen-container-single chosen-container-single-nosearch"
                style={{ width: "100%" }}
                title="Single User"
              >
                <a className="chosen-single">
                  <span>Single User</span>
                  <div>
                    <b />
                  </div>
                </a>
                <div className="chosen-drop">
                  <div className="chosen-search">
                    <input type="text" autoComplete="off" readOnly="" />
                  </div>
                  <ul className="chosen-results" />
                </div>
              </div>
            </div>
            <div className="form-row form-row-wide">
              <input
                type="text"
                className="input-text"
                name="username"
                id="username"
                placeholder="User Name"
                defaultValue=""
              />
            </div>
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
            <div className="form-row form-row-wide">
              <input
                className="input-text"
                type="password"
                name="password"
                placeholder="Repeat Password"
                id="repeat_password"
              />
            </div>
            <div className="form-row checkbox margin-top-10 margin-bottom-10">
              <input type="checkbox" id="two-step0" />
              <label htmlFor="two-step0">
                <span className="checkbox-icon" /> By Registering You Confirm
                That You Accept <a href="#">Terms &amp; Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <input
              type="submit"
              className="button full-width border margin-top-10"
              name="Create An Account"
              defaultValue="Create An Account"
            />
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