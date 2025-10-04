"use client";
import React, { FC, useState } from "react";
import Input from "./Input"; // Adjust the path as necessary
import FarmerRegistrationSuccess from "./FarmerRegistrationSuccess";

interface IProps {
  onClose: () => void;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const NotificationConfigurationForm: FC<IProps> = ({
  onClose,
  setSuccess,
  setData,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    alertTypes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // post to api
  const configureNotifications = async () => {
    try {
      // Extension officer authentication
      const username = "extension_officer_001";
      const password = "your-password";
      const basicAuth = btoa(`${username}:${password}`);

      const res = await fetch(
        "http://localhost:3002/api/notifications/configure",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${basicAuth}`,
          },
          body: JSON.stringify(formData),
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const responseData = await res.json();

      console.log("res: ", responseData);
      setSuccess(true);
      setData("Notifications configured successfully");
    } catch (err) {
      console.error("error posting: ", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, "Configuring notifications...");
    await configureNotifications();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-medium">
      <Input
        placeholder="Enter email address"
        id="email"
        label="Email Address"
        formData={formData.email}
        handleChange={handleChange}
      />

      <Input
        placeholder="Enter phone number"
        id="phoneNumber"
        label="Phone Number"
        formData={formData.phoneNumber}
        handleChange={handleChange}
      />

      <Input
        placeholder="Enter WhatsApp number"
        id="whatsappNumber"
        label="WhatsApp Number"
        formData={formData.whatsappNumber}
        handleChange={handleChange}
      />

      <Input
        placeholder="Alert types (e.g., High, Medium, Low)"
        id="alertTypes"
        label="Alert Types"
        formData={formData.alertTypes}
        handleChange={handleChange}
      />

      <button
        type="submit"
        className="my-3 flex w-full items-center justify-center rounded-full bg-blue py-3 text-white"
      >
        Configure Notifications
      </button>
    </form>
  );
};

export default NotificationConfigurationForm;
