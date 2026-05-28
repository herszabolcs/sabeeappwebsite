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
            Find answers about switching to SabeeApp and what sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How hard is migration?
            </h2>
            <p>
              We handle the heavy lifting. Your data moves cleanly, your team
              gets trained, and you're operational within days. No downtime, no
              headaches.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about my existing data?
            </h2>
            <p>
              Everything transfers over. Guest records, reservation history,
              payment data—it all comes with you. We map it carefully so nothing
              gets lost.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you offer support during transition?
            </h2>
            <p>
              Yes. Our team works alongside yours every step. Training,
              troubleshooting, integration setup—we're here until you're
              confident and running smoothly.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is my data secure with SabeeApp?
            </h2>
            <p>
              Absolutely. We encrypt everything in transit and at rest. Regular
              audits, compliance with industry standards, and backups that run
              automatically. Your data is protected.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I try it before committing?
            </h2>
            <p>
              Start free for a month. Full access, no credit card required. See
              if it works for your property before you decide.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out to our team directly.</p>
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
