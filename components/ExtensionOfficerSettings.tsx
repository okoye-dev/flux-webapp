"use client";
import React, { FC, useState } from "react";
import Key from "../app/assets/key.svg";
import Image from "next/image";
import CopyLink from "./CopyLink";

// interface IProps {
//   apiKey: string;
// }

const ExtensionOfficerSettings = () => {
  const [isCopied, setIsCopied] = useState(false);
  const accountId = "FARMER_001";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <div className="mt-8 flex w-full justify-center rounded-3xl border p-10 text-center text-sm font-light text-black">
      <div className="flex w-[80%] flex-col justify-center gap-4 align-middle">
        <Image className="self-center" src={Key} alt="" />
        <p>
          Your Account ID is ready! Use this to access your farming data and
          manage your agricultural advisory services.
        </p>
        <CopyLink link={accountId} />
      </div>
    </div>
  );
};

export default ExtensionOfficerSettings;
