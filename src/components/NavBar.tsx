import React from "react";
import ButtonTab from "./ButtonTab";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <div className="base-container">
      <h2>Budget Tracker</h2>
      <ButtonTab Title="Dashboard" IsSelected />
      <ButtonTab Title="Metrics" />
      <ButtonTab Title="Manage" />
    </div>
  );
};

export default NavBar;
