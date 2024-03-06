import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import { Provider } from "react-redux";
import { store } from "./store/store";

const Menu = {
  baseStyle: {
    menu: {w: '100px'},
    list: {
      w: '100px'
    },
    item: {
      w: '100px'
    },
  }
}

const theme = extendTheme({
  components: {
    Menu
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode={'dark'} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
