"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCallDropdownOpen, setIsCallDropdownOpen] = useState(false);

  // Helper untuk mengecek apakah link aktif.
  const isActive = (href) =>
    pathname === href ||
    (pathname?.startsWith("/callPaper") && href === "/callPaper");

  // Link navigasi umum (TANPA "How to Register" dan "Call for Paper")
  const links = [
    { href: "/", label: "Home" },
    { href: "/rundown", label: "Rundown" },
    { href: "/topic", label: "List of Topics" },
  ];

  // Link "How to Register" kita pisahkan supaya bisa diatur urutannya
  const registerLink = { href: "/register", label: "How to Register" };

  // Call for Paper dropdown links
  const callPaperLinks = [
    { href: "/callPaper", label: "Call for Paper" },
    { href: "/callPaper/abstractFormat", label: "Abstract Format" },
    { href: "/callPaper/fullPaperFormat", label: "Full Paper Format" },
    // { href: "/callPaper/posterFormat", label: "Poster Format" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="p-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div>
          <Image
            src="/logo.png"
            alt="ICOMBUS logo"
            width={200}
            height={50}
            priority
          />
        </div>

        {/* DESKTOP MENU (>= lg) */}
        <div className="hidden lg:flex space-x-8 items-center">
          {/* Link umum */}
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={
                isActive(link.href)
                  ? "font-bold text-yellow-500 hover:text-yellow-600"
                  : "font-bold text-green-800 hover:text-green-900"
              }
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown Call for Paper */}
          <div className="relative group">
            <Link
              href="/callPaper"
              className={
                isActive("/callPaper")
                  ? "font-bold text-yellow-500 hover:text-yellow-600"
                  : "font-bold text-green-800 hover:text-green-900"
              }
            >
              Call for Paper
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              {callPaperLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`block px-4 py-2 hover:bg-green-100 ${
                    isActive(link.href) ? "text-yellow-500" : "text-green-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Link "How to Register" */}
          <Link
            href={registerLink.href}
            className={
              isActive(registerLink.href)
                ? "font-bold text-yellow-500 hover:text-yellow-600"
                : "font-bold text-green-800 hover:text-green-900"
            }
          >
            {registerLink.label}
          </Link>
        </div>

        {/* TOGGLE MOBILE MENU (BURGER BUTTON) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#365427"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#365427"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (< lg) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            {/* Link umum */}
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? "font-bold text-yellow-500 hover:text-yellow-600"
                    : "font-bold text-green-800 hover:text-green-900"
                }
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown Call for Paper */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <Link
                  href="/callPaper"
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    isActive("/callPaper")
                      ? "font-bold text-yellow-500 hover:text-yellow-600"
                      : "font-bold text-green-800 hover:text-green-900"
                  }
                >
                  Call for Paper
                </Link>
                <button
                  onClick={() => setIsCallDropdownOpen(!isCallDropdownOpen)}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      isCallDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="#365427"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Isi dropdown */}
              {isCallDropdownOpen && (
                <div className="pl-4 mt-2 flex flex-col space-y-2">
                  {callPaperLinks.slice(1).map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={
                        isActive(link.href)
                          ? "font-bold text-yellow-500 hover:text-yellow-600"
                          : "font-bold text-green-800 hover:text-green-900"
                      }
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Link "How to Register" */}
            <Link
              href={registerLink.href}
              onClick={() => setIsMenuOpen(false)}
              className={
                isActive(registerLink.href)
                  ? "font-bold text-yellow-500 hover:text-yellow-600"
                  : "font-bold text-green-800 hover:text-green-900"
              }
            >
              {registerLink.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
