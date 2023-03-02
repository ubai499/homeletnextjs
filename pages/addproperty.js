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
        <PropertyForm/>
        </div>
        </>
    )
}
}