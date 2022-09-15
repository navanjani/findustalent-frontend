import React, { FC, useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Document, pdfjs, Page } from 'react-pdf';
import DashboardRecruiter from '../../components/DashboardRecruiter';
import { useAppDispatch } from '../../store';
import { fetchCandidate } from '../../store/company/thunks';
import { selectCandidate } from '../../store/company/selectors';
import { getPdfUrl } from '../../helpers/pdfUrl';

/* eslint max-len:0 */
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const RecruiterDashboardSingleCandidate: FC = () => {
  interface QueryParamTypes extends Params {
    candidateId: string;
    jobId: string;
  }
  const { jobId, candidateId } = useParams() as QueryParamTypes;
  const dispatch = useAppDispatch();
  const candidate = useSelector(selectCandidate);
  // https://github.com/wojtekmaj/react-pdf#usage
  const [numPages, setNumPages] = useState(0);
  const [pageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchCandidate(Number(jobId), Number(candidateId)));
  }, [jobId, candidateId, dispatch]);

  return (
    <DashboardRecruiter>
      <h1>
        {candidate?.firstName} {candidate?.lastName}
      </h1>
      <p className="pxp-text-light">Applied for {candidate?.job?.title}</p>
      <div className="row mt-4 mt-lg-5 align-items-center">
        <div className="col-sm-12 col-xxl-12">
          {candidate && (
            <div>
              {/* https://github.com/wojtekmaj/react-pdf#usage */}
              <Document file={getPdfUrl(candidate.cv)} onLoadSuccess={(data) => setNumPages(data.numPages)}>
                <Page pageNumber={pageNumber} />
              </Document>
              Page {pageNumber} of {numPages}
            </div>
          )}
        </div>
      </div>
    </DashboardRecruiter>
  );
};

export default RecruiterDashboardSingleCandidate;
