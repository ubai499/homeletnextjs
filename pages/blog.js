import Footer from "components/Footer";
import Header from "components/Header";
import Topbar from "components/Topbar";

export default function Blog(){
    return(
        <>
        <Topbar/>
        <Header/>
        {/* TITLEBAR */}
        <div
  className="parallax titlebar"
  data-background="images/listings-parallax.jpg"
  data-color="rgba(48, 48, 48, 1)"
  data-color-opacity="0.8"
  data-img-width={800}
  data-img-height={505}
  style={{
    backgroundImage: 'url("images/listings-parallax.jpg")',
    backgroundAttachment: "fixed",
    backgroundSize: "1796.44px 1134px",
    backgroundPosition: "50% -134.25px"
  }}
>
  <div
    className="parallax-overlay"
    style={{ backgroundColor: "rgb(48, 48, 48)", opacity: "0.8" }}
  />
  <div id="titlebar">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Blog</h2>
          {/* Breadcrumbs */}
          <nav id="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

{/* CONTENT */}
<div className="container">
  <div className="blog-page">
    <div className="row">
      <div className="col-md-8">
        {/* Blog Post */}
        <div className="blog-post">
          <a href="blog_detail_right_sidebar.html" className="post-img">
            {" "}
            <img src="images/blog-post-01.jpg" alt="" />{" "}
          </a>
          <div className="utf-post-content-area">
            <h3>
              <a href="blog_detail_right_sidebar.html">
                11 Tips to Help You Get New Clients Through Cold Calling.
              </a>
            </h3>
            <ul className="post-meta">
              <li>By, John Williams</li>
              <li>12 Jan, 2021</li>
              <li>
                <a href="#">5 Comments</a>
              </li>
            </ul>
            <p>
              Lorem Ipsum is simply dummy text of printing and type setting
              industry. Lorem Ipsum been industry standard dummy text ever
              since, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic type setting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
        {/* Blog Post / End */}
        {/* Blog Post */}
        <div className="blog-post">
          <a href="blog_detail_right_sidebar.html" className="post-img">
            {" "}
            <img src="images/blog-post-02.jpg" alt="" />{" "}
          </a>
          <div className="utf-post-content-area">
            <h3>
              <a href="blog_detail_left_sidebar.html">
                The Best (and Worst) Canadian Merchant Account Providers.
              </a>
            </h3>
            <ul className="post-meta">
              <li>By, John Williams</li>
              <li>12 Jan, 2021</li>
              <li>
                <a href="#">5 Comments</a>
              </li>
            </ul>
            <p>
              Lorem Ipsum is simply dummy text of printing and type setting
              industry. Lorem Ipsum been industry standard dummy text ever
              since, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic type setting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
        {/* Blog Post / End */}
        {/* Blog Post */}
        <div className="blog-post">
          <a href="blog_detail_right_sidebar.html" className="post-img">
            {" "}
            <img src="images/blog-post-03.jpg" alt="" />{" "}
          </a>
          <div className="utf-post-content-area">
            <h3>
              <a href="blog_detail_right_sidebar.html">
                The Best (and Worst) Canadian Merchant Account Providers.
              </a>
            </h3>
            <ul className="post-meta">
              <li>By, John Williams</li>
              <li>12 Jan, 2021</li>
              <li>
                <a href="#">5 Comments</a>
              </li>
            </ul>
            <p>
              Lorem Ipsum is simply dummy text of printing and type setting
              industry. Lorem Ipsum been industry standard dummy text ever
              since, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic type setting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
        {/* Blog Post / End */}
        {/* Blog Post */}
        <div className="blog-post">
          <a href="blog_detail_right_sidebar.html" className="post-img">
            {" "}
            <img src="images/blog-post-04.jpg" alt="" />{" "}
          </a>
          <div className="utf-post-content-area">
            <h3>
              <a href="blog_detail_right_sidebar.html">
                How to 1cWoo 1d a Recruiter and Land Your Dream Job.
              </a>
            </h3>
            <ul className="post-meta">
              <li>By, John Williams</li>
              <li>12 Jan, 2021</li>
              <li>
                <a href="#">5 Comments</a>
              </li>
            </ul>
            <p>
              Lorem Ipsum is simply dummy text of printing and type setting
              industry. Lorem Ipsum been industry standard dummy text ever
              since, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic type setting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
        {/* Blog Post / End */}
        {/* Pagination */}
        <div className="clearfix" />
        <div className="utf-pagination-container">
          <nav className="pagination">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-angle-left" />
                </a>
              </li>
              <li>
                <a href="#" className="current-page">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li className="blank">...</li>
              <li>
                <a href="#">10</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="clearfix" />
      </div>
      {/* Blog Posts / End */}
      {/* Widgets */}
      <div className="col-md-4">
        <div className="sidebar">
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-detail-banner-add-section">
              <a href="#">
                <img src="images/banner-add-2.jpg" alt="banner-add-2" />
              </a>
            </div>
          </div>
          {/* Widget / End*/}
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-quote-box">
              <div className="utf-quote-info">
                <h4>Make a Difference with Your Online Property!</h4>
                <p>
                  Lorem Ipsum is simply dummy text of printing and type
                  industry.
                </p>
                <a
                  href="register.html"
                  className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10"
                >
                  Create an Account{" "}
                  <i className="icon-feather-chevrons-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Widget / End */}
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item">
              <h3>Search Blog</h3>
            </div>
            <div className="utf-search-blog-input">
              <div className="input">
                <input
                  className="search-field"
                  type="text"
                  placeholder="Type and hit enter"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="clearfix" />
          </div>
          {/* Widget / End */}
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item">
              <h3>Recently Posts</h3>
            </div>
            <ul className="widget-tabs">
              {/* Post #1 */}
              <li>
                <div className="widget-content">
                  <div className="widget-thumb">
                    {" "}
                    <a href="blog-full-width-single-post.html">
                      <img src="images/blog-widget-03.jpg" alt="" />
                    </a>{" "}
                  </div>
                  <div className="widget-text">
                    <h5>
                      <a href="blog-full-width-single-post.html">
                        How to Woo a Recruiter and Land Your Dream.
                      </a>
                    </h5>
                    <span>12 Jan, 2021</span>
                  </div>
                  <div className="clearfix" />
                </div>
              </li>
              {/* Post #2 */}
              <li>
                <div className="widget-content">
                  <div className="widget-thumb">
                    {" "}
                    <a href="blog-full-width-single-post.html">
                      <img src="images/blog-widget-02.jpg" alt="" />
                    </a>{" "}
                  </div>
                  <div className="widget-text">
                    <h5>
                      <a href="blog-full-width-single-post.html">
                        Hey Its Time To Get Up And Get Hired.
                      </a>
                    </h5>
                    <span>12 Jan, 2021</span>
                  </div>
                  <div className="clearfix" />
                </div>
              </li>
              {/* Post #3 */}
              <li>
                <div className="widget-content">
                  <div className="widget-thumb">
                    {" "}
                    <a href="blog-full-width-single-post.html">
                      <img src="images/blog-widget-01.jpg" alt="" />
                    </a>{" "}
                  </div>
                  <div className="widget-text">
                    <h5>
                      <a href="blog-full-width-single-post.html">
                        The Best Canadian Merchant Account Providers.
                      </a>
                    </h5>
                    <span>12 Jan, 2021</span>
                  </div>
                  <div className="clearfix" />
                </div>
              </li>
            </ul>
          </div>
          {/* Widget / End*/}
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item">
              <h3>Property Categorie</h3>
              <div className="utf-sidebar-categorie">
                <ul>
                  <li>
                    <a href="#">Apartment</a>
                    <span>10 Property</span>
                  </li>
                  <li>
                    <a href="#">Condo</a>
                    <span>14 Property</span>
                  </li>
                  <li>
                    <a href="#">Family House</a>
                    <span>18 Property</span>
                  </li>
                  <li>
                    <a href="#">Modern Villa</a>
                    <span>12 Property</span>
                  </li>
                  <li>
                    <a href="#">Town House</a>
                    <span>10 Property</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Widget / End*/}
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item">
              <h3>Property Tags Cloud</h3>
              <div className="task-tags">
                <a href="#">
                  <span>Apartment</span>
                </a>
                <a href="#">
                  <span>Family House</span>
                </a>
                <a href="#">
                  <span>Modern Villa</span>
                </a>
                <a href="#">
                  <span>Town House</span>
                </a>
                <a href="#">
                  <span>Condo</span>
                </a>
              </div>
            </div>
          </div>
          {/* Widget / End*/}
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-boxed-list-headline-item">
              <h3>Social Sharing</h3>
            </div>
            <ul className="utf-social-icons rounded">
              <li>
                <a className="facebook" href="#">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="icon-linkedin" />
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a className="gplus" href="#">
                  <i className="icon-gplus" />
                </a>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          {/* Widget / End*/}
          {/* Widget */}
          <div className="widget utf-sidebar-widget-item">
            <div className="utf-detail-banner-add-section">
              <a href="#">
                <img src="images/banner-add-2.jpg" alt="banner-add-2" />
              </a>
            </div>
          </div>
          {/* Widget / End*/}
          <div className="clearfix" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="margin-top-65" />
<Footer/>
        </>
    )
}