import { Header, Sidebar } from 'components';
import { FC, ReactNode } from 'react';

interface TemplateProps {
  children: ReactNode;
}

export const Template: FC<TemplateProps> = ({ children }) => (
  <>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h2>Dashboard</h2>
          </div>
          {children}
        </main>
      </div>
    </div>
  </>
);
