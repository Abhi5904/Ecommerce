"use client";
import { currency, language, navbarData, subNavbarData } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ProductsTab from "./ShopTab";
import DropDown from "../dropdown/DropDown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleHamBurgerClick = () => {
    setIsOpen(!isOpen);
  };
  const handleDropDownClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden md:block mx-8 md:mx-16 py-8 text-lg uppercase">
        <div className="hidden md:flex justify-between items-center w-full ">
          <div className="flex justify-around items-center space-x-14">
            <div className="flex-1">
              <Link href={"/"}>
                <Image
                  src={"images/logo.png"}
                  alt="UOMO"
                  width={100}
                  height={100}
                  priority
                />
              </Link>
            </div>
            <div className="">
              <ul className="flex justify-around items-center space-x-8">
                {navbarData &&
                  navbarData.map((list) => {
                    return (
                      <li
                        key={list.id}
                        className={`${list.id === 2 ? "relative group" : ""}`}
                      >
                        {list.id === 2 ? (
                          <ProductsTab />
                        ) : (
                          <Link
                            href={list.link}
                            className="relative group text-base"
                          >
                            {" "}
                            {list.label}
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-top-left transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="flex justify-around items-center space-x-8">
            <div className="text-3xl cursor-pointer">
              <CiSearch strokeWidth={0.5} />
            </div>
            <div className="text-3xl cursor-pointer">
              <CiUser strokeWidth={0.5} />
            </div>
            <div className="text-3xl cursor-pointer">
              <CiHeart strokeWidth={0.5} />
            </div>
            <div className="text-3xl cursor-pointer">
              <CiShoppingCart strokeWidth={0.5} />
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div
        className={`flex justify-between items-center md:hidden px-16 py-8 ${
          isOpen === true ? "border-b-[1px] border-slate-300" : ""
        }`}
      >
        <div>
          <button
            onClick={handleHamBurgerClick}
            className="flex flex-col justify-center items-center"
          >
            <span
              className={`bg-black block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
        <div>
          <Image
            src={"/assets/images/logo.png"}
            alt="UOMO"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="text-3xl">
          <CiShoppingCart strokeWidth={0.5} />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 h-screen w-full bg-white text-lg overflow-x-scroll max-h-[calc(100vh-100px)] z-50 overflow-hidden slide-bottom">
          <div className="mx-16 pt-5 flex flex-col">
            <form className="flex justify-center items-center border-[1px] border-[#e4e4e4] px-3 py-2">
              <input
                type="text"
                placeholder="Search Product"
                className="flex-1 focus:outline-none"
              />
              <CiSearch strokeWidth={0.5} size={"25px"} />
            </form>
            <ul className="flex flex-col justify-center space-y-3 mt-3">
              {navbarData &&
                navbarData.map((list) => {
                  return (
                    <li
                      key={list.id}
                      className={`${
                        list.id === 2 ? "relative group" : ""
                      } overflow-hidden`}
                    >
                      <Link
                        href={list.link}
                        className="relative group"
                        onClick={
                          list.id === 2 ? handleDropDownClick : undefined
                        }
                      >
                        {list.label}
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-top-left transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                      </Link>
                      {list.id === 2 && isDropDownOpen && (
                        <div className="flex flex-col space-y-2 mt-2 relative left-5">
                          {subNavbarData.map((subList) => (
                            <Link
                              href={subList.link}
                              key={subList.id}
                              className="relative group"
                            >
                              {subList.label}
                              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black origin-top-left transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="relative bottom-0 border-t-[1px] border-slate-300 w-full mb-5 mt-5">
            <div className="flex justify-start items-center gap-x-2 pt-5 mx-16">
              <CiUser strokeWidth={0.5} size={"25px"} />
              <Link href={"/"} className="text-lg font-medium col-span-3">
                My Account
              </Link>
            </div>
            <div className="mx-16 pt-5 grid grid-cols-3 gap-2 gap-x-5">
              <div className="text-slate-600 flex-1">Language</div>
              <DropDown data={language} />
              <div className="text-slate-600 flex-1">Currency</div>
              <DropDown data={currency} />
            </div>
            <div className="flex justify-start items-center gap-x-8 pt-5 mx-16">
              <FaFacebookF strokeWidth={0.5} size={"20px"} />
              <FaInstagram strokeWidth={0.5} size={"20px"} />
              <FaTwitter strokeWidth={0.5} size={"20px"} />
              <FaYoutube strokeWidth={0.5} size={"20px"} />
              <FaPinterest strokeWidth={0.5} size={"20px"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
