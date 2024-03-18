import App from "./App";
import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";
import { reset } from "styled-reset";
import { ChakraProvider } from "@chakra-ui/react";
import { createGlobalStyle } from "styled-components";

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
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </RecoilRoot>
);
