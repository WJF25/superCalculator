import "./App.css";

import { Calculator } from "./page/calculator";
import { GlobalStyle } from "./Styles/Global.styles";
import { FadingBackground } from "./components/Modal/modal.styles";
import { ModalProvider } from "styled-react-modal";

function App() {
  return (
    <div className="App">
      <ModalProvider backgroundComponent={FadingBackground}>
        <GlobalStyle />
        <Calculator />
      </ModalProvider>
    </div>
  );
}

export default App;
