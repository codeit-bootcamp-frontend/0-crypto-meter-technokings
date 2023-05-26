/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";

import DropdownPresenter from "./DropdownPresenter";

export const Dropdown = ({ options, selected, onClick, onSelectOption }) => {
  // isOpen 상태 빼고 전부 InputBoard에서 Dropdown한테 props로 넘기기
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownPresenter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClick={() => {
        onClick();
        setIsOpen((prev) => !prev);
      }}
      onSelectOption={onSelectOption}
      selectedValue={selected}
      options={options}
    />
  );
};

export const MemoizedDropdown = React.memo(Dropdown);
