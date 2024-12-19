"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [refetchApi, setRefetchApi] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("this is running before component load");
      setLoading(false);
    }, 3000);
  }, [refetchApi]);
  return (
    <div>
      {loading ? (
        "Loading....."
      ) : (
        <div>
          <p>
            This is data which is needed to be fetched before the component load
          </p>
          <input type="text" placeholder="write something" />
          <br />
          <button
            className="border border-black"
            onClick={() => setRefetchApi(true)}
          >
            Post Data
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
