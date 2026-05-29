"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-[5.25rem]">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Results</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              What the numbers tell us
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Hotels using SabeeApp PMS report faster check-ins, fewer errors,
              and teams that actually want to come to work. The calendar does
              the heavy lifting. Your people do the rest.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">See more</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Explore
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              4 hours
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              saved per shift
            </h3>
          </div>
          <div className="border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              98%
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              fewer booking errors
            </h3>
          </div>
          <div className="border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              3x
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              faster check-in process
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
