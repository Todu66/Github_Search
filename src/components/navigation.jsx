import React from "react";

function navigation(props) {
  return (
    <div className="flex justify-between  ml-auto mr-auto w-11/12 ">
      <p>devfinder</p>

      <button onClick={props.toggleDarkMode}>
        DARK
      </button>
    </div>
  );
}

export default navigation;
