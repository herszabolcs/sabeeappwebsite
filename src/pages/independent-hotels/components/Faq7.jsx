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
            Everything you need to know before you start
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long is the setup?
            </h2>
            <p>
              Most independent hotels are live within three to five days. We
              handle the heavy lifting. You answer a few questions about your
              property, and our team configures the rest. No technical knowledge
              required.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I integrate with my existing tools?
            </h2>
            <p>
              Yes. SabeeApp connects to your accounting software, channel
              managers, and payment processors. If you use a tool we don't yet
              support, we can often build the bridge for you.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if I need to cancel?
            </h2>
            <p>
              You can cancel anytime. No contracts. No penalties. We'd rather
              earn your business every month than lock you in.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you offer phone support?
            </h2>
            <p>
              We do. Email and chat are included with every plan. Phone support
              is available on our higher tiers and to all customers during
              critical issues.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is my data secure?
            </h2>
            <p>
              Your data is encrypted in transit and at rest. We comply with
              GDPR, PCI-DSS, and SOC 2 standards. Regular security audits and
              backups keep everything safe.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions
          </h4>
          <p className="md:text-md">Reach out. We're here to help.</p>
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
