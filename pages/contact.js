import Footer from "components/Footer";
import Header from "components/Header";
import Topbar from "components/Topbar";
import Head from "next/head";
export default function Contact(){
    return(
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
        <Topbar/>
        <Header/>

        {/* TITLEBAR */}
        <div
  className="parallax titlebar"
  data-background="images/listings-parallax.jpg"
  data-color="rgba(48, 48, 48, 1)"
  data-color-opacity="0.8"
  data-img-width={800}
  data-img-height={505}
  style={{
    backgroundImage: 'url("images/listings-parallax.jpg")',
    backgroundAttachment: "fixed",
    backgroundSize: "1796.44px 1134px",
    backgroundPosition: "50% -134.25px"
  }}
>
  <div
    className="parallax-overlay"
    style={{ backgroundColor: "rgb(48, 48, 48)", opacity: "0.8" }}
  />
  <div id="titlebar">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Contact Us</h2>
          {/* Breadcrumbs */}
          <nav id="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>


{/* CONTENT */}
<div className="container">
  <div className="row">

    {/* Contact Details */}
    <div className="col-md-4">
      <div className="utf-boxed-list-headline-item">
        <h3>
          <i className="icon-feather-map" /> Office Address
        </h3>
      </div>
      {/* Contact Details */}
      <div className="utf-contact-location-info-aera sidebar-textbox margin-bottom-40">
        <ul className="contact-details">
          <li>
            <i className="icon-feather-smartphone" />{" "}
            <strong>Phone Number:</strong> <span>033 1111 0353</span>
          </li>
          <li>
            <i className="icon-material-outline-email" />{" "}
            <strong>Email Address:</strong>{" "}
            <span>
              <a href="#">info@homelet.pk</a>
            </span>
          </li>
          <li>
            <i className="icon-feather-globe" /> <strong>Website:</strong>{" "}
            <span>www.homelet.pk</span>
          </li>
          <li>
            <i className="icon-feather-map-pin" /> <strong>Address:</strong>{" "}
            <span>
            Plaza No. 143, Hub Commercial, in front of Head Office
            Bahria Town Phase-8 Rawalpindi , Pakistan
            </span>
          </li>
        </ul>
      </div>
    </div>
    {/* Contact Form */}
    <div className="col-md-8">
      <section id="contact">
        <div className="utf-boxed-list-headline-item">
          <h3>
            <i className="icon-feather-layers" /> Send Us A Message
          </h3>
        </div>
        <div className="utf-contact-form-item">
          <form>
            <div className="row">
              <div className="col-md-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Frist Name"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Last Name"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <textarea
                  name="comments"
                  cols={40}
                  rows={3}
                  placeholder="Message..."
                  spellCheck="true"
                  required=""
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="utf-centered-button margin-bottom-10">
              <input
                type="submit"
                className="submit button"
                id="submit"
                defaultValue="Submit Message"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
    {/* Contact Form / End */}
  </div>
</div>

{/* FOOTER */}
<Footer/>
        </>
    )
}