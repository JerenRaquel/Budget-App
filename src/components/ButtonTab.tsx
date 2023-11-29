import React from "react";
import "../css/buttonTab.css";

interface props {
  Title: string;
  IsSelected?: boolean | false;
}

const ButtonTab = ({ Title, IsSelected }: props) => {
  return (
    <div className="buttonTab-container-base">
      <span
        className={IsSelected ? "buttonTab-selected" : "buttonTab-unselected"}
      >
        {Title}
      </span>
    </div>
  );
};

export default ButtonTab;
