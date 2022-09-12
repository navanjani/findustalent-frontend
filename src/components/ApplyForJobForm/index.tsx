import React, { FC, FormEvent, useState } from 'react';
import { Widget } from '@uploadcare/react-widget';
import FormInputWithLabel from '../FormInputWithLabel';
import FormTextArea from '../FormTextArea';
import { UPLOADCARE_KEY } from '../../config/constants';

const ApplyForJobForm: FC = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    cv: '',
    linkedinUrl: '',
    phoneNumber: '',
    coverLetter: '',
  };
  const [fileUploading, setFileUploading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(initialFormData);
  };
  return (
    <div className="pxp-dashboard-content-details">
      <form onSubmit={handleOnSubmit}>
        <h4>Personal Information</h4>
        <p>Tell us something about yourself</p>
        <div className="row mt-4 mt-lg-5">
          <div className="col-xxl-8">
            <div className="mb-3">
              <label htmlFor="pxp-company-job-title" className="form-label">
                CV or resume *
              </label>
              <br />
              <Widget
                tabs="file"
                publicKey={UPLOADCARE_KEY}
                onFileSelect={(file) => {
                  if (file) {
                    // @ts-ignore
                    file.progress(() => setFileUploading(true));
                    // @ts-ignore
                    file.done(() => setFileUploading(false));
                  }
                }}
                onChange={(info) => {
                  // @ts-ignore
                  setFormData({ ...formData, cv: info.uuid });
                }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4 mt-lg-5">
          <div className="col-xxl-8">
            <div className="mb-3">
              <FormInputWithLabel
                onChangeHandler={(e) => setFormData({ ...formData, firstName: e.target.value })}
                value={formData.firstName}
                label="First Name"
                placeholder="Your first name"
                type="text"
              />
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="mb-3">
              <FormInputWithLabel
                onChangeHandler={(e) => setFormData({ ...formData, lastName: e.target.value })}
                value={formData.lastName}
                label="Last Name"
                placeholder="Your last name"
                type="text"
              />
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="mb-3">
              <FormInputWithLabel
                onChangeHandler={(e) => setFormData({ ...formData, email: e.target.value })}
                value={formData.email}
                label="Email address"
                placeholder="Your email address"
                type="text"
              />
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="mb-3">
              <FormInputWithLabel
                onChangeHandler={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                value={formData.phoneNumber}
                label="Phone Number"
                placeholder="Your phone number"
                type="text"
              />
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="mb-3">
              <FormTextArea
                label="Cover Letter"
                value={formData.coverLetter}
                placeholder="Insert your cover letter here"
                onChangeHandler={(e) => setFormData({ ...formData, coverLetter: e })}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 mt-lg-5">
          <button type="submit" className="btn rounded-pill pxp-section-cta" disabled={fileUploading}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default ApplyForJobForm;
