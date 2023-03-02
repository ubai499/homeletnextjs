import { Component } from "react";
import PreviewForm from "./PreviewForm";
import Step1 from "./Step1";
import Step10 from "./Step10";
import Step11 from "./Step11";
import Step12 from "./Step12";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";

export default class PropertyForm extends Component{
    state={
        step:1,
        purpose:'',
        propertytype:'',
        propertysubtype: '',
        size:'',
        unit:'',
        price:'',
        title:'',
        description:'',
        location:'',
        yearbuilt:'',
        bedrooms:'',
        bathrooms:'',
        parking:'',
        image:'',
        details:'',
        features:'',
        services:'',
        floors:'',
        floorunit:'',
        propertyfacing:'',
    }
    nextStep = ()=>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    
    prevStep = ()=>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }
    
    

    render(){
        const {step} = this.state;
        const {purpose, propertytype, propertysubtype, size, unit, price, title, description,location,yearbuilt,bedrooms,bathrooms,parking,image,details,features,services,floors,floorunit,propertyfacing} = this.state;
        const values = {purpose, propertytype, propertysubtype, size, unit, price, title, description,location,yearbuilt,bedrooms,bathrooms,parking,image,details,features,services,floors,floorunit,propertyfacing}
        
        switch(step){
            case 1:
              return(
                <>
                <h1></h1>
                <Step1
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
                </>
              )
            case 2:
              return(
                <>
                <Step2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
                </>
              )
          case 3:
              return(
                  <>
                  <Step3
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  />
                  </>
              )
          case 4:
              return(
                  <>
                  <Step4
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}/>
                  </>
              )
        case 5:
            return(
                <>
                <Step5
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}/>
                </>
            )
            case 6:
            return(
                <>
                <Step6
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}/>
                </>
            )
            case 7:
            return(
                <>
                <Step7
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}/>
                </>
            )
            case 8:
            return(
                <>
                <Step8
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}/>
                </>
            )
            case 9:
            return(
                <>
                <Step9
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}/>
                </>
            )
            case 10:
            return(
                <>
                <Step10
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}/>
                </>
            )
            case 11:
            return(
                <>
                <Step11
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}/>
                </>
            )
            case 12:
            return(
                <>
                <Step12
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}/>
                </>
            )
          }
    }
}