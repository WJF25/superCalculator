import { CalcProvider } from "./Calc/index";

export const Providers = ({ children }) => {
  return <CalcProvider>{children}</CalcProvider>;
};
