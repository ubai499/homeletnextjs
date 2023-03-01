import { Component } from "react";

export default class Step11 extends Component{
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
          <span>4</span>
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
          <span>5</span>
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
              <span>6</span>
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
                <span>7</span>
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
                  <span>8</span>
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
                  <span>9</span>
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
                <span>10</span>
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
                    <span>11</span>
                    </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
<section className="style_property_detail_section__LE1g_">
  <h3 className="style_inner_title__pzjcU">Specify the Services available</h3>
  <ul className="style_property_services_action__Rd5OA">
    <li>
      <label className="style_utitlity_btn__Ghqek">
        <input id="electricity" type="radio" defaultValue="electricity" />
        <span className="style_img_wrapper__tI0fk">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "absolute",
              inset: 0
            }}
          >
            <img
              alt="icon"
              src="../../images/electricity.svg"
              decoding="async"
              data-nimg="fill"
              style={{
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn">Electricity</span>
      </label>
      
      <span className="style_choice_section__5leUc">
  
      <span className="style_choice_content__l8Iqx">
        <span>Shared meter?</span>
        <span className="style_choice_toggle__IL25Z custom_toggle_wrapper">
        <input type="checkbox" id="_electricity" style={{display:'block'}}/>
        <label htmlFor="_electricity" />
        </span>
      </span>
      
      </span>

    </li>
    <li>
      <label className="style_utitlity_btn__Ghqek">
        <input id="gas" type="radio" defaultValue="gas" />
        <span className="style_img_wrapper__tI0fk">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "absolute",
              inset: 0
            }}
          >
            <img
              alt="icon"
              src="../../images/gas.svg"
              decoding="async"
              data-nimg="fill"
              style={{
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn">Gas</span>
      </label>
      <span className="style_choice_section__5leUc">
  
      <span className="style_choice_content__l8Iqx">
        <span>Shared meter?</span>
        <span className="style_choice_toggle__IL25Z custom_toggle_wrapper">
        <input type="checkbox" id="_gas" style={{display:'block'}}/>
        <label htmlFor="_gas" />
        </span>
      </span>
      
      </span>
    </li>
    <li>
      <label className="style_utitlity_btn__Ghqek">
        <input id="water" type="radio" defaultValue="water" />
        <span className="style_img_wrapper__tI0fk">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "absolute",
              inset: 0
            }}
          >
            <img
              alt="icon"
              src="../../images/water.svg"
              decoding="async"
              data-nimg="fill"
              style={{
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn">Water</span>
      </label>
      <span className="style_choice_section__5leUc">
  
      <span className="style_choice_content__l8Iqx">
        <span>Water Boring Supply?</span>
        <span className="style_choice_toggle__IL25Z custom_toggle_wrapper">
        <input type="checkbox" id="_water" style={{display:'block'}}/>
        <label htmlFor="_water" />
        </span>
      </span>
      
      </span>
    </li>
    <li>
      <label className="style_utitlity_btn__Ghqek">
        <input id="maintenance" type="radio" defaultValue="maintenance" />
        <span className="style_img_wrapper__tI0fk">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "absolute",
              inset: 0
            }}
          >
            <img
              alt="icon"
              src="../../images/maintenance.svg"
              decoding="async"
              data-nimg="fill"
              style={{
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn">Maintenance</span>
      </label>
      <span className="style_choice_section__5leUc" />
    </li>
    <li>
      <label className="style_utitlity_btn__Ghqek">
        <input id="security" type="radio" defaultValue="security" />
        <span className="style_img_wrapper__tI0fk">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "absolute",
              inset: 0
            }}
          >
            <img
              alt="icon"
              src="../../images/security.svg"
              decoding="async"
              data-nimg="fill"
              style={{
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn">Security</span>
      </label>
      <span className="style_choice_section__5leUc" />
    </li>
    <li>
      <label className="style_utitlity_btn__Ghqek">
        <input id="sewerage" type="radio" defaultValue="sewerage" />
        <span className="style_img_wrapper__tI0fk">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "absolute",
              inset: 0
            }}
          >
            <img
              alt="icon"
              src="../../images/sewerage.svg"
              decoding="async"
              data-nimg="fill"
              style={{
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn">Sewerage</span>
      </label>
      <span className="style_choice_section__5leUc" />
    </li>
  </ul>
</section>
<div className="style_page_content_footer__mfW3X">
              <div className="style_footer_container__Ffeyr container">
                <div className="style_footer_action_content__yGMSn">
                  <span className="style_empty_action__Q2bot" />
                  <button className="style_footer_action__Auaw1 btn btn-lg btn-light " onClick={this.back}>
                  Back
                  </button>
                  <button
                  className="style_footer_action__Auaw1 style_submit_action_2__o_85S  style_submit_action_desktop__sLdbK
                  style_process_action_outline__lckCk outline-accent-btn
                  btn btn-lg"
                  >
                  Submit
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