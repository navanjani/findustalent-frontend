import React, { FC } from 'react';
import PublicPage from '../../components/PublicPage';

const ContactUsPage: FC = () => (
  <PublicPage>
    <section className="mt-100 pxp-no-hero">
      <div className="pxp-container">
        <h2 className="pxp-section-h2 text-center">We&aposd love to hear from you</h2>
        <p className="pxp-text-light text-center">Get in touch with us</p>

        <div className="row mt-4 mt-md-5 justify-content-center pxp-animate-in pxp-animate-in-top">
          <div className="col-lg-4 col-xxl-3 pxp-contact-card-1-container">
            <span className="pxp-contact-card-1">
              <div className="pxp-contact-card-1-icon-container">
                <div className="pxp-contact-card-1-icon">
                  <span className="fa fa-globe" />
                </div>
              </div>
              <div className="pxp-contact-card-1-title">San Francisco, CA</div>
            </span>
          </div>
          <div className="col-lg-4 col-xxl-3 pxp-contact-card-1-container">
            <span className="pxp-contact-card-1">
              <div className="pxp-contact-card-1-icon-container">
                <div className="pxp-contact-card-1-icon">
                  <span className="fa fa-phone" />
                </div>
              </div>
              <div className="pxp-contact-card-1-title">(0124) - 456 - 789</div>
            </span>
          </div>
          <div className="col-lg-4 col-xxl-3 pxp-contact-card-1-container">
            <span className="pxp-contact-card-1">
              <div className="pxp-contact-card-1-icon-container">
                <div className="pxp-contact-card-1-icon">
                  <span className="fa fa-envelope-o" />
                </div>
              </div>
              <div className="pxp-contact-card-1-title">office@jobster.com</div>
            </span>
          </div>
        </div>

        <div className="row mt-100 justify-content-center pxp-animate-in pxp-animate-in-top">
          <div className="col-lg-6 col-xxl-4">
            <div className="pxp-contact-us-form pxp-has-animation pxp-animate">
              <h2 className="pxp-section-h2 text-center">Contact Us</h2>
              <form className="mt-4">
                <div className="mb-3">
                  <label htmlFor="contact-us-name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact-us-name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact-us-email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact-us-email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact-us-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="contact-us-message"
                    placeholder="Type your message here..."
                  />
                </div>
                <button type="submit" className="btn rounded-pill pxp-section-cta d-block">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PublicPage>
);
export default ContactUsPage;
