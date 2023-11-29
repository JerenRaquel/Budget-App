import React from "react";
import "../css/buttonTab.css";

interface props {
  Title: string;
  Link?: string | "";
  IsSelected?: boolean | false;
}

const ButtonTab = ({ Title, Link, IsSelected }: props) => {
  return (
    <div className="buttonTab-container-base">
      <a href={`/${Link ? Link : ""}`}>
        <span
          className={IsSelected ? "buttonTab-selected" : "buttonTab-unselected"}
        >
          {Title}
        </span>
      </a>
    </div>
  );
};

export default ButtonTab;
