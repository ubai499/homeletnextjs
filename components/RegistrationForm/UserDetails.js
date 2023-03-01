import { Component } from "react";

export default class UserDetails extends Component{
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
            <label>First Name:</label>
            <input type="text" placeholder="First Name" onChange={handleChange('firstName')} defaultValue={values.firstName}/>
            <label>Last Name:</label>
            <input type="text" placeholder="Last Name" onChange={handleChange('lastName')} defaultValue={values.lastName}/>
            <label>Gender</label>
            <select onChange={handleChange('gender')} defaultValue={values.gender}>
                <option>Male</option>
                <option>Female</option>
            </select>
            <button onClick={this.continue} className="button full-width border margin-top-10">Continue</button>
            <button onClick={this.back} className="button full-width border margin-top-10">Go Back</button>
            </>
        )
    }
}