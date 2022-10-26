import React from "react";
import "../css/Loading.css";
import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loader">
        <PulseLoader color="#36d7b7" />
      </div>
    </div>
  );
}
