"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light alternate logo-alt">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Mobile</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Management in your pocket
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Daily arrivals, key stats, and document scanning from your phone.
              Stay connected to your property whether you're in the office or
              across the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Start">Start</Button>
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
