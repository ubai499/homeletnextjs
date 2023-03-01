import Link from "next/link"
import Image from "next/image"
export default function AgentCard(){
    return(
        <div className="container">
  <div className="row">
    <div className="col-md-12">
      {/* Agency */}
      <div className="agent agents-profile agency margin-bottom-40">
        {" "}
        <a href="agency-profile.html" className="utf-agent-avatar">
          {" "}
          <Image width="100" height="100" src="/images/agency-01.jpg" alt="" />{" "}
        </a>
        <div className="utf-agent-content">
          <div className="utf-agent-name">
            <h4>
              <a href="agency-profile.html">John Williams</a>
            </h4>
            <span>Agent In Afghanistan</span>
            <ul className="utf-agent-contact-details">
              <li>
                <i className="icon-feather-smartphone" />
                (+21) 124 123 4546
              </li>
              <li>
                <i className="icon-material-outline-email" />
                <a href="#">demo@example.com</a>
              </li>
            </ul>
            <ul className="utf-social-icons">
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
          </div>
          <div className="clearfix" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text.
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}