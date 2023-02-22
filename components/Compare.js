import Image from "next/image"
import { useState } from "react";
const Compare = () =>{
  const [cliked, setClicked] = useState(true);
    return(
        <>
        <div className={cliked ? "utf-compare-slidebar-area" : "utf-compare-slidebar-area active"}>
      <div className="utf-smt-trigger-item" onClick={() => setClicked(current => !current)}/>
      <div className="utf-smt-content">
        <h4>
          Compare Property
          <span className="utf-smt-mobile-trigger-item" />
        </h4>
        <div className="utf-smt-property-item">
          {/* Property */}
          <div className="utf-listing-item compact">
            <a
              href="single-property-page-2.html"
              className="utf-smt-listing-img-container"
            >
              <div className="utf-remove-compare-item">
                <i className="icon-line-awesome-close" />
              </div>
              <div className="utf-listing-badges-item">
                <span className="for-sale">For Sale</span>
              </div>
              <div className="utf-listing-img-content-item">
                {" "}
                <span className="utf-listing-compact-title-item">
                  Renovated Luxury Apartment <i>$420,000</i>
                </span>{" "}
              </div>
              <Image width="600" height="100"  src="/images/listing-01.jpg" alt="" />{" "}
            </a>
          </div>
          {/* Property */}
          <div className="utf-listing-item compact">
            <a
              href="single-property-page-2.html"
              className="utf-smt-listing-img-container"
            >
              <div className="utf-remove-compare-item">
                <i className="icon-line-awesome-close" />
              </div>
              <div className="utf-listing-badges-item">
                <span className="for-sale">For Sale</span>
              </div>
              <div className="utf-listing-img-content-item">
                {" "}
                <span className="utf-listing-compact-title-item">
                  Renovated Luxury Apartment <i>$420,000</i>
                </span>{" "}
              </div>
              <Image width="600" height="100"  src="/images/listing-02.jpg" alt="" />{" "}
            </a>
          </div>
        </div>
        <div className="utf-smt-buttons">
          <a href="compare-properties.html" className="button">
            Compare Property
          </a>
        </div>
      </div>
    </div>
        </>
    )
}
export default Compare