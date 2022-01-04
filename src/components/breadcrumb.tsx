import { FC } from 'react';

interface BreadcrumbProps {
  parent: string;
  endpoint: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ parent, endpoint }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-4 py-3">
        <li className="breadcrumb-item">
          <i className="fas fa-home me-1"></i>
        </li>
        <li className="breadcrumb-item">{parent}</li>
        <li className="breadcrumb-item active" aria-current="page">
          <b className="text-capitalize">{endpoint}</b>
        </li>
      </ol>
    </nav>
  );
};
