import App from "./App";
import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";
import { reset } from "styled-reset";
import { ChakraProvider } from "@chakra-ui/react";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: black;
    color: whitesmoke
  }
  a {
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <GlobalStyle />
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </RecoilRoot>
    </QueryClientProvider>
);
