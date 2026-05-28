"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog58() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Guides</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              Getting started with SabeeApp
            </h1>
            <p className="md:text-md">
              Step through setup, connect your property, and start taking
              reservations.
            </p>
          </div>
          <div className="hidden flex-wrap items-center justify-end md:block">
            <Button title="View all" variant="secondary">
              View all
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          <div className="flex size-full flex-col items-start justify-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image aspect-video size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Setup
              </p>
              <p className="inline text-sm font-semibold">8 min read</p>
            </div>
            <a href="#" className="mb-2">
              <h2 className="text-xl font-bold md:text-2xl">
                How to configure your first property
              </h2>
            </a>
            <p>
              Walk through property details, room types, and rate setup in the
              dashboard.
            </p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image aspect-video size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Setup
              </p>
              <p className="inline text-sm font-semibold">6 min read</p>
            </div>
            <a href="#" className="mb-2">
              <h2 className="text-xl font-bold md:text-2xl">
                Connecting your OTA channels and rates
              </h2>
            </a>
            <p>
              Sync availability and pricing across Airbnb, Booking.com, and 60+
              other platforms.
            </p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-end md:hidden">
          <Button variant="secondary">View all</Button>
        </div>
      </div>
    </section>
  );
}
