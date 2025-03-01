import React from "react";

function SkeletonSearch() {
  return (
    <div role="status" class=" mb-[50px] space-y-2.5 animate-pulse max-w-lg">
      <div class="flex items-center w-full">
        <div class="h-[30px] w-[250px] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 "></div>
        <div class="h-[30px] w-[80px] ms-2 bg-gray-300 rounded-full dark:bg-gray-600 "></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
}

export default SkeletonSearch;
