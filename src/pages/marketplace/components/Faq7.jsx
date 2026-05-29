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
            Everything you need to know about integrations and the marketplace
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do integrations work?
            </h2>
            <p>
              Integrations connect third-party tools directly to SabeeApp
              through secure APIs. Your data flows between systems
              automatically, eliminating manual entry and keeping everything in
              sync.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if I need custom integration?
            </h2>
            <p>
              We support custom API connections for enterprise clients. Contact
              our team to discuss your specific requirements and technical
              needs.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is my data secure with integrations?
            </h2>
            <p>
              All marketplace integrations meet our security standards. Data is
              encrypted in transit and at rest. We audit partners regularly to
              maintain compliance.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I suggest a new integration?
            </h2>
            <p>
              Yes. We listen to user requests and work with partners to build
              what properties need most. Submit your suggestion through our
              community or contact support.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How much do integrations cost?
            </h2>
            <p>
              Pricing varies by partner and solution. Some integrations are
              included with SabeeApp. Others have their own fees. Check each
              listing for details.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out to our support team anytime</p>
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
