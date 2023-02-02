import { Rightcontainer, Wrapper } from "../home/right.style";
import { RecentSearch } from "./rightsearch.style";
import Searchbar from "./Searchbar";
import Browser from "./Browser";


const Rightsearch = (props) => {
  

  return (
    <Rightcontainer>
      <Wrapper>
        <Searchbar Adata = {props.Adata}/>
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
