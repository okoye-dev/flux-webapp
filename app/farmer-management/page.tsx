"use client";
import FarmerCard from "@/components/FarmerCard";
import React, { FC, useEffect, useState } from "react";

interface IProps {}

const FarmerManagement: FC<IProps> = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFarmers = async () => {
    try {
      const username = "extension_officer_001";
      const password = "your-password";
      const basicAuth = btoa(`${username}:${password}`);

      const res = await fetch("http://localhost:3002/api/farmers/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicAuth}`,
        },
      });
      const responseData = await res.json();
      console.log("farmers: ", responseData.data);
      setData(responseData.data);
    } catch (err) {
      console.log("error getting farmers: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFarmers();

    const interval = setInterval(() => {
      getFarmers();
    }, 10000); // Polling interval set to 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-6">
      {loading ? (
        <div className="flex items-center justify-center gap-1 py-10">
          <span className="flex h-2 w-2 animate-bounce rounded-full bg-blue delay-0"></span>
          <span className="flex h-2 w-2 animate-bounce rounded-full bg-blue delay-150"></span>
          <span className="flex h-2 w-2 animate-bounce rounded-full bg-blue delay-300"></span>
        </div>
      ) : (
        data
          .slice()
          .reverse()
          .map((item, index) => (
            <FarmerCard key={index} index={index} linkData={item} />
          ))
      )}
    </div>
  );
};

export default FarmerManagement;
