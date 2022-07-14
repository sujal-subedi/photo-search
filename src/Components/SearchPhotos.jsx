import axios from "axios";
import React, { useState } from "react";

const SearchPhotos = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=yM2sGSfpMFt6jwPMQfWxxjKKFfae0KpknoNwQisd_Bc`
      )
      .then((response) => {
        setResult(response.data.results);
      });
  };

  return (
    <>
      <div className="form">
        <input
          type="text"
          className="search-box"
          placeholder="Search Any Words..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <br />
        <button type="submit" onClick={changePhoto} className="button">
          Search
          {/* {result ? result : "Loading...."} */}
        </button>
      </div>

      <div className="container">
        <div className="row">
          {result.map((value) => {
            return (
              <div className="column">
                <img src={value.urls.small} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchPhotos;
