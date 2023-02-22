import Script from "next/script"
import Banner from "components/Banner"
import BlogSection from "components/BlogSection"
import Compare from "components/Compare"
import FeaturedProperties from "components/FeaturedProperties"
import Footer from "components/Footer"
import ForRentProperties from "components/ForRentProperties"
import ForSaleProperties from "components/ForSaleProperties"
import Header from "components/Header"
import LoginRegisterPopup from "components/LoginRegisterPopup"
import PhotoSection from "components/PhotoSection"
import PopularPlaces from "components/PopularPlaces"
import PreLoader from "components/Preloader"
import SearchLinks from "components/SearchLinks"
import Topbar from "components/Topbar"
import $ from "jquery"
import Head from "next/head"
import Scripts from "components/Scripts"
export default function Home() {
  return (
  <>
  <Head/>
  <div id="wrapper">
    <Topbar/>
    <Header/>
    <Compare/>
    <div className="clearfix" />
    <Banner/>
    <FeaturedProperties/>
    <ForSaleProperties/>
    <ForRentProperties/>
    <PopularPlaces/>
    <BlogSection/>
    <PhotoSection/>
    <SearchLinks/>
    <LoginRegisterPopup/>
    {/* <PreLoader/> */}
    <Footer/>

    <Script src="scripts/custom.js"></Script>
  </div>
  <Scripts/>
  </>
  )
}
