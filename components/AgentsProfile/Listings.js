import Sidebar from "./Sidebar";
import Image from "next/image";
export default function Listings(){
    return(
        <div className="container">
  <div className="row sticky-wrapper">
    <div className="col-lg-8 col-md-8">
      <div className="utf-desc-headline-item margin-top-0">
        <h3>
          <i className="icon-material-outline-description" /> My Listings
        </h3>
      </div>
      {/* Sorting */}
      <div className="utf-sort-box-aera">
        <div className="sort-by">
          <label>Sort By:</label>
          <div className="sort-by-select">
            <select
              data-placeholder="Default Properties"
              className="utf-chosen-select-single-item"
              style={{ display: "none" }}
            >
              <option>Default Properties</option>
              <option>Low to High Price</option>
              <option>High to Low Price</option>
              <option>Newest Properties</option>
              <option>Oldest Properties</option>
            </select>
            <div
              className="chosen-container chosen-container-single chosen-container-single-nosearch"
              style={{ width: "100%" }}
              title=""
            >
              <a className="chosen-single chosen-default">
                <span>Default Properties</span>
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
        <div className="utf-layout-switcher">
          <a href="#" className="list active">
            <i className="sl sl-icon-list" />
          </a>
          <a href="#" className="grid">
            <i className="sl sl-icon-grid" />
          </a>
        </div>
      </div>
      {/* Listings */}
      <div className="utf-listings-container-area list-layout">
        {/* Listing Item */}
        <div className="utf-listing-item">
          {" "}
          <a
            href="#"
            className="utf-smt-listing-img-container"
            style={{ height: 366 }}
          >
            <div className="utf-listing-badges-item">
              {" "}
              <span className="featured">Featured</span>{" "}
              <span className="for-sale">For Sale</span>{" "}
            </div>
            <div className="utf-listing-img-content-item">
              <Image width="100" height="100"
                className="utf-user-picture"
                src="/images/user_1.jpg"
                alt="user_1"
                style={{ height: 366 }}
              />
              <span className="like-icon with-tip" data-tip-content="Bookmark">
                <div className="tip-content">Bookmark</div>
              </span>
              <span
                className="compare-button with-tip"
                data-tip-content="Add to Compare"
              >
                <div className="tip-content">Add to Compare</div>
              </span>
              <span className="video-button with-tip" data-tip-content="Video">
                <div className="tip-content">Video</div>
              </span>
            </div>
            <div
              className="utf-listing-carousel-item owl-carousel owl-theme"
              style={{ opacity: 1, display: "block" }}
            >
              <div className="owl-wrapper-outer">
                <div
                  className="owl-wrapper"
                  style={{
                    width: 1482,
                    left: 0,
                    display: "block",
                    transition: "all 800ms ease 0s",
                    transform: "translate3d(-494px, 0px, 0px)"
                  }}
                >
                  <div className="owl-item" style={{ width: 247 }}>
                    <div>
                      <Image width="100" height="100"
                        src="/images/listing-01.jpg"
                        alt=""
                        style={{ height: 366 }}
                      />
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: 247 }}>
                    <div>
                      <Image width="100" height="100"
                        src="/images/listing-01.jpg"
                        alt=""
                        style={{ height: 366 }}
                      />
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: 247 }}>
                    <div>
                      <Image width="100" height="100"
                        src="/images/listing-01.jpg"
                        alt=""
                        style={{ height: 366 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-controls clickable">
                <div className="owl-pagination">
                  <div className="owl-page">
                    <span className="" />
                  </div>
                  <div className="owl-page">
                    <span className="" />
                  </div>
                  <div className="owl-page active">
                    <span className="" />
                  </div>
                </div>
                <div className="owl-buttons">
                  <div className="owl-prev" />
                  <div className="owl-next" />
                </div>
              </div>
            </div>
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
              <span className="for-rent">For Rent</span>{" "}
            </div>
            <div className="utf-listing-img-content-item">
              <Image width="100" height="100"
                className="utf-user-picture"
                src="/images/user_1.jpg"
                alt="user_1"
                style={{ height: 305 }}
              />
              <span className="like-icon with-tip" data-tip-content="Bookmark">
                <div className="tip-content">Bookmark</div>
              </span>
              <span
                className="compare-button with-tip"
                data-tip-content="Add to Compare"
              >
                <div className="tip-content">Add to Compare</div>
              </span>
              <span className="video-button with-tip" data-tip-content="Video">
                <div className="tip-content">Video</div>
              </span>
            </div>
            <Image width="100" height="100" src="/images/listing-02.jpg" alt="" style={{ height: 305 }} />{" "}
          </a>
          <div className="utf-listing-content">
            <div className="utf-listing-title">
              <span className="utf-listing-price">$25,000/mo</span>
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
              <span className="featured">Featured</span>{" "}
              <span className="for-rent">For Rent</span>{" "}
            </div>
            <div className="utf-listing-img-content-item">
              <Image width="100" height="100"
                className="utf-user-picture"
                src="/images/user_1.jpg"
                alt="user_1"
                style={{ height: 305 }}
              />
              <span className="like-icon with-tip" data-tip-content="Bookmark">
                <div className="tip-content">Bookmark</div>
              </span>
              <span
                className="compare-button with-tip"
                data-tip-content="Add to Compare"
              >
                <div className="tip-content">Add to Compare</div>
              </span>
              <span className="video-button with-tip" data-tip-content="Video">
                <div className="tip-content">Video</div>
              </span>
            </div>
            <Image width="100" height="100" src="/images/listing-03.jpg" alt="" style={{ height: 305 }} />{" "}
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
              <span className="like-icon with-tip" data-tip-content="Bookmark">
                <div className="tip-content">Bookmark</div>
              </span>
              <span
                className="compare-button with-tip"
                data-tip-content="Add to Compare"
              >
                <div className="tip-content">Add to Compare</div>
              </span>
              <span className="video-button with-tip" data-tip-content="Video">
                <div className="tip-content">Video</div>
              </span>
            </div>
            <div
              className="utf-listing-carousel-item owl-carousel owl-theme"
              style={{ opacity: 1, display: "block" }}
            >
              <div className="owl-wrapper-outer">
                <div
                  className="owl-wrapper"
                  style={{
                    width: 988,
                    left: 0,
                    display: "block",
                    transition: "all 1000ms ease 0s",
                    transform: "translate3d(0px, 0px, 0px)"
                  }}
                >
                  <div className="owl-item" style={{ width: 247 }}>
                    <div>
                      <Image width="100" height="100"
                        src="/images/listing-04.jpg"
                        alt=""
                        style={{ height: 305 }}
                      />
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: 247 }}>
                    <div>
                      <Image width="100" height="100"
                        src="/images/listing-04.jpg"
                        alt=""
                        style={{ height: 305 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-controls clickable">
                <div className="owl-pagination">
                  <div className="owl-page active">
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
          </a>
          <div className="utf-listing-content">
            <div className="utf-listing-title">
              <span className="utf-listing-price">$15,000/mo</span>
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
      </div>
      {/* Listings Container / End */}
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
    {/* Sidebar */}
    <Sidebar/>
    {/* Sidebar / End */}
  </div>
</div>

    )
}