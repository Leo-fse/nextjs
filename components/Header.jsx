import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40">
      <nav className="bg-gray-800 w-screen">
        <div className="flex items-center pl-8 h-14">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Home
              </a>
            </Link>
            <Link href="/inspection-page">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Inspection
              </a>
            </Link>
            <Link href="/blog-page">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Blog
              </a>
            </Link>
            <Link href="/blog-page-table">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Blog-Table
              </a>
            </Link>
            <Link href="/contact-page">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
