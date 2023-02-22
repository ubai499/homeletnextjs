import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
const Header = () =>{
  const [cliked, setClicked] = useState(true);
    return(
        <>
        <nav className={cliked? "mmenu-init mm-menu mm-offcanvas" : "mmenu-init mm-menu mm-offcanvas mm-opened"} id="mm-0" aria-hidden="true"><div class="mm-panels"><div class="mm-panel mm-hasnavbar mm-opened" id="mm-1"><div class="mm-navbar"></div><ul class="mm-listview"><li><Link href="/">Home</Link></li><li><Link href="/about">About Us</Link></li><li><Link href="/contact">Contact Us</Link></li><li><Link href="/agents">Agents</Link></li><li><Link href="/blog">Blog</Link></li></ul></div></div></nav>
        <header id="header-container" className="fullwidth">
        {/* Header */}

        <div id="header">
        <div className="container">
          <div className="left-side">
            <div id="logo">
              <Link href="/">
                <Image width="300" height="100" src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="mmenu-trigger" onClick={() => setClicked(current => !current)}>
              <button className={cliked? "hamburger hamburger--collapse" : "hamburger hamburger--collapse is-active"} type="button">
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
              <Link
                href="/login"
                className="popup-with-zoom-anim log-in-button sign-in"
              >
                <i className="icon-line-awesome-user" /> <span>Log In</span>
              </Link>
              <Link href="/addproperty" className="button border">
                <i className="icon-feather-plus-circle" />{" "}
                <span>Add Property</span>
              </Link>
            </div>
          </div>
        </div>
        </div>
       </header>
        </>
    )
}
export default Header