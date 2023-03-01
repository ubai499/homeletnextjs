import Script from "next/script";

export default function AddProperties(){
    return(
        <>
        {/* <div className="add_property_content">
            <div className="add_property_container">
                <section className="property_content_section">
                    <div className="title_section">
                        <div className="title_section">
                            <h1 className="style_title">Add Property</h1>
                            <div className="stepper_wrapper">
                                <div className="stepper_navbar">
                                    <div className="stepper_items">
                                        <div className="stepper_wrapper">
                                            <div className="stepper_step">
                                                <span className="stepper_item">
                                                    <span className="item_circle">
                                                        <span className="item_number">1</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="stepper_step">
                                                <span className="stepper_item">
                                                    <span className="item_circle">
                                                        <span className="item_number">2</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="stepper_step">
                                                <span className="stepper_item">
                                                    <span className="item_circle">
                                                        <span className="item_number">3</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="stepper_step">
                                                <span className="stepper_item">
                                                    <span className="item_circle">
                                                        <span className="item_number">4</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="stepper_step">
                                                <span className="stepper_item">
                                                    <span className="item_circle">
                                                        <span className="item_number">5</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="stepper_step">
                                                <span className="stepper_item">
                                                    <span className="item_circle">
                                                        <span className="item_number">5</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="stepper_step">
                                                <span className="stepper_item">
                                                    <span className="item_circle">
                                                        <span className="item_number">6</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="stepper_step">
                                                <span className="stepper_item">
                                                    <span className="item_circle">
                                                        <span className="item_number">7</span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="stepper_step">
                                                <span className="stepper_item">
                                                    <span className="item_circle">
                                                        <span className="item_number">8</span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form> */}
                    {/* <section className="property_detail">
                        <h3 className="inner_title">Select The Purpose of adding your property on Homelet.</h3>
                        <ul className="purpose_action">
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="radio" name="wantedBtn" value="Sell"/>
                                <span className="style_content">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/sell.webp"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sell" type="radio" name="wantedBtn" value="Rent"/>
                                <span className="style_content">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/rent.webp"
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
                                </span>
                                </label>
                            </li>
                        </ul>
                    </section> */}
                    {/* <section className="property_detail">
                        <h3 className="inner_title">Select the property type.</h3>
                        <ul className="property_subtype">
                        <li>
                                <label className="style_type_btn">
                                <input id="sale" type="radio" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/house.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="radio" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/plot.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="radio" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/building.svg"
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
                                </span>
                                </label>
                            </li>
                        </ul>
                    </section> */}
                    {/* <section className="property_detail">
                        <h3 className="inner_title">Select the property subtype.</h3>
                        <ul className="property_subtype">
                        <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="House"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/house.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Guest House"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/guesthouse.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Flat"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/flat.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/hostel.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/upperportion.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/lowerportion.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/room.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/farmhouse.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/penthouse.svg"
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
                                </span>
                                </label>
                            </li>
                        </ul>
                    </section> */}
                    {/* <section className="property_detail">
                        <h3 className="inner_title">Add The Size and Price of Property</h3>
                        <div className="style_form_wrapper">
                            <div className="input_wrapper">
                                <label className="form-label-block" for="propertysize">Property Size:</label>
                                <div className="style_form_input_group">
                                <input type="text" pattern="[0-9\/]*" placeholder="Enter size" className="style_form_input_text__HYrLe form-control" id="sizeValue" required="" defaultValue="" style={{paddingRight:'120px'}}/>
                                <select>
                                    <option>Marla</option>
                                    <option>Kanal</option>
                                    <option>Sqft</option>
                                </select>
                                </div>
                            </div>
                            <div className="input_wrapper">
                                <label className="form-label-block" for="propertysize">Price:</label>
                                <div className="style_form_input_group">
                                <input type="text" pattern="[0-9\/]*" placeholder="100,000,000" className="style_form_input_text__HYrLe form-control" id="sizeValue" required="" defaultValue=""/>
                                </div>
                            </div>  
                        </div>
                    </section> */}
                    {/* <section className="property_detail">
                        <h3 className="inner_title">Add a Title & Description</h3>
                        <div className="style_form_wrapper">
                            <div className="input_wrapper">
                                <label className="form-label-block" for="propertysize">Title:</label>
                                <div className="style_form_input_group">
                                <input type="text" pattern="[0-9\/]*" placeholder="Enter size" className="style_form_input_text__HYrLe form-control" id="sizeValue" required="" defaultValue="" style={{paddingRight:'120px'}}/>
                                </div>
                            </div>
                            <div className="input_wrapper">
                                <label className="form-label-block" for="propertysize">Description:</label>
                                <div className="style_form_input_group">
                                <textarea placeholder="Description"></textarea>
                                </div>
                            </div>  
                        </div>
                    </section> */}
                    {/* <section className="property_detail">
                        <h3 className="inner_title">Specify Location</h3>
                        <div className="style_form_wrapper">
                            <div className="input_wrapper">
                                <label className="form-label-block" for="propertysize">Location Name</label>
                                <div className="style_form_input_group">
                                <input type="text" pattern="[0-9\/]*" placeholder="Enter Location Name" className="style_form_input_text__HYrLe form-control" id="sizeValue" required="" defaultValue="" style={{paddingRight:'120px'}}/>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="property_detail">
                        <h3 className="inner_title">Year Built</h3>
                        <div className="style_form_wrapper">
                            <div className="input_wrapper">
                                <div className="style_form_input_group">
                                <input type="text" pattern="[0-9\/]*" placeholder="E.g 1996" className="style_form_input_text__HYrLe form-control" id="sizeValue" required="" defaultValue="" style={{paddingRight:'120px'}}/>
                                </div>
                            </div>
                            <div className="style_property_incremented_filters">
                                <div className="style_property_incremented_filters_item">
                                    <label>Bedrooms</label>
                                    <div className="style_items_button">
                                        <button className="minus_button"></button>
                                        <span className="style_value">1</span>
                                        <button className="plus_button"></button>
                                    </div>
                                </div>
                                <div className="style_property_incremented_filters_item">
                                    <label>Bathrooms</label>
                                    <div className="style_items_button">
                                        <button className="minus_button"></button>
                                        <span className="style_value">1</span>
                                        <button className="plus_button"></button>
                                    </div>
                                </div>
                                <div className="style_property_incremented_filters_item">
                                    <label>Car Parkings</label>
                                    <div className="style_items_button">
                                        <button className="minus_button"></button>
                                        <span className="style_value">1</span>
                                        <button className="plus_button"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                     {/* <section className="property_detail">
                        <h3 className="inner_title">Add Image</h3>
                        <div className="style_photo_uploader">
                            <div className="input_wrapper">
                                <div className="style_form_input_group">
                                <input type="file" pattern="[0-9\/]*" style={{display:'none'}} className="style_form_input_text__HYrLe form-control" id="sizeValue" required="" defaultValue="" style={{paddingRight:'120px'}}/>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="property_detail">
                        <div className="property_score_card">
                            <div className="property_score_content">
                                <h2>Property Scorecard</h2>
                                <p>To Improve Your Property Score, Add More Features</p>
                                <button>Add Features</button>
                            </div>
                            <div className="pie_chart">
                                <span className="percentage_property">100%</span>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="property_detail">
                        <div className="property_score_card">
                            <div className="property_score_content">
                                <h2>Property Scorecard</h2>
                                <p>To Improve Your Property Score, Add More Features</p>
                            </div>
                            <div className="pie_chart">
                                <span className="percentage_property">100%</span>
                            </div>
                        </div>
                        <br/>
                        <h2>Add Details About Your Property</h2>
                        <ul className="property_subtype">
                        <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="House"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/house.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Guest House"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/guesthouse.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Flat"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/flat.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/hostel.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/upperportion.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/lowerportion.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/room.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/farmhouse.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/penthouse.svg"
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
                                </span>
                                </label>
                            </li>
                        </ul>
                        <h2>Features That Make Your Property Unique</h2>
                        <ul className="property_subtype">
                        <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="House"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/house.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Guest House"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/guesthouse.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Flat"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/flat.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/hostel.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/upperportion.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/lowerportion.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/room.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/farmhouse.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/penthouse.svg"
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
                                </span>
                                </label>
                            </li>
                        </ul>
                    </section> */}
                    {/* <section className="property_detail">
                        <div className="property_score_card">
                            <div className="property_score_content">
                                <h2>Property Scorecard</h2>
                                <p>To Improve Your Property Score, Add More Features</p>
                            </div>
                            <div className="pie_chart">
                                <span className="percentage_property">70%</span>
                            </div>
                        </div>
                        <h2>Specify The Services Available</h2>
                        <ul className="property_subtype">
                        <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="House"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/house.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Guest House"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/guesthouse.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Flat"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/flat.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/hostel.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/upperportion.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/lowerportion.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/room.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/farmhouse.svg"
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
                                </span>
                                </label>
                            </li>
                            <li>
                                <label className="style_type_btn">
                                <input id="sale" type="checkbox" name="wantedBtn" value="Sell"/>
                                <span className="style_content2">
                                <span className="img_wrapper">
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
                                    <img alt="Sell" sizes="100vw" src="images/penthouse.svg"
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
                                </span>
                                </label>
                            </li>
                        </ul>
                    </section> */}
                    {/* </form>
                </section>

                <section className="property_preview_section" id="style-6">
                    <div className="preview_media">
                        <img src="images/placeholder.svg" />
                    </div>
                    <div className="preview_content">
                        <section className="price_wrapper">
                            <span className="property_price">Price</span>
                        </section>
                        <section className="title_wrapper">
                            <div className="title_property">
                                <div>
                                    <h3>Property Title</h3>
                                </div>
                                <span className="location">Area , City</span>
                            </div>
                        </section>
                        <section className="amenities">
                        <div className="title_property">
                            <div>
                                <ul className="amenities_list">
                                    <li className="list_item">
                                        <span className="item_icon">
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
                                            alt="0 Beds"
                                            src="images/beadroom.svg"
                                            decoding="async"
                                            data-nimg="fill"
                                            sizes="100vw"
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
                                        <span className="underline"></span>
                                    </li>
                                    <li className="list_item">
                                        <span className="item_icon">
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
                                            alt="0 Beds"
                                            src="images/bathroom.svg"
                                            decoding="async"
                                            data-nimg="fill"
                                            sizes="100vw"
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
                                        <span className="underline"></span>
                                    </li>
                                    <li className="list_item">
                                        <span className="item_icon">
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
                                            alt="0 Beds"
                                            src="images/parking.svg"
                                            decoding="async"
                                            data-nimg="fill"
                                            sizes="100vw"
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
                                        <span className="underline"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </section>
                        <section className="about_property">
                            <div className="about_property_title">
                                <div>
                                    <h3 style={{fontSize:'2.3rem',fontWeight:'500',marginBottom:'0.25rem'}}>About This Property</h3>
                                </div>
                            </div>
                            <div className="section_placeholder">
                                <span className="full_line"></span>
                                <span className="full_line"></span>
                                <span className="full_line"></span>
                                <span className="full_line"></span>
                                <span className="half_line"></span>
                            </div>
                        </section>
                        <section className="about_property" style={{borderBottom:'1px solid #bbb'}}>
                        <div className="features">
                                <div>
                                    <h3 style={{fontSize:'2.3rem',fontWeight:'500',marginBottom:'0.25rem'}}>Features</h3>
                                </div>
                                <div className="features_placeholder">
                                    <span className="style_media">

                                    </span>
                                </div>
                            </div>
                        </section>
                        <section className="about_property">
                            <div className="about_property_title">
                                <div>
                                    <h3 style={{fontSize:'2.3rem',fontWeight:'500',marginBottom:'0.25rem'}}>The NeighborHood</h3>
                                </div>
                            </div>
                            <div className="section_placeholder">
                                <span className="full_line"></span>
                                <span className="full_line"></span>
                                <span className="full_line"></span>
                                <span className="full_line"></span>
                                <span className="half_line"></span>
                            </div>
                        </section>
                        <section className="about_property">
                            <div className="about_property_title">
                                <div>
                                    <h3 style={{fontSize:'2.3rem',fontWeight:'500',marginBottom:'0.25rem'}}>Location on Map</h3>
                                </div>
                            </div>
                            <div className="section_placeholder">
                                <span className="full_line"></span>
                                <span className="full_line"></span>
                                <span className="full_line"></span>
                                <span className="full_line"></span>
                                <span className="half_line"></span>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
            <div className="property_footer_container">
                <div className="footer_content">
                    <button id="nextBtn" className="next_button">Next</button>
                </div>
            </div>
        </div> */}
        {/* <Script src="scripts/form.js"></Script> */}
        </>
    )
}