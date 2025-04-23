"use client";

import React from "react";

const YouTubeRatio21x9: React.FC = () => {
  return (
    <>
      <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
        <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
          <div className="trezo-card-title">
            <h5 className="mb-0">YouTube Ratio (16/9)</h5>
          </div>
        </div>
        <div className="trezo-card-content">
          <iframe
            className="w-full aspect-[21/9]"
            src="https://www.youtube.com/embed/_ZppXdKk4c8"
            title="YouTube Ratio (16/9)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default YouTubeRatio21x9;
