"use client";

import React, { useState } from "react";
import RTLMode from "./RTLMode";

export default function Settings() {
  const [active, setActive] = useState<boolean>(false);

  const handleDropdownToggle = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <>
      <div className="relative settings-menu mx-[8px] md:mx-[10px] lg:mx-[12px] ltr:first:ml-0 ltr:last:mr-0 rtl:first:mr-0 rtl:last:ml-0">
        <button
          type="button"
          onClick={handleDropdownToggle}
          className={`leading-none inline-block transition-all relative top-[2px] hover:text-primary-500 ${
            active ? "active" : ""
          }`}
        >
          <i className="material-symbols-outlined !text-[22px] md:!text-[24px]">
            settings
          </i>
        </button>

        <div className="settings-menu-dropdown bg-white dark:bg-[#0c1427] transition-all shadow-3xl dark:shadow-none p-[20px] absolute mt-[17px] md:mt-[20px] w-[195px] z-[1] top-full ltr:right-0 rtl:left-0 rounded-md">
          <RTLMode />
        </div>
      </div>
    </>
  );
}
