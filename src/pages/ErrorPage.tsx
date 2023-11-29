import React from "react";
import { useRouteError } from "react-router-dom";
import ButtonTab from "../components/ButtonTab";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oppies!</h1>
      <span>There was an unexpected error that occurred</span>
      <ButtonTab Title="Back To Dashboard" IsSelected />
    </div>
  );
};

export default ErrorPage;
