import Link from "next/link"
export default function TitleBar(){
    return(
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
    backgroundSize: "1638.02px 1034px",
    backgroundPosition: "50% -131.823px"
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
          <h2>John Williams</h2>
          {/* Breadcrumbs */}
          <nav id="breadcrumbs">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Agent Profile</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}