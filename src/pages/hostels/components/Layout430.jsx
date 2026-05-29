"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout430() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-md">
            <p className="mb-3 font-semibold md:mb-4">Channels</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Sync rates and availability across every platform
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-end gap-x-16 gap-y-12 md:grid-cols-[0.75fr_1fr]">
          <div className="ml-[10%] mr-[5%]">
            <p className="md:text-md">
              Hostelworld, Booking.com, Airbnb, and dozens more. SabeeApp keeps
              your rates and availability in sync across all channels in real
              time. One update everywhere. No manual work, no rate conflicts.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn more" variant="secondary">
                Learn more
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
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="mt-[25%] w-full object-cover"
              alt="Relume placeholder image 1"
            />
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
