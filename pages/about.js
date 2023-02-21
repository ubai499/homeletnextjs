import Footer from "components/Footer";
import Header from "components/Header";
import Topbar from "components/Topbar";
import Head from "next/head";
export default function About(){
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
          <h2>About Us</h2>
          {/* Breadcrumbs */}
          <nav id="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>


{/* CONTENT */}
<div className="margin-top-65 padding-bottom-55">
  <div className="container">
    <div className="row">
      <div className="col-xl-12 col-md-12">
        <h1>Why HomeLet?</h1>
        <h2>There has been a huge trust deficit in Real Estate Industry of Pakistan</h2>
        <p>
        To bridge the gap of trust deficit and provide buyers and sellers with convenient real estate transactions HomeLet has been established.Keeping in view the needs of the industry HomeLet is of pivotal importance.
        </p>
        <blockquote className="margin-bottom-20">
        HomeLet, provides verified properties to buyers and easy selling platform to the sellers ensuring a smooth, convenient and user friendly real estate transaction experience. We aim to become a synonym of credibility in the real estate industry of Pakistan.
        Keeping in view the needs of the consumers, HomeLet has also introduced a one stop solution for all the real estate problems.From Maintenance to Servicing all of your solutions are just a call away.
        </blockquote>
        {/* <p>
          Lorem Ipsum is simply dummy text of printing and type setting
          industry. Lorem Ipsum been industry standard dummy text ever since,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the with the release of Letraset
          sheets containing Lorem Ipsum passages
        </p>
        <ul className="list-2">
          <li>
            Morbi mattis ullamcorper velit. Phasellus gravida semper nisi nullam
            vel sem.
          </li>
          <li>
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet.
          </li>
          <li>
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus.
          </li>
          <li>
            Donec mollis hendrerit risus. Phasellus nec sem in justo
            pellentesque facilisis.
          </li>
          <li>
            Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec
            posuere vulputate arcu.
          </li>
          <li>
            Donec elit libero, sodales nec, volutpat a, suscipit non, turpis
            Nullam sagittis.
          </li>
          <li>
            Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a,
            auctor quis, euismod ut, mi.
          </li>
        </ul> */}
      </div>
    </div>
  </div>
</div>

{/* FULLWIDTH SECTION */}
<section
  className="fullwidth"
  data-background-color="#fbfbfb"
  style={{ background: "rgb(251, 251, 251)" }}
>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
          <h3 className="headline">
            <span>Guide</span> How It Works?
          </h3>
          {/* <div className="utf-headline-display-inner-item">
            What are you looking for?
          </div>
          <p className="utf-slogan-text">
            Lorem Ipsum is simply dummy text printing and type setting industry
            Lorem Ipsum been industry standard dummy text ever since when
            unknown printer took a galley.
          </p> */}
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="utf-icon-box-item-area">
          <div className="icon-container">
            <i className="icon-line-awesome-building" />
          </div>
          <h3>Register</h3>
          <p>
          Just log in/sign up, add all the details and that’s it, Signing up is completely free.
          </p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="utf-icon-box-item-area">
          <div className="icon-container">
            <i className="icon-line-awesome-institution" />
          </div>
          <h3>Add Details</h3>
          <p>
          Selling a house? Just upload good pictures for free and we will handle the rest
          </p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="utf-icon-box-item-area">
          <div className="icon-container">
            <i className="icon-material-outline-location-city" />
          </div>
          <h3>Add Posts</h3>
          <p>
            Publish Your Posts & Spread Word Across Your Gatherings...
          </p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="utf-icon-box-item-area">
          <div className="icon-container">
            <i className="icon-material-outline-business" />
          </div>
          <h3>Review</h3>
          <p>
            Review Your Post Statuses & Acheivement Through Your Dashboard.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="fullwidth padding-bottom-80 padding-top-75">
  {/* Container */}
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
          <h3 className="headline">
            Why Choose Us?
          </h3>
        </div>
      </div>
      <div className="col-md-12">
        <div className="utf-pricing-container-area margin-top-5">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="plan">
              <div className="utf-plan-price">
                {/* <h3>Basic</h3> */}
                <span className="value">
                One Stop Solution
                </span>{" "}
                <span className="period">
                Need monitoring or servicing? Choose the best from our experienced team.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="plan featured">
              <div className="utf-listing-badges-item">
                {" "}
                <span className="featured">Featured</span>{" "}
              </div>
              <div className="utf-plan-price">
                {/* <h3>Premium</h3> */}
                <span className="value">
                Free Ad posting Service
                </span>{" "}
                <span className="period">
                Showcase your property to the potential buyers for free.
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="plan">
              <div className="utf-plan-price">
                {/* <h3>Platinum</h3> */}
                <span className="value">
                Investment Consulting
                </span>{" "}
                <span className="period">
                We provide free real estate investment consulting. Learn from our experts.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="col-md-12">
        <div className="utf-pricing-container-area margin-top-5">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="plan">
              <div className="utf-plan-price">
                {/* <h3>Basic</h3> */}
                <span className="value">
                Construction Services
                </span>{" "}
                <span className="period">
                Need Construction Services? Let us construct your dream house.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="plan featured">
              <div className="utf-listing-badges-item">
                {" "}
                <span className="featured">Featured</span>{" "}
              </div>
              <div className="utf-plan-price">
                {/* <h3>Premium</h3> */}
                <span className="value">
                Personalized Service
                </span>{" "}
                <span className="period">
                Address all of your Real Estate problems with our personalized services.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="plan">
              <div className="utf-plan-price">
                {/* <h3>Platinum</h3> */}
                <span className="value">
                Property Maintenance
                </span>{" "}
                <span className="period">
                As a wealth management company, we ensure complete property maintenance.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Container / End */}
</section>



<div className="margin-top-65" />

<Footer/>
        </>
    )
}