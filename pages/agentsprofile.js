import AgentCard from "components/AgentsProfile/AgentCard";
import Listings from "components/AgentsProfile/Listings";
import TitleBar from "components/AgentsProfile/TitleBar";
import Footer from "components/Footer";
import Header from "components/Header";

export default function AgentsProfile(){
    return(
        <>
        <Header/>
        <TitleBar/>
        <AgentCard/>
        <Listings/>
        <div className="margin-top-65" />
        <Footer/>
        </>
    )
}