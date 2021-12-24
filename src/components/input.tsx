import { FC, HTMLInputTypeAttribute } from 'react';

interface InputProps {
  variant: 'floating' | 'read-only';
  type: HTMLInputTypeAttribute;
  label: string;
  value?: string;
}

export const Input: FC<InputProps> = ({ variant, type, label, value }) => {
  const newLabel = label.replace(/([a-z])([A-Z])/g, '$1 $2');

  if (variant === 'floating')
    return (
      <div className="form-floating mb-3">
        <input
          type={type}
          className="form-control"
          id={label}
          placeholder={label}
        />
        <label htmlFor={label} className="text-capitalize">
          {label}
        </label>
      </div>
    );

  return (
    <div className="mb-2 row">
      <label
        htmlFor={label}
        className="col-sm-3 col-form-label fw-bold text-capitalize"
      >
        {newLabel}
      </label>
      <div className="col-sm-9">
        <input
          type="text"
          readOnly
          className="form-control-plaintext px-2"
          id={label}
          value={value}
        />
      </div>
    </div>
  );
};
