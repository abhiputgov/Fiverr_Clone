import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({ card }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [card.userId],
    queryFn: () =>
      newRequest.get(`/users/${card.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <Link to={`/gig/${card._id}`} className="link">
      <div className="gigCard">
        <img src={card.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{card.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(card.totalStars / card.starNumber) &&
                Math.round(card.totalStars / card.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {card.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
