import { ReactNode } from "react";

type TContainerPorps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerPorps) => {
  return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
