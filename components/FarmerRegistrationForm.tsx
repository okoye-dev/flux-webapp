"use client";
import React, { FC, ReactNode, useState } from "react";
import Input from "./Input"; // Adjust the path as necessary
import FarmerRegistrationSuccess from "./FarmerRegistrationSuccess";

interface IProps {
  onClose: () => void;
  trigger?: ReactNode;
}

const FarmerRegistrationForm: FC<IProps> = ({ onClose, trigger }) => {
  const [formData, setFormData] = useState({
    farmerName: "",
    phoneNumber: "",
    location: "",
    cropType: "",
    farmSize: "",
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    registerFarmer();
  };

  const registerFarmer = async () => {
    try {
      // Extension officer authentication
      const username = "extension_officer_001";
      const password = "your-password";
      const basicAuth = btoa(`${username}:${password}`);

      const farmerData = {
        name: formData.farmerName,
        phone: formData.phoneNumber,
        location: formData.location,
        cropType: formData.cropType,
        farmSize: formData.farmSize,
      };

      const res = await fetch("http://localhost:3002/api/farmers/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicAuth}`,
        },
        body: JSON.stringify(farmerData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      handleDialogOpen();
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("error registering farmer: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-medium">
      <Input
        placeholder="Enter farmer's full name"
        id="farmerName"
        label="Farmer Name"
        formData={formData.farmerName}
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
        placeholder="Enter location/village"
        id="location"
        label="Location"
        formData={formData.location}
        handleChange={handleChange}
      />

      <Input
        placeholder="Enter crop type (e.g., maize, rice)"
        id="cropType"
        label="Crop Type"
        formData={formData.cropType}
        handleChange={handleChange}
      />

      <Input
        type="number"
        placeholder="Enter farm size in acres"
        id="farmSize"
        label="Farm Size (acres)"
        formData={formData.farmSize}
        handleChange={handleChange}
      />

      <button
        type="submit"
        className="my-3 flex w-full items-center justify-center rounded-full bg-blue py-3 text-white"
      >
        Register Farmer
      </button>

      <FarmerRegistrationSuccess
        isDialogOpen={isDialogOpen}
        handleDialogClose={handleDialogClose}
        setIsDialogOpen={setIsDialogOpen}
      />
    </form>
  );
};

export default FarmerRegistrationForm;
