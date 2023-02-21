import Image from "next/image"
export default function Footer(){
    return(
        <>
        <div id="footer" style={{background:'#ffff'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <a href="index.html">
              <Image width="100" height="100"
                className="footer-logo"
                src="/images/logo.png"
                alt=""
              />
            </a>
            <p>
            HomeLet is Pakistan’s 1st Property Portal that offers verified properties to its clients. Homelet is focused to change the dynamics of real estate industry of Pakistan through transparency, verified properties and smooth transactions/homelet/web.
            </p>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6">
            <h4>Quick Links</h4>
            <ul className="utf-footer-links-item">
              <li>
                <a href="index.html">Our Team</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Luxury Rooms</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <h4>Contact</h4>
            <ul className="utf-footer-links-item">
              <li>
                <a href="#">Plaza No.143,Hub Commercial, In Front of Bahria Town Head Office, Phase-8, Rawalpindi.</a>
              </li>
              <li>
                <a href="#">info@homelet.pk</a>
              </li>
              <li>
                <a href="#">HomeLet UAN 033 1111 0353</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <h4>Pages</h4>
            <ul className="utf-footer-links-item">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3327.350288367042!2d73.09331861520045!3d33.49226243076201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff3841d629deb%3A0xf30d57586052f3a!2sESPA%20Builders!5e0!3m2!1sen!2s!4v1677009701482!5m2!1sen!2s" width="300" height="170" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="copyrights">
            Copyright © 2023 HomeLet. Designed by ESIT SOLUTIONS All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="backtotop">
      <a href="#" />
    </div>
        </>
    )
}