import { FC } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  data: any;
  type: 'primary' | 'secondary' | 'overlay';
}

export const Card: FC<CardProps> = ({ data, type }) => {
  if (type === 'secondary') {
    return (
      <div className="card mb-3 border-0 rounded-0 card--secondary">
        <Link to="/" className="card__link card__link--secondary">
          <img
            src={data.images[0]}
            className="card__img card__img--secondary"
            alt={data.name}
            loading="lazy"
          />
          <div className="card__body card__body--secondary">
            <div className="card__wrapper">
              <h5 className="card__title">{data.name}</h5>
              <p className="card__text card__text--secondary">{data.snippet}</p>
              <div className="text-end">
                <i className="fas fa-chevron-circle-right fs-4 text-secondary me-1"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (type === 'primary') {
    return (
      <div className="card mb-3 border-0 rounded-0">
        <Link to="/" className="card__link card__link--primary">
          <figure className="mb-0 overflow-hidden">
            <img
              src={data.images[0]}
              className="card__img"
              alt={data.name}
              loading="lazy"
            />
          </figure>
          <div className="card-body px-0 pb-0">
            <h5 className="card__title">{data.name}</h5>
            <p className="card__text">{data.snippet}</p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="card mb-3 border-0 rounded-0 card--overlay">
      <Link to="/" className="card__link card__link--overlay">
        <figure className="mb-0 overflow-hidden">
          <img src={data.images} className="card__img card__img--overlay" alt="..." />
        </figure>
        <div className="card-img-overlay">
          <h5 className="card__title card__title--overlay">{data.name}</h5>
        </div>
      </Link>
    </div>
  );
};
