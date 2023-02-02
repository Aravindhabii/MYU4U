import React, { useState, useEffect } from "react";
import { Search, Input, Blocks } from "./rightsearch.style";
import { SearchOutlined } from "@ant-design/icons";

const Searchbar = (props) => {
  var lists = props.Adata;

  console.log(lists);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setfilteredData] = useState([]);
  const [selectedData, setselectedData] = useState({});

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };
  
  useEffect(() => {
    const data = lists.filter((el) => {
      if (searchInput === "") {
        return el;
      } else {
        return el.title.toLowerCase().includes(searchInput);
      }
    });
    setfilteredData(data);
  }, [searchInput]);

  const clickfunctional = (li) => {
    console.log(li);
  };
  return (
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
      <div className="result">
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
    </Search>
  );
};

export default Searchbar;
