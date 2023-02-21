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
  <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="" />
        <meta name="theme-color" content="#e33324" />
        <meta name="description" content="Real Estate HTML Template" />
        <meta
        name="keywords"
        content="Apartment, Estate Agency, Housing, Real Estate, Real Estate Broker, Real Estate Property, Single Property"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Homelet.pk | Property Listing</title>
        {/*  Favicon */}
        <link rel="shortcut icon" href="favicon.ico" />
        {/* CSS */}
        <link rel="stylesheet" href="css/stylesheet.css" />
        {/* Google Fonts */}
        <link
        href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800&display=swap"
        rel="stylesheet"
        />
        <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap"
        rel="stylesheet"
        />
        </Head>
  <div id="wrapper">
    <Topbar/>
    <Head/>
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

    <Script src="scripts/jquery-3.3.1.min.js"></Script>
    <Script src="scripts/bootstrap.min.js"></Script>
    <Script src="scripts/chosen.min.js"></Script>
    <Script src="scripts/magnific-popup.min.js"></Script>
    <Script src="scripts/owl.carousel.min.js"></Script>
    <Script src="scripts/rangeSlider.js"></Script>
    <Script src="scripts/sticky-kit.min.js"></Script>
    <Script src="scripts/slick.min.js"></Script>
    <Script src="scripts/masonry.min.js"></Script>
    <Script src="scripts/mmenu.min.js"></Script>
    <Script src="scripts/tooltips.min.js"></Script>
    <Script src="scripts/typed.js"></Script>
    <Script src="scripts/custom_jquery.js"></Script>
    <Script src="scripts/custom.js"></Script>
  </div>
  {/* <Scripts/> */}
  </>
  )
}
