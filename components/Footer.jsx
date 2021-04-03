import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full h-12 flex justify-center items-center border-t">
      <a
        className="flex items-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img
          src="/avatar.png"
          alt="Vercel Logo"
          className="h-4 ml-2 rounded-full"
        />
      </a>
    </footer>
  );
};
