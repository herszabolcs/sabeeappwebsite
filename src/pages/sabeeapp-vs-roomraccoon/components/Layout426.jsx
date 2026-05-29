"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout426() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-6 sm:gap-y-8 md:grid-cols-2">
          <div>
            <div className="mb-12 ml-[10%] mr-[5%] md:mb-18 lg:mb-20">
              <p className="mb-3 font-semibold md:mb-4">Advantage</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                One guest record. No duplicate data.
              </h2>
              <p className="md:text-md">
                Every module in SabeeApp shares the same guest information. Your
                front desk sees what housekeeping sees. Your revenue manager
                sees what your booking engine sees. No re-entering data. No
                conflicting information. Just clean, unified operations.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Explore platform" variant="secondary">
                  Explore platform
                </Button>
                <Button
                  title="View software suite"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  View software suite
                </Button>
              </div>
            </div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="rounded-image aspect-square size-full max-w-xxs object-cover"
              alt="Relume placeholder image 1"
            />
          </div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full object-cover"
            alt="Relume placeholder image 2"
          />
        </div>
      </div>
    </section>
  );
}
