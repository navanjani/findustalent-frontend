import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { setBodyColorLightBlue, setShowClientNavBar } from '../../store/appState/slice';
import DashboardRecruiter from '../../components/DashboardRecruiter';
import FormInputWithLabel from '../../components/FormInputWithLabel';
import FormSelect from '../../components/FormSelect';
import FormTextArea from '../../components/FormTextArea';
import { createNewJob, fetchCompanyDepartments } from '../../store/company/thunks';
import { selectDepartments } from '../../store/company/selectors';
import FormDatePicker from '../../components/FormDatePicker';
import {
  selectCareerLevels,
  selectCategories,
  selectEmploymentTypes,
  selectSalaryRanges,
} from '../../store/jobs/selectors';
import {
  fetchCareerLevels,
  fetchCategories,
  fetchEmploymentTypes,
  fetchSalaryRanges,
} from '../../store/jobs/thunks';
import { IJob } from '../../types/jobs';

const RecruiterDashboardPage: FC = () => {
  const dispatch = useAppDispatch();
  const employmentTypes = useSelector(selectEmploymentTypes);
  const careerLevels = useSelector(selectCareerLevels);
  const departments = useSelector(selectDepartments);
  const salaryRanges = useSelector(selectSalaryRanges);
  const categories = useSelector(selectCategories);

  // const user = useSelector(selectUser);

  const initialFormData: IJob = {
    title: '',
    category: 0,
    location: '',
    description: '',
    careerLevel: 0,
    salaryRange: 0,
    employmentType: 0,
    department: 0,
    closingDate: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewJob(formData));
    setFormData(initialFormData);
  };

  useEffect(() => {
    dispatch(setBodyColorLightBlue());
    dispatch(setShowClientNavBar(false));
    dispatch(fetchEmploymentTypes());
    dispatch(fetchCareerLevels());
    dispatch(fetchCompanyDepartments());
    dispatch(fetchSalaryRanges());
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <DashboardRecruiter>
      <h1>New Job Offer</h1>
      <p className="pxp-text-light">Add a new job to your company&aposs jobs list.</p>

      <form onSubmit={handleSubmit}>
        <div className="row mt-4 mt-lg-5">
          <div className="col-xxl-4">
            <div className="mb-3">
              <FormInputWithLabel
                label="Job title"
                type="text"
                value={formData.title}
                placeholder="Add title"
                onChangeHandler={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
          </div>
          <div className="col-md-6 col-xxl-3">
            <FormInputWithLabel
              label="Location"
              type="text"
              value={formData.location}
              placeholder="eg: Amsterdam, Netherlands"
              onChangeHandler={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
          <div className="col-md-6 col-xxl-3">
            <div className="mb-3">
              <FormSelect
                label="Category"
                value={formData.category}
                options={
                  categories && categories.map((category) => ({ value: category.id, label: category.name }))
                }
                onChangeHandler={(e) => setFormData({ ...formData, category: Number(e.target.value) })}
              />
            </div>
          </div>
          <div className="col-md-6 col-xxl-2">
            <div className="mb-3">
              <FormDatePicker
                label="Closing date"
                value={formData.closingDate}
                onChangeHandler={(e) => setFormData({ ...formData, closingDate: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <FormTextArea
            label="Job description"
            placeholder="Type the description here"
            value={formData.description}
            onChangeHandler={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="row">
          <div className="col-md-6 col-xxl-3">
            <div className="mb-3">
              <FormSelect
                label="Career level"
                value={formData.careerLevel}
                options={
                  careerLevels && careerLevels.map((level) => ({ value: level.id, label: level.level }))
                }
                onChangeHandler={(e) => setFormData({ ...formData, careerLevel: Number(e.target.value) })}
              />
            </div>
          </div>
          <div className="col-md-6 col-xxl-3">
            <div className="mb-3">
              <FormSelect
                label="Employment type"
                value={formData.employmentType}
                options={
                  employmentTypes && employmentTypes.map((type) => ({ value: type.id, label: type.type }))
                }
                onChangeHandler={(e) => setFormData({ ...formData, employmentType: Number(e.target.value) })}
              />
            </div>
          </div>
          <div className="col-md-6 col-xxl-3">
            <div className="mb-3">
              <FormSelect
                label="Salary range"
                value={formData.salaryRange}
                options={
                  salaryRanges && salaryRanges.map((range) => ({ value: range.id, label: range.range }))
                }
                onChangeHandler={(e) => setFormData({ ...formData, salaryRange: Number(e.target.value) })}
              />
            </div>
          </div>
          <div className="col-md-6 col-xxl-3">
            <div className="mb-3">
              <FormSelect
                label="Department"
                value={formData.department}
                options={
                  departments &&
                  departments.map((department) => ({ value: department.id, label: department.name }))
                }
                onChangeHandler={(e) => setFormData({ ...formData, department: Number(e.target.value) })}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mt-lg-5">
          <button type="submit" className="btn rounded-pill pxp-section-cta">
            Publish Job
          </button>
        </div>
      </form>
    </DashboardRecruiter>
  );
};
export default RecruiterDashboardPage;
