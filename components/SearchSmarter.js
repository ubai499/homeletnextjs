export default function SearchSmarter(){
    return(
        <div
  className="parallax margin-top-70"
  data-background="images/listings-parallax.jpg"
  data-color="#36383e"
  data-color-opacity="0.7"
  data-img-width={800}
  data-img-height={505}
  style={{
    backgroundImage: 'url("images/listings-parallax.jpg")',
    backgroundAttachment: "fixed",
    backgroundSize: "1766.34px 1115px",
    backgroundPosition: "50% -51.9648px"
  }}
>
  <div
    className="parallax-overlay"
    style={{ backgroundColor: "rgb(1, 108, 165)", opacity: "0.8" }}
  />
  {/* Infobox */}
  <div className="text-content white-font">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-sm-push-3 smart-utf-listing-item">
          <h2>Search Smarter, From Anywhere</h2>
          <p>
            Power your search with our Homelet real estate platform, for timely
            listings and a seamless experience.
          </p>
          {/* <a
            href="listings-list-with-sidebar.html"
            className="button margin-top-15"
          >
            Search Now
          </a> */}
        </div>
      </div>
    </div>
  </div>
  {/* Infobox / End */}
</div>

    )
}