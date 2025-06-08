import React from "react";

export function ServicesSkeletonCard() {
  return (
    <div className="w-[22rem] h-[28rem] rounded-2xl overflow-hidden border-2 bg-white border-gray-300 animate-pulse">
      <div className="space-y-4 w-full h-full">
        <div className="w-full h-[23rem] shimmer" />
        <div className="mx-6 h-9 w-2/4 bg-gray-300 rounded-md shimmer" />
      </div>
    </div>
  );
}

export function TestimonialSkeletonCard() {
  return (
    <div className="max-w-[18rem] min-h-[16rem] p-6 bg-white border border-gray-200 rounded-2xl shadow-custom-light m-4 animate-pulse">
      <div className="border-b-2 pb-4 border-gray-300">
        <div className="w-24 h-4 mb-3 bg-gray-300 rounded shimmer" />
        <div className="h-4 w-full bg-gray-300 rounded shimmer" />
        <div className="h-4 w-5/6 bg-gray-300 mt-2 rounded shimmer" />
      </div>
      <div className="flex items-center mt-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 shimmer" />
        <div className="px-4 space-y-2 w-full">
          <div className="h-4 w-3/4 bg-gray-300 rounded shimmer" />
          <div className="h-3 w-2/3 bg-gray-300 rounded shimmer" />
        </div>
      </div>
    </div>
  );
}

export function ArticleSkeletonCard() {
  return (
    <div className="flex flex-col border bg-white/50 rounded-2xl shadow-md relative overflow-hidden animate-pulse">
      <div className="w-full h-52 bg-gray-300 rounded-t-2xl shimmer" />
      <div className="p-6 space-y-4">
        <div className="h-4 w-3/4 bg-gray-300 rounded shimmer" />
        <div className="h-10 w-28 bg-gray-300 rounded-full mt-4 shimmer" />
      </div>
    </div>
  );
}
