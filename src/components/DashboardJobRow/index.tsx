import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IJob } from '../../types/jobs';
import { selectCategoriesAsObject, selectEmploymentTypesAsObject } from '../../store/jobs/selectors';

interface IDashboardJobRow {
  job: IJob;
}

const DashboardJobRow: FC<IDashboardJobRow> = ({ job }: IDashboardJobRow) => {
  const categories = useSelector(selectCategoriesAsObject);
  const employmentTypes = useSelector(selectEmploymentTypesAsObject);

  return (
    <tr>
      <td>
        <input type="checkbox" className="form-check-input" />
      </td>
      <td>
        <Link to="/">
          <div className="pxp-company-dashboard-job-title">{job.title}</div>
          <div className="pxp-company-dashboard-job-location">
            <span className="fa fa-globe me-1" />
            {job.location}
          </div>
        </Link>
      </td>
      <td>
        <div className="pxp-company-dashboard-job-category">{categories[job.categoryId].name}</div>
      </td>
      <td>
        <div className="pxp-company-dashboard-job-type">{employmentTypes[job.employmentType].type}</div>
      </td>
      <td>
        <button type="button" className="pxp-company-dashboard-job-applications">
          3 Candidates
        </button>
      </td>
      <td>
        <div className="pxp-company-dashboard-job-status">
          <span className="badge rounded-pill bg-success">Published</span>
        </div>
        <div className="pxp-company-dashboard-job-date mt-1">{job.createdAt}</div>
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
              <button type="button" title="Preview">
                <span className="fa fa-eye" />
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
  );
};

export default DashboardJobRow;
