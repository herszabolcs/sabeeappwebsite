"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Manage</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Control inventory from one place, always
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Adjust rates and availability once, and watch it propagate
              everywhere. No jumping between platforms, no forgotten updates, no
              revenue slipping away.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Bulk edit rates across multiple channels</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Set blackout dates and restrictions instantly</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Monitor occupancy and demand in real time</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="More"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                More
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
