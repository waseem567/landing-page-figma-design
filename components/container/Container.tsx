import React, { Children } from "react";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
