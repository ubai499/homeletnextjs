export default function NeedHelp(){
    return(
        <section className="section padding-top-75 padding-bottom-75">
  <div className="container">
    <div className="col-md-12">
      <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
        <h3 className="headline">
          <span>Business Help Service</span> Need Any Help?
        </h3>
        {/* <div className="utf-headline-display-inner-item">
          Business Help Service
        </div> */}
        <p className="utf-slogan-text">
          Homelet.pk Has Experienced Agents Who Are Available 24/7 To Answer All Your Questions. Our Team Ensures That You Have No Issues Whatsoever To Fulfill Your Dream.
        </p>
      </div>
    </div>
    <div className="row need-help-area justify-content-center">
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="info-box-1">
          <div className="utf-icon-box-circle">
            <div className="utf-icon-box-circle-inner">
              {" "}
              <i className="fa fa-comments-o" style={{color:'#016ca5'}} />
            </div>
          </div>
          <h4>Chat to Us Online</h4>
          <p>Chat to us online if you have any question.</p>
          <a href="javascript:void(0);" className="button margin-top-10">
            Online Chat
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="info-box-1">
          <div className="utf-icon-box-circle">
            <div className="utf-icon-box-circle-inner">
              {" "}
              <i className="icon-feather-phone" />
            </div>
          </div>
          <h4>Our Support Agent</h4>
          <p>
            Our support agent will work with you to meet your lending needs.
          </p>
          <a href="contact.html" className="button margin-top-10">
            Contact Us
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="info-box-1">
          <div className="utf-icon-box-circle">
            <div className="utf-icon-box-circle-inner">
              {" "}
              <i className="fa fa-superpowers" style={{color:'#016ca5'}} />
            </div>
          </div>
          <h4>Read Latest Blog Post</h4>
          <p>Visit our Blog page and know more about news and career tips</p>
          <a
            href="blog_list_right_sidebar.html"
            className="button margin-top-10"
          >
            Read Blog Post
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}