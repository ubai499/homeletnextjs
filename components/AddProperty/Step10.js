import { Component } from "react";

export default class Step10 extends Component{
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
}
back = e =>{
    e.preventDefault();
    this.props.prevStep();
}  


state = { counter: this.props.min , counter2: this.props.min, counter3: this.props.min, counter4: this.props.min, counter5: this.props.min, counter6: this.props.min, counter7: this.props.min, counter8: this.props.min, counter9: this.props.min, counter10: this.props.min, counter11: this.props.min, counter12: this.props.min};
handleDecrement = () => {
  let value = this.validateValue(this.state.counter - this.props.step);
  this.setState({counter: value});
}
handleIncrement = () => {
  let value = this.validateValue(this.state.counter + this.props.step);
  this.setState({counter: value});
}
handleChange = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter: value});
}


handleDecrement2 = () => {
  let value = this.validateValue(this.state.counter2 - this.props.step);
  this.setState({counter2: value});
}
handleIncrement2 = () => {
  let value = this.validateValue(this.state.counter2 + this.props.step);
  this.setState({counter2: value});
}
handleChange2 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter2: value});
}

handleDecrement3 = () => {
  let value = this.validateValue(this.state.counter3 - this.props.step);
  this.setState({counter3: value});
}
handleIncrement3 = () => {
  let value = this.validateValue(this.state.counter3 + this.props.step);
  this.setState({counter3: value});
}
handleChange3 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter3: value});
}

handleDecrement4 = () => {
  let value = this.validateValue(this.state.counter4 - this.props.step);
  this.setState({counter4: value});
}
handleIncrement4 = () => {
  let value = this.validateValue(this.state.counter4 + this.props.step);
  this.setState({counter4: value});
}
handleChange4 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter4: value});
}

handleDecrement5 = () => {
  let value = this.validateValue(this.state.counter5 - this.props.step);
  this.setState({counter5: value});
}
handleIncrement5 = () => {
  let value = this.validateValue(this.state.counter5 + this.props.step);
  this.setState({counter5: value});
}
handleChange5 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter5: value});
}

handleDecrement6 = () => {
  let value = this.validateValue(this.state.counter6 - this.props.step);
  this.setState({counter6: value});
}
handleIncrement6 = () => {
  let value = this.validateValue(this.state.counter6 + this.props.step);
  this.setState({counter6: value});
}
handleChange6 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter6: value});
}

handleDecrement7 = () => {
  let value = this.validateValue(this.state.counter7 - this.props.step);
  this.setState({counter7: value});
}
handleIncrement7 = () => {
  let value = this.validateValue(this.state.counter7 + this.props.step);
  this.setState({counter7: value});
}
handleChange7 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter7: value});
}

handleDecrement8 = () => {
  let value = this.validateValue(this.state.counter8 - this.props.step);
  this.setState({counter8: value});
}
handleIncrement8 = () => {
  let value = this.validateValue(this.state.counter8 + this.props.step);
  this.setState({counter8: value});
}
handleChange8 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter8: value});
}

handleDecrement9 = () => {
  let value = this.validateValue(this.state.counter9 - this.props.step);
  this.setState({counter9: value});
}
handleIncrement9 = () => {
  let value = this.validateValue(this.state.counter9 + this.props.step);
  this.setState({counter9: value});
}
handleChange9 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter9: value});
}

handleDecrement10 = () => {
  let value = this.validateValue(this.state.counter10 - this.props.step);
  this.setState({counter10: value});
}
handleIncrement10 = () => {
  let value = this.validateValue(this.state.counter10 + this.props.step);
  this.setState({counter10: value});
}
handleChange10 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter10: value});
}

handleDecrement11 = () => {
  let value = this.validateValue(this.state.counter11 - this.props.step);
  this.setState({counter11: value});
}
handleIncrement11 = () => {
  let value = this.validateValue(this.state.counter11 + this.props.step);
  this.setState({counter11: value});
}
handleChange11 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter11: value});
}

handleDecrement12 = () => {
  let value = this.validateValue(this.state.counter12 - this.props.step);
  this.setState({counter12: value});
}
handleIncrement12 = () => {
  let value = this.validateValue(this.state.counter12 + this.props.step);
  this.setState({counter12: value});
}
handleChange12 = (e) => {
  let value = (e.target.value ? parseInt(e.target.value) : 0);
  value = this.validateValue(value);
  this.setState({counter12: value});
}

