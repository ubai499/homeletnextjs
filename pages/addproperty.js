import AddProperties from "components/AddProperty";
import PreviewForm from "components/AddProperty/PreviewForm";
import PropertyForm from "components/AddProperty/PropertyForm";
import Step1 from "components/AddProperty/Step1";
import Step10 from "components/AddProperty/Step10";
import Step11 from "components/AddProperty/Step11";
import Step12 from "components/AddProperty/Step12";
import Step2 from "components/AddProperty/Step2";
import Step3 from "components/AddProperty/Step3";
import Step4 from "components/AddProperty/Step4";
import Step5 from "components/AddProperty/Step5";
import Step6 from "components/AddProperty/Step6";
import Step7 from "components/AddProperty/Step7";
import Step8 from "components/AddProperty/Step8";
import Step9 from "components/AddProperty/Step9";
import Footer from "components/Footer";
import Header from "components/Header";
import Image from "next/image";
import { Component } from "react";

export default class AddProperty extends Component{
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
      const values = {purpose, propertytype, propertysubtype, size, unit, price, title, description,location,yearbuilt,bedrooms,bathrooms,parking,image,details,features,services,floors,floorunit,propertyfacing};
        return(
        <>
        <div id="wrapper">
        <Header/>
        <section className="style_add_property_page_wrapper___HPy2">
          <div className="style_add_property_page_content__6vkug">
            <div className="style_add_property_container__qkUWI container">
              <section className="style_property_content_section__ZLslk">
                <div className="false style_page_title_section__D42UD">
                  <div className="false style_page_title_section__D42UD">
                    <h1 className="style_title__CFuHg">Add Property</h1>
                  </div>
                </div>
                <PropertyForm/>
              </section>
            <PreviewForm/>
          </div>
          </div>
        </section>
        </div>
        </>
    )
}
}