import React, { FC } from "react";
import NotificationSettings from "../../components/NotificationSettings";
import Header from "@/components/Header";

interface IProps {}

const NotificationSettingsPage: FC<IProps> = (props) => {
  return (
    <div className="w-full px-10">
      <Header name={"Notification Settings"} />
      <NotificationSettings />
    </div>
  );
};

export default NotificationSettingsPage;
