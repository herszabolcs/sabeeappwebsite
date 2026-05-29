"use client";

import React from "react";

export function Stats2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container flex flex-col items-start">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Groups running SabeeApp move faster and smarter
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Operators managing multiple properties see the difference
              immediately. Less time on administration. More time on strategy.
              Better control. Better results.
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="w-full border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              50%
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Less administrative time
            </h3>
          </div>
          <div className="w-full border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              4 hours
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Saved daily on rate syncing
            </h3>
          </div>
          <div className="w-full border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              1 system
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              For your entire portfolio
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
