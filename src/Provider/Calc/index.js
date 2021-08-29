import { createContext, useState, useContext } from "react";

const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);

  const createList = () => {
    setList([...list, value]);
  };

  return (
    <CalcContext.Provider
      value={{
        value,
        setValue,
        list,
        setList,
        show,
        setShow,
        show2,
        setShow2,
        createList,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export const useCalc = () => useContext(CalcContext);
