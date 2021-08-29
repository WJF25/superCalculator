import { List } from "../../Styles/Lista.styles";
import { useCalc } from "../../Provider/Calc/index";

export const Lista = () => {
  const { list, setShow } = useCalc();
  return (
    <List>
      <span onClick={() => setShow(false)}>X</span>
      {list.map((item) => (
        <li>
          <p>{item}</p>
        </li>
      ))}
    </List>
  );
};
