import PreviewForm from "components/AddProperty/PreviewForm";
import PropertyForm from "components/AddProperty/PropertyForm";
import Header from "components/Header";
import { Component } from "react";

export default class AddProperty extends Component{


    render(){
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
                <PropertyForm parentCallback = {this.callbackFunction}/>
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