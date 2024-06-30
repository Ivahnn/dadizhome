import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          MedQuery: Your Digital Medical Advisor
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/aboutus">Our Beginnings</Link>
            <Link to="/aboutus">The Story Behind the Name</Link>
            <Link to="/aboutus">Meet the Team</Link>
            <Link to="/contactus">Services</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contactus">Contact</Link>
            <Link to="/contactus">Support</Link>
            <Link to="/contactus">Inbox</Link>
            <Link to="/contactus">Partnership</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Articles</h2>
            <Link to="https://www.who.int/health-topics/medicines#tab=tab_1">
              Medicine
            </Link>
            <Link to="https://opt.who.foundation/?utm_source=google&utm_medium=cpc&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh2WrnAS9MXXW2AbWeiwYS_td4tvluHAGpdI_ST5Gl4UcNJZqUCAevoaAlJREALw_wcB">
              Health
            </Link>
            <Link to="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
              Pandemic
            </Link>
            <Link to="https://opt.who.foundation/?utm_source=google&utm_medium=cpc&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh235lL6gr7cyFltyErLd-zAG-gLcitvR2osBFDHitopCCa0jbLHnFYaAifEEALw_wcB">
              World health Organization
            </Link>
          </div>

          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="https://www.instagram.com/">Instagram</Link>
            <Link to="https://www.facebook.com/">Facebook</Link>
            <Link to="https://www.youtube.com/">Youtube</Link>
            <Link to="https://twitter.com/home">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              MedQuery
            
            </Link>
          </div>
          <small class="website-rights">MedQuery© 2024</small>

          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="https://www.youtube.com/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://twitter.com/home"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
