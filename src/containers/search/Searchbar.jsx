import React, { useState, useEffect } from "react";
import { Search, Input, Blocks } from "./rightsearch.style";
import { SearchOutlined } from "@ant-design/icons";

const Searchbar = () => {
  const lists = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setfilteredData] = useState([]);

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };
  useEffect(() => {
    const data = lists.filter((el) => {
      //if no input the return the original
      if (searchInput === "") {
        return el;
      } else {
        return el.name.toLowerCase().includes(searchInput);
      }
    });
    setfilteredData(data);
  }, [searchInput]);

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
                return <Blocks>{list.name}</Blocks>;
              }
            })}
          </div>
        </Search>
  )
}

export default Searchbar