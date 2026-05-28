"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout458() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 scheme-3"
    >
      <div className="container">
        <div className="rb-12 mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20">
          <div className="flex h-full flex-col">
            <p className="mb-3 font-semibold md:mb-4">Operations</p>
            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Keep your team and properties running smooth
            </h1>
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-40">
            <p className="md:text-md">
              Three tools work together to handle the daily grind. Your team
              stays coordinated. Your properties stay clean. You stay in control
              from anywhere.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="w-full">
            <div className="rb-6 mb-6 w-full md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Channel Manager
            </h2>
            <p>
              Rates and availability sync across 60+ platforms in real time. One
              booking blocks everywhere.
            </p>
          </div>
          <div className="w-full md:mt-[25%]">
            <div className="rb-6 mb-6 w-full md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 2"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Channel Manager
            </h2>
            <p>
              Rates and availability sync across 60+ platforms in real time. One
              booking blocks everywhere.
            </p>
          </div>
          <div className="w-full md:mt-[50%]">
            <div className="rb-6 mb-6 w-full md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 3"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Channel Manager
            </h2>
            <p>
              Rates and availability sync across 60+ platforms in real time. One
              booking blocks everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
