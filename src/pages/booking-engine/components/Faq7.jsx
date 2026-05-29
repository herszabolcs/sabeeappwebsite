"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Everything you need to know about getting started
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long does setup take?
            </h2>
            <p>
              Most properties go live in under an hour. We handle the technical
              work. You handle the bookings. No coding required, no waiting
              around.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can guests pay on your site?
            </h2>
            <p>
              Yes. The Booking Engine accepts all major cards and digital
              wallets. Payments process instantly. You get the money, not a
              middleman.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Does it work on mobile?
            </h2>
            <p>
              Completely. The booking flow is built for phones. Guests check
              availability, select rooms, and confirm reservations without
              friction. Conversion rates stay high.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about existing reservations?
            </h2>
            <p>
              Your current bookings sync automatically. No data loss. No manual
              entry. Everything stays in one place, and your team sees it all in
              real time.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is support included?
            </h2>
            <p>
              Always. Our team answers questions during business hours and
              through the help center anytime. We're here when you need us.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Our support team knows the Booking Engine inside out
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
