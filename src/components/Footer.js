import "../CSS/index.css";

// var indicator = document.getElementById("indicator");
// console.log(indicator);

function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Simple Pick</h3>
              <p>
                Our goal is to develop a web application where users can publish
                and find images efficiently and quickly using tags and in
                addition this system will study the user's behavior and thus
                know how to tailor suggestions for images from those areas of
                interest.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Simple Pick © 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
