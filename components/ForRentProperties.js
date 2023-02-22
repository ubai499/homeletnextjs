import Link from "next/link"
export default function ForRentProperties(){
    return(
        <>
        <section className="fullwidth" data-background-color="#ffffff">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
              <h3 className="headline">
                <span>Most Popular Rent Properties</span> For Rent Properties
              </h3>
              <div className="utf-headline-display-inner-item">
                {/* Most Popular Rent Properties */}
              </div>
              <p className="utf-slogan-text">
                View The Most Trending & Hot Properties For Rent...
              </p>
            </div>
          </div>
          {/* Carousel */}
          <div className="col-md-12">
            <div className="carousel">
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <Link
                    href="/propertydetails"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="featured">Featured</span>
                      <span className="for-sale">For Sale</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <img
                        className="utf-user-picture"
                        src="images/call.png"
                        alt="user_1"
                      />
                      <span
                        className="like-icon with-tip"
                        data-tip-content="Bookmark"
                      />
                      <span
                        className="compare-button with-tip"
                        data-tip-content="Add to Compare"
                      />
                      <span
                        className="video-button with-tip"
                        data-tip-content="Video"
                      />
                    </div>
                    <div className="utf-listing-carousel-item">
                      <div>
                        <img src="images/listing-01.jpg" alt="" />
                      </div>
                      <div>
                        <img src="images/listing-01.jpg" alt="" />
                      </div>
                      <div>
                        <img src="images/listing-01.jpg" alt="" />
                      </div>
                    </div>
                  </Link>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 22,000/mo</span>
                      <h4>
                        <Link href="/propertydetails">
                          Renovated Luxury Apartment
                        </Link>
                      </h4>
                      <span className="utf-listing-address">
                        <i className="icon-material-outline-location-on" /> 2021
                        San Pedro, Los Angeles 90015
                      </span>
                    </div>
                    <ul className="utf-listing-features">
                      <li>
                        <i className="fa fa-bed" /> Beds<span>3</span>
                      </li>
                      <li>
                        <i className="icon-feather-codepen" /> Baths
                        <span>2</span>
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
                      <Link href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </Link>{" "}
                      <span>1 Days Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <Link
                    href="/propertydetails"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="for-rent">For Rent</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <img
                        className="utf-user-picture"
                        src="images/call.png"
                        alt="user_1"
                      />
                      <span
                        className="like-icon with-tip"
                        data-tip-content="Bookmark"
                      />
                      <span
                        className="compare-button with-tip"
                        data-tip-content="Add to Compare"
                      />
                    </div>
                    <img src="images/listing-02.jpg" alt="" />{" "}
                  </Link>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 19,000/mo</span>
                      <h4>
                        <Link href="/propertydetails">
                          Renovated Luxury Apartment
                        </Link>
                      </h4>
                      <span className="utf-listing-address">
                        <i className="icon-material-outline-location-on" /> 2021
                        San Pedro, Los Angeles 90015
                      </span>
                    </div>
                    <ul className="utf-listing-features">
                      <li>
                        <i className="fa fa-bed" /> Beds<span>3</span>
                      </li>
                      <li>
                        <i className="icon-feather-codepen" /> Baths
                        <span>2</span>
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
                      <Link href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </Link>{" "}
                      <span>1 Days Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <Link
                    href="/propertydetails"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="featured">Featured</span>
                      <span className="for-rent">For Rent</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <img
                        className="utf-user-picture"
                        src="images/call.png"
                        alt="user_1"
                      />
                      <span
                        className="like-icon with-tip"
                        data-tip-content="Bookmark"
                      />
                      <span
                        className="compare-button with-tip"
                        data-tip-content="Add to Compare"
                      />
                      <span
                        className="video-button with-tip"
                        data-tip-content="Video"
                      />
                    </div>
                    <img src="images/listing-03.jpg" alt="" />{" "}
                  </Link>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 13,000/mo</span>
                      <h4>
                        <Link href="/propertydetails">
                          Renovated Luxury Apartment
                        </Link>
                      </h4>
                      <span className="utf-listing-address">
                        <i className="icon-material-outline-location-on" /> 2021
                        San Pedro, Los Angeles 90015
                      </span>
                    </div>
                    <ul className="utf-listing-features">
                      <li>
                        <i className="fa fa-bed" /> Beds<span>3</span>
                      </li>
                      <li>
                        <i className="icon-feather-codepen" /> Baths
                        <span>2</span>
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
                      <Link href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </Link>{" "}
                      <span>1 Days Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <Link
                    href="/propertydetails"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="for-sale">For Sale</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <img
                        className="utf-user-picture"
                        src="images/call.png"
                        alt="user_1"
                      />
                      <span
                        className="like-icon with-tip"
                        data-tip-content="Bookmark"
                      />
                      <span
                        className="compare-button with-tip"
                        data-tip-content="Add to Compare"
                      />
                    </div>
                    <div className="utf-listing-carousel-item">
                      <div>
                        <img src="images/listing-04.jpg" alt="" />
                      </div>
                      <div>
                        <img src="images/listing-04.jpg" alt="" />
                      </div>
                    </div>
                  </Link>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 12,000/mo</span>
                      <h4>
                        <Link href="/propertydetails">
                          Renovated Luxury Apartment
                        </Link>
                      </h4>
                      <span className="utf-listing-address">
                        <i className="icon-material-outline-location-on" /> 2021
                        San Pedro, Los Angeles 90015
                      </span>
                    </div>
                    <ul className="utf-listing-features">
                      <li>
                        <i className="fa fa-bed" /> Beds<span>3</span>
                      </li>
                      <li>
                        <i className="icon-feather-codepen" /> Baths
                        <span>2</span>
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
                      <Link href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </Link>{" "}
                      <span>1 Days Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <Link
                    href="/propertydetails"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="for-sale">For Sale</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <img
                        className="utf-user-picture"
                        src="images/call.png"
                        alt="user_1"
                      />
                      <span
                        className="like-icon with-tip"
                        data-tip-content="Bookmark"
                      />
                      <span
                        className="compare-button with-tip"
                        data-tip-content="Add to Compare"
                      />
                      <span
                        className="video-button with-tip"
                        data-tip-content="Video"
                      />
                    </div>
                    <img src="images/listing-05.jpg" alt="" />{" "}
                  </Link>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 22,000/mo</span>
                      <h4>
                        <Link href="/propertydetails">
                          Renovated Luxury Apartment
                        </Link>
                      </h4>
                      <span className="utf-listing-address">
                        <i className="icon-material-outline-location-on" /> 2021
                        San Pedro, Los Angeles 90015
                      </span>
                    </div>
                    <ul className="utf-listing-features">
                      <li>
                        <i className="fa fa-bed" /> Beds<span>3</span>
                      </li>
                      <li>
                        <i className="icon-feather-codepen" /> Baths
                        <span>2</span>
                      </li>
                      <li>
                        <i className="fa fa-car" /> Garages<span>2</span>
                      </li>
                      <li>
                        <i className="fa fa-arrows-alt" /> Sq Ft{" "}
                        <span>1530</span>
                      </li>
                    </ul>
                    <div className="utf-listing-user-info">
                      <Link href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </Link>{" "}
                      <span>1 Days Ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}