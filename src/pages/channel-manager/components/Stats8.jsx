"use client";

import React from "react";

export function Stats8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container flex flex-col items-start">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            What Channel Manager delivers for properties like yours
          </h3>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="w-full border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              60+
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              OTAs connected
            </h3>
          </div>
          <div className="w-full border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              5
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Hours saved weekly
            </h3>
          </div>
          <div className="w-full border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              Zero
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Overbookings prevented
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
