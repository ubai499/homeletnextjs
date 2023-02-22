import Link from "next/link"
export default function Header(){
    return(
        <>
        <header id="header-container" className="fullwidth">
        {/* Header */}
      <div id="header">
        <div className="container">
          <div className="left-side">
            <div id="logo">
              <Link href="/">
                <img src="images/logo.png" alt="" />
              </Link>
            </div>
            <div className="mmenu-trigger">
              <button className="hamburger hamburger--collapse" type="button">
                {" "}
                <span className="hamburger-box">
                  {" "}
                  <span className="hamburger-inner" />{" "}
                </span>{" "}
              </button>
            </div>
            {/* Main Navigation */}
            <nav id="navigation" className="style-1">
              <ul id="responsive">
                <li>
                  <Link  href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/agents">Agents</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
            <div className="clearfix" />
          </div>
          <div className="right-side">
            <div className="header-widget">
              <a
                href="#utf-signin-dialog-block"
                className="popup-with-zoom-anim log-in-button sign-in"
              >
                <i className="icon-line-awesome-user" /> <span>Log In</span>
              </a>
              <a href="add-new-property.html" className="button border">
                <i className="icon-feather-plus-circle" />{" "}
                <span>Add Property</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
        </>
    )
}