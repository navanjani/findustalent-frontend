import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DashboardRecentCandidateRow from '../DashboardRecentCandidateRow';
import { useAppDispatch } from '../../store';
import { selectCompanyCandidates } from '../../store/company/selectors';
import { fetchCompanyCandidates } from '../../store/company/thunks';

const DashboardRecentCandidates: FC = () => {
  const dispatch = useAppDispatch();
  const candidates = useSelector(selectCompanyCandidates);
  useEffect(() => {
    dispatch(fetchCompanyCandidates());
  }, [dispatch]);

  return (
    <div className="mt-4 mt-lg-5">
      <h2>Recent Candidates</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <tbody>
            {candidates.length &&
              candidates.map((candidate) => (
                <DashboardRecentCandidateRow key={candidate.id} candidate={candidate} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardRecentCandidates;
