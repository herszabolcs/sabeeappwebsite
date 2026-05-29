"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light alternate logo-alt">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Direct</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Own your bookings
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Stop paying commissions to third parties. SabeeApp's Booking
              Engine lets guests reserve rooms straight from your website,
              keeping every dollar in your pocket. It's simple, it works, and
              it's yours.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Start">Start</Button>
              <Button title="Compare" variant="secondary">
                Compare
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
