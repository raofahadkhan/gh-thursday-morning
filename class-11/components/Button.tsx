"use client";
import React from "react";

const Button = (props: { hamza?: string }) => {
  console.log("Props ===>", props);
  return <div>{props.hamza}</div>;
};

export default Button;
