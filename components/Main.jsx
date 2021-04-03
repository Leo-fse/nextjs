import React from "react";

export const Main = (props) => {
  return (
    <main className="flex flex-1 justify-center items-center flex-col w-screen">
      {props.children}
    </main>
  );
};
