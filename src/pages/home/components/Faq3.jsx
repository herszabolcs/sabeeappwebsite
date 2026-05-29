"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Everything you need to know about SabeeApp
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I try it free?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes.. One month free, no credit card required. You get full access
              to all features. Cancel anytime.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How long does setup take?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Most hotels are live within an hour. Add your property, set rates,
              connect channels. Our team helps if you need it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I have multiple properties?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              SabeeApp scales with you. Manage one property or fifty from a
              single dashboard. Each property has its own settings and users.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you offer support?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Twenty-four-seven support in your language. Email, phone, or chat.
              We're here when you need us.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I integrate other tools?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              SabeeApp connects to over sixty OTAs and hundreds of third-party
              tools. Our API lets you build custom integrations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
