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
            Everything you need to know about running vacation rentals with
            SabeeApp
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I manage multiple properties?
            </h2>
            <p>
              Yes. SabeeApp scales from one unit to hundreds. Each property has
              its own calendar, rates, and guest records, but you control
              everything from one dashboard. Add properties in minutes.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Does it work with Airbnb and Vrbo?
            </h2>
            <p>
              Completely. Our Channel Manager syncs your rates and availability
              across 60+ platforms in real time. When a guest books on Airbnb,
              it instantly blocks your calendar everywhere else.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about guest communication?
            </h2>
            <p>
              The AI Front Desk Agent handles routine messages automatically.
              Guests ask questions, the AI responds instantly, and you step in
              when needed. All conversations live in one inbox.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can guests check in online?
            </h2>
            <p>
              Yes. GuestAdvisor lets guests check in on their phone, scan their
              ID, and get their room key digitally. No front desk needed. They
              can also order extras or request services through the app.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I accept payments?
            </h2>
            <p>
              SabeePay handles everything. Card payments, OTA virtual cards,
              pre-authorisations. All transactions settle into one place. You
              see exactly what you're owed and when.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Our support team knows vacation rentals inside out
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
