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
            Everything you need to know about making the move
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long does migration take?
            </h2>
            <p>
              Most properties migrate within two weeks. We handle the heavy
              lifting—data import, staff training, and system configuration.
              Your team focuses on operations while we get everything running.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Will we lose our booking history?
            </h2>
            <p>
              No. We import your complete reservation history, guest records,
              and financial data. Nothing gets left behind. Your past stays
              intact and searchable in SabeeApp.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about our current integrations?
            </h2>
            <p>
              SabeeApp connects to over 300 third-party tools. If Cloudbeds had
              an integration you relied on, we likely have it too. Our team maps
              your stack during onboarding.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there a contract lock-in?
            </h2>
            <p>
              No long-term contracts. You can cancel anytime. Most properties
              stay because the software delivers, not because they're trapped.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How is support structured?
            </h2>
            <p>
              Live chat, email, and phone support during business hours. Your
              dedicated onboarding specialist stays available for the first 90
              days. We don't hand you off to a bot.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more clarity?
          </h4>
          <p className="md:text-md">
            Our team can walk you through the specifics
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
