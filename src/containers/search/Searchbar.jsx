import React, { useState, useEffect } from "react";
import { Search, Input, Blocks, SearchResult,TopResult } from "./rightsearch.style";
import { SearchOutlined } from "@ant-design/icons";

const Searchbar = (props) => {
  var lists = props.Adata;
  var setdisplay = props.setdisplay;
  var setselectedData = props.setselectedData;
  var selectedData = props.selectedData;
  var display = props.display;

  console.log(selectedData);

  console.log(lists);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setfilteredData] = useState([]);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  useEffect(() => {
    const data = lists.filter((el) => {
      if (searchInput === "") {
        setdisplay(true);
        return el;
      } else {
        setdisplay(false);
        return el.title.toLowerCase().includes(searchInput);
      }
    });
    setfilteredData(data);
  }, [searchInput]);

  const clickfunctional = (li) => {
    setselectedData(li);
    console.log(selectedData.imglink,'selectedData');
    setdisplay(false);
  };
  return (
    <>
      <Search>
        <span>
          <SearchOutlined className="inputicon" />
          <Input
            type="text"
            placeholder="Search"
            onChange={inputHandler}
            value={searchInput}
          />
        </span>
        {/* <div className="result">
        {filteredData.slice(0, 5).map((list) => {
          if (searchInput !== "") {
            return (
              <Blocks onClick={() => clickfunctional(list)}>
                {list.title}
              </Blocks>
            );
          }
        })}
      </div> */}
      </Search>
      { !display ? 
      <SearchResult>
        <div className="left">
          <TopResult>
            {console.log(selectedData.imglink,'log')}
            <img src={selectedData.imglink} alt="ntng" />
            <h1>{selectedData.title}</h1>
            <h2>{selectedData.artist}</h2>
          </TopResult>
        </div>
        <div className="right">
          {filteredData.slice(0, 5).map((list) => {
            if (searchInput !== "") {
              return (
                <Blocks onClick={() => clickfunctional(list)}>
                  {list.title}
                </Blocks>
              );
            }
          })}
        </div>
      </SearchResult>
      : ""
      }
    </>
  );
};

export default Searchbar;
