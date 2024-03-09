"use client";
import React from "react";
import { TbFaceIdError } from "react-icons/tb";

function Error() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TbFaceIdError size={100} /> 
    </div>
  );
}

export default Error;
