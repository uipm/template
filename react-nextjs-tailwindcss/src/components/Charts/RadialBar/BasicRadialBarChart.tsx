"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BasicRadialBarChart: React.FC = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [70];

  const options: ApexOptions = {
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Cricket"],
    colors: ["#605DFF"],
  };

  return (
    <>
      <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
        <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
          <div className="trezo-card-title">
            <h5 className="mb-0">Basic RadialBar Chart</h5>
          </div>
        </div>
        <div className="trezo-card-content">
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={300}
              width={"100%"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BasicRadialBarChart;
