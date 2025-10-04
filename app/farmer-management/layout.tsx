import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps) => {
  return (
    <div>
      <div className="mt-7 flex flex-col gap-6 text-3xl font-semibold">
        Farmer Management Registered Farmers
      </div>
      {children}
    </div>
  );
};

export default Layout;
