import { FC } from 'react';

interface AlertProps {
  type: 'error' | 'info';
  message: string;
}

export const Alert: FC<AlertProps> = ({ type, message }) => (
  <div
    className={type === 'error' ? 'alert alert-warning' : 'alert alert-success'}
    role="alert"
  >
    {message}
  </div>
);
