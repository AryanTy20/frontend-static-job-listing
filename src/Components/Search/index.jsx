import { useState, useEffect, useRef } from "react";
import "./style.scss";

import { removeIcon } from "../../../assets";
const Search = ({ tags, setClear, removeTag }) => {
  return (
    <>
      {tags.length > 0 && (
        <div className="search">
          <div className="tags">
            {tags.map((el, i) => (
              <Tags item={el} id={i} key={i} removeTag={removeTag} />
            ))}
          </div>
          <div className="clear">
            <button onClick={() => setClear(true)}>Clear</button>
          </div>
        </div>
      )}
    </>
  );
};

const Tags = ({ item, id, removeTag }) => {
  return (
    <>
      <div className="tag">
        <p>{item}</p>
        <div className="remove" onClick={() => removeTag(id)}>
          <img src={removeIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Search;
