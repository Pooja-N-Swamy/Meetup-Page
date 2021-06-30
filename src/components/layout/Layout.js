import React from "react";
import Styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={Styles.main}>{props.children}</main>
    </div>
  );
}
