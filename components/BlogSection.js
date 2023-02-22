export default function BlogSection(){
    return(
        <section
  className="fullwidth"
  data-background-color="linear-gradient(to bottom,rgba(0,0,0,0.03) 0%,rgba(255,255,255,0))"
  style={{
    background:
      "linear-gradient(rgba(0, 0, 0, 0.03) 0%, rgba(255, 255, 255, 0))"
  }}
>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="utf-section-headline-item centered margin-bottom-30 margin-top-0">
          <h3 className="headline">
            <span>Our Blog &amp; Articles</span> Latest Blog Post
          </h3>
          {/* <p className="utf-slogan-text">
            Lorem Ipsum is simply dummy text printing and type setting industry
            Lorem Ipsum been industry standard dummy text ever since when
            unknown printer took a galley.
          </p> */}
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-post">
          <a href="blog_detail_right_sidebar.html" className="post-img">
            {" "}
            <img src="images/blog-post-01.jpg" alt="" />{" "}
          </a>
          <div className="utf-post-content-area">
            <h3>
              <a href="blog_detail_right_sidebar.html">
                Top Housing Societies in Pakistan
              </a>
            </h3>
            <ul className="utf-blog-item-post-list">
              <li>2 Weeks Ago</li>
              <li>27 Jan, 2023</li>
            </ul>
            <p>
            Rawalpindi and Islamabad are two of the most vibrant cities in Pakistan.
            These cities have a lot to offer in terms of....
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-post">
          <a href="blog_detail_right_sidebar.html" className="post-img">
            {" "}
            <img src="images/blog-post-02.jpg" alt="" />{" "}
          </a>
          <div className="utf-post-content-area">
            <h3>
              <a href="blog_detail_right_sidebar.html">
               How to Invest in Real Estate?
              </a>
            </h3>
            <ul className="utf-blog-item-post-list">
              <li>17, Jan 2023</li>
              <li>A Month Ago</li>
            </ul>
            <p>
            nvesting your money can be a great way to grow your wealth over time, but with so many different options to....
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-post">
          <a href="blog_detail_right_sidebar.html" className="post-img">
            {" "}
            <img src="images/blog-post-03.jpg" alt="" />{" "}
          </a>
          <div className="utf-post-content-area">
            <h3>
              <a href="blog_detail_right_sidebar.html">
                Digital Marketing & Real Estate
              </a>
            </h3>
            <ul className="utf-blog-item-post-list">
              <li>A Month Ago</li>
              <li>16 Jan, 2023</li>
            </ul>
            <p>
            Digital marketing has become an essential tool for real estate companies and agents in recent years. With the rise of.....
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}