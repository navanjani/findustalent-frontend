import React, { FC } from 'react';

interface IBadgePillSuccess {
  label: string;
}

const BadgePillSuccess: FC<IBadgePillSuccess> = ({ label }: IBadgePillSuccess) => (
  <span className="badge rounded-pill text-bg-success">{label}</span>
);

export default BadgePillSuccess;
