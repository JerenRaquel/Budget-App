import React from "react";
import ButtonTab from "./ButtonTab";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <div className="base-container">
      <h2>Budget Tracker</h2>
      <ButtonTab Title="Dashboard" IsSelected />
      <ButtonTab Title="Metrics" Link="metrics" />
      <ButtonTab Title="Manage" Link="manage" />
    </div>
  );
};

export default NavBar;
