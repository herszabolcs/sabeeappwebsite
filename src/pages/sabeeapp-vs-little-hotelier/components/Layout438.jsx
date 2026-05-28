"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout438() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-6 sm:gap-y-12 md:grid-cols-[1fr_0.75fr_0.5fr]">
          <div className="order-last md:order-first">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[2/3] w-full object-cover"
              alt="Relume placeholder image 1"
            />
          </div>
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Integration</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                One guest record across every module
              </h2>
            </div>
            <div className="ml-[7.5%]">
              <p className="md:text-md">
                SabeeApp built its foundation on a single guest profile. Every
                reservation, payment, message, and interaction lives in one
                place. No duplicate entries. No data scattered across
                disconnected systems.
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
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="order-last aspect-square w-full object-cover"
            alt="Relume placeholder image 2"
          />
        </div>
      </div>
    </section>
  );
}
