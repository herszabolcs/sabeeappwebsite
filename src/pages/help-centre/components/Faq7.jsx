"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Quick answers to the questions we hear most often from our users.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I reset my password?
            </h2>
            <p>
              Click the Forgot Password link on the login page. Enter your email
              address and we'll send you a reset link. Check your spam folder if
              you don't see it within a few minutes.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I manage multiple properties?
            </h2>
            <p>
              Yes. SabeeApp supports unlimited properties on a single account.
              Switch between them in the property selector at the top of your
              dashboard.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What payment methods do you accept?
            </h2>
            <p>
              We accept all major credit cards, bank transfers, and digital
              wallets. SabeePay also processes OTA virtual card charges and
              pre-authorizations automatically.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there a free trial available?
            </h2>
            <p>
              Yes. Start with one month free. No credit card required. Full
              access to all features during your trial period.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I export my data?
            </h2>
            <p>
              Navigate to Settings, then Data & Exports. You can download guest
              records, reservations, and financial reports in CSV or PDF format
              anytime.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Our team responds to support requests within 24 hours on weekdays.
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
