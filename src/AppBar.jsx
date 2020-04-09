import React from "react";

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "@rmwc/top-app-bar";
import "@rmwc/top-app-bar/styles";

const AppBar = () => {
  return (
    <TopAppBar fixed>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>Sass-loader-bug: This AppBar compiles.</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
};

export default AppBar;