import { useState, useEffect, useRef } from "react";
import "./style.scss";

const Card = ({ data, addTag }) => {
  const tags = [data.role, data.level, ...data.languages];

  return (
    <>
      <div className="card">
        <div className="main">
          <div className="poster">
            <img src={data.logo} alt="" />
          </div>
          <div className="meta">
            <div className="top">
              <h4>{data.company}</h4>
              {data.new && <p>NEW!</p>}
              {data.featured && <p>FEATURED</p>}
            </div>
            <h4 className="title">{data.position}</h4>
            <div className="additional-info">
              <p>{data.postedAt}</p>
              <p>{data.contract}</p>
              <p>{data.location}</p>
            </div>
          </div>
        </div>
        <ul className="tags">
          {tags.map((item, i) => (
            <li key={i} onClick={() => addTag(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Card;
