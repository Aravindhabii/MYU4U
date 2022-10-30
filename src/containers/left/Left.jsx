import React, { useState, useEffect } from "react";
import { Container, Logo, Sidebarcont, Head1, Head2 } from "./left.style";
import { SearchOutlined, ScanOutlined, HomeOutlined } from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";

const Left = () => {
  let location = useLocation();
  console.log(location.pathname);
  const [currentroute, setroute] = useState("home");
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setroute("home");
        break;
      case "/search":
        setroute("search");
        break;
      case "/scan":
        setroute("scan");
        break;
      case "/create":
        setroute("create");
        break;
      case "/view":
        setroute("view");
        break;
      case "/favorite":
        setroute("favorite");
        break;
      case "/artist":
        setroute("artist");
        break;
      default:
        break;
    }
  }, [location]);

  const leavefunction = (e) => {
    e.target.classList.add("content2");
    e.target.classList.remove("content");
  };
  const enterfunction = (e) => {
    e.target.classList.add("content");
    e.target.classList.remove("content2");
  };

  return (
    <Container>
      <Logo>
        <h1>MYU4U</h1>
      </Logo>
      <Sidebarcont className="sidebarcont" loc={currentroute}>
        <Link
            to=".."
          className={currentroute === "home" ? "content" : "content2"}
          onMouseLeave={currentroute !== "home" ? leavefunction : null}
          onMouseEnter={currentroute !== "home" ? enterfunction : null}
        >
          <Head1>
            <span className="icon">
              <SearchOutlined />
            </span>
            Home
          </Head1>
        </Link>
        <Link
            to='/search'
          className={currentroute === "search" ? "content" : "content2"}
          onMouseLeave={currentroute !== "search" ? leavefunction : null}
          onMouseEnter={currentroute !== "search" ? enterfunction : null}
        >
          <Head1>
            <span className="icon">
              <SearchOutlined />
            </span>
            Search
          </Head1>
        </Link>
        <Link
            to='/scan'
          className={currentroute === "scan" ? "content" : "content2"}
          onMouseLeave={currentroute !== "scan" ? leavefunction : null}
          onMouseEnter={currentroute !== "scan" ? enterfunction : null}
        >
          <Head1>
            <span className="icon">
              <ScanOutlined />
            </span>
            Scan
          </Head1>
        </Link>
      </Sidebarcont>
      <Sidebarcont className="sidebarcont" loc={currentroute}>
        <Head2>Your Playlist</Head2>
        <Link
            to='/create'
          className={currentroute === "create" ? "content" : "content2"}
          onMouseLeave={currentroute !== "create" ? leavefunction : null}
          onMouseEnter={currentroute !== "create" ? enterfunction : null}
        >
          <Head1>
            <span className="icon">
              <HomeOutlined />
            </span>
            Create Playlist
          </Head1>
        </Link>
        <Link
          className={currentroute === "view" ? "content" : "content2"}
          onMouseLeave={currentroute !== "view" ? leavefunction : null}
          onMouseEnter={currentroute !== "view" ? enterfunction : null}
        >
          <Head1>
            <span className="icon">
              <HomeOutlined />
            </span>
            View Playlist
          </Head1>
        </Link>
      </Sidebarcont>
      <Sidebarcont className="sidebarcont" loc={currentroute}>
        <Head2>Your Collection</Head2>
        <Link
            to='/favorite'
          className={currentroute === "favorite" ? "content" : "content2"}
          onMouseLeave={
            currentroute !== "favorite" ? leavefunction : leavefunction
          }
          onMouseEnter={
            currentroute !== "favorite" ? enterfunction : leavefunction
          }
        >
          <Head1>
            <span className="icon">
              <HomeOutlined />
            </span>
            Favorite Song
          </Head1>
        </Link>
        <Link
            to='/artist'
          className={currentroute === "artist" ? "content" : "content2"}
          onMouseLeave={
            currentroute !== "artist" ? leavefunction : leavefunction
          }
          onMouseEnter={
            currentroute !== "artist" ? enterfunction : leavefunction
          }
        >
          <Head1>
            <span className="icon">
              <HomeOutlined />
            </span>
            Artist
          </Head1>
        </Link>
      </Sidebarcont>
    </Container>
  );
};

export default Left;
// onMouseLeave={(e)=>(e.target.classList.add("content2"),e.target.classList.remove("content"))}  onMouseEnter={(e)=>(e.target.classList.add("content"),e.target.classList.remove("content2"))}
