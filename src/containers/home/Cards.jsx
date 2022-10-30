import React from "react";
import { Cardcontainer, Card, Head3 } from "./right.style";
import image from "../../assets/image3.jpg";
import { cardcontent } from "../../assets/resource/contents";

const Cards = (props) => {
  const content = [];
  return (
    <Cardcontainer>
      <Head3>
        {props.title}
      </Head3>
      <div className="bottom">
        {cardcontent.map((cont) => {
          return (
            <Card>
              <img src={cont.pic} alt="img" />
              <p>{cont.name}</p>
            </Card>
          );
        })}
      </div>
    </Cardcontainer>
  );
};

export default Cards;
