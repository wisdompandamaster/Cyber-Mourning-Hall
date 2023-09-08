"use client";

import React, { useState } from "react";
import { MdOutlineComment, MdOutlineCommentsDisabled } from "react-icons/md";

const BottomBar = () => {
  const [showWall, setShowWall] = useState(true);

  return (
    <div>
      {/* <div
        className="
        fixed
        bottom-8
        right-28
        w-14
        h-14
        rounded-lg
        bg-white
        bg-opacity-60
        p-3
        flex
        items-center
        select-none
        hover:bg-opacity-80
        duration-300
      "
      >
        <div onClick={() => setShowWall(!showWall)}>
          {showWall ? (
            <MdOutlineCommentsDisabled size={30} />
          ) : (
            <MdOutlineComment size={30} />
          )}
        </div>
      </div> */}
    </div>
  );
};

export default BottomBar;
