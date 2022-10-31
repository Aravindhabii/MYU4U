import { Rightcontainer, Wrapper } from "../home/right.style";
import { Search, Input, RecentSearch, Blocks } from "./rightsearch.style";
import Searchbar from "./Searchbar";
import Browser from "./Browser";

const Rightsearch = () => {
  

  return (
    <Rightcontainer>
      <Wrapper>
        <Searchbar />
        <RecentSearch>
          <span className="hello" >
            
          </span>
        </RecentSearch>
        <Browser />
      </Wrapper>
    </Rightcontainer>
  );
};

export default Rightsearch;
