import Link from "next/link"
import { useState } from "react"
export default function ForgotPassword(){

const [contact, setContact] = useState("")
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
                        <h3>Forgot Your Password?</h3>
                        <span>
                        Enter your Contact Number below and we'll send you Verification Link
                        </span>
                    </div>
                    <form method="post" className="login" onSubmit={handleSubmit}>
                    <div className="form-row form-row-wide">
                    <input
                    type="text"
                    className="input-text"
                    id="email"
                    placeholder="Contact Number"
                    defaultValue=""
                    />
                    </div>
                    <input
                    type="submit"
                    className="button full-width border margin-top-10"
                    defaultValue="Verify"
                    />
                    <div className="forget-text margin-top-15">
                    <span>
                        <Link href="login">Go Back</Link> to The
                        Sign In.
                    </span>
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