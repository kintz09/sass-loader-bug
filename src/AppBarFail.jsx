import React from "react";

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "@rmwc/top-app-bar";
import "@rmwc/top-app-bar/styles";

import style from "./AppBarFail.module.scss";

const AppBarFail = () => {
  return (
    <TopAppBar fixed className={style.appbar}>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>Sass-loader-bug: This appbar causes a compiler error.</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
};

export default AppBarFail;