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
            Everything you need to know about moving to SabeeApp
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How does data migration work?
            </h2>
            <p>
              We handle the heavy lifting. Your guest records, reservations, and
              rate history transfer automatically. Our team walks you through
              each step and runs parallel systems during transition so nothing
              gets lost.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about my existing integrations?
            </h2>
            <p>
              SabeeApp connects to over two hundred apps and services. If Little
              Hotelier had an integration you relied on, we likely support it.
              Our marketplace keeps growing, and custom integrations are
              possible too.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there a learning curve?
            </h2>
            <p>
              The interface was built for hoteliers, not software engineers.
              Most teams are productive within days. We provide onboarding
              calls, video training, and a help center available whenever you
              need it.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I try it before committing?
            </h2>
            <p>
              Yes. Start your free month with full access to every feature. No
              credit card required. If it's not right, you walk away with
              nothing owed.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about pricing transparency?
            </h2>
            <p>
              No hidden fees. No surprise charges. You see exactly what you pay
              before you commit. Volume discounts apply for multi-property
              operations, and we honor annual commitments with meaningful
              savings.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">Our team is ready to answer anything</p>
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
