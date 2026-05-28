"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Impact</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Built for hotels that matter
            </h2>
            <p className="md:text-md">
              SabeeApp powers operations across continents. From single
              properties to multi-unit chains, the numbers speak for themselves.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Explore</Button>
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                More
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-8 lg:gap-y-12">
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                50,000+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Properties managed globally
              </h3>
            </div>
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                100M+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Guest check-ins annually
              </h3>
            </div>
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                200+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Countries and territories
              </h3>
            </div>
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                24/7
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Support in your language
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
