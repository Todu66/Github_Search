import React from "react";

function navigation(props) {
  return (
    <div className="w-[100%] mx-auto flex justify-between md:max-w-[768px]">
      <p className="">devfinder</p>

      <button onClick={props.toggleDarkMode}>
        DARK
      </button>
    </div>
  );
}

export default navigation;
