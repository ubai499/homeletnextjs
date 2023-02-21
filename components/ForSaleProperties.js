import Image from "next/image"
export default function ForSaleProperties(){
    return(
        <>
        <section className="fullwidth" data-background-color="#fbfbfb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
              <h3 className="headline">
                <span>Most Popular Sale Properties</span> For Sale Properties
              </h3>
              {/* <div className="utf-headline-display-inner-item">
                Most Popular Sale Properties
              </div> */}
              <p className="utf-slogan-text">
                View The Trending Properties Which Are Listed For Sale on Homelet.pk
              </p>
            </div>
          </div>
          {/* Carousel */}
          <div className="col-md-12">
            <div className="carousel">
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <a
                    href="single-property-page-1.html"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="featured">Featured</span>
                      <span className="for-sale">For Sale</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <Image width="100" height="100" 
                        className="utf-user-picture"
                        src="/images/call.png"
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
                        <Image width="100" height="100"  src="/images/listing-01.jpg" alt="" />
                      </div>
                      <div>
                        <Image width="100" height="100"  src="/images/listing-01.jpg" alt="" />
                      </div>
                      <div>
                        <Image width="100" height="100"  src="/images/listing-01.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 22,000/mo</span>
                      <h4>
                        <a href="single-property-page-1.html">
                          Renovated Luxury Apartment
                        </a>
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
                      <a href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </a>{" "}
                      <span>1 Days Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <a
                    href="single-property-page-2.html"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="for-rent">For Rent</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <Image width="100" height="100" 
                        className="utf-user-picture"
                        src="/images/call.png"
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
                    <Image width="100" height="100"  src="/images/listing-02.jpg" alt="" />{" "}
                  </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 18,000/mo</span>
                      <h4>
                        <a href="single-property-page-2.html">
                          Renovated Luxury Apartment
                        </a>
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
                      <a href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </a>{" "}
                      <span>1 Days Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <a
                    href="single-property-page-1.html"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="featured">Featured</span>
                      <span className="for-rent">For Rent</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <Image width="100" height="100" 
                        className="utf-user-picture"
                        src="/images/call.png"
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
                    <Image width="100" height="100"  src="/images/listing-03.jpg" alt="" />{" "}
                  </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 25,000/mo</span>
                      <h4>
                        <a href="single-property-page-1.html">
                          Renovated Luxury Apartment
                        </a>
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
                      <a href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </a>{" "}
                      <span>1 Days Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <a
                    href="single-property-page-1.html"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="for-sale">For Sale</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <Image width="100" height="100" 
                        className="utf-user-picture"
                        src="/images/call.png"
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
                        <Image width="100" height="100"  src="/images/listing-04.jpg" alt="" />
                      </div>
                      <div>
                        <Image width="100" height="100"  src="/images/listing-04.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 16,000/mo</span>
                      <h4>
                        <a href="single-property-page-1.html">
                          Renovated Luxury Apartment
                        </a>
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
                      <a href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </a>{" "}
                      <span>1 Days Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="utf-carousel-item-area">
                <div className="utf-listing-item">
                  <a
                    href="single-property-page-1.html"
                    className="utf-smt-listing-img-container"
                  >
                    <div className="utf-listing-badges-item">
                      <span className="for-sale">For Sale</span>
                    </div>
                    <div className="utf-listing-img-content-item">
                      <Image width="100" height="100" 
                        className="utf-user-picture"
                        src="/images/call.png"
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
                    <Image width="100" height="100"  src="/images/listing-05.jpg" alt="" />{" "}
                  </a>
                  <div className="utf-listing-content">
                    <div className="utf-listing-title">
                      <span className="utf-listing-price">PKR 14,000/mo</span>
                      <h4>
                        <a href="single-property-page-1.html">
                          Renovated Luxury Apartment
                        </a>
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
                      <a href="agents-profile.html">
                        <i className="icon-line-awesome-user" /> John Williams
                      </a>{" "}
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