"use client";

import React from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileMenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="relative profile-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
      <Menu as="div" className="relative">
        <MenuButton className="flex items-center -mx-[5px] relative ltr:pr-[14px] rtl:pl-[14px] text-black dark:text-white">
          <Image
            src="/images/admin.png"
            className="w-[35px] h-[35px] md:w-[42px] md:h-[42px] rounded-full ltr:md:mr-[2px] ltr:lg:mr-[8px] rtl:md:ml-[2px] rtl:lg:ml-[8px] border-[2px] border-primary-200 inline-block"
            alt="admin-image"
            width={35}
            height={35}
          />
          <span className="block font-semibold text-[0] lg:text-base">
            Olivia
          </span>
          <i className="ri-arrow-down-s-line text-[15px] absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2 mt-px"></i>
        </MenuButton>

        <MenuItems
          transition
          className="bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none py-[22px] absolute mt-[13px] md:mt-[14px] w-[195px] z-[1] top-full ltr:right-0 rtl:left-0 rounded-md data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="flex items-center border-b border-gray-100 dark:border-[#172036] pb-[12px] mx-[20px] mb-[10px]">
            <Image
              src="/images/admin.png"
              className="rounded-full w-[31px] h-[31px] ltr:mr-[9px] rtl:ml-[9px] border-2 border-primary-200 inline-block"
              alt="admin-image"
              width={31}
              height={31}
            />
            <div>
              <span className="block text-black dark:text-white font-medium">
                Olivia John
              </span>
              <span className="block text-xs">Marketing Manager</span>
            </div>
          </div>

          <ul>
            <li>
              <Link
                href="/my-profile/"
                className={`block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500 ${
                  pathname === "/my-profile/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                  account_circle
                </i>
                My Profile
              </Link>
            </li>
            <li>
              <Link
                href="/apps/chat/"
                className={`block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500 ${
                  pathname === "/apps/chat/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                  chat
                </i>
                Messages
              </Link>
            </li>
            <li>
              <Link
                href="/apps/to-do-list/"
                className={`block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500 ${
                  pathname === "/apps/to-do-list/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                  format_list_bulleted
                </i>
                My Task
              </Link>
            </li>
            <li>
              <Link
                href="/ecommerce/checkout/"
                className={`block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500 ${
                  pathname === "/ecommerce/checkout/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                  credit_card
                </i>
                Billing
              </Link>
            </li>
          </ul>

          <div className="border-t border-gray-100 dark:border-[#172036] mx-[20px] my-[9px]"></div>

          <ul>
            <li>
              <Link
                href="/settings/"
                className={`block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500 ${
                  pathname === "/settings/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                  settings
                </i>
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/faq/"
                className={`block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500 ${
                  pathname === "/faq/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                  support
                </i>
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/authentication/lock-screen/"
                className={`block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500 ${
                  pathname === "/authentication/lock-screen/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                  lock
                </i>
                Lock Screen
              </Link>
            </li>
            <li>
              <Link
                href="/authentication/logout/"
                className={`block relative py-[7px] ltr:pl-[50px] ltr:pr-[20px] rtl:pr-[50px] rtl:pl-[20px] text-black dark:text-white transition-all hover:text-primary-500 ${
                  pathname === "/authentication/logout/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined top-1/2 -translate-y-1/2 !text-[22px] absolute ltr:left-[20px] rtl:right-[20px]">
                  logout
                </i>
                Logout
              </Link>
            </li>
          </ul>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
