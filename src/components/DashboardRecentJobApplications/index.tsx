import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { IJobCandidate } from '../../types/jobCandidates';
import DashboardRecentJobApplicationsRow from '../DashboardRecentJobApplicationsRow';
import { fetchApplicationStatuses, fetchEmploymentTypes } from '../../store/jobs/thunks';
import { selectUser } from '../../store/user/selectors';
import { IEmploymentTypeMap } from '../../types/employmentTypes';
import { selectApplicationStatusesAsObject, selectEmploymentTypesAsObject } from '../../store/jobs/selectors';
import { IApplicationStatusesMap } from '../../types/applicationStatuses';

interface IDashboardRecentJobApplications {
  candidateJobs: IJobCandidate[];
}

const DashboardRecentJobApplications: FC<IDashboardRecentJobApplications> = ({
  candidateJobs,
}: IDashboardRecentJobApplications) => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const employmentTypes: IEmploymentTypeMap = useSelector(selectEmploymentTypesAsObject);
  const applicationStatuses: IApplicationStatusesMap = useSelector(selectApplicationStatusesAsObject);

  useEffect(() => {
    dispatch(fetchEmploymentTypes());
    dispatch(fetchApplicationStatuses());
  }, [dispatch, user]);

  return (
    <div className="mt-4 mt-lg-5">
      <h2>Recent Job Applications</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <tbody>
            {candidateJobs.map((candidateJob) => (
              <DashboardRecentJobApplicationsRow
                key={candidateJob.id}
                candidateJob={candidateJob}
                employmentTypes={employmentTypes}
                applicationStatuses={applicationStatuses}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardRecentJobApplications;
