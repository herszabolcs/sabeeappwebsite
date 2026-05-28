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
            Find answers to what matters most about working with us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How fast do you respond?
            </h2>
            <p>
              Our support team answers during business hours within two hours.
              For urgent matters, call us directly. We're here when you need us.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What does a demo include?
            </h2>
            <p>
              We walk through your specific operation, show how the platform
              handles your workflow, and answer every question you have. No
              sales pitch, just honest conversation about what works.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I try it free first?
            </h2>
            <p>
              Yes. One month free, no credit card required. You get full access
              to everything. See if it fits before you commit.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you support multiple languages?
            </h2>
            <p>
              SabeeApp works in English, Spanish, Portuguese, and French. The
              interface adapts to your guests and your team.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about data migration?
            </h2>
            <p>
              We handle it. Our team imports your existing data cleanly and
              carefully. You don't lose anything in the switch.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Check our help centre or reach out directly.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact us" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
