import { Component } from "react";

export default class OTPVerification extends Component{
    continue = e =>{
        e.preventDefault();
        // FORM SUBMISSION
        alert('You Have Registered SuccessFully');
        // this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {values,handleChange} = this.props;
        this.props.values;
        return(
            <>
            <h3>Enter OTP Verification Code</h3>
            <input type='text' onChange={handleChange('otp')} defaultValue={values.otp}/>
            <button onClick={this.continue} className="button full-width border margin-top-10">Verify</button>
            <button onClick={this.back} className="button full-width border margin-top-10">Go Back</button>
            </>
        )
    }
}