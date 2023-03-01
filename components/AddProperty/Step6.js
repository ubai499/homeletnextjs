import { Component } from "react";

export default class Step6 extends Component{
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
          <span>1</span>
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
          <span>2</span>
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
              <span>3</span>
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
                <span>4</span>
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
                  <span>5</span>
                </span>
                </span>
            </div>

            <div className="swiper-slide" data-swiper-slide-index={6}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={6}
                  className="style_steper_item__66e3e style_focus__PX6k7"
                  aria-label="Specify the location"
                  >
                  <span>6</span>
                </span>
              </span>
            </div>
                    
            <div className="swiper-slide" data-swiper-slide-index={7}>
              <span className="style_steper_item_wrapper__TwBbW">
                <span
                  id={7}
                  className="style_steper_item__66e3e "
                  aria-label="Year built and additional info"
                >
                <span>7</span>
                </span>
                </span>
            </div>
                    
              <div className="swiper-slide" data-swiper-slide-index={8}>
                <span className="style_steper_item_wrapper__TwBbW">
                  <span
                    id={8}
                    className="style_steper_item__66e3e "
                    aria-label="Add photos"
                    >
                    <span>8</span>
                    </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

<section className="style_property_detail_section__LE1g_">
  <h3 className="style_inner_title__pzjcU">Specify the location</h3>
  <div className="style_property_map_wrapper__RsAg2">
    <div className="style_map_section_input_field__dMDnx">
      <div className="map_search_box_field css-2b097c-container">
        <div className="reactSelect__control css-yk16xz-control">
          <div className="reactSelect__value-container reactSelect__value-container--has-value css-1hwfws3">
            <div className="reactSelect__single-value css-1uccc91-singleValue">
              Soan Garden, Islamabad
            </div>
            <div className="css-1g6gooi">
              <div
                className="reactSelect__input"
                style={{ display: "inline-block" }}
              >
                <input
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  id="react-select-3-input"
                  spellCheck="false"
                  tabIndex={0}
                  type="text"
                  aria-autocomplete="list"
                  defaultValue=""
                  style={{
                    boxSizing: "content-box",
                    width: 2,
                    background: "0px center",
                    border: 0,
                    fontSize: "inherit",
                    opacity: 1,
                    outline: 0,
                    padding: 0,
                    color: "inherit"
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    height: 0,
                    overflow: "scroll",
                    whiteSpace: "pre",
                    fontSize: 14,
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    letterSpacing: "normal",
                    textTransform: "none"
                  }}
                />
              </div>
            </div>
          </div>
          <div className="reactSelect__indicators css-1wy0on6">
            <div
              aria-hidden="true"
              className="reactSelect__indicator reactSelect__dropdown-indicator css-tlfecz-indicatorContainer"
            >
              <svg
                height={20}
                width={20}
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-19bqh2r"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                    onClick={this.continue}
                    >
                    Next
                  </button>
                </div>
              </div>
              </div>
</>
        )
    }
}