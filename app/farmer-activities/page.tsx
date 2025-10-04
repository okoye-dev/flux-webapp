import React, { FC } from "react";
import FarmerActivityList from "../../components/FarmerActivityList";
import Header from "@/components/Header";
import Back from "../assets/back-blue.svg";
import Forward from "../assets/forward-blue.svg";
import Image from "next/image";

interface IProps {}

const FarmerActivities: FC<IProps> = (props) => {
  return (
    <div className="w-full px-10 pb-20 text-black">
      <Header name={"Farmer Activities"} />
      <FarmerActivityList />
    </div>
  );
};

export default FarmerActivities;
