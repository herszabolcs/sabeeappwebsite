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
            Everything you need to know about running your hostel with SabeeApp
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do group bookings work?
            </h2>
            <p>
              SabeeApp lets you manage group reservations as single bookings or
              split them across multiple beds and rooms. You can set group
              rates, track deposits, and assign beds in real time. The system
              handles the complexity so your team doesn't have to.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I manage dorms and privates together?
            </h2>
            <p>
              Yes. SabeeApp treats dorm beds and private rooms as individual
              inventory units. You see occupancy across your entire property in
              one calendar, set different rates for each room type, and manage
              availability without confusion.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about flexible pricing for hostels?
            </h2>
            <p>
              You can set dynamic rates by room type, length of stay, and
              season. Adjust prices instantly across all channels. SabeeApp
              syncs changes to 60+ OTAs in real time, so you never oversell or
              leave money on the table.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Does it integrate with booking platforms?
            </h2>
            <p>
              SabeeApp connects to Booking.com, Airbnb, Hostelworld, and 57
              other OTAs. Rates and availability sync automatically. New
              reservations flow directly into your system without manual entry.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What kind of support do you offer?
            </h2>
            <p>
              We provide email support, live chat, and a help center with video
              guides. Your dedicated onboarding specialist walks you through
              setup. We're here when you need us.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more answers?
          </h4>
          <p className="md:text-md">Our support team is ready to help</p>
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
