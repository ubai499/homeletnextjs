import Image from "next/image"
export default function Sidebar(){
    return(
        <div className="col-lg-4 col-md-4">
      <div className="sidebar">
        {/* Widget */}
        <div className="widget utf-sidebar-widget-item">
          <div className="utf-detail-banner-add-section">
            <a href="#">
              <Image width="100" height="100" src="/images/banner-add-2.jpg" alt="banner-add-2" />
            </a>
          </div>
        </div>
        {/* Widget / End*/}
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

      </div>
    </div>
    )
}