import React from "react";
import { DiscoverContainer, DiscoverCard, Head1, Head2 } from "./right.style";
import mic from "../../assets/mic2.jpg";
import { discovercont } from "../../assets/resource/contents";
import { PlayCircleOutlined } from "@ant-design/icons";


const Discover = () => {
  return (
    <DiscoverContainer>
      {discovercont.map((cont) => {
        return (
          <DiscoverCard>
            <img src={cont.pic} alt="" />
            <span></span>
            <div className="carddiv">
              <Head1>{cont.name}</Head1>
              <PlayCircleOutlined className="playbtn"/>
            </div>
          </DiscoverCard>
        );
      })}
    </DiscoverContainer>
  );
};

export default Discover;
