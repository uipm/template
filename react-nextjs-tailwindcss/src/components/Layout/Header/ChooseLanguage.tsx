"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

type Language = {
  name: string;
  code: string;
  flag: string;
};

const languages: Language[] = [
  { name: "English", code: "en", flag: "/images/flags/usa.svg" },
  { name: "French", code: "fr", flag: "/images/flags/france.svg" },
  { name: "German", code: "de", flag: "/images/flags/germany.svg" },
  { name: "Portuguese", code: "pt", flag: "/images/flags/portugal.svg" },
  { name: "Spanish", code: "es", flag: "/images/flags/spain.svg" },
];

const ChooseLanguage: React.FC = () => {
  const handleLanguageChange = (code: string) => {
    console.log(`Selected language: ${code}`);
    // Add logic here to update the app's language state
  };

  return (
    <div className="relative language-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="leading-none pr-[12px] inline-block transition-all relative top-[2px] hover:text-primary-500">
          <i className="material-symbols-outlined !text-[20px] md:!text-[22px]">
            translate
          </i>
          <i className="ri-arrow-down-s-line text-[15px] absolute -right-[3px] top-1/2 -translate-y-1/2 -mt-[2px]"></i>
        </MenuButton>
        <MenuItems
          transition
          className="bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none pt-[15px] absolute mt-[9px] md:mt-[20px] w-[240px] z-[1] top-full right-0 rounded-md data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <span className="block text-black dark:text-white font-semibold px-[20px] pb-[14px] text-sm md:text-[15px]">
            Choose Language
          </span>

          <ul>
            {languages.map((language) => (
              <li
                key={language.code}
                className="border-t border-dashed border-gray-100 dark:border-[#172036]"
              >
                <MenuItem>
                  <button
                    type="button"
                    className="text-black dark:text-white px-[20px] py-[12px] d-block w-full font-medium"
                    onClick={() => handleLanguageChange(language.code)}
                  >
                    <div className="flex items-center">
                      <Image
                        src={language.flag}
                        className="ltr:mr-[10px] rtl:ml-[10px]"
                        alt={language.name}
                        width={30}
                        height={30}
                      />
                      {language.name}
                    </div>
                  </button>
                </MenuItem>
              </li>
            ))}
          </ul>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default ChooseLanguage;
