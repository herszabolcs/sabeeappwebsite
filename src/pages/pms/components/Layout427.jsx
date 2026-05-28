"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout427() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 md:grid-cols-2">
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="rounded-image aspect-square size-full max-w-xxs object-cover"
              alt="Relume placeholder image 1"
            />
            <div className="ml-[10%] mr-[5%] mt-12 md:mt-18 lg:mt-20">
              <p className="mb-3 font-semibold md:mb-4">Billing</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Invoicing and payments made simple
              </h2>
              <p className="md:text-md">
                Charge in any currency. Track every transaction. Settle accounts
                without the friction. Your billing runs clean while you focus on
                guests.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">
                  Explore
                </Button>
                <Button
                  title="Learn more"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
          <div className="flex h-full flex-col justify-end">
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
