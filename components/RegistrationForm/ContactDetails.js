import { Component } from "react";

export default class ContactDetails extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
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
            <label>Contact Number:</label>
            <input type='tel' onChange={handleChange('contactnumber')} defaultValue={values.contactnumber}/>
            <label>Email (Optional)</label>
            <input type="text" placeholder="homelet@gmail.com" onChange={handleChange('email')} defaultValue={values.email}/>
            <label>Password</label>
            <input type='password' onChange={handleChange('password')} defaultValue={values.password}/>
            <button onClick={this.continue} className="button full-width border margin-top-10">Continue</button>
            <button onClick={this.back} className="button full-width border margin-top-10">Go Back</button>
            </>
        )
    }
}