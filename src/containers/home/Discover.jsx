import React from "react";
import { DiscoverContainer, DiscoverCard, Head1, Head3 } from "./right.style";
import mic from "../../assets/mic2.jpg";
import { discovercont } from "../../assets/resource/contents";
import { PlayCircleFilled } from "@ant-design/icons";


const Discover = ({data,title}) => {
  return (
    <DiscoverContainer>
      <Head3>{title}</Head3>
      <div className="bottom">
      {data.slice(20,25).map((cont) => {
        return (
          <DiscoverCard>
            <img src={cont.imglink} alt="" />
            <span></span>
            <div className="carddiv">
              <Head1 style={{ width: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cont.title}</Head1>
              <PlayCircleFilled className="playbtn"/>
            </div>
          </DiscoverCard>
        );
      })}
      </div>
    </DiscoverContainer>
  );
};

export default Discover;
