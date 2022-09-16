import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import DashboardCandidate from '../../components/DashboardCandidate';
import { fetchCandidateJobs } from '../../store/candidate/thunks';
import { selectUser } from '../../store/user/selectors';
import { selectCandidateJobs } from '../../store/candidate/selectors';
import BadgePillSuccess from '../../components/BadgePillSuccess';
import DashboardRecentJobApplications from '../../components/DashboardRecentJobApplications';
import { fetchCompanyDepartments } from '../../store/company/thunks';
import { selectDepartments } from '../../store/company/selectors';

const CandidateDashboardPage: FC = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const candidateJobs = useSelector(selectCandidateJobs);
  const departments = useSelector(selectDepartments);

  useEffect(() => {
    dispatch(fetchCandidateJobs());
    dispatch(fetchCompanyDepartments());
  }, [dispatch, user]);

  return (
    <DashboardCandidate>
      <h1>Dashboard</h1>
      <p className="pxp-text-light">Welcome to findustalent!</p>

      <div className="row mt-4 mt-lg-5 align-items-center">
        <div className="col-sm-6 col-xxl-3">
          <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
            <div className="pxp-dashboard-stats-card-icon text-primary">
              <span className="fa fa-file-text-o" />
            </div>
            <div className="pxp-dashboard-stats-card-info">
              <div className="pxp-dashboard-stats-card-info-number">{candidateJobs.length}</div>
              <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Job applications</div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xxl-3">
          <div className="pxp-dashboard-stats-card bg-success bg-opacity-10 mb-3 mb-xxl-0">
            <div className="pxp-dashboard-stats-card-icon text-success">
              <span className="fa fa-user-circle-o" />
            </div>
            <div className="pxp-dashboard-stats-card-info">
              <div className="pxp-dashboard-stats-card-info-number">0</div>
              <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Profile visits</div>
              <BadgePillSuccess label="pending" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xxl-3">
          <div className="pxp-dashboard-stats-card bg-warning bg-opacity-10 mb-3 mb-xxl-0">
            <div className="pxp-dashboard-stats-card-icon text-warning">
              <span className="fa fa-envelope-o" />
            </div>
            <div className="pxp-dashboard-stats-card-info">
              <div className="pxp-dashboard-stats-card-info-number">0</div>
              <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Unread messages</div>
              <BadgePillSuccess label="pending" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xxl-3">
          <div className="pxp-dashboard-stats-card bg-danger bg-opacity-10 mb-3 mb-xxl-0">
            <div className="pxp-dashboard-stats-card-icon text-danger">
              <span className="fa fa-bell-o" />
            </div>
            <div className="pxp-dashboard-stats-card-info">
              <div className="pxp-dashboard-stats-card-info-number">0</div>
              <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Notifications</div>
              <BadgePillSuccess label="pending" />
            </div>
          </div>
        </div>
      </div>
      {candidateJobs && <DashboardRecentJobApplications candidateJobs={candidateJobs} />}
    </DashboardCandidate>
  );
};

export default CandidateDashboardPage;
