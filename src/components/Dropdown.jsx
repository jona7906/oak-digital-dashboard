import React from "react";
import ReactDOM from "react-dom";

const DropdownMenu = () => {
  return (
    <select>
      <option selected value="status">By status</option>
      <option value="type">By type</option>
      <option value="hostname">By hostname</option>
    </select>
  );
}
//DropdownMenu!
export default DropdownMenu;
