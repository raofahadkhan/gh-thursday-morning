"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("this is running before component load");
      setLoading(false);
    }, 30000);
  }, []);
  return <div>{loading ? "Loading....." : "This is my page"}</div>;
};

export default Page;
