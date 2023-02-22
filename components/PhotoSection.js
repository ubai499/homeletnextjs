export default function PhotoSection(){
    return(
        <>
        <div className="utf-photo-section-block">
      <div className="utf-photo-text-content white-font">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <h2>Download Homelet Mobile Application</h2>
              <p>
              HomeLet is Pakistan’s 1st Property Portal that offers verified properties to its clients. Homelet is focused to change the dynamics of real estate industry of Pakistan through transparency, verified properties and smooth transactions.
              </p>
              <ul className="utf-download-text">
                {/* <li>
                  <a href="#" className="tooltip top" title="Windows App">
                    <i className="icon-line-awesome-windows" />
                    <span>Windows</span>
                    <p>Available Now</p>
                  </a>
                </li> */}
                <li>
                  <a href="#" className="tooltip top" title="App Store">
                    <i className="icon-line-awesome-apple" />
                    <span>App Store</span>
                    <p>Available Now</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="tooltip top" title="Google Play">
                    <i className="icon-line-awesome-android" />
                    <span>Google Play</span>
                    <p>Get in On</p>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="download-img">
                <img src="images/mockup3.png" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
        </>
    )
}