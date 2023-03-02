import { Component } from "react";

export default class Step4 extends Component{
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
                  className="style_steper_item__66e3e  style_focus__PX6k7"
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
                  className="style_steper_item__66e3e "
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
                  className="style_steper_item__66e3e "
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
  <h3 className="style_inner_title__pzjcU">
    Add the size and price of your property
  </h3>
  <div className="style_form_wrapper__WMUHF">
    <div className="input_wrapper">
      <label className="form-label-block" htmlFor="sizeValue">
        Property Size: *
      </label>
      <div className="style_form_input_group__36w_2 input-group">
        <input
          type="text"
          pattern="[0-9\/]*"
          placeholder="Enter size"
          className="style_form_input_text__HYrLe form-control"
          id="sizeValue"
          required=""
          onChange={handleChange('size')} defaultValue={''}
        />
        <div className="style_input_group_select__g0Vij custom_select">
          <div
            className="react-select-container property_unit_select css-2b097c-container"
            id="areaUnit"
          >
            <div className="react-select__control css-yk16xz-control">
            <select style={{background:'transparent',border:'none',marginTop:'-10px',padding:'10px'}} onChange={handleChange('unit')} defaultValue={'marla'}>
                <option value="Marla">Marla</option>
                <option value="Kanal">Kanal</option>
            </select>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="input_wrapper">
      <label className="form-label-block" htmlFor="priceValue">
        Price: *
      </label>
      <div className="style_form_price_input__fu9p8">
        <input
          type="text"
          id="priceValue"
          pattern="[0-9\/]*"
          className="form-control"
          required=""
          onChange={handleChange('price')} defaultValue={''}
        />
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