import React from "react";
import { TbError404 } from "react-icons/tb";

function MovieNotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TbError404 size={100} /> NOT FOUND
    </div>
  );
}

export default MovieNotFound;
