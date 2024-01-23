import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/app/store";

export default function Layout(props) {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-between min-h-screen bg-white h-fit">
        <div>
          <Header />
        </div>
        {props.children}
        <Footer />
      </div>
    </Provider>
  );
}
