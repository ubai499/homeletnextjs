import { Component } from "react";

export default class Step12 extends Component{
continue = e =>{
    e.preventDefault();
    this.props.nextStep();
}
back = e =>{
    e.preventDefault();
    this.props.prevStep();
}
  render(){
  const {values,handleChange} = this.props;
  this.props.values;
  return(
<>
<div className="style_steper_wrapper__3YtEK">
  <div className="style_steper_navbar__Kmagi has-swiper-slider">
    <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events undefined has-stepper-items">
      <div className="swiper-wrapper">
        <div
        className="swiper-slide swiper-slide-active"
        data-swiper-slide-index={1}
        >
        <span className="style_steper_item_wrapper__TwBbW">
          <span
          id={1}
          className="stepper_tooltip style_steper_item__66e3e"
          aria-label="Select the purpose"
          >
          <span>5</span>
        </span>
        </span>
        </div>
                    
        <div
        className="swiper-slide swiper-slide-next"
        data-swiper-slide-index={2}
        >
        <span className="style_steper_item_wrapper__TwBbW">
          <span
          id={2}
          className="stepper_tooltip style_steper_item__66e3e "
          aria-label="Select the property type"
          >
          <span>6</span>
        </span>
        </span>
          </div>

          <div className="swiper-slide" data-swiper-slide-index={3}>
            <span className="style_steper_item_wrapper__TwBbW">
              <span
                id={3}
                className="style_steper_item__66e3e "
                aria-label="Select the property sub-type"
              >
              <span>7</span>
              </span>
            </span>
            </div>
                    
            <div className="swiper-slide" data-swiper-slide-index={4}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={4}
                  data-tooltip="Add size and price"
                  className="style_steper_item__66e3e "
                  aria-label="Add size and price"
                >
                <span>8</span>
              </span>
              </span>
            </div>
                    
            <div className="swiper-slide" data-swiper-slide-index={5}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={5}
                  className="style_steper_item__66e3e"
                  aria-label="Add title and description"
                  >
                  <span>9</span>
                </span>
                </span>
            </div>

            <div className="swiper-slide" data-swiper-slide-index={6}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={6}
                  className="style_steper_item__66e3e"
                  aria-label="Specify the location"
                  >
                  <span>10</span>
                </span>
              </span>
            </div>
                    
            <div className="swiper-slide" data-swiper-slide-index={7}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={7}
                  className="style_steper_item__66e3e"
                  aria-label="Year built and additional info"
                >
                <span>11</span>
                </span>
                </span>
            </div>
                    
              <div className="swiper-slide" data-swiper-slide-index={8}>
                <span className="style_steper_item_wrapper__TwBbW">
                  <span
                    id={8}
                    className="style_steper_item__66e3e style_focus__PX6k7"
                    aria-label="Add photos"
                    >
                    <span>12</span>
                    </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
<section className="style_property_detail_section__LE1g_">
  <div className="input_wrapper">
    <label className="style_lable_heading__ytWBv" htmlFor="priceValue">
      Number of floors in the building
    </label>
    <input
      type="text"
      pattern="[0-9\/]*"
      id="floors"
      className="form-control"
      required=""
      placeholder="Enter number of floors"
      defaultValue=""
    />
  </div>
  <div className="input_wrapper">
    <label className="style_lable_heading__ytWBv" htmlFor="priceValue">
      Which floor is your unit on
    </label>
    <input
      type="text"
      pattern="[0-9\/]*"
      id="floors"
      className="form-control"
      required=""
      placeholder="Enter floor"
      defaultValue=""
    />
  </div>
</section>
<div className="style_page_content_footer__mfW3X">
              <div className="style_footer_container__Ffeyr container">
                <div className="style_footer_action_content__yGMSn">
                  <span className="style_empty_action__Q2bot" />
                  <button className="style_footer_action__Auaw1 btn btn-lg btn-light " onClick={this.back}>
                  Back
                  </button>
                  <button
                    disabled=""
                    className="style_footer_action__Auaw1  btn btn-lg style_process_action__EvzS_ btn-accent"
                    >
                    Submit
                  </button>
                </div>
              </div>
</div>
</>
        )
    }
}