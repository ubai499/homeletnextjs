import Footer from "components/Footer";
import Header from "components/Header";
import Topbar from "components/Topbar";
import Image from "next/image";
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
              href="/images/single-property-01.jpg"
              data-background-image="/images/single-property-01.jpg"
              className="item mfp-gallery slick-slide slick-current slick-active"
              data-slick-index={0}
              style={{
                backgroundImage: 'url("/images/single-property-01.jpg")',
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
              href="/images/single-property-02.jpg"
              data-background-image="/images/single-property-02.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={1}
              style={{
                backgroundImage: 'url("/images/single-property-02.jpg")',
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
              href="/images/single-property-03.jpg"
              data-background-image="/images/single-property-03.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={2}
              style={{
                backgroundImage: 'url("/images/single-property-03.jpg")',
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
              href="/images/single-property-04.jpg"
              data-background-image="/images/single-property-04.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={3}
              style={{
                backgroundImage: 'url("/images/single-property-04.jpg")',
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
              href="/images/single-property-05.jpg"
              data-background-image="/images/single-property-05.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={4}
              style={{
                backgroundImage: 'url("/images/single-property-05.jpg")',
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
              href="/images/single-property-06.jpg"
              data-background-image="/images/single-property-06.jpg"
              className="item mfp-gallery slick-slide"
              data-slick-index={5}
              style={{
                backgroundImage: 'url("/images/single-property-06.jpg")',
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
              <Image width="100" height="100"  src="/images/single-property-02.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-03.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-04.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-05.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-06.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-01.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-02.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-03.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-04.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-05.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-06.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-01.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-02.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-03.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-04.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-05.jpg" alt="" />
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
              <Image width="100" height="100"  src="/images/single-property-06.jpg" alt="" />
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
              <a className="floor-pic mfp-image" href="/images/floor_plan_1.jpg">
                {" "}
                <Image width="100" height="100"  src="/images/floor_plan_1.jpg" alt="" />{" "}
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
              <a className="floor-pic mfp-image" href="/images/floor_plan_2.jpg">
                {" "}
                <Image width="100" height="100"  src="/images/floor_plan_2.jpg" alt="" />{" "}
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
                <Image width="100" height="100" 
                  className="utf-user-picture"
                  src="/images/user_1.jpg"
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
              <Image width="100" height="100"  src="/images/listing-01.jpg" alt="" style={{ height: 305 }} />{" "}
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
                <Image width="100" height="100" 
                  className="utf-user-picture"
                  src="/images/user_1.jpg"
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
                <Image width="100" height="100" 
                  src="/images/listing-02.jpg"
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
                <Image width="100" height="100" 
                  className="utf-user-picture"
                  src="/images/user_1.jpg"
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
              <Image width="100" height="100"  src="/images/listing-03.jpg" alt="" style={{ height: 305 }} />{" "}
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
                <Image width="100" height="100" 
                  className="utf-user-picture"
                  src="/images/user_1.jpg"
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
              <Image width="100" height="100"  src="/images/listing-04.jpg" alt="" style={{ height: 305 }} />{" "}
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
                <Image width="100" height="100"  src="/images/coumment-user-1.jpg" alt="" />
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
                    <Image width="100" height="100"  src="/images/coumment-user-2.jpg" alt="" />
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
                    <Image width="100" height="100"  src="/images/coumment-user-2.jpg" alt="" />
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
                        <Image width="100" height="100"  src="/images/coumment-user-1.jpg" alt="" />
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
                <Image width="100" height="100"  src="/images/coumment-user-3.jpg" alt="" />{" "}
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
              <Image width="100" height="100"  src="/images/banner-add-2.jpg" alt="banner-add-2" />
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
                <Image width="100" height="100"  src="/images/agent-avatar.jpg" alt="" />
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
                    <Image width="100" height="100"  src="/images/blog-widget-03.jpg" alt="" />
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
                    <Image width="100" height="100"  src="/images/blog-widget-02.jpg" alt="" />
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
                    <Image width="100" height="100"  src="/images/blog-widget-01.jpg" alt="" />
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
                        <Image width="100" height="100"  src="/images/listing-01.jpg" alt="" />
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
                        <Image width="100" height="100"  src="/images/listing-02.jpg" alt="" />
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
                        <Image width="100" height="100"  src="/images/listing-03.jpg" alt="" />
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