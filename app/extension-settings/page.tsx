import React, { FC } from "react";
import ExtensionOfficerSettings from "../../components/ExtensionOfficerSettings";
import Header from "@/components/Header";

interface IProps {}

const ExtensionSettings: FC<IProps> = (props) => {
  return (
    <div className="w-full px-10">
      <Header name={"Account Settings"} />
      <ExtensionOfficerSettings />
    </div>
  );
};

export default ExtensionSettings;
