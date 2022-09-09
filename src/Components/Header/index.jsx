import { useState, useEffect, useRef } from "react";
import "./style.scss";
import { useWindowSize } from "../../Hooks";
import { bgHeaderDesktop, bgHeaderMobile } from "../../../assets";
const Header = () => {
  const [height, width] = useWindowSize();
  return (
    <>
      <div className="header">
        <img src={width < 600 ? bgHeaderMobile : bgHeaderDesktop} alt="" />
      </div>
    </>
  );
};

export default Header;
