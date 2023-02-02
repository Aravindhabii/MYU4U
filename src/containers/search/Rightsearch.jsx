import { Rightcontainer, Wrapper } from "../home/right.style";
import { RecentSearch,SearchResult } from "./rightsearch.style";
import Searchbar from "./Searchbar";
import Browser from "./Browser";
import { useState, useEffect } from "react";


const Rightsearch = (props) => {
  const [display, setdisplay] = useState(true)
  const [selectedData, setselectedData] = useState({});


  return (
    <Rightcontainer>
      <Wrapper>
        <Searchbar Adata = {props.Adata} display={display} setdisplay = {setdisplay} selectedData = {selectedData} setselectedData= {setselectedData}/>
        {/* <RecentSearch>
          <span className="hello" >
          </span>
        </RecentSearch> */}
        {/* <SearchResult></SearchResult> */}
        {display ? <Browser /> : ""}        
      </Wrapper>
    </Rightcontainer>
  );
};

export default Rightsearch;
