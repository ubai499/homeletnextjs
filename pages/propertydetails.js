import Footer from "components/Footer";
import Header from "components/Header";
import Topbar from "components/Topbar";

export default function PropertyDetails(){
    return(
        <>
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
    backgroundSize: "2289.11px 1445px",
    backgroundPosition: "50% -135.768px"
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
          <h2>Property Listing Detail</h2>
          {/* Breadcrumbs */}
          <nav id="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Property Listing Detail</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>


{/* IMAGES */}
<div className="container">
  <div className="row margin-bottom-50">
    <div className="col-md-12">
      {/* Slider */}
      <div className="property-slider default slick-initialized slick-slider">
        <button
          className="slick-prev slick-arrow"
          aria-label="Previous"
          type="button"
          style={{ display: "block" }}
        >
          Previous
        </button>
        <div className="slick-list draggable" style={{ height: 400 }}>
          <div className="slick-track" style={{ opacity: 1, width: 7080 }}>
            <a
              href="images/single-property-01.jpg"
              data-background-image="images/single-property-01.jpg"
              className="item mfp-gallery slick-slide slick-current slick-active"
              data-slick-index={0}
              style={{
                backgroundImage: 'url("images/single-property-01.jpg")',
                width: 1180,
                position: "relative",
                left: 0,
                top: 0,
                zIndex: 999,
                opacity: 1
              }}
              aria-hidden="false"
              tabIndex={0}
            />
            <a
              href="images/single-property-02.jpg"
              data-background-image="images/single-property-02.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={1}
              style={{
                backgroundImage: 'url("images/single-property-02.jpg")',
                width: 1180,
                position: "relative",
                left: "-1180px",
                top: 0,
                zIndex: 998,
                opacity: 0
              }}
              aria-hidden="true"
              tabIndex={-1}
            />
            <a
              href="images/single-property-03.jpg"
              data-background-image="images/single-property-03.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={2}
              style={{
                backgroundImage: 'url("images/single-property-03.jpg")',
                width: 1180,
                position: "relative",
                left: "-2360px",
                top: 0,
                zIndex: 998,
                opacity: 0
              }}
              aria-hidden="true"
              tabIndex={-1}
            />
            <a
              href="images/single-property-04.jpg"
              data-background-image="images/single-property-04.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={3}
              style={{
                backgroundImage: 'url("images/single-property-04.jpg")',
                width: 1180,
                position: "relative",
                left: "-3540px",
                top: 0,
                zIndex: 998,
                opacity: 0
              }}
              aria-hidden="true"
              tabIndex={-1}
            />
            <a
              href="images/single-property-05.jpg"
              data-background-image="images/single-property-05.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={4}
              style={{
                backgroundImage: 'url("images/single-property-05.jpg")',
                width: 1180,
                position: "relative",
                left: "-4720px",
                top: 0,
                zIndex: 998,
                opacity: 0
              }}
              aria-hidden="true"
              tabIndex={-1}
            />
            <a
              href="images/single-property-06.jpg"
              data-background-image="images/single-property-06.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={5}
              style={{
                backgroundImage: 'url("images/single-property-06.jpg")',
                width: 1180,
                position: "relative",
                left: "-5900px",
                top: 0,
                zIndex: 998,
                opacity: 0
              }}
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
        </div>
        <button
          className="slick-next slick-arrow"
          aria-label="Next"
          type="button"
          style={{ display: "block" }}
        >
          Next
        </button>
      </div>
      {/* Slider Thumbs */}
      <div className="property-slider-nav slick-initialized slick-slider slick-dotted">
        <button
          className="slick-prev slick-arrow"
          aria-label="Previous"
          type="button"
          style={{ display: "block" }}
        >
          Previous
        </button>
        <div className="slick-list draggable">
          <div
            className="slick-track"
            style={{
              opacity: 1,
              width: 4046,
              transform: "translate3d(-1190px, 0px, 0px)"
            }}
          >
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control11"
              style={{ width: 228 }}
              data-slick-index={-5}
              aria-hidden="true"
            >
              <img src="images/single-property-02.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control12"
              style={{ width: 228 }}
              data-slick-index={-4}
              aria-hidden="true"
            >
              <img src="images/single-property-03.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control13"
              style={{ width: 228 }}
              data-slick-index={-3}
              aria-hidden="true"
            >
              <img src="images/single-property-04.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control14"
              style={{ width: 228 }}
              data-slick-index={-2}
              aria-hidden="true"
            >
              <img src="images/single-property-05.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control15"
              style={{ width: 228 }}
              data-slick-index={-1}
              aria-hidden="true"
            >
              <img src="images/single-property-06.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-current slick-active"
              tabIndex={0}
              role="tabpanel"
              id="slick-slide10"
              aria-describedby="slick-slide-control10"
              style={{ width: 228 }}
              data-slick-index={0}
              aria-hidden="false"
            >
              <img src="images/single-property-01.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-active"
              tabIndex={0}
              role="tabpanel"
              id="slick-slide11"
              aria-describedby="slick-slide-control11"
              style={{ width: 228 }}
              data-slick-index={1}
              aria-hidden="false"
            >
              <img src="images/single-property-02.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-active"
              tabIndex={0}
              role="tabpanel"
              id="slick-slide12"
              aria-describedby="slick-slide-control12"
              style={{ width: 228 }}
              data-slick-index={2}
              aria-hidden="false"
            >
              <img src="images/single-property-03.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-active"
              tabIndex={0}
              role="tabpanel"
              id="slick-slide13"
              aria-describedby="slick-slide-control13"
              style={{ width: 228 }}
              data-slick-index={3}
              aria-hidden="false"
            >
              <img src="images/single-property-04.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-active"
              tabIndex={0}
              role="tabpanel"
              id="slick-slide14"
              aria-describedby="slick-slide-control14"
              style={{ width: 228 }}
              data-slick-index={4}
              aria-hidden="false"
            >
              <img src="images/single-property-05.jpg" alt="" />
            </div>
            <div
              className="item slick-slide"
              tabIndex={-1}
              role="tabpanel"
              id="slick-slide15"
              aria-describedby="slick-slide-control15"
              style={{ width: 228 }}
              data-slick-index={5}
              aria-hidden="true"
            >
              <img src="images/single-property-06.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control10"
              style={{ width: 228 }}
              data-slick-index={6}
              aria-hidden="true"
            >
              <img src="images/single-property-01.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control11"
              style={{ width: 228 }}
              data-slick-index={7}
              aria-hidden="true"
            >
              <img src="images/single-property-02.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control12"
              style={{ width: 228 }}
              data-slick-index={8}
              aria-hidden="true"
            >
              <img src="images/single-property-03.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control13"
              style={{ width: 228 }}
              data-slick-index={9}
              aria-hidden="true"
            >
              <img src="images/single-property-04.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control14"
              style={{ width: 228 }}
              data-slick-index={10}
              aria-hidden="true"
            >
              <img src="images/single-property-05.jpg" alt="" />
            </div>
            <div
              className="item slick-slide slick-cloned"
              tabIndex={-1}
              role="tabpanel"
              aria-describedby="slick-slide-control15"
              style={{ width: 228 }}
              data-slick-index={11}
              aria-hidden="true"
            >
              <img src="images/single-property-06.jpg" alt="" />
            </div>
          </div>
        </div>
        <button
          className="slick-next slick-arrow"
          aria-label="Next"
          type="button"
          style={{ display: "block" }}
        >
          Next
        </button>
        <ul className="slick-dots" style={{ display: "block" }} role="tablist">
          <li className="slick-active" role="presentation">
            <button
              type="button"
              role="tab"
              id="slick-slide-control10"
              aria-controls="slick-slide10"
              aria-label="1 of 2"
              tabIndex={0}
              aria-selected="true"
            >
              1
            </button>
          </li>
          <li role="presentation">
            <button
              type="button"
              role="tab"
              id="slick-slide-control11"
              aria-controls="slick-slide11"
              aria-label="2 of 2"
              tabIndex={-1}
            >
              2
            </button>
          </li>
          <li role="presentation">
            <button
              type="button"
              role="tab"
              id="slick-slide-control12"
              aria-controls="slick-slide12"
              aria-label="3 of 2"
              tabIndex={-1}
            >
              3
            </button>
          </li>
          <li role="presentation">
            <button
              type="button"
              role="tab"
              id="slick-slide-control13"
              aria-controls="slick-slide13"
              aria-label="4 of 2"
              tabIndex={-1}
            >
              4
            </button>
          </li>
          <li role="presentation">
            <button
              type="button"
              role="tab"
              id="slick-slide-control14"
              aria-controls="slick-slide14"
              aria-label="5 of 2"
              tabIndex={-1}
            >
              5
            </button>
          </li>
          <li role="presentation">
            <button
              type="button"
              role="tab"
              id="slick-slide-control15"
              aria-controls="slick-slide15"
              aria-label="6 of 2"
              tabIndex={-1}
            >
              6
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* DETAILS */}
<div className="container">
  <div className="row">
    {/* Property Description */}
    <div className="col-lg-8 col-md-7">
      {/* Titlebar */}
      <div id="titlebar-dtl-item" className="property-titlebar margin-bottom-0">
        <div className="property-title">
          <div className="property-pricing">$22,000/mo</div>
          <h2>
            Renovated Luxury Apartment{" "}
            <span className="property-badge-sale">For Sale</span>
          </h2>
          <span className="utf-listing-address">
            <i className="icon-material-outline-location-on" /> 2021 San Pedro,
            Los Angeles 90015
          </span>
          <ul className="property-main-features">
            <li>
              Beds<span>3</span>
            </li>
            <li>
              Baths<span>2</span>
            </li>
            <li>
              Garages<span>2</span>
            </li>
            <li>
              Sq Ft<span>1530</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="property-description">
        {/* Description */}
        <div className="utf-desc-headline-item">
          <h3>
            <i className="icon-material-outline-description" /> Property
            Description
          </h3>
        </div>
        <div className="show-more">
          <p>
            {" "}
            Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla.
            Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris
            quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum
            elementum, est elit finibus tellus, ut tristique elit risus at
            metus. Sed fermentum, lorem vitae efficitur imperdiet, neque velit
            tristique turpis, et iaculis mi tortor finibus turpis.{" "}
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur
            nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi
            tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam
            sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum
            facilisis massa, a consequat purus viverra a. Aliquam pellentesque
            nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper
            placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc.
            Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis
            nunc velit, et fermentum urna dapibus non. Vivamus magna lorem,
            elementum id gravida ac, laoreet tristique augue. Maecenas dictum
            lacus eu nunc porttitor, ut hendrerit arcu efficitur.{" "}
          </p>
          <p>
            {" "}
            Nam mattis lobortis felis eu blandit. Morbi tellus ligula, interdum
            sit amet ipsum et, viverra hendrerit lectus. Nunc efficitur sem vel
            est laoreet, sed bibendum eros viverra. Vestibulum finibus, ligula
            sed euismod tincidunt, lacus libero lobortis ligula, sit amet
            molestie ipsum purus ut tortor. Nunc varius, dui et sollicitudin
            facilisis, erat felis imperdiet felis, et iaculis dui magna vitae
            diam. Donec mattis diam nisl, quis ullamcorper enim malesuada non.
            Curabitur lobortis eu mauris nec vestibulum. Nam efficitur, ex ac
            semper malesuada, nisi odio consequat dui, hendrerit vulputate odio
            dui vitae massa. Aliquam tortor urna, tincidunt ut euismod quis,
            semper vel ipsum. Ut non vestibulum mauris. Morbi euismod, felis non
            hendrerit viverra, nunc sapien bibendum ligula, eget vehicula nunc
            dolor eu ex. Quisque in semper odio. Donec auctor blandit ligula.
            Integer id lectus non nibh vulputate efficitur quis at arcu.{" "}
          </p>
          <a href="#" className="show-more-button">
            Show More <i className="sl sl-icon-plus" />
          </a>
        </div>
        {/* Details */}
        <div className="utf-desc-headline-item">
          <h3>
            <i className="sl sl-icon-briefcase" /> Property Details
          </h3>
        </div>
        <ul className="property-features margin-top-0">
          <li>
            Property ID: <span>HP1714</span>
          </li>
          <li>
            Price: <span>$180,000</span>
          </li>
          <li>
            Property Size: <span>1480 Sq Ft</span>
          </li>
          <li>
            Year Built: <span>15 Jan, 2010</span>
          </li>
          <li>
            Bedrooms: <span>4</span>
          </li>
          <li>
            Bathrooms: <span>3</span>
          </li>
          <li>
            Garage: <span>3</span>
          </li>
          <li>
            Garage Size: <span>200 Sq Ft</span>
          </li>
          <li>
            Property Type: <span>Apartment</span>
          </li>
          <li>
            Property Status: <span>For Sale</span>
          </li>
        </ul>
        {/* Details */}
        <div className="utf-desc-headline-item">
          <h3>
            <i className="icon-material-outline-business" /> Additional Details
          </h3>
        </div>
        <ul className="property-features margin-top-0">
          <li>
            Deposit: <span>28%</span>
          </li>
          <li>
            Pool Size: <span>300 Sq Ft</span>
          </li>
          <li>
            Additional Rooms: <span>Guest Bath</span>
          </li>
          <li>
            Last Remodel Year: <span>2010</span>
          </li>
          <li>
            Amenities: <span>Clubhouse</span>
          </li>
          <li>
            Equipment: <span>Grill - Gas</span>
          </li>
        </ul>
        {/* Features */}
        <div className="utf-desc-headline-item">
          <h3>
            <i className="sl sl-icon-briefcase" /> Property Features
          </h3>
        </div>
        <ul className="property-features checkboxes margin-top-0">
          <li>Air Conditioning</li>
          <li>Barbeque</li>
          <li>Dryer</li>
          <li>Gym</li>
          <li>Laundry</li>
          <li>Lawn</li>
          <li>Microwave</li>
          <li>Outdoor Shower</li>
          <li>Refrigerator</li>
          <li>Sauna</li>
          <li>Swimming Pool</li>
          <li>TV Cable</li>
          <li>Washer</li>
          <li>WiFi</li>
          <li>Window Coverings</li>
        </ul>
        {/* Floorplans */}
        <div className="utf-desc-headline-item">
          <h3>
            <i className="icon-line-awesome-paper-plane" /> Property Floor Plans
          </h3>
        </div>
        {/* Accordion */}
        <div className="style-1 fp-accordion">
          <div className="accordion ui-accordion ui-widget ui-helper-reset">
            <h3 className="ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
              First Floor{" "}
              <span>
                Size: <strong>1280 Sqft</strong>
              </span>{" "}
              <span>
                Rooms: <strong>650 Sqft</strong>
              </span>{" "}
              <span>
                Baths: <strong>500 Sqft</strong>
              </span>{" "}
              <span>
                Price: <strong>$15,000</strong>
              </span>{" "}
              <i className="sl sl-icon-plus" />{" "}
            </h3>
            <div
              className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
              style={{ display: "none" }}
            >
              <a className="floor-pic mfp-image" href="images/floor_plan_1.jpg">
                {" "}
                <img src="images/floor_plan_1.jpg" alt="" />{" "}
              </a>
              <p>
                Plan description. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <h3 className="ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all">
              Second Floor{" "}
              <span>
                Size: <strong>1280 Sqft</strong>
              </span>{" "}
              <span>
                Rooms: <strong>650 Sqft</strong>
              </span>{" "}
              <span>
                Baths: <strong>500 Sqft</strong>
              </span>{" "}
              <span>
                Price: <strong>$15,000</strong>
              </span>{" "}
              <i className="sl sl-icon-plus" />
            </h3>
            <div
              className="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
              style={{ display: "none" }}
            >
              <a className="floor-pic mfp-image" href="images/floor_plan_2.jpg">
                {" "}
                <img src="images/floor_plan_2.jpg" alt="" />{" "}
              </a>
              <p>
                Plan description. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        {/* Video */}
        <div className="utf-desc-headline-item">
          <h3>
            <i className="icon-feather-video" /> Property Video
          </h3>
        </div>
        <div className="responsive-iframe">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/oqNZOOWF8qM"
            allowFullScreen=""
          />
        </div>
        {/* Location */}
        <div className="utf-desc-headline-item">
          <h3>
            <i className="icon-material-outline-location-on" /> Property
            Location
          </h3>
        </div>
        <div id="propertyMap-container">
          <div
            id="propertyMap"
            data-latitude="48.8566"
            data-longitude="2.3522"
            data-map-icon="im im-icon-Hamburger"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "rgb(229, 227, 223)"
              }}
            >
              <div
                className="gm-style"
                style={{
                  position: "absolute",
                  zIndex: 0,
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "100%",
                  padding: 0,
                  borderWidth: 0,
                  margin: 0
                }}
              >
                <div>
                  <button
                    draggable="false"
                    aria-label="Keyboard shortcuts"
                    title="Keyboard shortcuts"
                    type="button"
                    style={{
                      background: "none transparent",
                      display: "block",
                      border: "none",
                      margin: 0,
                      padding: 0,
                      textTransform: "none",
                      appearance: "none",
                      position: "absolute",
                      cursor: "pointer",
                      userSelect: "none",
                      zIndex: 1000002,
                      outlineOffset: 3,
                      right: 0,
                      bottom: 0,
                      transform: "translateX(100%)"
                    }}
                  />
                </div>
                <div
                  tabIndex={0}
                  aria-label="Map"
                  aria-roledescription="map"
                  role="region"
                  style={{
                    position: "absolute",
                    zIndex: 0,
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: "100%",
                    padding: 0,
                    borderWidth: 0,
                    margin: 0,
                    cursor:
                      'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                    touchAction: "pan-x pan-y"
                  }}
                  aria-describedby="76343A32-685D-494F-9C8D-0CE0BA6B172F"
                >
                  <div
                    style={{
                      zIndex: 1,
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: "100%",
                      willChange: "transform",
                      transform: "translate(0px, 0px)"
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 100,
                        width: "100%"
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 0
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            zIndex: 987,
                            transform: "matrix(1, 0, 0, 1, -135, -72)"
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: "-256px",
                              top: 0,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: "-256px",
                              top: "-256px",
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: "-256px",
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 256,
                              top: "-256px",
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 256,
                              top: 0,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 256,
                              top: 256,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 256,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: "-256px",
                              top: 256,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 512,
                              top: "-256px",
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 512,
                              top: 0,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: 512,
                              top: 256,
                              width: 256,
                              height: 256
                            }}
                          >
                            <div style={{ width: 256, height: 256 }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 101,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 102,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 103,
                        width: "100%"
                      }}
                    >
                      <div
                        style={{
                          width: 38,
                          height: 49,
                          position: "absolute",
                          left: "-19px",
                          top: "-51px",
                          zIndex: 0
                        }}
                      >
                        <canvas
                          width={38}
                          height={49}
                          draggable="false"
                          style={{
                            width: 38,
                            height: 49,
                            position: "absolute",
                            left: 0,
                            top: 0,
                            userSelect: "none"
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: -1
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            zIndex: 987,
                            transform: "matrix(1, 0, 0, 1, -135, -72)"
                          }}
                        >
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: 0,
                              top: 0
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: "-256px",
                              top: 0
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: "-256px",
                              top: "-256px"
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: 0,
                              top: "-256px"
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: 256,
                              top: "-256px"
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: 256,
                              top: 0
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: 256,
                              top: 256
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: 0,
                              top: 256
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: "-256px",
                              top: 256
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: 512,
                              top: "-256px"
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: 512,
                              top: 0
                            }}
                          />
                          <div
                            style={{
                              width: 256,
                              height: 256,
                              overflow: "hidden",
                              position: "absolute",
                              left: 512,
                              top: 256
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        zIndex: 0
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 987,
                          transform: "matrix(1, 0, 0, 1, -135, -72)"
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-256px",
                            top: 0,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4148!3i2818!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=60181"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 256,
                            top: 256,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4150!3i2819!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=124575"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-256px",
                            top: "-256px",
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4148!3i2817!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=17459"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 256,
                            top: "-256px",
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4150!3i2817!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=39131"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "-256px",
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4149!3i2817!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=14806"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4149!3i2818!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=57528"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: "-256px",
                            top: 256,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4148!3i2819!4i256!2m3!1e0!2sm!3i634373611!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=113333"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 256,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4149!3i2819!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=100250"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 256,
                            top: 0,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4150!3i2818!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=81853"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 512,
                            top: 256,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4151!3i2819!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=121922"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 512,
                            top: 0,
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4151!3i2818!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=79200"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            left: 512,
                            top: "-256px",
                            width: 256,
                            height: 256,
                            transition: "opacity 200ms linear 0s"
                          }}
                        >
                          <img
                            draggable="false"
                            alt=""
                            role="presentation"
                            src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i4151!3i2817!4i256!2m3!1e0!2sm!3i634373623!2m3!1e2!6m1!3e5!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0!23i1379903&token=36478"
                            style={{
                              width: 256,
                              height: 256,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      zIndex: 3,
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      padding: 0,
                      borderWidth: 0,
                      margin: 0,
                      left: 0,
                      top: 0,
                      touchAction: "pan-x pan-y"
                    }}
                  >
                    <div
                      style={{
                        zIndex: 4,
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: "100%",
                        willChange: "transform",
                        transform: "translate(0px, 0px)"
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 104,
                          width: "100%"
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 105,
                          width: "100%"
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 106,
                          width: "100%"
                        }}
                      >
                        <span
                          id="27CE3455-F995-441A-B00A-67BB7DBC8687"
                          style={{ display: "none" }}
                        >
                          To navigate, press the arrow keys.
                        </span>
                        <div
                          title=""
                          tabIndex={-1}
                          style={{
                            width: 38,
                            height: 49,
                            overflow: "hidden",
                            position: "absolute",
                            cursor: "pointer",
                            touchAction: "none",
                            left: "-19px",
                            top: "-51px",
                            zIndex: 0
                          }}
                        >
                          <img
                            alt=""
                            src="https://maps.gstatic.com/mapfiles/transparent.png"
                            draggable="false"
                            style={{
                              width: 38,
                              height: 49,
                              userSelect: "none",
                              border: 0,
                              padding: 0,
                              margin: 0,
                              maxWidth: "none"
                            }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          zIndex: 107,
                          width: "100%"
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="gm-style-moc"
                    style={{
                      zIndex: 4,
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      padding: 0,
                      borderWidth: 0,
                      margin: 0,
                      left: 0,
                      top: 0,
                      opacity: 0
                    }}
                  >
                    <p className="gm-style-mot" />
                  </div>
                  <div
                    className="LGLeeN-keyboard-shortcuts-view"
                    id="76343A32-685D-494F-9C8D-0CE0BA6B172F"
                    style={{ display: "none" }}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd
                              className="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                              aria-label="Left arrow"
                            >
                              ←
                            </kbd>
                          </td>
                          <td aria-label="Move left.">Move left</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd
                              className="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                              aria-label="Right arrow"
                            >
                              →
                            </kbd>
                          </td>
                          <td aria-label="Move right.">Move right</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd
                              className="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                              aria-label="Up arrow"
                            >
                              ↑
                            </kbd>
                          </td>
                          <td aria-label="Move up.">Move up</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd
                              className="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                              aria-label="Down arrow"
                            >
                              ↓
                            </kbd>
                          </td>
                          <td aria-label="Move down.">Move down</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd className="VdnQmO-keyboard-shortcuts-view--shortcut-key">
                              +
                            </kbd>
                          </td>
                          <td aria-label="Zoom in.">Zoom in</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd className="VdnQmO-keyboard-shortcuts-view--shortcut-key">
                              -
                            </kbd>
                          </td>
                          <td aria-label="Zoom out.">Zoom out</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd className="VdnQmO-keyboard-shortcuts-view--shortcut-key">
                              Home
                            </kbd>
                          </td>
                          <td aria-label="Jump left by 75%.">
                            Jump left by 75%
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd className="VdnQmO-keyboard-shortcuts-view--shortcut-key">
                              End
                            </kbd>
                          </td>
                          <td aria-label="Jump right by 75%.">
                            Jump right by 75%
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd className="VdnQmO-keyboard-shortcuts-view--shortcut-key">
                              Page Up
                            </kbd>
                          </td>
                          <td aria-label="Jump up by 75%.">Jump up by 75%</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "right" }}>
                            <kbd className="VdnQmO-keyboard-shortcuts-view--shortcut-key">
                              Page Down
                            </kbd>
                          </td>
                          <td aria-label="Jump down by 75%.">
                            Jump down by 75%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <iframe
                  aria-hidden="true"
                  frameBorder={0}
                  tabIndex={-1}
                  style={{
                    zIndex: -1,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none"
                  }}
                />
                <div
                  style={{
                    pointerEvents: "none",
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    position: "absolute",
                    zIndex: 1000002,
                    opacity: 0,
                    border: "2px solid rgb(26, 115, 232)"
                  }}
                />
                <div />
                <div />
                <div />
                <div />
                <div>
                  <button
                    draggable="false"
                    aria-label="Toggle fullscreen view"
                    title="Toggle fullscreen view"
                    type="button"
                    aria-pressed="false"
                    className="gm-control-active gm-fullscreen-control"
                    style={{
                      background: "none rgb(255, 255, 255)",
                      border: 0,
                      margin: 10,
                      padding: 0,
                      textTransform: "none",
                      appearance: "none",
                      position: "absolute",
                      cursor: "pointer",
                      userSelect: "none",
                      borderRadius: 2,
                      height: 40,
                      width: 40,
                      boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                      overflow: "hidden",
                      top: 0,
                      right: 0
                    }}
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                      alt=""
                      style={{ height: 18, width: 18 }}
                    />
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                      alt=""
                      style={{ height: 18, width: 18 }}
                    />
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                      alt=""
                      style={{ height: 18, width: 18 }}
                    />
                  </button>
                </div>
                <div />
                <div />
                <div>
                  <div
                    style={{
                      padding: 5,
                      position: "absolute",
                      right: 0,
                      top: 156
                    }}
                  >
                    <div>
                      <div className="custom-zoom-in" />
                      <div className="custom-zoom-out" />
                    </div>
                  </div>
                </div>
                <div />
                <div>
                  <div
                    className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom"
                    draggable="false"
                    data-control-width={0}
                    data-control-height={0}
                    style={{
                      margin: 10,
                      userSelect: "none",
                      position: "absolute",
                      display: "none",
                      bottom: 34,
                      right: 0
                    }}
                  >
                    <div
                      className="gmnoprint"
                      data-control-width={40}
                      data-control-height={40}
                      style={{ display: "none", position: "absolute" }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgb(255, 255, 255)",
                          boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                          borderRadius: 2,
                          width: 40,
                          height: 40
                        }}
                      >
                        <button
                          draggable="false"
                          aria-label="Rotate map clockwise"
                          title="Rotate map clockwise"
                          type="button"
                          className="gm-control-active"
                          style={{
                            background: "none",
                            display: "none",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            textTransform: "none",
                            appearance: "none",
                            position: "relative",
                            cursor: "pointer",
                            userSelect: "none",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            width: 40,
                            height: 40
                          }}
                        >
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                        </button>
                        <div
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: 30,
                            height: 1,
                            margin: "0px 5px",
                            backgroundColor: "rgb(230, 230, 230)",
                            display: "none"
                          }}
                        />
                        <button
                          draggable="false"
                          aria-label="Rotate map counterclockwise"
                          title="Rotate map counterclockwise"
                          type="button"
                          className="gm-control-active"
                          style={{
                            background: "none",
                            display: "none",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            textTransform: "none",
                            appearance: "none",
                            position: "relative",
                            cursor: "pointer",
                            userSelect: "none",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            width: 40,
                            height: 40,
                            transform: "scaleX(-1)"
                          }}
                        >
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h24v24H0V0z%22/%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M12.06%209.06l4-4-4-4-1.41%201.41%201.59%201.59h-.18c-2.3%200-4.6.88-6.35%202.64-3.52%203.51-3.52%209.21%200%2012.72%201.5%201.5%203.4%202.36%205.36%202.58v-2.02c-1.44-.21-2.84-.86-3.95-1.97-2.73-2.73-2.73-7.17%200-9.9%201.37-1.37%203.16-2.05%204.95-2.05h.17l-1.59%201.59%201.41%201.41zm8.94%203c-.19-1.74-.88-3.32-1.91-4.61l-1.43%201.43c.69.92%201.15%202%201.32%203.18H21zm-7.94%207.92V22c1.74-.19%203.32-.88%204.61-1.91l-1.43-1.43c-.91.68-2%201.15-3.18%201.32zm4.6-2.74l1.43%201.43c1.04-1.29%201.72-2.88%201.91-4.61h-2.02c-.17%201.18-.64%202.27-1.32%203.18z%22/%3E%3C/svg%3E"
                            style={{ width: 20, height: 20 }}
                          />
                        </button>
                        <div
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: 30,
                            height: 1,
                            margin: "0px 5px",
                            backgroundColor: "rgb(230, 230, 230)",
                            display: "none"
                          }}
                        />
                        <button
                          draggable="false"
                          aria-label="Tilt map"
                          title="Tilt map"
                          type="button"
                          className="gm-tilt gm-control-active"
                          style={{
                            background: "none",
                            display: "block",
                            border: 0,
                            margin: 0,
                            padding: 0,
                            textTransform: "none",
                            appearance: "none",
                            position: "relative",
                            cursor: "pointer",
                            userSelect: "none",
                            top: 0,
                            left: 0,
                            overflow: "hidden",
                            width: 40,
                            height: 40
                          }}
                        >
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                            style={{ width: 18 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                            style={{ width: 18 }}
                          />
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2016%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2016h8V9H0v7zm10%200h8V9h-8v7zM0%207h8V0H0v7zm10-7v7h8V0h-8z%22/%3E%3C/svg%3E"
                            style={{ width: 18 }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      margin: "0px 5px",
                      zIndex: 1000000,
                      position: "absolute",
                      left: 0,
                      bottom: 0
                    }}
                  >
                    <a
                      target="_blank"
                      rel="noopener"
                      title="Open this area in Google Maps (opens a new window)"
                      aria-label="Open this area in Google Maps (opens a new window)"
                      href="https://maps.google.com/maps?ll=48.8566,2.3522&z=13&t=m&hl=en-GB&gl=US&mapclient=apiv3"
                      style={{ display: "inline" }}
                    >
                      <div style={{ width: 66, height: 26 }}>
                        <img
                          alt="Google"
                          src="data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2069%2029%22%3E%3Cg%20opacity%3D%22.3%22%20fill%3D%22%23000%22%20stroke%3D%22%23000%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M17.4706%207.33616L18.0118%206.79504%2017.4599%206.26493C16.0963%204.95519%2014.2582%203.94522%2011.7008%203.94522c-4.613699999999999%200-8.50262%203.7551699999999997-8.50262%208.395779999999998C3.19818%2016.9817%207.0871%2020.7368%2011.7008%2020.7368%2014.1712%2020.7368%2016.0773%2019.918%2017.574%2018.3689%2019.1435%2016.796%2019.5956%2014.6326%2019.5956%2012.957%2019.5956%2012.4338%2019.5516%2011.9316%2019.4661%2011.5041L19.3455%2010.9012H10.9508V14.4954H15.7809C15.6085%2015.092%2015.3488%2015.524%2015.0318%2015.8415%2014.403%2016.4629%2013.4495%2017.1509%2011.7008%2017.1509%209.04835%2017.1509%206.96482%2015.0197%206.96482%2012.341%206.96482%209.66239%209.04835%207.53119%2011.7008%207.53119%2013.137%207.53119%2014.176%208.09189%2014.9578%208.82348L15.4876%209.31922%2016.0006%208.80619%2017.4706%207.33616z%22/%3E%3Cpath%20d%3D%22M24.8656%2020.7286C27.9546%2020.7286%2030.4692%2018.3094%2030.4692%2015.0594%2030.4692%2011.7913%2027.953%209.39009%2024.8656%209.39009%2021.7783%209.39009%2019.2621%2011.7913%2019.2621%2015.0594c0%203.25%202.514499999999998%205.6692%205.6035%205.6692zM24.8656%2012.8282C25.8796%2012.8282%2026.8422%2013.6652%2026.8422%2015.0594%2026.8422%2016.4399%2025.8769%2017.2905%2024.8656%2017.2905%2023.8557%2017.2905%2022.8891%2016.4331%2022.8891%2015.0594%2022.8891%2013.672%2023.853%2012.8282%2024.8656%2012.8282z%22/%3E%3Cpath%20d%3D%22M35.7511%2017.2905v0H35.7469C34.737%2017.2905%2033.7703%2016.4331%2033.7703%2015.0594%2033.7703%2013.672%2034.7343%2012.8282%2035.7469%2012.8282%2036.7608%2012.8282%2037.7234%2013.6652%2037.7234%2015.0594%2037.7234%2016.4439%2036.7554%2017.2961%2035.7511%2017.2905zM35.7387%2020.7286C38.8277%2020.7286%2041.3422%2018.3094%2041.3422%2015.0594%2041.3422%2011.7913%2038.826%209.39009%2035.7387%209.39009%2032.6513%209.39009%2030.1351%2011.7913%2030.1351%2015.0594%2030.1351%2018.3102%2032.6587%2020.7286%2035.7387%2020.7286z%22/%3E%3Cpath%20d%3D%22M51.953%2010.4357V9.68573H48.3999V9.80826C47.8499%209.54648%2047.1977%209.38187%2046.4808%209.38187%2043.5971%209.38187%2041.0168%2011.8998%2041.0168%2015.0758%2041.0168%2017.2027%2042.1808%2019.0237%2043.8201%2019.9895L43.7543%2020.0168%2041.8737%2020.797%2041.1808%2021.0844%2041.4684%2021.7772C42.0912%2023.2776%2043.746%2025.1469%2046.5219%2025.1469%2047.9324%2025.1469%2049.3089%2024.7324%2050.3359%2023.7376%2051.3691%2022.7367%2051.953%2021.2411%2051.953%2019.2723v-8.8366zm-7.2194%209.9844L44.7334%2020.4196C45.2886%2020.6201%2045.878%2020.7286%2046.4808%2020.7286%2047.1616%2020.7286%2047.7866%2020.5819%2048.3218%2020.3395%2048.2342%2020.7286%2048.0801%2021.0105%2047.8966%2021.2077%2047.6154%2021.5099%2047.1764%2021.7088%2046.5219%2021.7088%2045.61%2021.7088%2045.0018%2021.0612%2044.7336%2020.4201zM46.6697%2012.8282C47.6419%2012.8282%2048.5477%2013.6765%2048.5477%2015.084%2048.5477%2016.4636%2047.6521%2017.2987%2046.6697%2017.2987%2045.6269%2017.2987%2044.6767%2016.4249%2044.6767%2015.084%2044.6767%2013.7086%2045.6362%2012.8282%2046.6697%2012.8282zM55.7387%205.22081v-.75H52.0788V20.4412H55.7387V5.22081z%22/%3E%3Cpath%20d%3D%22M63.9128%2016.0614L63.2945%2015.6492%2062.8766%2016.2637C62.4204%2016.9346%2061.8664%2017.3069%2061.0741%2017.3069%2060.6435%2017.3069%2060.3146%2017.2088%2060.0544%2017.0447%2059.9844%2017.0006%2059.9161%2016.9496%2059.8498%2016.8911L65.5497%2014.5286%2066.2322%2014.2456%2065.9596%2013.5589%2065.7406%2013.0075C65.2878%2011.8%2063.8507%209.39832%2060.8278%209.39832%2057.8445%209.39832%2055.5034%2011.7619%2055.5034%2015.0676%2055.5034%2018.2151%2057.8256%2020.7369%2061.0659%2020.7369%2063.6702%2020.7369%2065.177%2019.1378%2065.7942%2018.2213L66.2152%2017.5963%2065.5882%2017.1783%2063.9128%2016.0614zM61.3461%2012.8511L59.4108%2013.6526C59.7903%2013.0783%2060.4215%2012.7954%2060.9017%2012.7954%2061.067%2012.7954%2061.2153%2012.8161%2061.3461%2012.8511z%22/%3E%3C/g%3E%3Cpath%20d%3D%22M11.7008%2019.9868C7.48776%2019.9868%203.94818%2016.554%203.94818%2012.341%203.94818%208.12803%207.48776%204.69522%2011.7008%204.69522%2014.0331%204.69522%2015.692%205.60681%2016.9403%206.80583L15.4703%208.27586C14.5751%207.43819%2013.3597%206.78119%2011.7008%206.78119%208.62108%206.78119%206.21482%209.26135%206.21482%2012.341%206.21482%2015.4207%208.62108%2017.9009%2011.7008%2017.9009%2013.6964%2017.9009%2014.8297%2017.0961%2015.5606%2016.3734%2016.1601%2015.7738%2016.5461%2014.9197%2016.6939%2013.7454h-4.9931V11.6512h7.0298C18.8045%2012.0207%2018.8456%2012.4724%2018.8456%2012.957%2018.8456%2014.5255%2018.4186%2016.4637%2017.0389%2017.8434%2015.692%2019.2395%2013.9838%2019.9868%2011.7008%2019.9868zM29.7192%2015.0594C29.7192%2017.8927%2027.5429%2019.9786%2024.8656%2019.9786%2022.1884%2019.9786%2020.0121%2017.8927%2020.0121%2015.0594%2020.0121%2012.2096%2022.1884%2010.1401%2024.8656%2010.1401%2027.5429%2010.1401%2029.7192%2012.2096%2029.7192%2015.0594zM27.5922%2015.0594C27.5922%2013.2855%2026.3274%2012.0782%2024.8656%2012.0782S22.1391%2013.2937%2022.1391%2015.0594C22.1391%2016.8086%2023.4038%2018.0405%2024.8656%2018.0405S27.5922%2016.8168%2027.5922%2015.0594zM40.5922%2015.0594C40.5922%2017.8927%2038.4159%2019.9786%2035.7387%2019.9786%2033.0696%2019.9786%2030.8851%2017.8927%2030.8851%2015.0594%2030.8851%2012.2096%2033.0614%2010.1401%2035.7387%2010.1401%2038.4159%2010.1401%2040.5922%2012.2096%2040.5922%2015.0594zM38.4734%2015.0594C38.4734%2013.2855%2037.2087%2012.0782%2035.7469%2012.0782%2034.2851%2012.0782%2033.0203%2013.2937%2033.0203%2015.0594%2033.0203%2016.8086%2034.2851%2018.0405%2035.7469%2018.0405%2037.2087%2018.0487%2038.4734%2016.8168%2038.4734%2015.0594zM51.203%2010.4357v8.8366C51.203%2022.9105%2049.0595%2024.3969%2046.5219%2024.3969%2044.132%2024.3969%2042.7031%2022.7955%2042.161%2021.4897L44.0417%2020.7095C44.3784%2021.5143%2045.1997%2022.4588%2046.5219%2022.4588%2048.1479%2022.4588%2049.1499%2021.4487%2049.1499%2019.568V18.8617H49.0759C48.5914%2019.4612%2047.6552%2019.9786%2046.4808%2019.9786%2044.0171%2019.9786%2041.7668%2017.8352%2041.7668%2015.0758%2041.7668%2012.3%2044.0253%2010.1319%2046.4808%2010.1319%2047.6552%2010.1319%2048.5914%2010.6575%2049.0759%2011.2323H49.1499V10.4357H51.203zM49.2977%2015.084C49.2977%2013.3512%2048.1397%2012.0782%2046.6697%2012.0782%2045.175%2012.0782%2043.9267%2013.3429%2043.9267%2015.084%2043.9267%2016.8004%2045.175%2018.0487%2046.6697%2018.0487%2048.1397%2018.0487%2049.2977%2016.8004%2049.2977%2015.084zM54.9887%205.22081V19.6912H52.8288V5.22081H54.9887zM63.4968%2016.6854L65.1722%2017.8023C64.6301%2018.6072%2063.3244%2019.9869%2061.0659%2019.9869%2058.2655%2019.9869%2056.2534%2017.827%2056.2534%2015.0676%2056.2534%2012.1439%2058.2901%2010.1483%2060.8278%2010.1483%2063.3818%2010.1483%2064.6301%2012.1768%2065.0408%2013.2773L65.2625%2013.8357%2058.6843%2016.5623C59.1853%2017.5478%2059.9737%2018.0569%2061.0741%2018.0569%2062.1746%2018.0569%2062.9384%2017.5067%2063.4968%2016.6854zM58.3312%2014.9115L62.7331%2013.0884C62.4867%2012.4724%2061.764%2012.0454%2060.9017%2012.0454%2059.8012%2012.0454%2058.2737%2013.0145%2058.3312%2014.9115z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E"
                          draggable="false"
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 66,
                            height: 26,
                            userSelect: "none",
                            border: 0,
                            padding: 0,
                            margin: 0
                          }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div />
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      position: "absolute",
                      right: 0,
                      bottom: 0
                    }}
                  >
                    <div className="gmnoprint" style={{ zIndex: 1000001 }}>
                      <div
                        draggable="false"
                        className="gm-style-cc"
                        style={{
                          userSelect: "none",
                          position: "relative",
                          height: 14,
                          lineHeight: 14
                        }}
                      >
                        <div
                          style={{
                            opacity: "0.7",
                            width: "100%",
                            height: "100%",
                            position: "absolute"
                          }}
                        >
                          <div style={{ width: 1 }} />
                          <div
                            style={{
                              backgroundColor: "rgb(245, 245, 245)",
                              width: "auto",
                              height: "100%",
                              marginLeft: 1
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            paddingRight: 6,
                            paddingLeft: 6,
                            boxSizing: "border-box",
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: 10,
                            color: "rgb(0, 0, 0)",
                            whiteSpace: "nowrap",
                            direction: "ltr",
                            textAlign: "right",
                            verticalAlign: "middle",
                            display: "inline-block"
                          }}
                        >
                          <button
                            draggable="false"
                            aria-label="Keyboard shortcuts"
                            title="Keyboard shortcuts"
                            type="button"
                            style={{
                              background: "none",
                              display: "inline-block",
                              border: 0,
                              margin: 0,
                              padding: 0,
                              textTransform: "none",
                              appearance: "none",
                              position: "relative",
                              cursor: "pointer",
                              userSelect: "none",
                              color: "rgb(0, 0, 0)",
                              fontFamily: "inherit",
                              lineHeight: "inherit"
                            }}
                          >
                            Keyboard shortcuts
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="gmnoprint" style={{ zIndex: 1000001 }}>
                      <div
                        draggable="false"
                        className="gm-style-cc"
                        style={{
                          userSelect: "none",
                          position: "relative",
                          height: 14,
                          lineHeight: 14
                        }}
                      >
                        <div
                          style={{
                            opacity: "0.7",
                            width: "100%",
                            height: "100%",
                            position: "absolute"
                          }}
                        >
                          <div style={{ width: 1 }} />
                          <div
                            style={{
                              backgroundColor: "rgb(245, 245, 245)",
                              width: "auto",
                              height: "100%",
                              marginLeft: 1
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            paddingRight: 6,
                            paddingLeft: 6,
                            boxSizing: "border-box",
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: 10,
                            color: "rgb(0, 0, 0)",
                            whiteSpace: "nowrap",
                            direction: "ltr",
                            textAlign: "right",
                            verticalAlign: "middle",
                            display: "inline-block"
                          }}
                        >
                          <button
                            draggable="false"
                            aria-label="Map Data"
                            title="Map Data"
                            type="button"
                            style={{
                              background: "none",
                              border: 0,
                              margin: 0,
                              padding: 0,
                              textTransform: "none",
                              appearance: "none",
                              position: "relative",
                              cursor: "pointer",
                              userSelect: "none",
                              color: "rgb(0, 0, 0)",
                              fontFamily: "inherit",
                              lineHeight: "inherit",
                              display: "none"
                            }}
                          >
                            Map Data
                          </button>
                          <span style={{}}>Map data ©2023 Google</span>
                        </div>
                      </div>
                    </div>
                    <div className="gmnoscreen">
                      <div
                        style={{
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: 11,
                          color: "rgb(0, 0, 0)",
                          direction: "ltr",
                          textAlign: "right",
                          backgroundColor: "rgb(245, 245, 245)"
                        }}
                      >
                        Map data ©2023 Google
                      </div>
                    </div>
                    <button
                      draggable="false"
                      aria-label="Map scale: 1 km per 80 pixels"
                      title="Map scale: 1 km per 80 pixels"
                      type="button"
                      className="gm-style-cc"
                      aria-describedby="AA1DCD92-E530-43A0-8D5C-22785FB8D7BC"
                      style={{
                        background: "none",
                        display: "none",
                        border: 0,
                        margin: 0,
                        padding: 0,
                        textTransform: "none",
                        appearance: "none",
                        position: "relative",
                        cursor: "pointer",
                        userSelect: "none",
                        height: 14,
                        lineHeight: 14
                      }}
                    >
                      <div
                        style={{
                          opacity: "0.7",
                          width: "100%",
                          height: "100%",
                          position: "absolute"
                        }}
                      >
                        <div style={{ width: 1 }} />
                        <div
                          style={{
                            backgroundColor: "rgb(245, 245, 245)",
                            width: "auto",
                            height: "100%",
                            marginLeft: 1
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          paddingRight: 6,
                          paddingLeft: 6,
                          boxSizing: "border-box",
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: 10,
                          color: "rgb(0, 0, 0)",
                          whiteSpace: "nowrap",
                          direction: "ltr",
                          textAlign: "right",
                          verticalAlign: "middle",
                          display: "inline-block"
                        }}
                      >
                        <span>1 km&nbsp;</span>
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            height: 8,
                            bottom: "-1px",
                            width: 84
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: 4,
                              position: "absolute",
                              left: 0,
                              top: 0
                            }}
                          />
                          <div
                            style={{
                              width: 4,
                              height: 8,
                              left: 0,
                              top: 0,
                              backgroundColor: "rgb(255, 255, 255)"
                            }}
                          />
                          <div
                            style={{
                              width: 4,
                              height: 8,
                              position: "absolute",
                              backgroundColor: "rgb(255, 255, 255)",
                              right: 0,
                              bottom: 0
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              backgroundColor: "rgb(102, 102, 102)",
                              height: 2,
                              left: 1,
                              bottom: 1,
                              right: 1
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              width: 2,
                              height: 6,
                              left: 1,
                              top: 1,
                              backgroundColor: "rgb(102, 102, 102)"
                            }}
                          />
                          <div
                            style={{
                              width: 2,
                              height: 6,
                              position: "absolute",
                              backgroundColor: "rgb(102, 102, 102)",
                              bottom: 1,
                              right: 1
                            }}
                          />
                        </div>
                      </div>
                      <span
                        id="AA1DCD92-E530-43A0-8D5C-22785FB8D7BC"
                        style={{ display: "none" }}
                      >
                        Click to toggle between metric and imperial units
                      </span>
                    </button>
                    <div
                      className="gmnoprint gm-style-cc"
                      draggable="false"
                      style={{
                        zIndex: 1000001,
                        userSelect: "none",
                        position: "relative",
                        height: 14,
                        lineHeight: 14
                      }}
                    >
                      <div
                        style={{
                          opacity: "0.7",
                          width: "100%",
                          height: "100%",
                          position: "absolute"
                        }}
                      >
                        <div style={{ width: 1 }} />
                        <div
                          style={{
                            backgroundColor: "rgb(245, 245, 245)",
                            width: "auto",
                            height: "100%",
                            marginLeft: 1
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          paddingRight: 6,
                          paddingLeft: 6,
                          boxSizing: "border-box",
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: 10,
                          color: "rgb(0, 0, 0)",
                          whiteSpace: "nowrap",
                          direction: "ltr",
                          textAlign: "right",
                          verticalAlign: "middle",
                          display: "inline-block"
                        }}
                      >
                        <a
                          href="https://www.google.com/intl/en-GB_US/help/terms_maps.html"
                          target="_blank"
                          rel="noopener"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "rgb(0, 0, 0)"
                          }}
                        >
                          Terms of Use
                        </a>
                      </div>
                    </div>
                    <div
                      draggable="false"
                      className="gm-style-cc"
                      style={{
                        userSelect: "none",
                        position: "relative",
                        height: 14,
                        lineHeight: 14,
                        display: "none"
                      }}
                    >
                      <div
                        style={{
                          opacity: "0.7",
                          width: "100%",
                          height: "100%",
                          position: "absolute"
                        }}
                      >
                        <div style={{ width: 1 }} />
                        <div
                          style={{
                            backgroundColor: "rgb(245, 245, 245)",
                            width: "auto",
                            height: "100%",
                            marginLeft: 1
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "relative",
                          paddingRight: 6,
                          paddingLeft: 6,
                          boxSizing: "border-box",
                          fontFamily: "Roboto, Arial, sans-serif",
                          fontSize: 10,
                          color: "rgb(0, 0, 0)",
                          whiteSpace: "nowrap",
                          direction: "ltr",
                          textAlign: "right",
                          verticalAlign: "middle",
                          display: "inline-block"
                        }}
                      >
                        <a
                          target="_blank"
                          rel="noopener"
                          title="Report errors in the road map or imagery to Google"
                          dir="ltr"
                          href="https://www.google.com/maps/@48.8566,2.3522,13z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                          style={{
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: 10,
                            color: "rgb(0, 0, 0)",
                            textDecoration: "none",
                            position: "relative"
                          }}
                        >
                          Report a map error
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                fontWeight: 500,
                fontFamily: "Roboto, sans-serif",
                padding: "15px 25px",
                boxSizing: "border-box",
                top: 5,
                border: "1px solid rgba(0, 0, 0, 0.12)",
                borderRadius: 5,
                left: "50%",
                maxWidth: 375,
                position: "absolute",
                transform: "translateX(-50%)",
                width: "calc(100% - 10px)",
                zIndex: 1
              }}
            >
              <div>
                <img
                  alt=""
                  src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                  draggable="false"
                  style={{
                    padding: 0,
                    margin: 0,
                    border: 0,
                    height: 17,
                    verticalAlign: "middle",
                    width: 52,
                    userSelect: "none"
                  }}
                />
              </div>
              <div style={{ lineHeight: 20, margin: "15px 0px" }}>
                <span style={{ color: "rgba(0, 0, 0, 0.87)", fontSize: 14 }}>
                  This page can't load Google Maps correctly.
                </span>
              </div>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td style={{ lineHeight: 16, verticalAlign: "middle" }}>
                      <a
                        href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=billing#api-key-and-billing-errors"
                        target="_blank"
                        rel="noopener"
                        style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: 12 }}
                      >
                        Do you own this website?
                      </a>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <button className="dismissButton">OK</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <a href="#" id="streetView">
            Street View
          </a>
        </div>
        {/* Similar Listings Container */}
        <div className="utf-desc-headline-item">
          <h3>
            <i className="icon-material-outline-description" /> Similar Property
          </h3>
        </div>
        {/* Layout Switcher */}
        <div className="utf-layout-switcher hidden">
          <a href="#" className="list active">
            <i className="fa fa-th-list" />
          </a>
        </div>
        <div className="utf-listings-container-area list-layout">
          {/* Listing Item */}
          <div className="utf-listing-item">
            {" "}
            <a
              href="#"
              className="utf-smt-listing-img-container"
              style={{ height: 305 }}
            >
              <div className="utf-listing-badges-item">
                {" "}
                <span className="for-rent">For Rent</span>{" "}
              </div>
              <div className="utf-listing-img-content-item">
                <img
                  className="utf-user-picture"
                  src="images/user_1.jpg"
                  alt="user_1"
                  style={{ height: 305 }}
                />
                <span
                  className="like-icon with-tip"
                  data-tip-content="Bookmark"
                >
                  <div className="tip-content">Bookmark</div>
                </span>
                <span
                  className="compare-button with-tip"
                  data-tip-content="Add to Compare"
                >
                  <div className="tip-content">Add to Compare</div>
                </span>
                <span
                  className="video-button with-tip"
                  data-tip-content="Video"
                >
                  <div className="tip-content">Video</div>
                </span>
              </div>
              <img src="images/listing-01.jpg" alt="" style={{ height: 305 }} />{" "}
            </a>
            <div className="utf-listing-content">
              <div className="utf-listing-title">
                <span className="utf-listing-price">$22,000/mo</span>
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span className="utf-listing-address">
                  <i className="icon-material-outline-location-on" /> 2021 San
                  Pedro, Los Angeles 90015
                </span>
              </div>
              <ul className="listing-details">
                <li>
                  <i className="fa fa-bed" /> Beds<span>3</span>
                </li>
                <li>
                  <i className="icon-feather-codepen" /> Baths<span>2</span>
                </li>
                <li>
                  <i className="fa fa-car" /> Garages<span>2</span>
                </li>
                <li>
                  <i className="icon-line-awesome-arrows" /> Sq Ft
                  <span>1530</span>
                </li>
              </ul>
              <div className="utf-listing-user-info">
                <a href="agents-profile.html">
                  <i className="icon-line-awesome-user" /> John Williams
                </a>{" "}
                <span>1 Days Ago</span>
              </div>
            </div>
          </div>
          {/* Listing Item / End */}
          {/* Listing Item */}
          <div className="utf-listing-item">
            {" "}
            <a
              href="#"
              className="utf-smt-listing-img-container"
              style={{ height: 305 }}
            >
              <div className="utf-listing-badges-item">
                {" "}
                <span className="for-sale">For Sale</span>{" "}
              </div>
              <div className="utf-listing-img-content-item">
                <img
                  className="utf-user-picture"
                  src="images/user_1.jpg"
                  alt="user_1"
                  style={{ height: 305 }}
                />
                <span
                  className="like-icon with-tip"
                  data-tip-content="Bookmark"
                >
                  <div className="tip-content">Bookmark</div>
                </span>
                <span
                  className="compare-button with-tip"
                  data-tip-content="Add to Compare"
                >
                  <div className="tip-content">Add to Compare</div>
                </span>
                <span
                  className="video-button with-tip"
                  data-tip-content="Video"
                >
                  <div className="tip-content">Video</div>
                </span>
              </div>
              <div>
                <img
                  src="images/listing-02.jpg"
                  alt=""
                  style={{ height: 305 }}
                />
              </div>
            </a>
            <div className="utf-listing-content">
              <div className="utf-listing-title">
                <span className="utf-listing-price">$20,000/mo</span>
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span className="utf-listing-address">
                  <i className="icon-material-outline-location-on" /> 2021 San
                  Pedro, Los Angeles 90015
                </span>
              </div>
              <ul className="listing-details">
                <li>
                  <i className="fa fa-bed" /> Beds<span>3</span>
                </li>
                <li>
                  <i className="icon-feather-codepen" /> Baths<span>2</span>
                </li>
                <li>
                  <i className="fa fa-car" /> Garages<span>2</span>
                </li>
                <li>
                  <i className="icon-line-awesome-arrows" /> Sq Ft
                  <span>1530</span>
                </li>
              </ul>
              <div className="utf-listing-user-info">
                <a href="agents-profile.html">
                  <i className="icon-line-awesome-user" /> John Williams
                </a>{" "}
                <span>1 Days Ago</span>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* Listing Item / End */}
          {/* Listing Item */}
          <div className="utf-listing-item">
            {" "}
            <a
              href="#"
              className="utf-smt-listing-img-container"
              style={{ height: 305 }}
            >
              <div className="utf-listing-badges-item">
                {" "}
                <span className="for-sale">For Sale</span>{" "}
              </div>
              <div className="utf-listing-img-content-item">
                <img
                  className="utf-user-picture"
                  src="images/user_1.jpg"
                  alt="user_1"
                  style={{ height: 305 }}
                />
                <span
                  className="like-icon with-tip"
                  data-tip-content="Bookmark"
                >
                  <div className="tip-content">Bookmark</div>
                </span>
                <span
                  className="compare-button with-tip"
                  data-tip-content="Add to Compare"
                >
                  <div className="tip-content">Add to Compare</div>
                </span>
                <span
                  className="video-button with-tip"
                  data-tip-content="Video"
                >
                  <div className="tip-content">Video</div>
                </span>
              </div>
              <img src="images/listing-03.jpg" alt="" style={{ height: 305 }} />{" "}
            </a>
            <div className="utf-listing-content">
              <div className="utf-listing-title">
                <span className="utf-listing-price">$18,000/mo</span>
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span className="utf-listing-address">
                  <i className="icon-material-outline-location-on" /> 2021 San
                  Pedro, Los Angeles 90015
                </span>
              </div>
              <ul className="listing-details">
                <li>
                  <i className="fa fa-bed" /> Beds<span>3</span>
                </li>
                <li>
                  <i className="icon-feather-codepen" /> Baths<span>2</span>
                </li>
                <li>
                  <i className="fa fa-car" /> Garages<span>2</span>
                </li>
                <li>
                  <i className="icon-line-awesome-arrows" /> Sq Ft
                  <span>1530</span>
                </li>
              </ul>
              <div className="utf-listing-user-info">
                <a href="agents-profile.html">
                  <i className="icon-line-awesome-user" /> John Williams
                </a>{" "}
                <span>1 Days Ago</span>
              </div>
            </div>
          </div>
          {/* Listing Item / End */}
          {/* Listing Item */}
          <div className="utf-listing-item">
            {" "}
            <a
              href="#"
              className="utf-smt-listing-img-container"
              style={{ height: 305 }}
            >
              <div className="utf-listing-badges-item">
                {" "}
                <span className="for-sale">For Sale</span>{" "}
              </div>
              <div className="utf-listing-img-content-item">
                <img
                  className="utf-user-picture"
                  src="images/user_1.jpg"
                  alt="user_1"
                  style={{ height: 305 }}
                />
                <span
                  className="like-icon with-tip"
                  data-tip-content="Bookmark"
                >
                  <div className="tip-content">Bookmark</div>
                </span>
                <span
                  className="compare-button with-tip"
                  data-tip-content="Add to Compare"
                >
                  <div className="tip-content">Add to Compare</div>
                </span>
                <span
                  className="video-button with-tip"
                  data-tip-content="Video"
                >
                  <div className="tip-content">Video</div>
                </span>
              </div>
              <img src="images/listing-04.jpg" alt="" style={{ height: 305 }} />{" "}
            </a>
            <div className="utf-listing-content">
              <div className="utf-listing-title">
                <span className="utf-listing-price">$18,000/mo</span>
                <h4>
                  <a href="#">Renovated Luxury Apartment</a>
                </h4>
                <span className="utf-listing-address">
                  <i className="icon-material-outline-location-on" /> 2021 San
                  Pedro, Los Angeles 90015
                </span>
              </div>
              <ul className="listing-details">
                <li>
                  <i className="fa fa-bed" /> Beds<span>3</span>
                </li>
                <li>
                  <i className="icon-feather-codepen" /> Baths<span>2</span>
                </li>
                <li>
                  <i className="fa fa-car" /> Garages<span>2</span>
                </li>
                <li>
                  <i className="icon-line-awesome-arrows" /> Sq Ft
                  <span>1530</span>
                </li>
              </ul>
              <div className="utf-listing-user-info">
                <a href="agents-profile.html">
                  <i className="icon-line-awesome-user" /> John Williams
                </a>{" "}
                <span>1 Days Ago</span>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* Listing Item / End */}
        </div>
        {/* Similar Listings Container / End */}
        {/* Reviews */}
        <section className="comments margin-top-40">
          <div className="utf-inner-blog-section-title">
            <h4>
              <i className="icon-line-awesome-commenting-o" /> Comments (5)
            </h4>
          </div>
          <ul>
            <li>
              <div className="avatar">
                <img src="images/coumment-user-1.jpg" alt="" />
              </div>
              <div className="comment-content">
                <div className="arrow-comment" />
                <div className="comment-by">
                  John Williams<span className="date">12th, Jan 2021</span>{" "}
                  <a href="#" className="reply">
                    <i className="fa fa-reply" /> Reply
                  </a>{" "}
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of printing and type setting
                  industry. Lorem Ipsum been industry standard dummy text ever
                  since, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
              <ul>
                <li>
                  <div className="avatar">
                    <img src="images/coumment-user-2.jpg" alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="arrow-comment" />
                    <div className="comment-by">
                      John Williams<span className="date">12th, Jan 2021</span>{" "}
                      <a href="#" className="reply">
                        <i className="fa fa-reply" /> Reply
                      </a>{" "}
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of printing and type
                      setting industry. Lorem Ipsum been industry standard dummy
                      text ever since, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="avatar">
                    <img src="images/coumment-user-2.jpg" alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="arrow-comment" />
                    <div className="comment-by">
                      John Williams<span className="date">12th, Jan 2021</span>{" "}
                      <a href="#" className="reply">
                        <i className="fa fa-reply" /> Reply
                      </a>{" "}
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of printing and type
                      setting industry. Lorem Ipsum been industry standard dummy
                      text ever since, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <div className="avatar">
                        <img src="images/coumment-user-1.jpg" alt="" />
                      </div>
                      <div className="comment-content">
                        <div className="arrow-comment" />
                        <div className="comment-by">
                          John Williams
                          <span className="date">12th, Jan 2021</span>{" "}
                          <a href="#" className="reply">
                            <i className="fa fa-reply" /> Reply
                          </a>{" "}
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of printing and type
                          setting industry. Lorem Ipsum been industry standard
                          dummy text ever since, when an unknown printer took a
                          galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div className="avatar">
                <img src="images/coumment-user-3.jpg" alt="" />{" "}
              </div>
              <div className="comment-content">
                <div className="arrow-comment" />
                <div className="comment-by">
                  John Williams<span className="date">12th, Jan 2021</span>{" "}
                  <a href="#" className="reply">
                    <i className="fa fa-reply" /> Reply
                  </a>{" "}
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of printing and type setting
                  industry. Lorem Ipsum been industry standard dummy text ever
                  since, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <div className="clearfix" />
        <div className="margin-top-35" />
        {/* Add Comment */}
        <div className="utf-inner-blog-section-title">
          <h4>
            <i className="icon-line-awesome-comments-o" /> Leave Your Comment
          </h4>
        </div>
        <div className="margin-top-15" />
        {/* Add Comment Form */}
        <form id="add-comment" className="add-comment">
          <fieldset>
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder="Name *" defaultValue="" />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Email Address *"
                  defaultValue=""
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Phone Number *"
                  defaultValue=""
                />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Subject" defaultValue="" />
              </div>
              <div className="col-md-12">
                <textarea
                  cols={30}
                  placeholder="Comment..."
                  rows={2}
                  defaultValue={""}
                />
              </div>
            </div>
          </fieldset>
          <div className="utf-centered-button">
            <a href="#" className="button">
              Submit Comment
            </a>
          </div>
          <div className="clearfix" />
        </form>
      </div>
    </div>
    {/* Property Description / End */}
    {/* Sidebar */}
    <div className="col-lg-4 col-md-5">
      <div className="sidebar">
        <div className="widget utf-sidebar-widget-item">
          <div className="utf-detail-banner-add-section">
            <a href="#">
              <img src="images/banner-add-2.jpg" alt="banner-add-2" />
            </a>
          </div>
        </div>
        {/* Widget */}
        <div className="widget utf-sidebar-widget-item">
          <div className="utf-boxed-list-headline-item">
            <h3>Property Details</h3>
          </div>
          <button
            className="widget-button with-tip"
            data-tip-content="Share Property"
          >
            <i className="sl sl-icon-share" />
            <div className="tip-content">Share Property</div>
          </button>
          <button
            className="widget-button with-tip"
            data-tip-content="Bookmark Property"
          >
            <i className="fa fa-heart" />
            <div className="tip-content">Bookmark Property</div>
          </button>
          <button
            className="widget-button with-tip compare-widget-button"
            data-tip-content="Add to Compare"
          >
            <div className="tip-content">Add to Compare</div>
          </button>
          <button
            className="widget-button with-tip"
            data-tip-content="Property Location"
          >
            <i className="sl sl-icon-map" />
            <div className="tip-content">Property Location</div>
          </button>
          <button
            className="widget-button with-tip"
            data-tip-content="Print Property"
          >
            <i className="sl sl-icon-printer" />
            <div className="tip-content">Print Property</div>
          </button>
          <div className="clearfix" />
        </div>
        {/* Widget / End */}
        {/* Widget */}
        <div className="widget utf-sidebar-widget-item">
          <div className="agent-widget">
            <div className="utf-boxed-list-headline-item">
              <h3>Listed By Agents Details</h3>
            </div>
            <div className="agent-title">
              <div className="agent-photo">
                <img src="images/agent-avatar.jpg" alt="" />
              </div>
              <div className="agent-details">
                <h4>
                  <a href="#">John Williams</a>
                </h4>
                <span>(+21) 124 123 4546</span>
                <span>demo@example.com</span>
                <span>
                  <a href="agents-profile.html">View My Listing</a>
                </span>
              </div>
              <div className="clearfix" />
            </div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea defaultValue={"I'm interest in [ Listing Single ]"} />
            <button className="button fullwidth margin-top-5">
              Send Message
            </button>
          </div>
        </div>
        {/* Widget / End */}
        {/* Widget */}
        <div className="widget utf-sidebar-widget-item">
          <div className="utf-boxed-list-headline-item">
            <h3>Find New Home</h3>
          </div>
          <div className="row with-forms">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <select
                data-placeholder="Any Status"
                className="utf-chosen-select-single-item"
                style={{ display: "none" }}
              >
                <option>Any Status</option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
              <div
                className="chosen-container chosen-container-single chosen-container-single-nosearch"
                style={{ width: "100%" }}
                title=""
              >
                <a className="chosen-single chosen-default">
                  <span>Any Status</span>
                  <div>
                    <b />
                  </div>
                </a>
                <div className="chosen-drop">
                  <div className="chosen-search">
                    <input type="text" autoComplete="off" readOnly="" />
                  </div>
                  <ul className="chosen-results" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <select
                data-placeholder="Any Type"
                className="utf-chosen-select-single-item"
                style={{ display: "none" }}
              >
                <option>Any Type</option>
                <option>Apartments</option>
                <option>Houses</option>
                <option>Commercial</option>
                <option>Garages</option>
                <option>Lots</option>
              </select>
              <div
                className="chosen-container chosen-container-single chosen-container-single-nosearch"
                style={{ width: "100%" }}
                title=""
              >
                <a className="chosen-single chosen-default">
                  <span>Any Type</span>
                  <div>
                    <b />
                  </div>
                </a>
                <div className="chosen-drop">
                  <div className="chosen-search">
                    <input type="text" autoComplete="off" readOnly="" />
                  </div>
                  <ul className="chosen-results" />
                </div>
              </div>
            </div>
          </div>
          {/* Row / End */}
          {/* Row */}
          <div className="row with-forms">
            <div className="col-md-6">
              <select
                data-placeholder="Beds"
                className="utf-chosen-select-single-item"
                style={{ display: "none" }}
              >
                <option label="blank" />
                <option>Beds (Any)</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div
                className="chosen-container chosen-container-single chosen-container-single-nosearch"
                style={{ width: "100%" }}
                title=""
              >
                <a className="chosen-single chosen-default">
                  <span>Beds</span>
                  <div>
                    <b />
                  </div>
                </a>
                <div className="chosen-drop">
                  <div className="chosen-search">
                    <input type="text" autoComplete="off" readOnly="" />
                  </div>
                  <ul className="chosen-results" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <select
                data-placeholder="Baths"
                className="utf-chosen-select-single-item"
                style={{ display: "none" }}
              >
                <option label="blank" />
                <option>Baths (Any)</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div
                className="chosen-container chosen-container-single chosen-container-single-nosearch"
                style={{ width: "100%" }}
                title=""
              >
                <a className="chosen-single chosen-default">
                  <span>Baths</span>
                  <div>
                    <b />
                  </div>
                </a>
                <div className="chosen-drop">
                  <div className="chosen-search">
                    <input type="text" autoComplete="off" readOnly="" />
                  </div>
                  <ul className="chosen-results" />
                </div>
              </div>
            </div>
          </div>
          {/* Row / End */}
          {/* Row */}
          <div className="row with-forms">
            <div className="col-md-12">
              <select
                data-placeholder="All States"
                className="chosen-select"
                style={{ display: "none" }}
              >
                <option>All States</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>
              </select>
              <div
                className="chosen-container chosen-container-single"
                style={{ width: "100%" }}
                title=""
              >
                <a className="chosen-single chosen-default">
                  <span>All States</span>
                  <div>
                    <b />
                  </div>
                </a>
                <div className="chosen-drop">
                  <div className="chosen-search">
                    <input type="text" autoComplete="off" />
                  </div>
                  <ul className="chosen-results" />
                </div>
              </div>
            </div>
          </div>
          {/* Row / End */}
          {/* Row */}
          <div className="row with-forms">
            <div className="col-md-12">
              <select
                data-placeholder="All Cities"
                className="chosen-select"
                style={{ display: "none" }}
              >
                <option>All Cities</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Brooklyn</option>
                <option>Queens</option>
                <option>Houston</option>
                <option>Manhattan</option>
              </select>
              <div
                className="chosen-container chosen-container-single chosen-container-single-nosearch"
                style={{ width: "100%" }}
                title=""
              >
                <a className="chosen-single chosen-default">
                  <span>All Cities</span>
                  <div>
                    <b />
                  </div>
                </a>
                <div className="chosen-drop">
                  <div className="chosen-search">
                    <input type="text" autoComplete="off" readOnly="" />
                  </div>
                  <ul className="chosen-results" />
                </div>
              </div>
            </div>
          </div>
          {/* Row / End */}
          {/* Area Range */}
          <div className="utf-range-slider-item margin-top-10 margin-bottom-25">
            <label>Area Range</label>
            <div
              id="utf-area-range-item"
              data-min={0}
              data-max={1500}
              data-unit="sq ft"
              className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
            >
              <input type="text" className="first-slider-value" disabled="" />
              <input type="text" className="second-slider-value" disabled="" />
              <div
                className="ui-slider-range ui-widget-header ui-corner-all"
                style={{ left: "0%", width: "100%" }}
              />
              <a
                className="ui-slider-handle ui-state-default ui-corner-all"
                href="#"
                style={{ left: "0%" }}
              />
              <a
                className="ui-slider-handle ui-state-default ui-corner-all"
                href="#"
                style={{ left: "100%" }}
              />
            </div>
            <div className="clearfix" />
          </div>
          {/* Price Range */}
          <div className="utf-range-slider-item margin-bottom-10">
            <label>Price Range</label>
            <div
              id="utf-price-range-item"
              data-min={0}
              data-max={400000}
              data-unit="$"
              className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
            >
              <input type="text" className="first-slider-value" disabled="" />
              <input type="text" className="second-slider-value" disabled="" />
              <div
                className="ui-slider-range ui-widget-header ui-corner-all"
                style={{ left: "0%", width: "100%" }}
              />
              <a
                className="ui-slider-handle ui-state-default ui-corner-all"
                href="#"
                style={{ left: "0%" }}
              />
              <a
                className="ui-slider-handle ui-state-default ui-corner-all"
                href="#"
                style={{ left: "100%" }}
              />
            </div>
            <div className="clearfix" />
          </div>
          {/* More Search Options */}
          <a
            href="#"
            className="utf-utf-more-search-options-area-button margin-bottom-10 margin-top-20"
            data-open-title="More Search Option"
            data-close-title="Less Search Option"
          />
          <div className="utf-more-search-options-area relative">
            <div className="checkboxes one-in-row margin-bottom-10">
              <input id="check-2" type="checkbox" name="check" />
              <label htmlFor="check-2">Air Conditioning</label>
              <input id="check-3" type="checkbox" name="check" />
              <label htmlFor="check-3">Swimming Pool</label>
              <input id="check-4" type="checkbox" name="check" />
              <label htmlFor="check-4">Central Heating</label>
              <input id="check-5" type="checkbox" name="check" />
              <label htmlFor="check-5">Laundry Room</label>
              <input id="check-6" type="checkbox" name="check" />
              <label htmlFor="check-6">Gym</label>
              <input id="check-7" type="checkbox" name="check" />
              <label htmlFor="check-7">Alarm</label>
              <input id="check-8" type="checkbox" name="check" />
              <label htmlFor="check-8">Window Covering</label>
            </div>
            {/* Checkboxes / End */}
          </div>
          {/* More Search Options / End */}
          <button className="button fullwidth margin-top-10">Search</button>
        </div>
        {/* Widget / End */}
        {/* Widget */}
        <div className="widget utf-sidebar-widget-item">
          <div className="utf-boxed-list-headline-item">
            <h3>Recently Viewed</h3>
          </div>
          <ul className="widget-tabs">
            {/* Post #1 */}
            <li>
              <div className="widget-content">
                <div className="widget-thumb">
                  {" "}
                  <a href="#">
                    <img src="images/blog-widget-03.jpg" alt="" />
                  </a>{" "}
                </div>
                <div className="widget-text">
                  <h5>
                    <a href="#">
                      How to “Woo” a Recruiter and Land Your Dream Job.
                    </a>
                  </h5>
                  <span>$22,000/mo</span>
                </div>
                <div className="clearfix" />
              </div>
            </li>
            {/* Post #2 */}
            <li>
              <div className="widget-content">
                <div className="widget-thumb">
                  {" "}
                  <a href="#">
                    <img src="images/blog-widget-02.jpg" alt="" />
                  </a>{" "}
                </div>
                <div className="widget-text">
                  <h5>
                    <a href="#">
                      Hey Job Seeker, It’s Time To Get Up And Get Hired.
                    </a>
                  </h5>
                  <span>$18,000/mo</span>
                </div>
                <div className="clearfix" />
              </div>
            </li>
            {/* Post #3 */}
            <li>
              <div className="widget-content">
                <div className="widget-thumb">
                  {" "}
                  <a href="#">
                    <img src="images/blog-widget-01.jpg" alt="" />
                  </a>{" "}
                </div>
                <div className="widget-text">
                  <h5>
                    <a href="#">
                      The Best Canadian Merchant Account Providers.
                    </a>
                  </h5>
                  <span>$15,000/mo</span>
                </div>
                <div className="clearfix" />
              </div>
            </li>
          </ul>
        </div>
        {/* Widget / End*/}
        {/* Widget */}
        <div className="widget utf-sidebar-widget-item">
          <div className="utf-boxed-list-headline-item">
            <h3>Property Categorie</h3>
            <div className="utf-sidebar-categorie">
              <ul>
                <li>
                  <a href="#">Apartment</a>
                  <span>10 Property</span>
                </li>
                <li>
                  <a href="#">Condo</a>
                  <span>14 Property</span>
                </li>
                <li>
                  <a href="#">Family House</a>
                  <span>18 Property</span>
                </li>
                <li>
                  <a href="#">Modern Villa</a>
                  <span>12 Property</span>
                </li>
                <li>
                  <a href="#">Town House</a>
                  <span>10 Property</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Widget / End*/}
        {/* Widget */}
        <div className="widget utf-sidebar-widget-item">
          <div className="utf-boxed-list-headline-item">
            <h3>Property Tags Cloud</h3>
            <div className="task-tags">
              <a href="#">
                <span>Apartment</span>
              </a>
              <a href="#">
                <span>Family House</span>
              </a>
              <a href="#">
                <span>Modern Villa</span>
              </a>
              <a href="#">
                <span>Town House</span>
              </a>
              <a href="#">
                <span>Condo</span>
              </a>
            </div>
          </div>
        </div>
        {/* Widget / End*/}
        {/* Widget */}
        <div className="widget utf-sidebar-widget-item">
          <div className="utf-boxed-list-headline-item">
            <h3>Featured Properties</h3>
          </div>
          <div
            className="utf-listing-carousel-item outer owl-carousel owl-theme"
            style={{ opacity: 1, display: "block" }}
          >
            {/* Item */}
            <div className="owl-wrapper-outer">
              <div
                className="owl-wrapper"
                style={{
                  width: 1986,
                  left: 0,
                  display: "block",
                  transition: "all 1000ms ease 0s",
                  transform: "translate3d(0px, 0px, 0px)"
                }}
              >
                <div className="owl-item" style={{ width: 331 }}>
                  <div className="item">
                    <div className="utf-listing-item compact">
                      <a
                        href="single-property-page-2.html"
                        className="utf-smt-listing-img-container"
                      >
                        <div className="utf-listing-badges-item">
                          {" "}
                          <span className="featured">Featured</span>{" "}
                          <span className="for-sale">For Sale</span>{" "}
                        </div>
                        <div className="utf-listing-img-content-item">
                          <span className="utf-listing-compact-title-item">
                            Renovated Luxury Apartment <i>$18,000/mo</i>
                          </span>
                        </div>
                        <img src="images/listing-01.jpg" alt="" />
                        <ul className="listing-hidden-content">
                          <li>
                            <i className="fa fa-bed" /> Beds <span>3</span>
                          </li>
                          <li>
                            <i className="icon-feather-codepen" /> Baths{" "}
                            <span>2</span>
                          </li>
                          <li>
                            <i className="fa fa-car" /> Garages <span>2</span>
                          </li>
                          <li>
                            <i className="fa fa-arrows-alt" /> Sq Ft{" "}
                            <span>780</span>
                          </li>
                        </ul>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 331 }}>
                  <div className="item">
                    <div className="utf-listing-item compact">
                      <a
                        href="single-property-page-2.html"
                        className="utf-smt-listing-img-container"
                      >
                        <div className="utf-listing-badges-item">
                          {" "}
                          <span className="featured">Featured</span>{" "}
                          <span className="for-sale">For Sale</span>{" "}
                        </div>
                        <div className="utf-listing-img-content-item">
                          <span className="utf-listing-compact-title-item">
                            Renovated Luxury Apartment <i>$18,000/mo</i>
                          </span>
                        </div>
                        <img src="images/listing-02.jpg" alt="" />
                        <ul className="listing-hidden-content">
                          <li>
                            <i className="fa fa-bed" /> Beds <span>3</span>
                          </li>
                          <li>
                            <i className="icon-feather-codepen" /> Baths{" "}
                            <span>2</span>
                          </li>
                          <li>
                            <i className="fa fa-car" /> Garages <span>2</span>
                          </li>
                          <li>
                            <i className="fa fa-arrows-alt" /> Sq Ft{" "}
                            <span>780</span>
                          </li>
                        </ul>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 331 }}>
                  <div className="item">
                    <div className="utf-listing-item compact">
                      <a
                        href="single-property-page-2.html"
                        className="utf-smt-listing-img-container"
                      >
                        <div className="utf-listing-badges-item">
                          {" "}
                          <span className="featured">Featured</span>{" "}
                          <span className="for-sale">For Sale</span>{" "}
                        </div>
                        <div className="utf-listing-img-content-item">
                          <span className="utf-listing-compact-title-item">
                            Renovated Luxury Apartment <i>$18,000/mo</i>
                          </span>
                        </div>
                        <img src="images/listing-03.jpg" alt="" />
                        <ul className="listing-hidden-content">
                          <li>
                            <i className="fa fa-bed" /> Beds <span>3</span>
                          </li>
                          <li>
                            <i className="icon-feather-codepen" /> Baths{" "}
                            <span>2</span>
                          </li>
                          <li>
                            <i className="fa fa-car" /> Garages <span>2</span>
                          </li>
                          <li>
                            <i className="fa fa-arrows-alt" /> Sq Ft{" "}
                            <span>780</span>
                          </li>
                        </ul>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Item / End */}
            {/* Item */}
            {/* Item / End */}
            {/* Item */}
            {/* Item / End */}
            <div className="owl-controls clickable">
              <div className="owl-pagination">
                <div className="owl-page active">
                  <span className="" />
                </div>
                <div className="owl-page">
                  <span className="" />
                </div>
                <div className="owl-page">
                  <span className="" />
                </div>
              </div>
              <div className="owl-buttons">
                <div className="owl-prev" />
                <div className="owl-next" />
              </div>
            </div>
          </div>
        </div>
        {/* Widget / End */}
      </div>
    </div>
    {/* Sidebar / End */}
  </div>
</div>


        <Footer/>
        
        </>
    )
}