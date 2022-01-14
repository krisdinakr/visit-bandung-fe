import { FC } from 'react';

interface HeroProps {
  img: string;
  alt: string;
}

export const Hero: FC<HeroProps> = ({ img, alt }) => (
  <div className="hero">
    <img src={img} alt={alt} className="hero__img" />
  </div>
);
