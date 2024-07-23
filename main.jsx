
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";
import { Provider } from "react-redux";
import { store } from "./Store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ReactLoading from 'react-loading';
let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <MaterialTailwindControllerProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={
              <div className='outerWrapperHoveredBackGround'>
                <ReactLoading type={"spokes"} color="white" height={"50%"} width={"10%"} />
              </div>}>
              <App />
            </Suspense>
          </PersistGate>
        </Provider>
      </MaterialTailwindControllerProvider>
    </ThemeProvider>
  </BrowserRouter>
);
