import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { Widget } from '@uploadcare/react-widget';
import axios from 'axios';
import FormInputWithLabel from '../FormInputWithLabel';
import FormTextArea from '../FormTextArea';
import { apiUrl, UPLOADCARE_KEY } from '../../config/constants';
import { IJobCandidate } from '../../types/jobCandidates';

interface IApplyforJobForm {
  companySlug: string;
  jobSlug: string;
}
const ApplyForJobForm: FC<IApplyforJobForm> = ({ companySlug, jobSlug }: IApplyforJobForm) => {
  // Create a ref to accessed when the component is fully rendered
  const ApplyFormDiv = useRef<HTMLDivElement>(null);

  const initialFormData: IJobCandidate = {
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

  const applyJob = async (application: IJobCandidate) => {
    try {
      const response = await axios.post(
        `${apiUrl}/companies/${companySlug}/jobs/${jobSlug}/apply`,
        application,
      );
      console.log(response);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyJob(formData);
    // setFormData(initialFormData);
  };

  useEffect(() => {
    // Scroll to view when the component is loaded
    // @ts-ignore
    ApplyFormDiv.current.scrollIntoView({ behavior: 'smooth' });
  }, [ApplyFormDiv]);

  return (
    <div className="pxp-dashboard-content-details" ref={ApplyFormDiv}>
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
                value={formData.cv}
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
              <FormInputWithLabel
                onChangeHandler={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                value={formData.linkedinUrl}
                label="Linkedin"
                placeholder="Your linkedin Url"
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
