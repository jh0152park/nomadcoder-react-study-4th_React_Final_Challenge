import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import App from "./App";
import ReactDOM from "react-dom/client";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: black;
    color: whitesmoke
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <RecoilRoot>
        <GlobalStyle />
        <App />
    </RecoilRoot>
);
