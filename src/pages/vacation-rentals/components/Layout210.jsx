"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout210() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Payments</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Collect deposits and payments remotely
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              SabeePay handles everything guests and platforms throw at you.
              Card payments, OTA virtual cards, security deposits,
              pre-authorisations. All transactions settle into one account. You
              know exactly what you're owed and when it arrives.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Accept cards from guests worldwide</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Manage OTA virtual card charges instantly</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Hold and release security deposits easily</p>
              </li>
            </ul>
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
      </div>
    </section>
  );
}
