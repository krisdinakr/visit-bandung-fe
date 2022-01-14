import { FC } from 'react';

interface CarouselProps {
  images: Array<any>;
}

export const Carousel: FC<CarouselProps> = ({ images }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide w-auto"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {images.map((el, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={i}
            className="active"
            aria-current={i === 0 && 'true'}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((img, i) => (
          <div
            key={img}
            className={i === 0 ? 'carousel-item active' : 'carousel-item'}
          >
            <img src={img} className="carousel-img" alt="..." />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
