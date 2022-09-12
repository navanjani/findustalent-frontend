import React, { FC, FormEvent, useState } from 'react';
import FormInputWithLabel from '../FormInputWithLabel';
import FormTextArea from '../FormTextArea';

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
  const [formData, setFormData] = useState(initialFormData);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(initialFormData);
  };
  return (
    <div className="pxp-dashboard-content-details">
      <form>
        <div className="row mt-4 mt-lg-5">
          <div className="col-xxl-8">
            <div className="mb-3">
              <FormInputWithLabel
                onChangeHandler={(e) => setFormData({ ...formData, cv: e.target.value })}
                value={formData.cv}
                label="CV or resume *"
                placeholder="Upload a file or drag and drop here."
                type="text"
              ></FormInputWithLabel>
            </div>
          </div>
        </div>
        <h4>Personal Information</h4>
        <p>Tell us something about yourself</p>
        <div className="row mt-4 mt-lg-5">
          <div className="col-xxl-8">
            <div className="mb-3">
              <FormInputWithLabel
                onChangeHandler={(e) => setFormData({ ...formData, firstName: e.target.value })}
                value={formData.firstName}
                label="First Name"
                placeholder="Your first name"
                type="text"
              ></FormInputWithLabel>
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
              ></FormInputWithLabel>
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
              ></FormInputWithLabel>
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
              ></FormInputWithLabel>
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="mb-3">
              <FormTextArea
                label="Cover Letter"
                value={formData.coverLetter}
                placeholder="insert your cover letter here"
                onChangeHandler={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              ></FormTextArea>
            </div>
          </div>
        </div>
        <div className="mt-4 mt-lg-5">
          <button type="submit" className="btn rounded-pill pxp-section-cta">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default ApplyForJobForm;
