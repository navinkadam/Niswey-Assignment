import React from "react";
import { useSelector } from "react-redux";
import "./loader.css";

export default function Loader() {
  const isLoading = useSelector(({ contact }) => contact?.loading);
  return isLoading ? (
    <div className="overlay">
      <div className="lds-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;
}
