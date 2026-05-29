"use client";

import React from "react";

export function Stats19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Results</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What hosts see
          </h2>
          <p className="md:text-md">Real numbers from real businesses</p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 lg:grid-cols-[1fr_0.5fr]">
          <div>
            <img
              className="rounded-image aspect-[3/2] size-full object-cover"
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12 md:p-8 lg:grid-cols-1 lg:gap-x-0 lg:p-12">
            <div>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                12 hours
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Admin time saved per week
              </h3>
            </div>
            <div>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                92%
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Average occupancy increase
              </h3>
            </div>
            <div>
              <p className="mb-2 text-6xl font-bold leading-[1.2] md:text-9xl lg:text-10xl">
                15,000+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Vacation rental units managed
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
