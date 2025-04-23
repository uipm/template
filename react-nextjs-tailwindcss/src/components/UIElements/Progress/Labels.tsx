"use client";

import React from "react"; 

const Labels: React.FC = () => {
  return (
    <>
      <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
        <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
          <div className="trezo-card-title">
            <h5 className="mb-0">Labels</h5>
          </div>
        </div>
        <div className="trezo-card-content">
          <div className="flex w-full h-[13px] overflow-hidden rounded-md bg-primary-50 dark:bg-[#172036] mb-[15px] last:mb-0">
            <div
              className="text-center flex flex-col justify-center overflow-hidden bg-primary-500 rounded-md text-white text-[10px] font-medium"
              style={{
                width: "90%",
              }}
            >
              90%
            </div>
          </div>
          <div className="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-secondary-50 dark:bg-[#172036] mb-[15px] last:mb-0">
            <div
              className="flex flex-col justify-center overflow-hidden bg-secondary-500 rounded-md text-white text-[10px] font-medium"
              style={{
                width: "85%",
              }}
            >
              85%
            </div>
          </div>
          <div className="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-success-50 dark:bg-[#172036] mb-[15px] last:mb-0">
            <div
              className="flex flex-col justify-center overflow-hidden bg-success-500 rounded-md text-white text-[10px] font-medium"
              style={{
                width: "80%",
              }}
            >
              80%
            </div>
          </div>
          <div className="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-info-50 dark:bg-[#172036] mb-[15px] last:mb-0">
            <div
              className="flex flex-col justify-center overflow-hidden bg-info-500 rounded-md text-white text-[10px] font-medium"
              style={{
                width: "70%",
              }}
            >
              70%
            </div>
          </div>
          <div className="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-warning-50 dark:bg-[#172036] mb-[15px] last:mb-0">
            <div
              className="flex flex-col justify-center overflow-hidden bg-warning-500 rounded-md text-white text-[10px] font-medium"
              style={{
                width: "60%",
              }}
            >
              60%
            </div>
          </div>
          <div className="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-danger-50 dark:bg-[#172036] mb-[15px] last:mb-0">
            <div
              className="flex flex-col justify-center overflow-hidden bg-danger-500 rounded-md text-white text-[10px] font-medium"
              style={{
                width: "40%",
              }}
            >
              40%
            </div>
          </div>
          <div className="text-center flex w-full h-[13px] overflow-hidden rounded-md bg-gray-50 dark:bg-[#172036] mb-[15px] last:mb-0">
            <div
              className="flex flex-col justify-center overflow-hidden bg-dark rounded-md text-white text-[10px] font-medium"
              style={{
                width: "20%",
              }}
            >
              20%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Labels;
