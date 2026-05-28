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
              <p className="mb-3 font-semibold md:mb-4">Foundation</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                One guest record powers everything
              </h2>
            </div>
            <div className="ml-[7.5%]">
              <p className="md:text-md">
                Every module reads from the same source. A booking updates
                instantly across reservations, payments, housekeeping, and guest
                communication. No duplicate entry. No conflicting information.
                Just one clean record that flows through your entire operation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Learn" variant="secondary">
                  Learn
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
