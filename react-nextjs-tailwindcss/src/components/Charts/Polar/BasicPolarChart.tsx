"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BasicPolarChart: React.FC = () => {
  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: true,
      },
    },
    stroke: {
      colors: ["#ffffff"],
    },
    fill: {
      opacity: 0.8,
    },
    labels: [
      "Bananas",
      "Apples",
      "Grapes",
      "Papayas",
      "Mangos",
      "Blueberrys",
      "Cherrys",
      "Oranges",
      "Pineapples",
    ],
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 6,
        offsetX: -2,
        offsetY: -0.5,
        shape: "circle",
      },
    },
  };

  return (
    <>
      <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
        <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
          <div className="trezo-card-title">
            <h5 className="mb-0">Basic Polar Chart</h5>
          </div>
        </div>
        <div className="trezo-card-content">
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="polarArea"
              height={450}
              width={"100%"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BasicPolarChart;
