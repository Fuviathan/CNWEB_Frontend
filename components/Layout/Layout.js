import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";

export default function Layout(props) {
  return (
    <Provider store={store}>
      <div id="root">
        <div className=" flex flex-col justify-between min-h-screen bg-white h-fit">
          <div>
            <Header />
          </div>
          <div className="bg-white">{props.children}</div>
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </Provider>
  );
}
