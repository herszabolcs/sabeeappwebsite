"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout304() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 btn-light alternate logo-alt">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Control</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Master your rates and restrictions
            </h2>
            <p className="md:text-md">
              Update rates once and watch them flow everywhere. Set
              length-of-stay restrictions, blackout dates, and minimum stays
              across all channels at once. No more scattered updates, no more
              mistakes.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Bulk rate updates across channels
              </h3>
              <p>
                Change pricing for multiple properties and dates in seconds.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Flexible restrictions and blackout dates
              </h3>
              <p>Set rules that apply exactly where you need them.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Parity control and rate management
              </h3>
              <p>
                Keep rates consistent or adjust them strategically by channel.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-h-12 min-w-12">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo 1"
              />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Multi-property support built in
              </h3>
              <p>Manage one property or a hundred from a single dashboard.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="Configure" variant="secondary">
            Configure
          </Button>
          <Button
            title="Details"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Details
          </Button>
        </div>
      </div>
    </section>
  );
}
