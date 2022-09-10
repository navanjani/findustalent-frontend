import React, { FC } from 'react';
import DashboardCandidate from '../../components/DashboardCandidate';

const CandidateDashboardEditProfilePage: FC = () => (
  <DashboardCandidate>
    <div className="pxp-dashboard-content-details">
      <h1>Edit Profile</h1>
      <p className="pxp-text-light">Edit your candidate profile page info.</p>

      <form>
        <div className="row mt-4 mt-lg-5">
          <div className="col-xxl-8">
            <div className="mb-3">
              <label htmlFor="pxp-candidate-name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="pxp-candidate-name"
                className="form-control"
                placeholder="Add your name"
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="pxp-candidate-title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="pxp-candidate-title"
                    className="form-control"
                    placeholder="E.g. Web Designer"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="pxp-candidate-location" className="form-label">
                    Location
                  </label>
                  <input
                    type="tel"
                    id="pxp-candidate-location"
                    className="form-control"
                    placeholder="E.g. San Francisco, CA"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="pxp-candidate-email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="pxp-candidate-email"
                    className="form-control"
                    placeholder="candidate@email.com"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="pxp-candidate-phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="pxp-candidate-phone"
                    className="form-control"
                    placeholder="(+12) 345 6789"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="form-label">&nbsp;</div>
            <div className="pxp-candidate-cover mb-3">
              <input type="file" id="pxp-candidate-cover-choose-file" accept="image/*" />
              <label htmlFor="pxp-candidate-cover-choose-file" className="pxp-cover">
                <span>Upload Cover Image</span>
              </label>
            </div>
            <div className="pxp-candidate-photo mb-3">
              <input type="file" id="pxp-candidate-photo-choose-file" accept="image/*" />
              <label htmlFor="pxp-candidate-photo-choose-file" className="pxp-cover">
                <span>Upload Photo</span>{' '}
              </label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="pxp-candidate-about" className="form-label">
            About you
          </label>
          <textarea className="form-control" id="pxp-candidate-about" placeholder="Type your info here..." />
        </div>

        <div className="mt-4 mt-lg-5">
          <h2>Skills</h2>
          <div className="pxp-candidate-dashboard-skills mb-3">
            <ul className="list-unstyled">
              <li>
                Work from home
                <span className="fa fa-trash-o" />
              </li>
              <li>
                Part-time
                <span className="fa fa-trash-o" />
              </li>
              <li>
                Administration
                <span className="fa fa-trash-o" />
              </li>
              <li>
                Finance
                <span className="fa fa-trash-o" />
              </li>
              <li>
                Retail
                <span className="fa fa-trash-o" />
              </li>
              <li>
                IT
                <span className="fa fa-trash-o" />
              </li>
              <li>
                Engineering
                <span className="fa fa-trash-o" />
              </li>
              <li>
                Sales
                <span className="fa fa-trash-o" />
              </li>
              <li>
                Manufacturing
                <span className="fa fa-trash-o" />
              </li>
            </ul>
          </div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Skill" />
            <button type="button" className="btn">
              Add Skill
            </button>
          </div>
        </div>

        <div className="mt-4 mt-lg-5">
          <h2>Work Experience</h2>
          <div className="table-responsive">
            <table className="table align-middle">
              <tr>
                <td style={{ width: '30%' }}>
                  <div className="pxp-candidate-dashboard-experience-title">Senior UI/UX Designer</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-company">Adobe Corporation</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-time">2005 - 2013</div>
                </td>
                <td>
                  <div className="pxp-dashboard-table-options">
                    <ul className="list-unstyled">
                      <li>
                        <button type="button" title="Edit">
                          <span className="fa fa-pencil" />
                        </button>
                      </li>
                      <li>
                        <button type="button" title="Delete">
                          <span className="fa fa-trash-o" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%' }}>
                  <div className="pxp-candidate-dashboard-experience-title">Senior UI/UX Designer</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-company">Adobe Corporation</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-time">2005 - 2013</div>
                </td>
                <td>
                  <div className="pxp-dashboard-table-options">
                    <ul className="list-unstyled">
                      <li>
                        <button type="button" title="Edit">
                          <span className="fa fa-pencil" />
                        </button>
                      </li>
                      <li>
                        <button type="button" title="Delete">
                          <span className="fa fa-trash-o" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%' }}>
                  <div className="pxp-candidate-dashboard-experience-title">Senior UI/UX Designer</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-company">Adobe Corporation</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-time">2005 - 2013</div>
                </td>
                <td>
                  <div className="pxp-dashboard-table-options">
                    <ul className="list-unstyled">
                      <li>
                        <button type="button" title="Edit">
                          <span className="fa fa-pencil" />
                        </button>
                      </li>
                      <li>
                        <button type="button" title="Delete">
                          <span className="fa fa-trash-o" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div className="row mt-3 mt-lg-4">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="pxp-candidate-work-title" className="form-label">
                  Job title
                </label>
                <input
                  type="text"
                  id="pxp-candidate-work-title"
                  className="form-control"
                  placeholder="E.g. Web Designer"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="pxp-candidate-work-company" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  id="pxp-candidate-work-company"
                  className="form-control"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="pxp-candidate-work-time" className="form-label">
                  Time period
                </label>
                <input
                  type="text"
                  id="pxp-candidate-work-time"
                  className="form-control"
                  placeholder="E.g. 2005 - 2013"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="pxp-candidate-work-about" className="form-label">
              Description
            </label>
            <textarea
              className="form-control pxp-smaller"
              id="pxp-candidate-work-about"
              placeholder="Type a short description here..."
            />
          </div>
          <button type="button" className="btn rounded-pill pxp-subsection-cta">
            Add Experience
          </button>
        </div>

        <div className="mt-4 mt-lg-5">
          <h2>Education & Training</h2>
          <div className="table-responsive">
            <table className="table align-middle">
              <tr>
                <td style={{ width: '30%' }}>
                  <div className="pxp-candidate-dashboard-experience-title">Architecure</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-school">
                    Politehnica University of Timisoara: Bachelor of Architecture
                  </div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-time">2011 - 2017</div>
                </td>
                <td>
                  <div className="pxp-dashboard-table-options">
                    <ul className="list-unstyled">
                      <li>
                        <button type="button" title="Edit">
                          <span className="fa fa-pencil" />
                        </button>
                      </li>
                      <li>
                        <button type="button" title="Delete">
                          <span className="fa fa-trash-o" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%' }}>
                  <div className="pxp-candidate-dashboard-experience-title">Front End Web Developer</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-school">Udacity Nanodegree Program</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-time">2020 - 2020</div>
                </td>
                <td>
                  <div className="pxp-dashboard-table-options">
                    <ul className="list-unstyled">
                      <li>
                        <button type="button" title="Edit">
                          <span className="fa fa-pencil" />
                        </button>
                      </li>
                      <li>
                        <button type="button" title="Delete">
                          <span className="fa fa-trash-o" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%' }}>
                  <div className="pxp-candidate-dashboard-experience-title">
                    Build Responsive Real World Websites with HTML5 and CSS3
                  </div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-company">Udemy</div>
                </td>
                <td style={{ width: '25%' }}>
                  <div className="pxp-candidate-dashboard-experience-time">2021 - 2021</div>
                </td>
                <td>
                  <div className="pxp-dashboard-table-options">
                    <ul className="list-unstyled">
                      <li>
                        <button type="button" title="Edit">
                          <span className="fa fa-pencil" />
                        </button>
                      </li>
                      <li>
                        <button type="button" title="Delete">
                          <span className="fa fa-trash-o" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div className="row mt-3 mt-lg-4">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="pxp-candidate-edu-title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="pxp-candidate-edu-title"
                  className="form-control"
                  placeholder="E.g. Architecure"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="pxp-candidate-edu-school" className="form-label">
                  School
                </label>
                <input
                  type="text"
                  id="pxp-candidate-edu-school"
                  className="form-control"
                  placeholder="School name"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="pxp-candidate-edu-time" className="form-label">
                  Time period
                </label>
                <input
                  type="text"
                  id="pxp-candidate-edu-time"
                  className="form-control"
                  placeholder="E.g. 2005 - 2013"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="pxp-candidate-edu-about" className="form-label">
              Description
            </label>
            <textarea
              className="form-control pxp-smaller"
              id="pxp-candidate-edu-about"
              placeholder="Type a short description here..."
            />
          </div>
          <button type="button" className="btn rounded-pill pxp-subsection-cta">
            Add Education
          </button>
        </div>

        <div className="mt-4 mt-lg-5">
          <button type="button" className="btn rounded-pill pxp-section-cta">
            Save Profile
          </button>
        </div>
      </form>
    </div>
  </DashboardCandidate>
);
export default CandidateDashboardEditProfilePage;
