"use client";
import React, { useState } from "react";

type nameType = zstring

const page = () => {
  const [name, setName] = useState<nameType>("Hamza");
  //   let name = "hamza";
  //   name = "fahad";
  return (
    <>
      <div>{name}</div>
      {/* <button
      className="bg-slate-400"
        onClick={() => {
          console.log("name is updated");
          name = "fahad";
          console.log("value of name ===>", name)
        }}
      >
        change name
      </button> */}
      <button onClick={() => setName("Fahad")}> change name</button>
    </>
  );
};

export default page;
