import React from "react";
import { Cardcontainer, Card, Head3 } from "./right.style";
import image from "../../assets/image3.jpg";
import { cardcontent } from "../../assets/resource/contents";

const Cards = ({data,title}) => {
  const content = [];

  return (
    <Cardcontainer>
      <Head3>
        {title}
      </Head3>
      <div className="bottom">
        {data.slice(8,14).map((cont) => {
          return (
            <Card>
              <img src={cont.imglink} alt="img" />
              <p>{cont.title}</p>
            </Card>
          );
        })}
      </div>
    </Cardcontainer>
  );
};

export default Cards;
