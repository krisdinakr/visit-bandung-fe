import { FC, ReactNode } from 'react';

interface ModalProps {
  id: string;
  children: ReactNode;
  buttonLabel: string;
  handleButton: () => void;
}

export const Modal: FC<ModalProps> = ({
  id,
  children,
  buttonLabel,
  handleButton,
}) => (
  <div className="modal fade" id={id} tabIndex={-1}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            <i className="far fa-check-circle me-2"></i>
            Are you sure?
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-info"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            className="btn btn-danger text-capitalize"
            onClick={handleButton}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  </div>
);
