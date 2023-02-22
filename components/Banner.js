import { useState } from "react";
const Banner = () => {
  const [cliked, setClicked] = useState(true);
    return(
        <>
        <div style={{backgroundImage: 'url(images/home-parallax-1.jpg)',backgroundAttachment:'fixed',backgroundSize:'cover',backgroundPosition:'50% -36.6837px',zIndex:'99',position:'relative',backgroundRepeat:'no-repeat'}}
      className="parallax"
      data-color-opacity="0.28"
      data-img-width={2500}
      data-img-height={1600}
    >
      <div className="utf-parallax-content-area">
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="utf-main-search-container-area">
        <div className="utf-banner-headline-text-part">
          <h2>
            Let us Find Your Dream <span className="typed-words" />
          </h2>
        </div>
        <div className="utf-search-type-block-area">
            <div className="search-type" style={{paddingTop:'20px'}}>
              <div className="row">
              <div className="col-md-6 navbutton" id="navbutton1" style={{borderRadius:'30px'}}>
              <a href="#!" id="property">Search Property</a>
              </div>
              <div className="col-md-5 navbuttons" id="navbutton2" style={{borderRadius:'30px',border:'1px solid #0872c4'}}>
              <a href="#!" id="investment">True Value</a>
              </div>
              </div>
              <div className="utf-search-type-arrow" />
            </div>
          </div>

        {/* PROPERTY SEARCH FORM */}
        <form id="propertyform"className="utf-main-search-form-item" action="">
          <div className="utf-main-search-box-area">
            <div>
            <div className="row with-forms">
              
              <div className="col-md-3 col-sm-6 m-o" style={{padding:'0px 2px'}}>
                  <select
                    data-placeholder="Buy"
                    title="Buy"
                    className="utf-chosen-select-single-item"
                  >
                    <option>Buy</option>
                    <option>Rent</option>
                  </select>
                </div>
  
                <div className="col-md-5 col-sm-12" style={{padding:'0px 2px'}}>
                  <input
                    type="text"
                    className="ico-01"
                    placeholder="Enter Keywords..."
                    defaultValue=""
                  />
                </div>
                
                <div className="col-md-3 col-sm-6" style={{padding:'0px 2px'}} onClick={() => setClicked(current => !current)}>
                  <a
                    href="#"
                    className={cliked ? "utf-utf-more-search-options-area-button" : "utf-utf-more-search-options-area-button active"}
                    data-open-title="Property Type"
                    data-close-title="Property Type"
                  />
                </div>
  
                <div className="col-md-1 col-sm-6" style={{padding:'0px 2px'}}>
                  <button className="button utf-search-btn-item" style={{padding:'12px 10px'}}>
                    <i className="fa fa-search" />
                  </button>
                </div>
  
              </div>
              <div className={cliked ? "utf-more-search-options-area" : "utf-more-search-options-area active"}>
                <div className="utf-more-search-options-area-container">
  
                  <div className="row">
                    <div style={{paddingLeft:'20px',paddingBottom:'10px'}}>
                    <div className="col-lg-2 col-md-2 col-sm-4">
                      <a id="residential" href="#!" style={{background:'#0984E3',borderRadius:'20px',padding:'3px 10px',color:'#fff',border:'1px solid #0984E3'}}>Residential</a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4">
                    <a id="commercial" href="#!" style={{background:'transparent',borderRadius:'20px',padding:'3px 10px',color:'#000',border:'1px solid #0984E3'}}>Commercial</a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4">
                    <a id="plots" href="#!" style={{background:'transparent',borderRadius:'20px',padding:'3px 10px',color:'#000',border:'1px solid #0984E3'}}>Plots</a>
                    </div>
                    </div>
                  </div>
                  <div className="row">
                  
                  {/* RESIDENTIAL ICONS */}
                  <div id="residentialicons" 
                  style={{display:'flex',flexDirection:'column',paddingBottom:'1rem',maxHeight:'calc(100vh-300px)',overflowX:'hidden',overflowY:'hidden'}}>
                  <ul style={{listStyle:'none',display:'flex',flexWrap:'wrap',width:'100%',padding:'0',margin:'0 1.75rem'}} 
                  >
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}    
                    >
                        <input id="house" class="radio-button" type="radio" name="house" value="residential" />
                        <div class="radio-tile">
                          <div class="icon house-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                            <path d="M49.6,31.69,32.71,14.8h0L32,14.09l-.35.35h0L14.4,31.69l.71.71,3.78-3.79v21.3h26V28.38l4,4ZM43.87,48.91h-24V27.61L32,15.51,43.87,27.38Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="house" class="radio-tile-label">House</label>
                    </li>
                    
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="guesthouse" class="radio-button" type="radio" name="guesthouse" value="guesthouse" />
                        <div class="radio-tile">
                          <div class="icon house-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                            <path d="M54.64,31.49,37.45,14.66v-.07a.49.49,0,0,0-.14-.35.5.5,0,0,0-.5-.13.51.51,0,0,0-.51.13.54.54,0,0,0-.14.35v.07l-17,16.62c-.77-2.87-2.63-4.9-4.81-4.9-2.85,0-5.17,3.49-5.17,7.77,0,4,2,7.24,4.55,7.7v7.82h1V41.88c2.68-.29,4.8-3.65,4.8-7.73a11.86,11.86,0,0,0-.15-1.82.46.46,0,0,0,.26-.13l4-3.94V49.91h26V28l4.26,4.17a.5.5,0,0,0,.35.15.51.51,0,0,0,.36-.15.49.49,0,0,0,.14-.35A.51.51,0,0,0,54.64,31.49ZM14.76,40.88V37.05l2.32-2.13-.68-.74-1.64,1.51V33.06h-1v2.68L12.22,34.2l-.71.71,2.25,2.25v3.67c-2-.49-3.55-3.29-3.55-6.68,0-3.73,1.87-6.77,4.17-6.77s4.18,3,4.18,6.77C18.56,37.67,16.89,40.57,14.76,40.88Zm33.92,8h-24V27.28L36.81,15.44,48.68,27.05Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="guesthouse" class="radio-tile-label">Guest House</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="flat" class="radio-button" type="radio" name="flat" value="flat"/>
                        <div class="radio-tile">
                          <div class="icon flat-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                              <rect x="35" y="28.5" width="5" height="6" /><rect x="35" y="19.5" width="5" height="6" /><rect x="24" y="28.5" width="5" height="6" /><rect x="24" y="19.5" width="5" height="6" />
                            <path d="M16,13.5v37H48v-37Zm31,36H35v-8H29v8H17v-35H47Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="flat" class="radio-tile-label">Flat</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="hostel" class="radio-button" type="radio" name="hostel" value="hostel" />
                        <div class="radio-tile">
                          <div class="icon hostel-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                            <path d="M50.67,31.67,32.75,13.75h0L32,13l-.37.37h0l-18.3,18.3.75.75,4-4V51H45.66V28.16l4.26,4.26ZM44.6,49.94H19.15V27.35L32,14.5,44.6,27.1Z"/><path d="M41.5,28.6v4.75h-.83A2.78,2.78,0,0,0,37.93,31H29.62v2.38h-1a1.57,1.57,0,0,0,.22-.79A1.58,1.58,0,0,0,27.25,31H24.87a1.58,1.58,0,0,0-1.58,1.58,1.6,1.6,0,0,0,.22.8h-1V28.6H20.13V49.18H22.5V46.8h19v2.38h2.37V28.6ZM24.87,31.77h2.38a.79.79,0,1,1,0,1.58H24.87a.79.79,0,1,1,0-1.58Zm-3.95-2.38h.79v4h-.79Zm0,7.91h.79v5.54h-.79Zm.79,11.09h-.79V46.8h.79Zm21.37,0h-.79V46.8h.79Zm0-2.38H20.92V43.63h8.7v1.58H40.71V43.64h2.38Zm-5.15-5.53H29.62v2.37h-1a1.57,1.57,0,0,0-1.36-2.37H24.87a1.58,1.58,0,0,0-1.58,1.58,1.57,1.57,0,0,0,.22.79h-1V37.31h19v5.54h-.83A2.77,2.77,0,0,0,37.93,40.48ZM28,42.05a.8.8,0,0,1-.79.8H24.87a.8.8,0,1,1,0-1.59h2.38a.79.79,0,0,1,.79.79h0Zm15,.8h-.79V37.31h.79Zm0-6.34H20.92V34.14h8.7v1.58H40.71V34.14h2.38Zm0-3.16h-.79v-4h.79Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="hostel" class="radio-tile-label">Hostel</label>
                    </li>
                    
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="lowerportion" class="radio-button" type="radio" name="lowerportion" value="lowerportion" />
                        <div class="radio-tile">
                          <div class="icon lowerportion-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                            <path d="M49.6,31.69,32.71,14.8h0L32,14.09l-.35.35h0L14.4,31.69l.71.71L19,28.5v8.12h0v13h0v.29H45V28.5l3.9,3.9ZM44,36.62H20V27.5l12-12,12,12Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="lowerportion" class="radio-tile-label">Lower Portion</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="room" class="radio-button" type="radio" name="room" value="room" />
                        <div class="radio-tile">
                          <div class="icon room-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                            <path d="M46.15,29.06h-.27V20.25a4,4,0,0,0-4-4H22.12a4,4,0,0,0-4,4v8.81h-.27a4,4,0,0,0-4,4V43a1,1,0,0,0,1,1h3.31V47.8a.5.5,0,0,0,.5.5.51.51,0,0,0,.5-.5V44H44.85V47.8a.5.5,0,0,0,1,0V44h3.3a1,1,0,0,0,1-1V33.06A4,4,0,0,0,46.15,29.06Zm-27-8.81a3,3,0,0,1,3-3H41.88a3,3,0,0,1,3,3v8.81H43.75v-.27a4,4,0,0,0-4-4H37.07a4,4,0,0,0-4,4v.27H30.94v-.27a3.57,3.57,0,0,0-.09-.8A4,4,0,0,0,27,24.8H24.15A4,4,0,0,0,20.34,28a3.56,3.56,0,0,0-.08.8v.27H19.12ZM49.15,43H14.85V33.06a3,3,0,0,1,3-3h.94a.88.88,0,0,0,.33.07H44.88a1,1,0,0,0,.34-.07h.93a3,3,0,0,1,3,3Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="room" class="radio-tile-label">Room</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="farmhouse" class="radio-button" type="radio" name="farmhouse" value="farmhouse" />
                        <div class="radio-tile">
                          <div class="icon farmhouse-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                            <path d="M59.31,42.1V36.59a.68.68,0,0,0-.26-.53l0,0-5.34-3.57L51,26.22a.69.69,0,0,0-.29-.32l-8.26-4.59a.76.76,0,0,0-.33-.08H26.49a.73.73,0,0,0-.33.08L17.9,25.9a.74.74,0,0,0-.3.33l-2.75,6.42a.66.66,0,0,0-.06.27v4.84H12.46V35.93H11.12v1.83H7.87V35.93H6.53v1.83H4.69V39.1H6.53v2.34H4.69v1.33h54A.67.67,0,0,0,59.31,42.1Zm-48.19-.67H7.87V39.1h3.26Zm3.67,0H12.46V39.1h2.33ZM41.93,22.56l5.86,3.26H34.93l-5.86-3.26ZM25.82,41.44H23.48v-6h2.34Zm3.67,0H27.15v-6h2.34Zm7.35,0h-6V34.75a.68.68,0,0,0-.67-.67H22.81a.68.68,0,0,0-.67.67v6.68h-6l0-8.42,2.59-6,7.75-4.3L34.23,27l2.61,6.15ZM35.77,27.16H49.93l2.18,5.09H38Zm6.58,14.27H38.18V34.17L42.35,37Zm-2.64-7.84H52.92l3.51,2.34H43.23Zm12.75,7.84H43.69V37.26h8.77Zm5.5,0H53.79V37.26H58Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="farmhouse" class="radio-tile-label">Farm House</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="penthouse" class="radio-button" type="radio" name="penthouse" value="penthouse" />
                        <div class="radio-tile">
                          <div class="icon penthouse-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                            <path d="M49.6,31.69,32.71,14.8h0L32,14.09l-.35.35h0L14.4,31.69l.71.71,3.78-3.79v21.3h26V28.38l4,4ZM43.87,48.91h-24V27.61L32,15.51,43.87,27.38Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="penthouse" class="radio-tile-label">Pent House</label>
                    </li>
                  </ul>
                  </div>
  
                  {/* COMMERCIAL ICONS */}
                  <div id="commercialicons" 
                  style={{display:'none',flexDirection:'column',paddingBottom:'1rem',maxHeight:'calc(100vh-300px)',overflowX:'hidden',overflowY:'hidden'}}>
                  <ul style={{listStyle:'none',display:'flex',flexWrap:'wrap',width:'100%',padding:'0',margin:'0 1.75rem'}} 
                  >
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}    
                    >
                        <input id="house" class="radio-button" type="radio" name="office" />
                        <div class="radio-tile">
                          <div class="icon house-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <rect x="34.61" y="35.68" width="4" height="6" />
                            <rect x="34.61" y="27.68" width="4" height="5" />
                            <rect x="34.61" y="18.68" width="4" height="5" />
                            <rect x="26.61" y="18.68" width="4" height="5" />
                            <rect x="26.61" y="27.68" width="4" height="5" />
                            <rect x="26.61" y="35.68" width="4" height="6" />
                            <path d="M52,52.63H50.51V26.36a.44.44,0,0,0-.43-.35H43.31V14.93a.41.41,0,0,0-.43-.35H40.32V11a.43.43,0,0,0-.43-.35H24.82a.42.42,0,0,0-.45.38v3.54H21.83a.42.42,0,0,0-.46.38V31.85H15.62a.42.42,0,0,0-.45.38v20.4H12.1a.44.44,0,0,0-.32.07.34.34,0,0,0-.13.24.33.33,0,0,0,.07.27.36.36,0,0,0,.24.13H51.9a.45.45,0,0,0,.32-.07.38.38,0,0,0,.13-.24A.35.35,0,0,0,52,52.63Zm-30.67,0H16.08V32.56h5.29Zm3.91-41.27H39.4v3.22H25.28ZM42.4,52.63H36.64V46.5a.42.42,0,0,0-.43-.35h-7.7a.43.43,0,0,0-.46.38v6.1H22.29V15.28H42.4Zm7.19,0H43.31V26.72h6.28Z" />
                            </svg>
                          </div>
                        </div>
                        <label for="house" class="radio-tile-label">Office</label>
                    </li>
                    
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="guesthouse" class="radio-button" type="radio" name="shop" />
                        <div class="radio-tile">
                          <div class="icon house-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.6,26,44.89,16a.45.45,0,0,0-.38-.22h-25a.43.43,0,0,0-.38.22L13.41,26a.43.43,0,0,0-.06.22,5,5,0,0,0,3,4.56l.3.13V47.78a.44.44,0,0,0,.44.44H46.91a.44.44,0,0,0,.44-.44V31.38l-.08-.4.37-.16a5,5,0,0,0,3-4.58h0A.46.46,0,0,0,50.6,26ZM19.73,16.67H44.26l5,8.83H14.72Zm21,9.7-.1.59a4.12,4.12,0,0,1-4,3.38,4.49,4.49,0,0,1-.73-.06A4.13,4.13,0,0,1,32.51,27l-.11-.58Zm-9.1,0-.1.59a4.13,4.13,0,0,1-4.05,3.38,3.61,3.61,0,0,1-.73-.07A4.12,4.12,0,0,1,23.4,27l-.11-.59ZM14.3,27l-.11-.59H22.5l-.1.59a4.06,4.06,0,0,1-1.71,2.64,4,4,0,0,1-2.33.74,3.64,3.64,0,0,1-.74-.07A4.12,4.12,0,0,1,14.3,27ZM46.47,46.84H46v.5H30.5V33.72h-9V47.35h-4V31.18l.53,0h.29A4.94,4.94,0,0,0,22.48,29l.42-.61.41.61a5,5,0,0,0,6.92,1.36A4.89,4.89,0,0,0,31.59,29l.42-.61.41.62a5,5,0,0,0,6.9,1.36A5.06,5.06,0,0,0,40.69,29l.41-.62.42.61a5,5,0,0,0,4.13,2.21h.82ZM49.7,27a4.13,4.13,0,0,1-4.05,3.38h0a4.1,4.1,0,0,1-4-3.38l-.1-.59h8.31Z"/>
                            <rect x="23.15" y="18.94" width="6" height="6"/>
                            </svg>
                          </div>
                        </div>
                        <label for="guesthouse" class="radio-tile-label">Shop</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="flat" class="radio-button" type="radio" name="warehouse" />
                        <div class="radio-tile">
                          <div class="icon flat-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.65,25,32.44,13.13a.79.79,0,0,0-.86,0L13.37,25a.79.79,0,0,0,.86,1.33l1.94-1.27V48.62A2.39,2.39,0,0,0,18.55,51H45.47a2.37,2.37,0,0,0,2.37-2.38V25.06a4.91,4.91,0,0,1,.62.4h0a6.54,6.54,0,0,0,1.7,1h0a.75.75,0,0,0,.62-.34A.79.79,0,0,0,50.65,25ZM40.72,49.42H39.13v0h-.61V45h-3V40h-7v5h-3v4.39h-.64v0H23.3V35.17H40.72Zm5.54-.8a.8.8,0,0,1-.8.8H42.3V34.37a.8.8,0,0,0-.79-.79h-19a.79.79,0,0,0-.79.79V49.42H18.55a.79.79,0,0,1-.79-.8V24L32,14.74,46.26,24Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="flat" class="radio-tile-label">Warehouse</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="hostel" class="radio-button" type="radio" name="factory" />
                        <div class="radio-tile">
                          <div class="icon hostel-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.88,26.7l-10.28,5v-5l-10.28,5V26.64L22.8,29.29V16.12H16.12V47.88H47.88ZM17,17h4.84v12.8L17,32.69ZM47,47H17V33.76l9.36-5.51v4.92l10.28-5v5l10.28-5Z"/><rect x="23.5" y="37" width="7" height="5"/>
                            <rect x="34.5" y="37" width="7" height="5"/>
                            </svg>
                          </div>
                        </div>
                        <label for="hostel" class="radio-tile-label">Factory</label>
                    </li>
                    
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="lowerportion" class="radio-button" type="radio" name="building" />
                        <div class="radio-tile">
                          <div class="icon lowerportion-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <rect x="30" y="19.5" width="4" height="5"/>
                            <rect x="30" y="29.5" width="4" height="5"/>
                            <rect x="38" y="19.5" width="4" height="5"/>
                            <rect x="38" y="29.5" width="4" height="5"/>
                            <rect x="22" y="19.5" width="4" height="5"/>
                            <rect x="22" y="29.5" width="4" height="5"/>
                            <path d="M48.54,49.78H45.73V13.88a.34.34,0,0,0-.34-.34H18.61a.34.34,0,0,0-.34.34v35.9H15.46a.34.34,0,1,0,0,.68H48.54a.34.34,0,1,0,0-.68Zm-3.48,0H36.28V42.24a.34.34,0,0,0-.34-.34H28.06a.34.34,0,0,0-.34.34v7.54H18.94V14.22H45.06Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="lowerportion" class="radio-tile-label">Building</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="room" class="radio-button" type="radio" name="gym" />
                        <div class="radio-tile">
                          <div class="icon room-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.28,42.5V32.67H24V42.5H17V38.8H13.44V32.67H11.71a.68.68,0,0,1-.48-.21A.76.76,0,0,1,11,32a.71.71,0,0,1,.69-.73h1.72V24h3.5V21.5h7v9.72H40.28V21.5h7V24h3.5v7.25h1.49A.73.73,0,0,1,53,32a.73.73,0,0,1-.69.69H50.79v6.12h-3.5v3.7Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="room" class="radio-tile-label">Gym</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="farmhouse" class="radio-button" type="radio" name="theatre" />
                        <div class="radio-tile">
                          <div class="icon farmhouse-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              <path d="M48.3,15.22a.49.49,0,0,0-.5.49c0,.61-.87,1.31-2.39,1.91a.49.49,0,0,0,.33.92h0a7.8,7.8,0,0,0,2-1.11V33.8H46.29a11.71,11.71,0,0,1-5.61-7.16,17.91,17.91,0,0,1-.47-6.72,35.13,35.13,0,0,0,3.67-.76.5.5,0,0,0,.4-.57.49.49,0,0,0-.57-.4.19.19,0,0,0-.1,0A46.32,46.32,0,0,1,32,19.52a47.1,47.1,0,0,1-11.4-1.25c-3.25-.85-4.4-1.89-4.4-2.56a.5.5,0,0,0-1,0V48.3a.49.49,0,0,0,.49.49H48.3a.49.49,0,0,0,.49-.49V15.71A.49.49,0,0,0,48.3,15.22ZM46.57,34.79H47.8V44a3.21,3.21,0,0,0-2.27-.93H45ZM24.79,20.06a57.74,57.74,0,0,0,7.2.43,57.74,57.74,0,0,0,7.2-.43h0a18.42,18.42,0,0,0,.54,6.85,12.66,12.66,0,0,0,5.87,7.64l-1.1,5.79H24.39a.49.49,0,1,0,0,1H44.33L44,43.06H40.19a3.26,3.26,0,0,0-2.76,1.53,3.26,3.26,0,0,0-2.76-1.53H29.33a3.26,3.26,0,0,0-2.76,1.53,3.26,3.26,0,0,0-2.76-1.53H20l-.33-1.74h2.77a.49.49,0,0,0,0-1h-3l-1.1-5.79a12.67,12.67,0,0,0,5.88-7.64A18.63,18.63,0,0,0,24.79,20.06ZM16.2,17.42a11.83,11.83,0,0,0,4.15,1.8c1.14.29,2.28.52,3.44.7a17.51,17.51,0,0,1-.47,6.72,11.71,11.71,0,0,1-5.61,7.16H16.2Zm0,17.36h1.23L19,43.06h-.53A3.24,3.24,0,0,0,16.2,44Z"/><path d="M43.31,20.65h0a.48.48,0,0,0-.4-.57.49.49,0,0,0-.57.4v0a19.92,19.92,0,0,0,0,4.5c.38,3.29,1.59,5.88,3.5,7.48a.49.49,0,0,0,.63-.75C42.31,28.25,43.3,20.74,43.31,20.65Z"/><path d="M46.41,20.35a.5.5,0,0,0-.6.35c-.05.2-1.3,5.07,0,8.76a.48.48,0,0,0,.63.27.49.49,0,0,0,.29-.61c-1.21-3.4,0-8.12,0-8.17A.49.49,0,0,0,46.41,20.35Z"/><path d="M32,18.28c5,0,9.13-.9,10.3-2.25a.5.5,0,0,0,0-.7.49.49,0,0,0-.69,0h0a6.68,6.68,0,0,1-3.27,1.33A30.89,30.89,0,0,1,32,17.3c-5.14,0-8.76-1-9.57-1.92a.49.49,0,0,0-.69,0,.5.5,0,0,0,0,.69C22.87,17.38,27,18.28,32,18.28Z"/><path d="M18.16,32.49c1.91-1.6,3.12-4.19,3.5-7.48a19.92,19.92,0,0,0,0-4.5.5.5,0,0,0-.55-.44.49.49,0,0,0-.43.55v0c0,.07,1,7.59-3.16,11.09a.49.49,0,0,0,.64.75Z"/><path d="M17.54,29.75h0a.48.48,0,0,0,.62-.29h0c1.32-3.69.07-8.54,0-8.75a.49.49,0,0,0-.62-.32.48.48,0,0,0-.33.57c0,.05,1.22,4.77,0,8.17A.49.49,0,0,0,17.54,29.75Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="farmhouse" class="radio-tile-label">Theatre</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="penthouse" class="radio-button" type="radio" name="foodcourt" />
                        <div class="radio-tile">
                          <div class="icon penthouse-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.91,13.75H17.09a3.35,3.35,0,0,0-3.34,3.35V46.91a3.35,3.35,0,0,0,3.34,3.34H46.91a3.35,3.35,0,0,0,3.34-3.34V17.09A3.35,3.35,0,0,0,46.91,13.75Zm2.61,33.16a2.61,2.61,0,0,1-2.61,2.61H17.09a2.61,2.61,0,0,1-2.61-2.61V17.09a2.61,2.61,0,0,1,2.61-2.61H46.91a2.61,2.61,0,0,1,2.61,2.61Z"/><path d="M29.32,20.9a.38.38,0,0,0-.37.37v6.79H26.1V21.27a.36.36,0,1,0-.72,0v6.79H22.53V21.27a.38.38,0,0,0-.37-.37.37.37,0,0,0-.36.37v7.15a3.93,3.93,0,0,0,1.5,3.1l.29.22v9.2a2.15,2.15,0,0,0,4.3,0v-9.2l.28-.22a4,4,0,0,0,1.51-3.1V21.27A.38.38,0,0,0,29.32,20.9Z"/><path d="M36.47,20.9a.37.37,0,0,0-.36.37V40.94a2.13,2.13,0,0,0,2.14,2.16h0A2.15,2.15,0,0,0,40.41,41V31.88h1.42a.37.37,0,0,0,.37-.36V26.63A5.76,5.76,0,0,0,36.47,20.9Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="penthouse" class="radio-tile-label">Food Court</label>
                    </li>
                  </ul>
                  </div>
  
                  {/* PLOT ICONS */}
                  <div id="ploticons" 
                  style={{display:'none',flexDirection:'column',paddingBottom:'1rem',maxHeight:'calc(100vh-300px)',overflowX:'hidden',overflowY:'hidden'}}>
                  <ul style={{listStyle:'none',display:'flex',flexWrap:'wrap',width:'100%',padding:'0',margin:'0 1.75rem'}} 
                  >
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}    
                    >
                        <input id="house" class="radio-button" type="radio" name="residential" />
                        <div class="radio-tile">
                          <div class="icon house-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55,44v0a1.32,1.32,0,0,0-.37-.89l0,0L45.39,34.5a1.35,1.35,0,0,0-.89-.35H42.58V28.81l.34.12a1.26,1.26,0,0,0,.43.08h.11a1.3,1.3,0,0,0,.88-.45l1-1.2a1.34,1.34,0,0,0-.12-1.86l-2.66-2.37V17.65a1.3,1.3,0,0,0-1.29-1.3H39a1.3,1.3,0,0,0-1.3,1.3v1.07l-4.81-4.3a1.29,1.29,0,0,0-1.72,0L18.76,25.5a1.33,1.33,0,0,0-.13,1.85l1,1.2a1.25,1.25,0,0,0,.9.45,1.34,1.34,0,0,0,.52-.07l.33-.12v5.34h-1.8a1.29,1.29,0,0,0-.88.34L9.44,43a1.26,1.26,0,0,0-.39.88v4.72a1.24,1.24,0,0,0,.35.91,1.26,1.26,0,0,0,.88.39H53.68a1.37,1.37,0,0,0,.9-.35,1.2,1.2,0,0,0,.39-.89ZM38.71,17.4h2.83v4.79l-2.83-2.53ZM20.62,28.07l-1.34-1.62L32,15.05,44.73,26.49l-1.35,1.58-.19-.17L32.35,18.2a.52.52,0,0,0-.7,0Zm12.93,3h-3.1a2.08,2.08,0,0,0-2.08,2.07v6.44H23.48a1,1,0,0,1-1-1V27.83l.08-.08L32,19.29l9.54,8.54V38.55a1,1,0,0,1-1,1H35.62V33.13A2.07,2.07,0,0,0,33.55,31.06Zm20.38,17.8H10.07v-3.6H53.93ZM9.68,44.22l9.84-9h1.89v3.35a2.07,2.07,0,0,0,2.07,2.07h17a2.07,2.07,0,0,0,2.07-2.07V35.2h2l9.71,9Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="house" class="radio-tile-label">Residential Plot</label>
                    </li>
                    
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="guesthouse" class="radio-button" type="radio" name="commercial" />
                        <div class="radio-tile">
                          <div class="icon house-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.75,25.66a4.37,4.37,0,0,0,1.3.41l.34.05V38.86a.49.49,0,0,0,.48.48H44.38a.48.48,0,0,0,.48-.48V26.1l.32-.07c1.4-.3,2.24-1.09,2.24-2.11a.77.77,0,0,0,0-.15L44.6,15a.46.46,0,0,0-.45-.33H19.86a.46.46,0,0,0-.45.33l-2.82,8.79a.49.49,0,0,0,0,.13A2,2,0,0,0,17.75,25.66ZM31.52,38.38H26.33V30.55h5.19Zm6.16,0h-5.2V30.55h5.2Zm6.14-22.76L46.48,24l0,.12C46.23,24.86,45,25.2,44,25.2h0a4.52,4.52,0,0,1-1.63-.29c-.76-.32-.87-.76-.87-1v-.14l-1.57-8.16Zm-4.92,0L40.5,24V24c-.14.8-1.4,1.16-2.51,1.16s-2.51-.45-2.51-1.28L35,15.61Zm-8.87,0H34l.53,8.3c0,.86-1.3,1.29-2.51,1.29s-2.46-.43-2.5-1.24Zm-.3,10.07a5.14,5.14,0,0,0,2.26.49,4.43,4.43,0,0,0,2.76-.82l.25-.18.24.2a3.37,3.37,0,0,0,.46.31,5.18,5.18,0,0,0,2.27.49,4.48,4.48,0,0,0,2.76-.81l.24-.18.24.19a3.46,3.46,0,0,0,.47.31,4.81,4.81,0,0,0,1.84.47h.38V38.39H38.63V30.07a.48.48,0,0,0-.47-.48H25.85a.48.48,0,0,0-.48.48v8.31h-5V26.14l.37,0a4,4,0,0,0,2.08-.77l.25-.18.24.2a3.7,3.7,0,0,0,.46.31,5.15,5.15,0,0,0,2.27.49,4.43,4.43,0,0,0,2.76-.82l.25-.18.23.2A2.94,2.94,0,0,0,29.73,25.68ZM29.06,15.6l-.52,8.29c0,.86-1.3,1.31-2.51,1.31s-2.37-.36-2.51-1.16V24l1.6-8.37Zm-8.85,0h3.95l-1.61,8.22h0v.07c0,.86-1.34,1.29-2.52,1.3s-2.27-.33-2.48-1.06l0-.12Z"/><rect x="33.28" y="31.35" width="3.59" height="0.3"/><rect x="27.13" y="31.35" width="3.59" height="0.3"/><path d="M55.41,45.36l-9.75-9.51V37l8.49,8.28H9.83l8.76-8.79V35.33l-10,10a.4.4,0,0,0-.08.43.41.41,0,0,0,.07.11v3.84a.4.4,0,0,0,.4.4H55a.4.4,0,0,0,.4-.4V46a.37.37,0,0,0,.13-.17A.4.4,0,0,0,55.41,45.36Zm-.84,4H9.37v-3.2h45.2Z"/><rect x="39.43" y="34.75" width="3.67" height="0.8"/>
                            </svg>
                          </div>
                        </div>
                        <label for="guesthouse" class="radio-tile-label">Commercial Plot</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="flat" class="radio-button" type="radio" name="agricultural" />
                        <div class="radio-tile">
                          <div class="icon flat-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.68,44.1l-11-2.47a3.52,3.52,0,0,0-2.85.6l-1.4,1a3.51,3.51,0,0,0-1.13,1.4l-.08.19A2.46,2.46,0,0,1,31,46.11a2.42,2.42,0,0,1-1.25-1.25l-.09-.19a3.41,3.41,0,0,0-1.12-1.4l-1.4-1a3.53,3.53,0,0,0-2.85-.6l-11,2.47a.53.53,0,0,0-.41.51v6a.52.52,0,0,0,.52.52H50.56a.52.52,0,0,0,.52-.52h0v-6A.53.53,0,0,0,50.68,44.1ZM50,50H14V45l10.56-2.38a2.45,2.45,0,0,1,2,.42l1.4,1a2.42,2.42,0,0,1,.79,1l.09.19a3.5,3.5,0,0,0,6.4,0l.08-.19a2.53,2.53,0,0,1,.79-1l1.4-1a2.45,2.45,0,0,1,2-.42L50,45Z" /><circle cx="30.27" cy="39.12" r="0.97" /><circle cx="33.45" cy="40.69" r="0.97" /><path d="M31.86,42.44a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z" /><path d="M32.67,30.77v1.89a.53.53,0,0,0,1,0V30.77l1.52-1.53a3.2,3.2,0,0,0,0-4.53L33.56,23a.53.53,0,0,0-.74,0l-1.67,1.67a3.2,3.2,0,0,0,0,4.53Zm-.78-5.32,1.3-1.3,1.3,1.3a2.17,2.17,0,0,1,0,3.06l-.78.78V26.52a.52.52,0,0,0-.53-.52.52.52,0,0,0-.52.52h0v2.77l-.78-.78A2.16,2.16,0,0,1,31.89,25.45Z" /><path d="M18.34,30.71l1,.56a3.62,3.62,0,0,1,1.34,1.35,4.84,4.84,0,0,0,1.74,1.74,3.55,3.55,0,0,1,1.36,1.36h0a4.69,4.69,0,0,0,1.74,1.74,3.66,3.66,0,0,1,.77.59.52.52,0,0,0,.72,0A7,7,0,0,1,36.43,38a.51.51,0,0,0,.68,0A50.93,50.93,0,0,0,45,29.72l1-1.35,2.19-2.19a.52.52,0,0,0,0-.73.31.31,0,0,0-.11-.09l-1-.56a3.67,3.67,0,0,1-1.35-1.36A4.63,4.63,0,0,0,44,21.71h0a3.64,3.64,0,0,1-1.35-1.35,4.64,4.64,0,0,0-1.75-1.74,3.64,3.64,0,0,1-1.35-1.35,4.54,4.54,0,0,0-1.74-1.74,3.67,3.67,0,0,1-1.35-1.36l-.56-1a.51.51,0,0,0-.71-.19l-.11.08-2.19,2.19-1.35,1A51.2,51.2,0,0,0,21.43,26.35l-1,1.35-2.19,2.18a.53.53,0,0,0,0,.74l.11.09ZM22.26,27a50.26,50.26,0,0,1,9.88-9.88l1-.76L44.88,28.08l-.76,1a50.39,50.39,0,0,1-7.34,7.83,8,8,0,0,0-7.68-1.33L21.51,28Zm-2.42,3.38-.39-.22Z" />
                            </svg>
                          </div>
                        </div>
                        <label for="flat" class="radio-tile-label">Agricultural Plot</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="hostel" class="radio-button" type="radio" name="industrial" />
                        <div class="radio-tile">
                          <div class="icon hostel-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                              <path d="M42.3,28.65H41.07L40.3,17.41a.4.4,0,0,0-.4-.37H37.5a.4.4,0,0,0-.4.37l-.78,11.24H35.5v-2.4a.4.4,0,0,0-.4-.4.38.38,0,0,0-.25.09l-3.36,2.68V26.25a.4.4,0,0,0-.4-.4.38.38,0,0,0-.25.09l-3.36,2.68V26.25a.39.39,0,0,0-.4-.4.38.38,0,0,0-.25.09l-3.35,2.68V26.25a.4.4,0,0,0-.4-.4.39.39,0,0,0-.21.06l-4,2.4a.4.4,0,0,0-.2.34v9.61a.39.39,0,0,0,.4.4H42.3a.39.39,0,0,0,.4-.4h0V29.05a.4.4,0,0,0-.4-.4ZM37.87,17.84h1.65l.75,10.81H37.12Zm-5.58,20v-4.8h2.4v4.8Zm9.61,0H35.49v-5.2a.4.4,0,0,0-.4-.4h-3.2a.4.4,0,0,0-.4.4h0v5.2h-12v-9L22.67,27v2.5a.4.4,0,0,0,.4.4.38.38,0,0,0,.25-.09l3.36-2.68v2.37a.39.39,0,0,0,.4.4.38.38,0,0,0,.25-.09l3.35-2.68v2.37a.4.4,0,0,0,.4.4.38.38,0,0,0,.25-.09l3.36-2.68v2a.4.4,0,0,0,.4.4H41.9v8.41Z"/><path d="M32.29,15.44a1.57,1.57,0,0,1,.38.3,1.46,1.46,0,0,0,.9.5,1.44,1.44,0,0,0,.94-.52,1.81,1.81,0,0,1,.34-.28c.08,0,.3.2.42.31a1.33,1.33,0,0,0,.86.49,1.59,1.59,0,0,0,1-.55l.27-.25c.22,0,.27.07.4.26a1,1,0,0,0,.89.54.4.4,0,1,0,0-.8c-.08,0-.1,0-.23-.19a1.17,1.17,0,0,0-1.06-.61,1.29,1.29,0,0,0-.82.46c-.13.13-.36.34-.44.34a1.76,1.76,0,0,1-.34-.27,1.5,1.5,0,0,0-1-.53,1.37,1.37,0,0,0-.88.49,1.9,1.9,0,0,1-.39.31,1.93,1.93,0,0,1-.36-.28,1.44,1.44,0,0,0-.93-.52.4.4,0,0,0,0,.8Z"/><path d="M23.08,33.06h-1.6a.39.39,0,0,0-.4.4v2.4a.39.39,0,0,0,.4.4h1.6a.4.4,0,0,0,.4-.4v-2.4A.4.4,0,0,0,23.08,33.06Z"/><path d="M26.28,33.06h-1.6a.4.4,0,0,0-.4.4v2.4a.4.4,0,0,0,.4.4h1.6a.4.4,0,0,0,.4-.4v-2.4A.4.4,0,0,0,26.28,33.06Z"/><path d="M29.48,33.06h-1.6a.4.4,0,0,0-.4.4v2.4a.4.4,0,0,0,.4.4h1.6a.4.4,0,0,0,.4-.4v-2.4A.4.4,0,0,0,29.48,33.06Z"/><path d="M50.68,42.38l-11-2.47a3.52,3.52,0,0,0-2.85.6l-1.4,1A3.51,3.51,0,0,0,34.33,43l-.08.19A2.46,2.46,0,0,1,31,44.39a2.42,2.42,0,0,1-1.25-1.25L29.66,43a3.41,3.41,0,0,0-1.12-1.4l-1.4-1a3.53,3.53,0,0,0-2.85-.6l-11,2.47a.53.53,0,0,0-.41.51v6a.52.52,0,0,0,.52.52H50.56a.52.52,0,0,0,.52-.52h0v-6A.53.53,0,0,0,50.68,42.38ZM50,48.32H14v-5l10.56-2.38a2.45,2.45,0,0,1,2,.42l1.4,1a2.42,2.42,0,0,1,.79,1l.09.19a3.5,3.5,0,0,0,4.61,1.79,3.55,3.55,0,0,0,1.79-1.79l.08-.19a2.53,2.53,0,0,1,.79-1l1.4-1a2.45,2.45,0,0,1,2-.42L50,43.31Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="hostel" class="radio-tile-label">Industrial Land</label>
                    </li>
                    
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="lowerportion" class="radio-button" type="radio" name="plotfile" />
                        <div class="radio-tile">
                          <div class="icon lowerportion-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.51,51.06a.65.65,0,0,0,.65-.65V13.59a.65.65,0,0,0-.65-.65h-29a.65.65,0,0,0-.65.65V50.41a.65.65,0,0,0,.65.65ZM18.13,14.23H45.87V49.77H18.13Z"/><path d="M25.12,31.19H38.88a.64.64,0,0,0,.64-.64V22.91a.64.64,0,0,0-.28-.54l-6.88-4.58a.63.63,0,0,0-.72,0l-6.87,4.58a.65.65,0,0,0-.29.54v7.64A.64.64,0,0,0,25.12,31.19Zm.65-7.93L32,19.1l6.23,4.16V29.9H34.94V26a.65.65,0,0,0-.65-.64H29.71a.65.65,0,0,0-.65.64V29.9H25.77Z"/><path d="M23.3,39.83c-.64,0-1.11.34-1.11.65s.47.65,1.11.65H38.41c.63,0,1.11-.34,1.11-.65s-.48-.65-1.12-.65Z"/><path d="M23.3,44.42c-.64,0-1.11.34-1.11.64s.47.65,1.11.65H38.41c.63,0,1.11-.34,1.11-.65s-.48-.64-1.12-.64Z"/>
                            </svg>
                          </div>
                        </div>
                        <label for="lowerportion" class="radio-tile-label">Plot Files</label>
                    </li>
                                      
                    <li
                    style={{
                      padding: '0px 5px',
                      margin: '-20px 5px'
                    }}
                    >
                      <input id="room" class="radio-button" type="radio" name="farmhouseplot" />
                        <div class="radio-tile">
                          <div class="icon room-icon">
                            <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.34,34.85V30.32a.5.5,0,0,0-.19-.43h0L47.31,27l-1.92-5.13a.5.5,0,0,0-.19-.24l-5.91-3.76a.32.32,0,0,0-.18-.06H28a.33.33,0,0,0-.19.06l-5.91,3.76a.48.48,0,0,0-.18.24l-2,5.27a.52.52,0,0,0,0,.21v4H17.85V29.81H17v1.51H14.57V29.81h-.82v1.51H12.44v1h1.31v2H12.44v1H50.93A.46.46,0,0,0,51.34,34.85ZM17,34.33H14.57l0-2H17Zm2.62,0H17.85v-2h1.81ZM39,18.78l4.32,2.76H34l-4.33-2.76Zm-3.6,15.55H31V28.81a.46.46,0,0,0-.43-.5H25.32a.46.46,0,0,0-.41.48v5.54H20.47l0-7,1.86-5L28,18.84l5.6,3.56,1.87,5.06Zm-.93-11.79H44.76l1.6,4.26H36.08Zm4.87,11.79H36.24V28.21l3.12,2.39Zm-2.1-6.52h9.62l2.63,2H39.88Zm9.33,6.52H40.18V30.82h6.41v3.51Zm3.93,0H47.39V30.82h3.13Z"/><polygon points="46.09 31.71 46.09 31.32 45.68 31.32 46.09 31.71"/><polygon points="37.58 29.86 36.74 29.86 36.74 30.66 38.62 30.66 37.58 29.86"/><rect x="20.97" y="29.87" width="3.44" height="0.8"/><rect x="31.48" y="29.87" width="3.44" height="0.8"/><path d="M18.67,30.67h.49v-.8H18.5a.37.37,0,0,0-.15,0v.92h.16Z"/><path d="M56.93,41.17l-5.6-5.46a.81.81,0,0,1-.38.12h-.64l5.36,5.22H8.31l5.21-5.22H12.39L7.07,41.17a.4.4,0,0,0-.09.44.44.44,0,0,0,.08.11v4.1a.39.39,0,0,0,.4.4h49a.4.4,0,0,0,.29-.12.41.41,0,0,0,.11-.28v-4A.4.4,0,0,0,57,41.6.38.38,0,0,0,56.93,41.17Zm-.86,4.26H7.86V42H56.07Z"/><polygon points="49.4 33.83 47.89 32.35 47.89 33.47 48.26 33.83 49.4 33.83"/><polygon points="15.52 33.83 16.52 32.82 15.39 32.82 15.06 33.15 15.06 33.83 15.52 33.83"/><rect x="23.6" y="23.83" width="0.81" height="0.91"/><rect x="31.48" y="23.83" width="0.81" height="0.91"/><rect x="27.54" y="20.8" width="0.81" height="0.91"/>
                            </svg>
                          </div>
                        </div>
                        <label for="room" class="radio-tile-label">Farm House</label>
                    </li>
                                  
                  </ul>
                  </div>
  
                  </div>
  
  
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* INVESTMENT FORM */}
        <form id="investmentform" style={{display:'none'}} className="utf-main-search-form-item" action="">
          <div className="utf-main-search-box-area">
            <div className="row with-forms">
              
            <div className="col-md-3 col-sm-6" style={{padding:'0px 2px'}}>
                <select
                  data-placeholder="Buy"
                  title="Buy"
                  className="utf-chosen-select-single-item"
                >
                  <option>Buy</option>
                  <option>Rent</option>
                </select>
              </div>

              <div className="col-md-5 col-sm-12" style={{padding:'0px 2px'}}>
                <input
                  type="text"
                  className="ico-01"
                  placeholder="Enter Keywords..."
                  defaultValue=""
                />
              </div>
              
              <div className="col-md-3 col-sm-6" style={{padding:'0px 2px'}} onClick={() => setClicked(current => !current)}>
                <a
                  href="#"
                  className={cliked ? "utf-utf-more-search-options-area-button" : "utf-utf-more-search-options-area-button active"}
                  data-open-title="Property Type"
                  data-close-title="Property Type"
                />
              </div>

              <div className="col-md-1 col-sm-6" style={{padding:'0px 2px'}}>
                <button className="button utf-search-btn-item"  style={{padding:'12px 10px'}}>
                  <i className="fa fa-search"/>
                </button>
              </div>

            </div>
            <div className={cliked ? "utf-more-search-options-area" : "utf-more-search-options-area active"}>
              <div className="utf-more-search-options-area-container">

                <div className="row">
                <div id="residentialicons" 
                style={{display:'flex',flexDirection:'column',paddingBottom:'1rem',maxHeight:'calc(100vh-300px)',overflowX:'hidden',overflowY:'hidden'}}>
                <ul style={{listStyle:'none',display:'flex',flexWrap:'wrap',width:'100%',padding:'0',margin:'0 1.75rem'}} 
                >
                  <li
                  style={{
                    padding: '0px 5px',
                    margin: '-20px 5px'
                  }}    
                  >
                      <input id="house" class="radio-button" type="radio" name="house" />
                      <div class="radio-tile">
                        <div class="icon house-icon">
                          <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                          <path d="M49.6,31.69,32.71,14.8h0L32,14.09l-.35.35h0L14.4,31.69l.71.71,3.78-3.79v21.3h26V28.38l4,4ZM43.87,48.91h-24V27.61L32,15.51,43.87,27.38Z"/>
                          </svg>
                        </div>
                      </div>
                      <label for="house" class="radio-tile-label">House</label>
                  </li>
                  
                  <li
                  style={{
                    padding: '0px 5px',
                    margin: '-20px 5px'
                  }}
                  >
                    <input id="guesthouse" class="radio-button" type="radio" name="guesthouse" />
                      <div class="radio-tile">
                        <div class="icon house-icon">
                          <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                          <path d="M54.64,31.49,37.45,14.66v-.07a.49.49,0,0,0-.14-.35.5.5,0,0,0-.5-.13.51.51,0,0,0-.51.13.54.54,0,0,0-.14.35v.07l-17,16.62c-.77-2.87-2.63-4.9-4.81-4.9-2.85,0-5.17,3.49-5.17,7.77,0,4,2,7.24,4.55,7.7v7.82h1V41.88c2.68-.29,4.8-3.65,4.8-7.73a11.86,11.86,0,0,0-.15-1.82.46.46,0,0,0,.26-.13l4-3.94V49.91h26V28l4.26,4.17a.5.5,0,0,0,.35.15.51.51,0,0,0,.36-.15.49.49,0,0,0,.14-.35A.51.51,0,0,0,54.64,31.49ZM14.76,40.88V37.05l2.32-2.13-.68-.74-1.64,1.51V33.06h-1v2.68L12.22,34.2l-.71.71,2.25,2.25v3.67c-2-.49-3.55-3.29-3.55-6.68,0-3.73,1.87-6.77,4.17-6.77s4.18,3,4.18,6.77C18.56,37.67,16.89,40.57,14.76,40.88Zm33.92,8h-24V27.28L36.81,15.44,48.68,27.05Z"/>
                          </svg>
                        </div>
                      </div>
                      <label for="guesthouse" class="radio-tile-label">Guest House</label>
                  </li>
                                    
                  <li
                  style={{
                    padding: '0px 5px',
                    margin: '-20px 5px'
                  }}
                  >
                    <input id="flat" class="radio-button" type="radio" name="flat" />
                      <div class="radio-tile">
                        <div class="icon flat-icon">
                          <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                            <rect x="35" y="28.5" width="5" height="6" /><rect x="35" y="19.5" width="5" height="6" /><rect x="24" y="28.5" width="5" height="6" /><rect x="24" y="19.5" width="5" height="6" />
                          <path d="M16,13.5v37H48v-37Zm31,36H35v-8H29v8H17v-35H47Z"/>
                          </svg>
                        </div>
                      </div>
                      <label for="flat" class="radio-tile-label">Flat</label>
                  </li>
                                    
                  <li
                  style={{
                    padding: '0px 5px',
                    margin: '-20px 5px'
                  }}
                  >
                    <input id="hostel" class="radio-button" type="radio" name="radio" />
                      <div class="radio-tile">
                        <div class="icon hostel-icon">
                          <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                          <path d="M50.67,31.67,32.75,13.75h0L32,13l-.37.37h0l-18.3,18.3.75.75,4-4V51H45.66V28.16l4.26,4.26ZM44.6,49.94H19.15V27.35L32,14.5,44.6,27.1Z"/><path d="M41.5,28.6v4.75h-.83A2.78,2.78,0,0,0,37.93,31H29.62v2.38h-1a1.57,1.57,0,0,0,.22-.79A1.58,1.58,0,0,0,27.25,31H24.87a1.58,1.58,0,0,0-1.58,1.58,1.6,1.6,0,0,0,.22.8h-1V28.6H20.13V49.18H22.5V46.8h19v2.38h2.37V28.6ZM24.87,31.77h2.38a.79.79,0,1,1,0,1.58H24.87a.79.79,0,1,1,0-1.58Zm-3.95-2.38h.79v4h-.79Zm0,7.91h.79v5.54h-.79Zm.79,11.09h-.79V46.8h.79Zm21.37,0h-.79V46.8h.79Zm0-2.38H20.92V43.63h8.7v1.58H40.71V43.64h2.38Zm-5.15-5.53H29.62v2.37h-1a1.57,1.57,0,0,0-1.36-2.37H24.87a1.58,1.58,0,0,0-1.58,1.58,1.57,1.57,0,0,0,.22.79h-1V37.31h19v5.54h-.83A2.77,2.77,0,0,0,37.93,40.48ZM28,42.05a.8.8,0,0,1-.79.8H24.87a.8.8,0,1,1,0-1.59h2.38a.79.79,0,0,1,.79.79h0Zm15,.8h-.79V37.31h.79Zm0-6.34H20.92V34.14h8.7v1.58H40.71V34.14h2.38Zm0-3.16h-.79v-4h.79Z"/>
                          </svg>
                        </div>
                      </div>
                      <label for="hostel" class="radio-tile-label">Hostel</label>
                  </li>
                  
                  <li
                  style={{
                    padding: '0px 5px',
                    margin: '-20px 5px'
                  }}
                  >
                    <input id="lowerportion" class="radio-button" type="radio" name="radio" />
                      <div class="radio-tile">
                        <div class="icon lowerportion-icon">
                          <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                          <path d="M49.6,31.69,32.71,14.8h0L32,14.09l-.35.35h0L14.4,31.69l.71.71L19,28.5v8.12h0v13h0v.29H45V28.5l3.9,3.9ZM44,36.62H20V27.5l12-12,12,12Z"/>
                          </svg>
                        </div>
                      </div>
                      <label for="lowerportion" class="radio-tile-label">Lower Portion</label>
                  </li>
                                    
                  <li
                  style={{
                    padding: '0px 5px',
                    margin: '-20px 5px'
                  }}
                  >
                    <input id="room" class="radio-button" type="radio" name="radio" />
                      <div class="radio-tile">
                        <div class="icon room-icon">
                          <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                          <path d="M46.15,29.06h-.27V20.25a4,4,0,0,0-4-4H22.12a4,4,0,0,0-4,4v8.81h-.27a4,4,0,0,0-4,4V43a1,1,0,0,0,1,1h3.31V47.8a.5.5,0,0,0,.5.5.51.51,0,0,0,.5-.5V44H44.85V47.8a.5.5,0,0,0,1,0V44h3.3a1,1,0,0,0,1-1V33.06A4,4,0,0,0,46.15,29.06Zm-27-8.81a3,3,0,0,1,3-3H41.88a3,3,0,0,1,3,3v8.81H43.75v-.27a4,4,0,0,0-4-4H37.07a4,4,0,0,0-4,4v.27H30.94v-.27a3.57,3.57,0,0,0-.09-.8A4,4,0,0,0,27,24.8H24.15A4,4,0,0,0,20.34,28a3.56,3.56,0,0,0-.08.8v.27H19.12ZM49.15,43H14.85V33.06a3,3,0,0,1,3-3h.94a.88.88,0,0,0,.33.07H44.88a1,1,0,0,0,.34-.07h.93a3,3,0,0,1,3,3Z"/>
                          </svg>
                        </div>
                      </div>
                      <label for="room" class="radio-tile-label">Room</label>
                  </li>
                                    
                  <li
                  style={{
                    padding: '0px 5px',
                    margin: '-20px 5px'
                  }}
                  >
                    <input id="farmhouse" class="radio-button" type="radio" name="radio" />
                      <div class="radio-tile">
                        <div class="icon farmhouse-icon">
                          <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                          <path d="M59.31,42.1V36.59a.68.68,0,0,0-.26-.53l0,0-5.34-3.57L51,26.22a.69.69,0,0,0-.29-.32l-8.26-4.59a.76.76,0,0,0-.33-.08H26.49a.73.73,0,0,0-.33.08L17.9,25.9a.74.74,0,0,0-.3.33l-2.75,6.42a.66.66,0,0,0-.06.27v4.84H12.46V35.93H11.12v1.83H7.87V35.93H6.53v1.83H4.69V39.1H6.53v2.34H4.69v1.33h54A.67.67,0,0,0,59.31,42.1Zm-48.19-.67H7.87V39.1h3.26Zm3.67,0H12.46V39.1h2.33ZM41.93,22.56l5.86,3.26H34.93l-5.86-3.26ZM25.82,41.44H23.48v-6h2.34Zm3.67,0H27.15v-6h2.34Zm7.35,0h-6V34.75a.68.68,0,0,0-.67-.67H22.81a.68.68,0,0,0-.67.67v6.68h-6l0-8.42,2.59-6,7.75-4.3L34.23,27l2.61,6.15ZM35.77,27.16H49.93l2.18,5.09H38Zm6.58,14.27H38.18V34.17L42.35,37Zm-2.64-7.84H52.92l3.51,2.34H43.23Zm12.75,7.84H43.69V37.26h8.77Zm5.5,0H53.79V37.26H58Z"/>
                          </svg>
                        </div>
                      </div>
                      <label for="farmhouse" class="radio-tile-label">Farm House</label>
                  </li>
                                    
                  <li
                  style={{
                    padding: '0px 5px',
                    margin: '-20px 5px'
                  }}
                  >
                    <input id="penthouse" class="radio-button" type="radio" name="radio" />
                      <div class="radio-tile">
                        <div class="icon penthouse-icon">
                          <svg fill="#ECECEC" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M0 0h24v24H0z" fill="none"/> */}
                          <path d="M49.6,31.69,32.71,14.8h0L32,14.09l-.35.35h0L14.4,31.69l.71.71,3.78-3.79v21.3h26V28.38l4,4ZM43.87,48.91h-24V27.61L32,15.51,43.87,27.38Z"/>
                          </svg>
                        </div>
                      </div>
                      <label for="penthouse" class="radio-tile-label">Pent House</label>
                  </li>
                </ul>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </form>


      </div>
    </div>
  </div>
</div>
</div>
    </div>
        </>
    )
}
export default Banner