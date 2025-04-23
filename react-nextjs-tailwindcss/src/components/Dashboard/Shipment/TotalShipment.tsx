"use client";

import React from "react";

const TotalShipment: React.FC = () => {
  return (
    <>
      <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
        <div className="trezo-card-content">
          <div className="flex justify-between">
            <div>
              <span className="inline-block px-[8.5px] text-success-600 border border-success-300 bg-success-100 rounded-[100px] text-xs">
                +45%
              </span>
            </div>
            <div className="ltr:text-right rtl:text-left">
              <span className="block text-xs mb-px">Last 30 days</span>
              <span className="block font-bold text-purple-500 text-xs">
                +20,300
              </span>
            </div>
          </div>
          
          <div className="mt-[20px] md:mt-[25px] flex items-end justify-between">
            <div>
              <span className="block mb-[4px]">Total Shipment</span>
              <h3 className="mb-0 text-[20px] text-black dark:text-white">
                175,950
              </h3>
            </div>
            <div className="w-[55px] lg:w-[60px] h-[55px] lg:h-[60px] flex items-center justify-center rounded-full text-white bg-purple-500">
              <i className="material-symbols-outlined !text-[28px]">
                local_shipping
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalShipment;
