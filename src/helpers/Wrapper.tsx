import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-28 font-poppins overflow-x-hidden">{children}</div>;
};

export default Wrapper;
