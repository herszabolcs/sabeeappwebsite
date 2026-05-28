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
            Everything you need to know about SabeeApp pricing, billing, and
            what's included
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I change plans anytime?
            </h2>
            <p>
              Yes. Upgrade or downgrade whenever you need. If you switch
              mid-month, we'll adjust your billing proportionally. No penalties,
              no lock-in contracts. You're in control.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What's included in each plan?
            </h2>
            <p>
              Every plan includes the core PMS, guest messaging, and mobile app.
              Higher tiers add the channel manager, AI front desk, housekeeping
              tools, and advanced reporting. Check the comparison table above
              for the full breakdown.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you charge per user?
            </h2>
            <p>
              No. Your plan covers unlimited users. Add your whole team without
              extra fees. We believe software shouldn't penalize you for having
              staff.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is there a setup fee?
            </h2>
            <p>
              No setup fees. No onboarding charges. You start your free month
              immediately. If you need hands-on training or custom integration,
              we'll discuss that separately, but the base product has no hidden
              costs.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What happens after my free month?
            </h2>
            <p>
              Your trial ends and billing begins on your chosen plan. We'll send
              reminders before the trial expires. Cancel anytime before it ends
              and you won't be charged. Simple as that.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Reach out to our team for pricing questions, custom quotes, or
            anything else
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
