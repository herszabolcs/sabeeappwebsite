"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout436() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 md:grid-cols-2">
          <div className="rounded-image order-last flex size-full flex-col justify-end object-cover md:order-first">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image 2"
            />
          </div>
          <div className="flex flex-col items-end">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="rounded-image aspect-square size-full max-w-xxs object-cover"
              alt="Relume placeholder image 1"
            />
            <div className="ml-[5%] mr-[10%] mt-12 md:mt-18 lg:mt-20">
              <p className="mb-3 font-semibold md:mb-4">Reporting</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Track performance across every channel
              </h2>
              <p className="md:text-md">
                See which OTAs drive your bookings and where your revenue comes
                from. Monitor commission costs in real time and adjust your
                strategy based on what the data tells you.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Analyze" variant="secondary">
                  Analyze
                </Button>
                <Button
                  title="Explore"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
