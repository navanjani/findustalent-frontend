import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IJob } from '../../types/jobs';
import { useAppDispatch } from '../../store';
import { fetchCareerLevels, fetchEmploymentTypes, fetchSalaryRanges } from '../../store/jobs/thunks';

import {
  selectCareerLevelsAsObject,
  selectEmploymentTypesAsObject,
  selectSalaryRangesAsObject,
} from '../../store/jobs/selectors';
import { IEmploymentTypeMap } from '../../types/employmentTypes';
import { ICareerLevelMap } from '../../types/careerLevels';
import { ISalaryRangesMap } from '../../types/salaryRanges';

interface IJobHighlightCard {
  job: IJob;
}

const JobHighlightCard: FC<IJobHighlightCard> = ({ job }: IJobHighlightCard) => {
  const dispatch = useAppDispatch();
  const employmentTypes: IEmploymentTypeMap = useSelector(selectEmploymentTypesAsObject);
  const careerLevels: ICareerLevelMap = useSelector(selectCareerLevelsAsObject);
  const salaryRanges: ISalaryRangesMap = useSelector(selectSalaryRangesAsObject);

  useEffect(() => {
    dispatch(fetchEmploymentTypes());
    dispatch(fetchCareerLevels());
    dispatch(fetchSalaryRanges());
  }, [dispatch]);

  return (
    <div className="pxp-single-job-side-panel mt-5 mt-lg-0">
      <div className="mt-4">
        <div className="pxp-single-job-side-info-label pxp-text-light">Career Level</div>
        <div className="pxp-single-job-side-info-data">
          {careerLevels && careerLevels[job.careerLevel]?.level}
        </div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-job-side-info-label pxp-text-light">Employment Type</div>
        <div className="pxp-single-job-side-info-data">
          {employmentTypes && employmentTypes[job.employmentType]?.type}
        </div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-job-side-info-label pxp-text-light">Salary</div>
        <div className="pxp-single-job-side-info-data">
          €{salaryRanges && salaryRanges[job.salaryRange]?.range}
        </div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-job-side-info-label pxp-text-light">Category</div>
        <div className="pxp-single-job-side-info-data">{job.category?.name}</div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-job-side-info-label pxp-text-light">Department</div>
        <div className="pxp-single-job-side-info-data">{job.department?.name}</div>
      </div>
    </div>
  );
};

export default JobHighlightCard;
