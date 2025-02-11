"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

interface Agent {
  id: number;
  name: string;
  calls: number;
  avgCallDuration: string;
  fcr: string; // First Call Resolution
  csat: string; // Customer Satisfaction
  performanceColor: string; // Tailwind color class for performance indicator
  image: string;
}

const AgentsPerformanceOverview: React.FC = () => {
  // selectedOption state
  const [selectedOption, setSelectedOption] = useState<string>("Last Month");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log(`Selected option: ${option}`); // Add your logic here
  };

  const [agents, setAgents] = useState<Agent[]>([]);
  const [topAgent, setTopAgent] = useState<Agent | null>(null);

  useEffect(() => {
    // Simulated API call to fetch agents' data
    const fetchAgents = () => {
      const data: Agent[] = [
        {
          id: 1,
          name: "John Smith",
          calls: 380,
          avgCallDuration: "4 mins 30 secs",
          fcr: "92%",
          csat: "90%",
          performanceColor: "bg-success-500",
          image: "/images/users/user61.jpg",
        },
        {
          id: 2,
          name: "Sarah Davis",
          calls: 65,
          avgCallDuration: "4 mins 10 secs",
          fcr: "85%",
          csat: "90%",
          performanceColor: "bg-success-500",
          image: "/images/users/user62.jpg",
        },
        {
          id: 3,
          name: "Michael Brown",
          calls: 58,
          avgCallDuration: "5 mins 20 secs",
          fcr: "82%",
          csat: "87%",
          performanceColor: "bg-orange-500",
          image: "/images/users/user63.jpg",
        },
        {
          id: 4,
          name: "Emily Johnson",
          calls: 72,
          avgCallDuration: "4 mins 30 secs",
          fcr: "88%",
          csat: "90%",
          performanceColor: "bg-success-500",
          image: "/images/users/user64.jpg",
        },
        {
          id: 5,
          name: "David Lee",
          calls: 53,
          avgCallDuration: "3 mins 50 secs",
          fcr: "80%",
          csat: "85%",
          performanceColor: "bg-orange-500",
          image: "/images/users/user65.jpg",
        },
      ];
      setAgents(data);

      // Identify the top-performing agent by calls
      const topPerformingAgent = data.reduce((prev, current) =>
        prev.calls > current.calls ? prev : current
      );
      setTopAgent(topPerformingAgent);
    };

    fetchAgents();
  }, []);

  return (
    <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
      <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
        <div className="trezo-card-title">
          <h5 className="mb-0">Agents Performance Overview</h5>
        </div>

        <div className="trezo-card-subtitle">
          <Menu as="div" className="trezo-card-dropdown relative">
            <MenuButton className="trezo-card-dropdown-btn inline-block transition-all hover:text-primary-500">
              <span className="inline-block relative ltr:pr-[17px] ltr:md:pr-[20px] rtl:pl-[17px] rtl:ml:pr-[20px]">
                {selectedOption}
                <i className="ri-arrow-down-s-line text-lg absolute ltr:-right-[3px] rtl:-left-[3px] top-1/2 -translate-y-1/2"></i>
              </span>
            </MenuButton>

            <MenuItems
              transition
              className="transition-all bg-white shadow-3xl rounded-md top-full py-[15px] absolute ltr:right-0 rtl:left-0 w-[195px] z-[50] dark:bg-dark dark:shadow-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {["Last Day", "Last Week", "Last Month", "Last Year"].map(
                (option) => (
                  <MenuItem
                    key={option}
                    as="div"
                    className={`block w-full transition-all text-black cursor-pointer ltr:text-left rtl:text-right relative py-[8px] px-[20px] hover:bg-gray-50 dark:text-white dark:hover:bg-black ${
                      selectedOption === option ? "font-semibold" : ""
                    }`}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </MenuItem>
                )
              )}
            </MenuItems>
          </Menu>
        </div>
      </div>

      <div className="trezo-card-content">
        <span className="block mb-[10px]">Top Performing Agent</span>

        {topAgent && (
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="flex items-center gap-[10px]">
                <Image
                  src={topAgent.image}
                  className="w-[40px] rounded-[4px]"
                  alt="user-image"
                  width={40}
                  height={40}
                />
                <div className="relative">
                  <span className="font-semibold text-gray-700 dark:text-white block">
                    {topAgent.name}
                  </span>
                  <span className="block -mt-px text-gray-700 dark:text-gray-400">
                    {topAgent.calls} Calls
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="ltr:md:pl-[45px] rtl:md:pr-[45px] mt-[10px] md:mt-0">
                <div className="flex items-center justify-between mb-[5px]">
                  <span className="block">Customer Satisfaction (CSAT)</span>
                  <span className="block">{topAgent.csat}</span>
                </div>
                <div className="flex w-full h-[6px] overflow-hidden rounded-md bg-gray-100 dark:bg-[#172036]">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-success-600 rounded-md"
                    style={{ width: topAgent.csat }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="table-responsive overflow-x-auto mt-[15px] md:mt-[20px]">
          <table className="w-full apo-table">
            <tbody className="text-black dark:text-white">
              {agents.slice(0, 4).map((agent) => (
                <tr key={agent.id}>
                  <td className="ltr:text-left rtl:text-right whitespace-nowrap py-[8px] px-[9px] bg-gray-50 dark:bg-[#0a0e19] border-none ltr:first:rounded-l-md rtl:first:rounded-r-md ltr:last:rounded-r-md rtl:last:rounded-l-md">
                    <div className="flex items-center gap-[10px]">
                      <Image
                        src={agent.image}
                        className="w-[36px] rounded-[4px]"
                        alt="user-image"
                        width={36}
                        height={36}
                      />
                      <div className="relative">
                        <span className="font-medium text-gray-700 dark:text-white block">
                          {agent.name}
                        </span>
                        <span className="block -mt-px text-gray-700 dark:text-gray-400">
                          {agent.calls} Calls
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-[8px] px-[9px] bg-gray-50 dark:bg-[#0a0e19]">
                    <span className="block text-gray-500 dark:text-gray-400">
                      Avg. Call Duration
                    </span>
                    <span className="font-medium text-gray-700 dark:text-white">
                      {agent.avgCallDuration}
                    </span>
                  </td>
                  <td className="py-[8px] px-[9px] bg-gray-50 dark:bg-[#0a0e19]">
                    <span className="block text-gray-500 dark:text-gray-400">
                      FCR
                    </span>
                    <span className="font-medium text-gray-700 dark:text-white">
                      {agent.fcr}
                    </span>
                  </td>
                  <td className="py-[8px] px-[9px] bg-gray-50 dark:bg-[#0a0e19]">
                    <span className="block text-gray-500 dark:text-gray-400">
                      CSAT
                    </span>
                    <span className="font-medium text-gray-700 dark:text-white">
                      {agent.csat}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentsPerformanceOverview;
