import Script from "next/script"
import Banner from "components/HomepageComponents/Banner"
import BlogSection from "components/HomepageComponents/BlogSection"
import Compare from "components/Compare"
import FeaturedProperties from "components/HomepageComponents/FeaturedProperties"
import Footer from "components/Footer"
import Header from "components/Header"
import LoginRegisterPopup from "components/LoginRegisterPopup"
import PhotoSection from "components/PhotoSection"
import PopularPlaces from "components/PopularPlaces"
import SearchLinks from "components/SearchLinks"
import Topbar from "components/Topbar"
import Head from "next/head"
import SearchSmarter from "components/SearchSmarter"
import NeedHelp from "components/NeedHelp"

export default function Home() {
  return (
  <>
  <div id="wrapper">
    <Topbar/>
    <Head/>
    <Header/>
    <Compare/>
    <Banner/>
    <FeaturedProperties/>
    <PopularPlaces/>
    <SearchSmarter/>
    <BlogSection/>
    <PhotoSection/>
    <NeedHelp/>
    <SearchLinks/>
    <LoginRegisterPopup/>
    <Footer/>
    <Script src="scripts/typed.js"></Script>
  </div>
  </>
  )
}
