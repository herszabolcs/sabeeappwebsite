"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout308() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Built</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              What sets SabeeApp apart
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              SabeeApp was built for operators who refuse to work around their
              software. These features exist because hoteliers asked for them.
              Because the work demanded them. Because anything less would be
              settling.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              AI front desk that actually learns
            </h3>
            <p>
              Handles guest inquiries without human intervention until it can't.
              Then it hands off seamlessly.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Commission-free direct bookings
            </h3>
            <p>
              Your booking engine keeps every dollar. No OTA commissions. No
              middleman taking a cut.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Real-time housekeeping coordination
            </h3>
            <p>
              Your cleaning team sees room status instantly. Tasks assign
              themselves. No guessing, no delays.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Multi-currency cash management
            </h3>
            <p>
              Track cash across currencies. Exchange rates update automatically.
              Your drawer always balances.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
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
    </section>
  );
}
