import { FC } from 'react';

interface BreadcrumbProps {
  parent: string;
  endpoint: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ parent, endpoint }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <i className="fas fa-home me-1"></i> Home
        </li>
        <li className="breadcrumb-item">{parent}</li>
        <li className="breadcrumb-item active" aria-current="page">
          {endpoint}
        </li>
      </ol>
    </nav>
  );
};
