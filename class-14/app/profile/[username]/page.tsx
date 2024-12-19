"use client";
import React from "react";

const page = ({ params }: { params: { username: string } }) => {
  console.log("params", params.username);
  return <div>{params.username}</div>;
};

export default page;
