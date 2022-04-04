
import React, { Fragment, useState } from "react";
import { ICard } from "../Game";
import "./Card.scss";
const Card = (props: any) => {
  const figure: ICard = props?.figure;
  const [flip, setFlip] = useState<boolean>(false);
  return (
    <Fragment>
      <div
        className="card"
        onClick={(e: any) => {
          setFlip(!flip);
          console.log("flip =", flip);
        }}
      >
        <div className={flip ? "front show" : "front hide"}>
          <h3>{figure.name}</h3>
          <h5>DMG:{figure.hit}</h5>
          <img src={figure.pictures[0]} alt={figure.name} />
        </div>
        <div className={!flip ? "back show" : "back hide"}></div>
      </div>
    </Fragment>
  );
};

export default Card