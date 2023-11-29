import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/app.css";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Metrics from "./pages/Metrics";
import ErrorPage from "./pages/ErrorPage";
import Manage from "./pages/Manage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/metrics",
    element: <Metrics />,
  },
  {
    path: "/manage",
    element: <Manage />,
  },
]);

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
