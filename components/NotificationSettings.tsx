"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import add from "@/app/assets/add.svg";
import cancel from "@/app/assets/cancel.svg";
import globe from "@/app/assets/globe.svg";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import NotificationConfigurationForm from "./NotificationConfigurationForm";
import CopyLink from "./CopyLink";

interface IProps {}

const NotificationSettings: FC<IProps> = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState("");

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <div className="my-5 flex w-full flex-col items-center justify-center gap-4 rounded-[20px] border border-border bg-blue/5 py-10 text-base">
      <Image
        className="self-center"
        src={globe}
        alt="webhook icon"
        width={160}
        height={160}
      />

      {success ? (
        <p className="text-center font-medium">
          Notification settings configured successfully
        </p>
      ) : (
        <p className="text-center font-medium">
          Configure notification settings to receive alerts about <br /> farmer
          activities and urgent reports.
        </p>
      )}

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {success ? (
          <CopyLink link={data} />
        ) : (
          <AlertDialogTrigger asChild>
            <span
              onClick={handleDialogOpen}
              className="flex cursor-pointer items-center justify-center gap-2 text-balance rounded-full bg-blue px-6 py-3 text-base font-medium text-white"
            >
              <Image
                src={add}
                alt="create new"
                className="h-4 w-4"
                width={12}
                height={12}
              />
              Configure Notifications
            </span>
          </AlertDialogTrigger>
        )}
        <AlertDialogContent>
          <div className="flex w-full justify-between gap-3">
            <AlertDialogCancel asChild>
              <span onClick={handleDialogClose}>
                <Image src={cancel} alt="cancel" width={32} height={32} />
              </span>
            </AlertDialogCancel>
            <AlertDialogHeader className="w-full">
              <AlertDialogTitle>
                <AlertDialogDescription>
                  Configure Notification Settings{" "}
                </AlertDialogDescription>
              </AlertDialogTitle>
            </AlertDialogHeader>
          </div>
          <NotificationConfigurationForm
            setData={setData}
            setSuccess={setSuccess}
            onClose={handleDialogClose}
          />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default NotificationSettings;
