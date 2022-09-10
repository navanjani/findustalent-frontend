import React, { FC, useState } from 'react';
import FormInputWithLabel from '../FormInputWithLabel';

const DashboardChangePassword: FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <>
      <h1>Change Password</h1>
      <p className="pxp-text-light">Choose a new account password.</p>

      <form>
        <div className="row mt-4 mt-lg-5">
          <div className="col-md-6">
            <div className="mb-3">
              <FormInputWithLabel
                label="Old Password"
                type="password"
                placeholder="Enter old password"
                value={oldPassword}
                onChangeHandler={(e) => setOldPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <FormInputWithLabel
                label="New Password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChangeHandler={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <FormInputWithLabel
                  label="Repeat new password"
                  type="password"
                  placeholder="Repeat new password"
                  value={repeatPassword}
                  onChangeHandler={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 mt-lg-5">
            <button type="submit" className="btn rounded-pill pxp-section-cta">
              Save New Password
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default DashboardChangePassword;
