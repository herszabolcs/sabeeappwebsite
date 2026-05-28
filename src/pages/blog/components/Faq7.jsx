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
            Everything you need to know about the SabeeApp blog and our
            editorial approach
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What topics do you cover?
            </h2>
            <p>
              We write about hotel operations, revenue management, guest
              experience, and hospitality technology. Our focus is
              practical—strategies that work in real properties, not theory.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I contribute a guest post?
            </h2>
            <p>
              Yes. We welcome pitches from hoteliers, operators, and industry
              experts. Reach out to our editorial team with your idea and we'll
              discuss fit.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How often do you publish?
            </h2>
            <p>
              We publish new articles weekly. Subscribe to the newsletter to get
              them delivered straight to your inbox.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you cover other platforms?
            </h2>
            <p>
              We focus on SabeeApp and the broader hospitality tech landscape.
              Our comparisons are honest and based on real use cases.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I get in touch?
            </h2>
            <p>
              Use the contact form below or email our team directly. We read
              everything and respond to genuine inquiries.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Have another question?
          </h4>
          <p className="md:text-md">Reach out to our editorial team anytime</p>
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
