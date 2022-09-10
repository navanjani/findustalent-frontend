import React, { FC } from 'react';
import PublicPage from '../../components/PublicPage';
import candidateImage from '../../theme/images/ph-small.jpg';
import candidateBgImage from '../../theme/images/ph-big.jpg';

const CandidateDetailPage: FC = () => (
  <PublicPage>
    <section>
      <div className="pxp-container">
        <div className="pxp-single-candidate-container pxp-has-columns">
          <div className="row">
            <div className="col-lg-7 col-xl-8 col-xxl-8">
              <div
                className="pxp-single-candidate-hero pxp-cover pxp-boxed"
                style={{ backgroundImage: `url(${candidateBgImage})` }}
              >
                <div className="pxp-hero-opacity" />
                <div className="pxp-single-candidate-hero-caption">
                  <div className="pxp-container">
                    <div className="pxp-single-candidate-hero-content" />
                    <div
                      className="pxp-single-candidate-hero-avatar"
                      style={{ backgroundImage: `url(${candidateImage})` }}
                    />
                    <div className="pxp-single-candidate-hero-name">
                      <h1>Rebecca Eason</h1>
                      <div className="pxp-single-candidate-hero-title">UX/UI Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="mt-4 mt-lg-5">
              <div className="pxp-single-candidate-content">
                <h2>About Rebecca</h2>
                <p>
                  Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content,
                  filler text, lipsum, and mock-content. In publishing and graphic design, lorem ipsum is a
                  filler text or greeking commonly used to demonstrate the textual elements of a graphic
                  document or visual presentation.
                </p>
                <p>
                  In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to
                  demonstrate the textual elements of a graphic document or visual presentation. Lorem Ipsum
                  is also known as: Greeked text.
                </p>

                <div className="mt-4 mt-lg-5">
                  <h2>Skills</h2>
                  <div className="pxp-single-candidate-skills">
                    <ul className="list-unstyled">
                      <li>Work from home</li>
                      <li>Part-time</li>
                      <li>Administration</li>
                      <li>Finance</li>
                      <li>Retail</li>
                      <li>IT</li>
                      <li>Engineering</li>
                      <li>Sales</li>
                      <li>Manufacturing</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 mt-lg-5">
                  <h2>Work Experience</h2>
                  <div className="pxp-single-candidate-timeline">
                    <div className="pxp-single-candidate-timeline-item">
                      <div className="pxp-single-candidate-timeline-dot" />
                      <div className="pxp-single-candidate-timeline-info ms-3">
                        <div className="pxp-single-candidate-timeline-time">
                          <span className="me-3">2005 - 2013</span>
                        </div>
                        <div className="pxp-single-candidate-timeline-position mt-2">
                          Senior UI/UX Designer
                        </div>
                        <div className="pxp-single-candidate-timeline-company pxp-text-light">
                          Adobe Corporation
                        </div>
                        <div className="pxp-single-candidate-timeline-about mt-2 pb-4">
                          In publishing and graphic design, lorem ipsum is a filler text or greeking commonly
                          used to demonstrate the textual elements of a graphic document or visual
                          presentation. Lorem Ipsum is also known as: Greeked text.
                        </div>
                      </div>
                    </div>
                    <div className="pxp-single-candidate-timeline-item">
                      <div className="pxp-single-candidate-timeline-dot" />
                      <div className="pxp-single-candidate-timeline-info ms-3">
                        <div className="pxp-single-candidate-timeline-time">
                          <span className="me-3">2013 - 2018</span>
                        </div>
                        <div className="pxp-single-candidate-timeline-position mt-2">
                          Senior UI/UX Designer
                        </div>
                        <div className="pxp-single-candidate-timeline-company pxp-text-light">
                          Adobe Corporation
                        </div>
                        <div className="pxp-single-candidate-timeline-about mt-2 pb-4">
                          In publishing and graphic design, lorem ipsum is a filler text or greeking commonly
                          used to demonstrate the textual elements of a graphic document or visual
                          presentation. Lorem Ipsum is also known as: Greeked text.
                        </div>
                      </div>
                    </div>
                    <div className="pxp-single-candidate-timeline-item">
                      <div className="pxp-single-candidate-timeline-dot" />
                      <div className="pxp-single-candidate-timeline-info ms-3">
                        <div className="pxp-single-candidate-timeline-time">
                          <span className="me-3">2018 - 2021</span>
                        </div>
                        <div className="pxp-single-candidate-timeline-position mt-2">
                          Senior UI/UX Designer
                        </div>
                        <div className="pxp-single-candidate-timeline-company pxp-text-light">
                          Adobe Corporation
                        </div>
                        <div className="pxp-single-candidate-timeline-about mt-2 pb-4">
                          In publishing and graphic design, lorem ipsum is a filler text or greeking commonly
                          used to demonstrate the textual elements of a graphic document or visual
                          presentation. Lorem Ipsum is also known as: Greeked text.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 mt-lg-5">
                  <h2>Education & Training</h2>
                  <div className="pxp-single-candidate-timeline">
                    <div className="pxp-single-candidate-timeline-item">
                      <div className="pxp-single-candidate-timeline-dot" />
                      <div className="pxp-single-candidate-timeline-info ms-3">
                        <div className="pxp-single-candidate-timeline-time">
                          <span className="me-3">2011 - 2017</span>
                        </div>
                        <div className="pxp-single-candidate-timeline-position mt-2">Architecure</div>
                        <div className="pxp-single-candidate-timeline-company pxp-text-light">
                          Politehnica University of Timisoara: Bachelor of Architecture
                        </div>
                        <div className="pxp-single-candidate-timeline-about mt-2 pb-4">
                          In publishing and graphic design, lorem ipsum is a filler text or greeking commonly
                          used to demonstrate the textual elements of a graphic document or visual
                          presentation. Lorem Ipsum is also known as: Greeked text.
                        </div>
                      </div>
                    </div>
                    <div className="pxp-single-candidate-timeline-item">
                      <div className="pxp-single-candidate-timeline-dot" />
                      <div className="pxp-single-candidate-timeline-info ms-3">
                        <div className="pxp-single-candidate-timeline-time">
                          <span className="me-3">2020 - 2020</span>
                        </div>
                        <div className="pxp-single-candidate-timeline-position mt-2">
                          Front End Web Developer
                        </div>
                        <div className="pxp-single-candidate-timeline-company pxp-text-light">
                          Udacity Nanodegree Program
                        </div>
                        <div className="pxp-single-candidate-timeline-about mt-2 pb-4">
                          In publishing and graphic design, lorem ipsum is a filler text or greeking commonly
                          used to demonstrate the textual elements of a graphic document or visual
                          presentation. Lorem Ipsum is also known as: Greeked text.
                        </div>
                      </div>
                    </div>
                    <div className="pxp-single-candidate-timeline-item">
                      <div className="pxp-single-candidate-timeline-dot" />
                      <div className="pxp-single-candidate-timeline-info ms-3">
                        <div className="pxp-single-candidate-timeline-time">
                          <span className="me-3">2021 - 2021</span>
                        </div>
                        <div className="pxp-single-candidate-timeline-position mt-2">
                          Build Responsive Real World Websites with HTML5 and CSS3
                        </div>
                        <div className="pxp-single-candidate-timeline-company pxp-text-light">Udemy</div>
                        <div className="pxp-single-candidate-timeline-about mt-2 pb-4">
                          In publishing and graphic design, lorem ipsum is a filler text or greeking commonly
                          used to demonstrate the textual elements of a graphic document or visual
                          presentation. Lorem Ipsum is also known as: Greeked text.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-5 col-xl-4 col-xxl-4">
            <div className="pxp-single-candidate-side-panel mt-5 mt-lg-0">
              <div>
                <div className="pxp-single-candidate-side-info-label pxp-text-light">Email</div>
                <div className="pxp-single-candidate-side-info-data">rebecca@pixelprime.co</div>
              </div>
              <div className="mt-4">
                <div className="pxp-single-candidate-side-info-label pxp-text-light">Location</div>
                <div className="pxp-single-candidate-side-info-data">San Francisco, CA</div>
              </div>
              <div className="mt-4">
                <div className="pxp-single-candidate-side-info-label pxp-text-light">Phone</div>
                <div className="pxp-single-candidate-side-info-data">(+123) 456 7890</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PublicPage>
);
export default CandidateDetailPage;
