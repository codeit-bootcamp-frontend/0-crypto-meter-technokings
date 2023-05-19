import React from "react";

import "./App.css";

import { InputBoard, Gnb } from "@components";
import TableSection from "@components/TableSection/TableSection";

const App = () => {
  return (
    <>
      <Gnb />
      <InputBoard />
      <TableSection />
    </>
  );
};

export default App;
