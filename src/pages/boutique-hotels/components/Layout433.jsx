"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout433() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 md:grid-cols-[0.5fr_1fr]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Distribution</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Sell everywhere without the chaos
              </h2>
            </div>
            <div className="ml-[7.5%]">
              <p className="md:text-md">
                The Channel Manager syncs your rates and availability across 60+
                OTAs in real time. No overbookings. No manual updates. Your
                boutique hotel stays in control while reaching guests wherever
                they search.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">
                  Explore
                </Button>
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-[1fr_0.75fr] gap-6 sm:gap-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="aspect-[2/3] w-full object-cover"
                alt="Relume placeholder image 1"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="aspect-square w-full object-cover"
                alt="Relume placeholder image 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
