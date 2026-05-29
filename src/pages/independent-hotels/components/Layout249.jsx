"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout249() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 btn-light alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Complete</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Everything you need under one roof
            </h2>
            <p className="md:text-md">
              Independent hotels need tools that work together, not against each
              other. SabeeApp gives you the full stack without the complexity of
              piecing together five different vendors.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Rates across all channels
            </h3>
            <p>
              Sync your availability and pricing to 60+ OTAs in real time. One
              update, everywhere at once.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Guest experience from arrival
            </h3>
            <p>
              Mobile check-in, room keys on their phone, and an AI agent that
              answers questions while you sleep.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Operations that scale with you
            </h3>
            <p>
              Housekeeping tasks, staff scheduling, and mobile access for owners
              and managers on the go.
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
          <Button variant="secondary">Explore</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
