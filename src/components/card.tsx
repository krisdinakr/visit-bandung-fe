import { FC } from "react";

interface CardProps {
  data: any
}

export const Card: FC<CardProps> = ({ data }) => (
  <div className="card mb-3">
  <img src={data.images[0]} className="card-img-top" alt={data.name} />
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">{data.snippet}</p>
  </div>
</div>
)