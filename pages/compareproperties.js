import Footer from "components/Footer"
import Header from "components/Header"
import Head from "next/head"
import Image from "next/image"
export default function CompareProperties(){
    return(
        <>
        <Header/>
                {/* TITLEBAR */}
                <div
        className="parallax titlebar"
        style={{
        backgroundImage: 'url("images/listings-parallax.jpg")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
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
          <h2>Compare Properties</h2>
          {/* Breadcrumbs */}
          <nav id="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Compare Properties</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
                </div>


                <div className="container">
  <div className="row">
    <div className="col-md-12">
      {/* Compare List */}
      <div className="utf-utf-compare-list-item-area">
        <ul id="utf-compare-list">
          <li className="compare-item-list-properti">
            <div className="blank-div" />
            <div>
              {" "}
              <a href="#">
                <div className="utf-smt-img-item">
                  {" "}
                  <Image width="100" height="100" src="images/listing-01.jpg" alt="" />{" "}
                  <span className="utf-remove-compare-item">
                    <i className="icon-line-awesome-close" />
                  </span>{" "}
                </div>
                <div className="utf-smt-title-item">
                  <h4>Renovated Luxury Apartment</h4>
                  <span>$18,000/mo</span>
                </div>
              </a>
            </div>
            <div>
              {" "}
              <a href="#">
                <div className="utf-smt-img-item">
                  {" "}
                  <Image width="100" height="100" src="images/listing-02.jpg" alt="" />{" "}
                  <span className="utf-remove-compare-item">
                    <i className="icon-line-awesome-close" />
                  </span>{" "}
                </div>
                <div className="utf-smt-title-item">
                  <h4>Renovated Luxury Apartment</h4>
                  <span>$22,000/mo</span>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div>Area</div>
            <div>Sq Ft 1280</div>
            <div>Sq Ft 1460</div>
          </li>
          <li>
            <div>Bed Rooms</div>
            <div>3</div>
            <div>2</div>
          </li>
          <li>
            <div>Bath Rooms</div>
            <div>2</div>
            <div>1</div>
          </li>
          <li>
            <div>Air Conditioning</div>
            <div>
              <span className="available" />
            </div>
            <div>
              <span className="available" />
            </div>
          </li>
          <li>
            <div>Swimming Pool</div>
            <div>
              <span className="not-available" />
            </div>
            <div>
              <span className="not-available" />
            </div>
          </li>
          <li>
            <div>Laundry Room</div>
            <div>
              <span className="available" />
            </div>
            <div>
              <span className="available" />
            </div>
          </li>
          <li>
            <div>Window Covering</div>
            <div>
              <span className="not-available" />
            </div>
            <div>
              <span className="available" />
            </div>
          </li>
          <li>
            <div>Gym</div>
            <div>
              <span className="available" />
            </div>
            <div>
              <span className="not-available" />
            </div>
          </li>
          <li>
            <div>Internet</div>
            <div>
              <span className="available" />
            </div>
            <div>
              <span className="available" />
            </div>
          </li>
        </ul>
      </div>
      {/* Compare List / End */}
    </div>
  </div>
</div>

<Footer/>
        </>
    )
}