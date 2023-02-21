import Footer from "components/Footer";
import Header from "components/Header";
import Topbar from "components/Topbar";
import Image from "next/image";
import Head from "next/head";
export default function Agents(){
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
          <h2>Agents</h2>
          {/* Breadcrumbs */}
          <nav id="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Agents</li>
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
    <div className="col-md-12">
      <div className="row">
        <div
          className="utf-agents-container-area"
          style={{ position: "relative", height: "1146.89px" }}
        >
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "0%", top: 0 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-01.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "24.9573%", top: 0 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-02.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "50%", top: 0 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-03.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "74.9573%", top: 0 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-04.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "0%", top: 382 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-05.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "24.9573%", top: 382 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-06.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "50%", top: 382 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-07.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "74.9573%", top: 382 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-08.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "0%", top: 764 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-09.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "24.9573%", top: 764 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-10.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "50%", top: 764 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-01.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
          {/* Agent */}
          <div
            className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12"
            style={{ position: "absolute", left: "74.9573%", top: 764 }}
          >
            <div className="agent">
              <div className="utf-agent-avatar">
                {" "}
                <a href="agents-profile.html">
                  {" "}
                  <Image width="100" height="100" src="/images/agent-02.jpg" alt="" />{" "}
                  <span className="view-profile-btn">View Profile</span>{" "}
                </a>{" "}
              </div>
              <div className="utf-agent-content">
                <div className="utf-agent-name">
                  <h4>
                    <a href="agents-profile.html">John Williams</a>
                  </h4>
                  <span>Agent In Afghanistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* Agent / End */}
        </div>
        {/* Agents Container / End */}
      </div>
    </div>
    <div className="col-md-12">
      <div className="clearfix" />
      {/* Pagination */}
      <div className="utf-pagination-container margin-top-20">
        <nav className="pagination">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-angle-left" />
              </a>
            </li>
            <li>
              <a href="#" className="current-page">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li className="blank">...</li>
            <li>
              <a href="#">10</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Pagination / End */}
    </div>
  </div>
</div>

<div className="margin-top-65" />
<Footer/>

        </>
    )
}