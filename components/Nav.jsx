"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import logo from "../public/assets/logo2.svg";
import shortletIcon from "../public/assets/shortlet.svg";
import dressingIcon from "../public/assets/dressing.svg";
import photoshootIcon from "../public/assets/photo-shoot.svg";
import aboutUsIcon from "../public/assets/about-us.svg";
import howItWorksIcon from "../public/assets/how-it-works.svg";

const servicesMenu = [
  {
    label: "Short let",
    icon: shortletIcon,
    href: "shortlet",
  },
  {
    label: "Dressing",
    icon: dressingIcon,
    href: "dressing",
  },
  {
    label: "Studio/Photoshoot",
    icon: photoshootIcon,
    href: "studio",
  },
];

const companyMenu = [
  {
    label: "About Us",
    icon: aboutUsIcon,
    href: "about",
  },
  {
    label: "How It Works",
    icon: howItWorksIcon,
    href: "how-it-works",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [dropdowns, setDropdowns] = useState({
    services: false,
    company: false,
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop - 100,
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "explore",
        "how-it-works",
        "why-us",
        "contact",
      ];
      let currentSection = "";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && window.scrollY >= section.offsetTop - 200) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setDropdowns({
      services: false,
      company: false,
    });
    setIsOpen(false);
  }, [pathname]);

  // toggle dropdown display
  const toggleDropdown = (menu) => {
    setDropdowns((prevDropdowns) => {
      const updatedDropdowns = {};

      // Close all other dropdowns
      Object.keys(prevDropdowns).forEach((dropdown) => {
        updatedDropdowns[dropdown] =
          dropdown === menu ? !prevDropdowns[dropdown] : false;
      });

      return updatedDropdowns;
    });
  };

  // Close all open dropdowns
  const closeAllDropdowns = () => {
    setDropdowns((prevDropdowns) => {
      const closedDropdowns = {};
      Object.keys(prevDropdowns).forEach((dropdown) => {
        closedDropdowns[dropdown] = false;
      });
      return closedDropdowns;
    });
  };

  const includesAny = pathname?.includes("services");
  // ||
  // pathname?.includes("dressing") ||
  // pathname?.includes("photo-shoot");

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6 md:px-24 bg-white fixed w-full z-50 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="flex items-center">
        <Image src={logo} alt="logo" width={70} height={40} />
      </div>
      <div className="lg:ml-12">
        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <a
              href="/#home"
              onClick={() => scrollToSection("home")}
              className={`${
                activeSection === "home"
                  ? "text-primary-green"
                  : "text-[#040C07] hover:text-primary-green"
              } px-4`}
            >
              Home
            </a>
          </li>
          <li className="block relative">
            <p
              className={`${
                includesAny
                  ? "text-primary-green"
                  : "text-[#040C07] hover:text-primary-green"
              } px-4 flex items-center cursor-pointer no-underline hover:no-underline transition-colors duration-100`}
              onClick={() => toggleDropdown("services")}
            >
              <span>Services</span>
              <span className="ml-2">
                <svg
                  width="15"
                  height="25"
                  viewBox="0 0 15 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    includesAny ? "fill-primary-green" : "fill-[#040C07]"
                  } hover:fill-primary-green`}
                >
                  <path d="M1.92178 8.5H13.078C14.0812 8.5 14.5827 9.71406 13.8749 10.4219L8.29678 16C7.85616 16.4406 7.14366 16.4406 6.70772 16L1.12491 10.4219C0.417093 9.71406 0.918655 8.5 1.92178 8.5Z" />
                </svg>
              </span>
            </p>
            <div
              className={`${
                dropdowns?.services ? "block" : "hidden"
              } bg-white shadow-md rounded border border-gray-300 absolute top-auto left-0 min-w-full w-52 z-30 mt-1`}
            >
              <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
              <div className="bg-white rounded w-full relative z-10 py-1">
                <ul className="list-reset py-2">
                  {servicesMenu?.map((menu, i) => (
                    <li key={i} className="relative">
                      <Link href={`/services/${menu?.href}`}>
                        <p
                          // href={`/${menu?.href}`}
                          className={`${
                            pathname?.includes(menu?.href)
                              ? "text-[#226E46] font-medium"
                              : "text-[#040C07]"
                          } px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer`}
                        >
                          <Image
                            src={menu?.icon}
                            alt={menu?.label}
                            width={20}
                            height={20}
                          />
                          <span className="text-inherit flex-1 pl-4">
                            {menu?.label}
                          </span>
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li className="block relative">
            <p
              className={`${
                activeSection?.includes("short-let", "dressing", "photo-shoot")
                  ? "text-primary-green"
                  : "text-[#040C07] hover:text-primary-green"
              } px-4 flex items-center cursor-pointer no-underline hover:no-underline transition-colors duration-100`}
              onClick={() => toggleDropdown("company")}
            >
              <span>Company</span>
              <span className="ml-2">
                <svg
                  width="15"
                  height="25"
                  viewBox="0 0 15 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#040C07] hover:fill-primary-green"
                >
                  <path d="M1.92178 8.5H13.078C14.0812 8.5 14.5827 9.71406 13.8749 10.4219L8.29678 16C7.85616 16.4406 7.14366 16.4406 6.70772 16L1.12491 10.4219C0.417093 9.71406 0.918655 8.5 1.92178 8.5Z" />
                </svg>
              </span>
            </p>
            <div
              className={`${
                dropdowns?.company ? "block" : "hidden"
              } bg-white shadow-md rounded border border-gray-300 absolute top-auto left-0 min-w-full w-44 z-30 mt-1`}
            >
              <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
              <div className="bg-white rounded w-full relative z-10 py-1">
                <ul className="list-reset py-2">
                  {companyMenu?.map((menu, i) => (
                    <li
                      key={i}
                      className="relative"
                      onClick={() => {
                        scrollToSection(menu?.href);
                        closeAllDropdowns();
                      }}
                    >
                      <a
                        href={`/#${menu?.href}`}
                        className={`${
                          activeSection?.includes(menu?.href)
                            ? "text-[#226E46] font-medium"
                            : "text-[#040C07]"
                        } px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer`}
                      >
                        <Image
                          src={menu?.icon}
                          alt={menu?.label}
                          width={20}
                          height={20}
                        />
                        <span className="text-inherit flex-1 pl-4">
                          {menu?.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a
              href="/#explore"
              onClick={() => scrollToSection("explore")}
              className={`${
                activeSection === "explore"
                  ? "text-primary-green"
                  : "text-[#040C07] hover:text-primary-green"
              } px-4`}
            >
              Explore Property
            </a>
          </li>
          <li>
            <Link href="/attractions">
              <p
                // href="/attractions"
                className={`${
                  pathname === "/attractions"
                    ? "text-primary-green"
                    : "text-[#040C07] hover:text-primary-green cursor-pointer"
                } px-4`}
              >
                Attractions
              </p>
            </Link>
          </li>
          <li>
            <a
              href="/#contact"
              onClick={() => scrollToSection("contact")}
              className="text-white bg-primary-green px-4 py-2.5 ml-8 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="outline-none mobile-menu-button"
        >
          {isOpen ? (
            <AiOutlineMenuUnfold className="w-6 h-6" />
          ) : (
            <AiOutlineMenuFold className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        className={
          isOpen
            ? "lg:hidden flex flex-col gap-4 bg-white absolute top-0 right-0 h-screen w-3/4 sm:w-1/2 transition duration-700 ease-in-out"
            : "hidden"
        }
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="outline-none p-4 bg-primary-green rounded-full ml-auto mt-4 mr-4 text-white"
        >
          {isOpen ? (
            <AiOutlineMenuUnfold className="w-6 h-6" />
          ) : (
            <AiOutlineMenuFold className="w-6 h-6" />
          )}
        </button>
        <ul className="list-none grid grid-cols-1 gap-8 text-base mt-6">
          <li className="border-b border-gray-200 pb-2">
            <a
              href="/#home"
              onClick={() => scrollToSection("home")}
              className={`${
                activeSection === "home"
                  ? "text-primary-green"
                  : "text-[#040C07] hover:text-primary-green"
              } px-4`}
            >
              Home
            </a>
          </li>
          <li className="block relative border-b border-gray-200 pb-2">
            <p
              className={`${
                includesAny
                  ? "text-primary-green"
                  : "text-[#040C07] hover:text-primary-green"
              } px-4 flex items-center cursor-pointer no-underline hover:no-underline transition-colors duration-100`}
              onClick={() => toggleDropdown("services")}
            >
              <span>Services</span>
              <span className="ml-2">
                <svg
                  width="15"
                  height="25"
                  viewBox="0 0 15 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    includesAny ? "fill-primary-green" : "fill-[#040C07]"
                  } hover:fill-primary-green`}
                >
                  <path d="M1.92178 8.5H13.078C14.0812 8.5 14.5827 9.71406 13.8749 10.4219L8.29678 16C7.85616 16.4406 7.14366 16.4406 6.70772 16L1.12491 10.4219C0.417093 9.71406 0.918655 8.5 1.92178 8.5Z" />
                </svg>
              </span>
            </p>
            <div
              className={`${
                dropdowns?.services ? "block" : "hidden"
              } top-auto left-0 min-w-full w-52 z-30 mt-1`}
            >
              {/* <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span> */}
              <div className="bg-white rounded w-full relative z-10 py-1">
                <ul className="list-reset p-2">
                  {servicesMenu?.map((menu, i) => (
                    <li key={i} className="relative py-1.5">
                      <Link href={`/services/${menu?.href}`}>
                        <p
                          className={`${
                            pathname?.includes(menu?.href)
                              ? "text-[#226E46] font-medium"
                              : "text-[#040C07]"
                          } px-5 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer`}
                        >
                          <Image
                            src={menu?.icon}
                            alt={menu?.label}
                            width={20}
                            height={20}
                          />
                          <span className="text-inherit flex-1 pl-4">
                            {menu?.label}
                          </span>
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li className="block relative border-b border-gray-200 pb-2">
            <p
              className={`${
                activeSection?.includes("short-let", "dressing", "photo-shoot")
                  ? "text-primary-green"
                  : "text-[#040C07] hover:text-primary-green"
              } px-4 flex items-center cursor-pointer no-underline hover:no-underline transition-colors duration-100`}
              onClick={() => toggleDropdown("company")}
            >
              <span>Company</span>
              <span className="ml-2">
                <svg
                  width="15"
                  height="25"
                  viewBox="0 0 15 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#040C07] hover:fill-primary-green"
                >
                  <path d="M1.92178 8.5H13.078C14.0812 8.5 14.5827 9.71406 13.8749 10.4219L8.29678 16C7.85616 16.4406 7.14366 16.4406 6.70772 16L1.12491 10.4219C0.417093 9.71406 0.918655 8.5 1.92178 8.5Z" />
                </svg>
              </span>
            </p>
            <div
              className={`${
                dropdowns?.company ? "block" : "hidden"
              } top-auto left-0 min-w-full w-44 z-30 mt-1`}
            >
              {/* <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span> */}
              <div className="bg-white rounded w-full relative z-10 py-1">
                <ul className="list-reset p-2">
                  {companyMenu?.map((menu, i) => (
                    <li
                      key={i}
                      className="relative py-1.5"
                      onClick={() => {
                        scrollToSection(menu?.href);
                        closeAllDropdowns();
                      }}
                    >
                      <a
                        href={`/#${menu?.href}`}
                        className={`${
                          activeSection?.includes(menu?.href)
                            ? "text-[#226E46] font-medium"
                            : "text-[#040C07]"
                        } px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer`}
                      >
                        <Image
                          src={menu?.icon}
                          alt={menu?.label}
                          width={20}
                          height={20}
                        />
                        <span className="text-inherit flex-1 pl-4">
                          {menu?.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          {/* <a
          href="#about"
          onClick={() => scrollToSection("about")}
          className={`${
            activeSection === "about"
              ? "text-primary-green"
              : "text-[#040C07] hover:text-primary-green"
          } px-4`}
        >
          About Us
        </a> */}
          <li className="border-b border-gray-200 pb-2">
            <a
              href="/#explore"
              onClick={() => scrollToSection("explore")}
              className={`${
                activeSection === "explore"
                  ? "text-primary-green"
                  : "text-[#040C07] hover:text-primary-green"
              } px-4`}
            >
              Explore Property
            </a>
          </li>
          <Link href="/attractions">
            <li>
              <p
                onClick={() => scrollToSection("how-it-works")}
                className={`${
                  pathname === "/attractions"
                    ? "text-primary-green"
                    : "text-[#040C07] hover:text-primary-green"
                } px-4`}
              >
                Attractions
              </p>
            </li>
          </Link>
          <li className="ml-4">
            <a
              href="/#contact"
              onClick={() => scrollToSection("contact")}
              className={`${
                activeSection === "contact"
                  ? "text-primary-green"
                  : "text-white bg-primary-green py-2 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out"
              } px-4`}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