validateValue(value) {
  if(value < this.props.min) {
      value = this.props.min;
  }
  if(value > this.props.max) {
      value = this.props.max;
  }
  return value;
}

  render(){
      const {values} = this.props;
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
          <span>3</span>
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
          <span>4</span>
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
              <span>5</span>
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
                <span>6</span>
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
                  <span>7</span>
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
                  <span>8</span>
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
                <span>9</span>
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
                    <span>10</span>
                    </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

<section className="style_property_detail_section__LE1g_">
  <h3 className="style_inner_title__pzjcU">Add details about your property</h3>
  <ul className="style_property_features_counter__G5qws">
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="tv_lounge" type="radio" defaultValue="tv lounge" />
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
              src="../../images/features_tv_lounge.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn style_counter_added__jo1so">
          <span className="style_label__EkiwW">Tv lounge</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement} />
          <span className="style_value__ApUjN" onChange={this.handleChange}>{this.state.counter}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement}/>
          </span>

        </span>
        
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="store_room" type="radio" defaultValue="store room" />
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
              src="../../images/features_store_room.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Store room</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement2} />
          <span className="style_value__ApUjN" onChange={this.handleChange2}>{this.state.counter2}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement2}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="laundry_room" type="radio" defaultValue="laundry room" />
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
              src="../../images/features_laundry_room.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Laundry room</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement3} />
          <span className="style_value__ApUjN" onChange={this.handleChange3}>{this.state.counter3}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement3}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="study_room" type="radio" defaultValue="study room" />
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
              src="../../images/features_study_room.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Study room</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement4} />
          <span className="style_value__ApUjN" onChange={this.handleChange4}>{this.state.counter4}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement4}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="dining_room" type="radio" defaultValue="dining room" />
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
              src="../../images/features_dining_room.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Dining room</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement5} />
          <span className="style_value__ApUjN" onChange={this.handleChange5}>{this.state.counter5}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement5}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="drawing_room" type="radio" defaultValue="drawing room" />
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
              src="../../images/features_drawing_room.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Drawing room</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement6} />
          <span className="style_value__ApUjN" onChange={this.handleChange6}>{this.state.counter6}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement6}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="powder_room" type="radio" defaultValue="powder room" />
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
              src="../../images/features_powder_room.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Powder room</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" />
          <span className="style_value__ApUjN">1</span>
          <button className="style_plus_button__WFFNw" />
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="balcony" type="radio" defaultValue="balcony" />
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
              src="../../images/features_balcony.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Balcony</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement7} />
          <span className="style_value__ApUjN" onChange={this.handleChange7}>{this.state.counter7}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement7}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="dirty_kitchen" type="radio" defaultValue="dirty kitchen" />
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
              src="../../images/features_dirty_kitchen.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Dirty kitchen</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement8} />
          <span className="style_value__ApUjN" onChange={this.handleChange8}>{this.state.counter8}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement8}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="kitchen" type="radio" defaultValue="kitchen" />
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
              src="../../images/features_kitchen.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Kitchen</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement9} />
          <span className="style_value__ApUjN" onChange={this.handleChange9}>{this.state.counter9}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement9}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="swimming_pool" type="radio" defaultValue="swimming pool" />
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
              src="../../images/features_swimming_pool.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Swimming pool</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement10} />
          <span className="style_value__ApUjN" onChange={this.handleChange10}>{this.state.counter10}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement10}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="home_theatre" type="radio" defaultValue="home theatre" />
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
              src="../../images/features_home_theatre.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Home theatre</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" />
          <span className="style_value__ApUjN">1</span>
          <button className="style_plus_button__WFFNw" />
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="garden/lawn" type="radio" defaultValue="garden/lawn" />
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
              src="../../images/features_garden-lawn.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Garden/lawn</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement11} />
          <span className="style_value__ApUjN" onChange={this.handleChange11}>{this.state.counter11}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement11}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="elevator/lift" type="radio" defaultValue="elevator/lift" />
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
              src="../../images/features_elevator-lift.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Elevator/lift</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" onClick={this.handleDecrement12} />
          <span className="style_value__ApUjN" onChange={this.handleChange12}>{this.state.counter12}</span>
          <button className="style_plus_button__WFFNw" onClick={this.handleIncrement12}/>
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input
          id="servant_quarter"
          type="radio"
          defaultValue="servant quarter"
        />
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
              src="../../images/features_servant_quarter.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Servant quarter</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" />
          <span className="style_value__ApUjN">1</span>
          <button className="style_plus_button__WFFNw" />
          </span>
        </span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl false">
        <input id="security_staff" type="radio" defaultValue="security staff" />
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
              src="../../images/features_security_staff.svg"
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
                objectFit: "contain"
              }}
            />
          </span>
        </span>
        <span className="style_content__FhYfn false">
          <span className="style_label__EkiwW">Security staff</span>
          <span className="style_increment_buttons__lNUBX">
          <button className="style_minus_button__VcM6n" />
          <span className="style_value__ApUjN">1</span>
          <button className="style_plus_button__WFFNw" />
          </span>
        </span>
      </label>
    </li>
  </ul>
</section>


<span className="style_property_feature_section_divider__MSf9m" />

<section className="style_property_detail_section__LE1g_">
  <h3 className="style_inner_title__pzjcU">
    Features that make your property unique
  </h3>
  <ul className="style_property_features_counter__G5qws">
    <li>
      <label className="style_type_btn__zofvl">
        <input id="corner_plot" type="radio" defaultValue="corner plot" />
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
              src="../../images/features_corner_plot.svg"
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
        <span className="style_content__FhYfn">Corner plot</span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input id="rooftop_usable" type="radio" defaultValue="rooftop usable" />
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
              src="../../images/features_rooftop_usable.svg"
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
        <span className="style_content__FhYfn">Rooftop usable</span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input id="seperate_entry" type="radio" defaultValue="seperate entry" />
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
              src="../../images/features_seperate_entry.svg"
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
        <span className="style_content__FhYfn">Seperate entry</span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="central_cooling"
          type="radio"
          defaultValue="central cooling"
        />
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
              src="../../images/features_central_cooling.svg"
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
        <span className="style_content__FhYfn">Central cooling</span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input
          id="central_heating"
          type="radio"
          defaultValue="central heating"
        />
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
              src="../../images/features_central_heating.svg"
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
        <span className="style_content__FhYfn">Central heating</span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input id="accessibility" type="radio" defaultValue="accessibility" />
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
              src="../../images/features_accessibility.svg"
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
        <span className="style_content__FhYfn">Accessibility</span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input id="semi_furnished" type="radio" defaultValue="semi furnished" />
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
              src="../../images/features_semi_furnished.svg"
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
        <span className="style_content__FhYfn">Semi furnished</span>
      </label>
    </li>
    <li>
      <label className="style_type_btn__zofvl">
        <input id="furnished" type="radio" defaultValue="furnished" />
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
              src="../../images/features_furnished.svg"
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
        <span className="style_content__FhYfn">Furnished</span>
      </label>
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

Step10.defaultProps = {
  min: 0,
  max: 10,
  step: 1
};