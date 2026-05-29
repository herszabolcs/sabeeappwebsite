"use client";

import { Button } from "@relume_io/relume-ui";
import { routes } from "@/lib/routes";
import React from "react";
import { Link } from "react-router-dom";
import { RxChevronRight } from "react-icons/rx";

const productMiniCards = [
  {
    key: "bookingEngine",
    title: "Direct bookings",
    description:
      "Booking Engine brings commission-free reservations to your own website.",
    href: routes.bookingEngine,
    placement: "lg:col-start-3 lg:row-start-2",
  },
  {
    key: "sabeepay",
    title: "Payments unified",
    description:
      "SabeePay processes card payments, OTA virtual cards, and pre-authorizations together.",
    href: routes.sabeepay,
    placement: "lg:col-start-4 lg:row-start-2",
  },
  {
    key: "channelManager",
    title: "Sync every channel",
    description:
      "Channel Manager keeps rates and availability synced across sixty-plus OTAs in real time.",
    href: routes.channelManager,
    placement: "lg:col-start-1 lg:row-start-3",
  },
  {
    key: "guestadvisor",
    title: "Guest self-service",
    description:
      "GuestAdvisor handles online check-in, ID scanning, and smartphone room keys.",
    href: routes.guestadvisor,
    placement: "lg:col-start-2 lg:row-start-3",
  },
  {
    key: "aiFrontDeskAgent",
    title: "Smarter guest inbox",
    description:
      "AI Front Desk Agent replies to routine guest messages and hands off to your team anytime.",
    href: routes.aiFrontDeskAgent,
    placement: "lg:col-start-1 lg:row-start-4",
  },
  {
    key: "sabeeappGo",
    title: "Ops on the go",
    description:
      "SabeeApp Go gives owners and front desk staff arrivals, stats, and scans from their phone.",
    href: routes.sabeeappGo,
    placement: "lg:col-start-2 lg:row-start-4",
  },
];

function BentoCell({ className = "", children }) {
  return (
    <div
      className={`flex h-full min-h-0 flex-col overflow-hidden border border-border-primary bg-background-primary ${className}`}
    >
      {children}
    </div>
  );
}

function ExploreLink({ href, label = "Explore" }) {
  return (
    <Link to={href}>
      <Button
        title={label}
        variant="link"
        size="link"
        iconRight={<RxChevronRight />}
      >
        {label}
      </Button>
    </Link>
  );
}

function ProductMiniCard({ title, description, href }) {
  return (
    <BentoCell className="h-full">
      <div className="flex h-full min-h-[16rem] flex-col justify-between p-5 md:p-6">
        <div>
          <div className="mb-3">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
              alt=""
              className="size-10 md:size-12"
            />
          </div>
          <h3 className="mb-2 text-lg font-bold leading-snug md:text-xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed md:text-base">{description}</p>
        </div>
        <div className="mt-4 md:mt-5">
          <ExploreLink href={href} />
        </div>
      </div>
    </BentoCell>
  );
}

export function Layout380() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="eyebrow mb-3 md:mb-4">
            PRODUCTS
          </p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Nine tools that work as one
          </h1>
          <p className="md:text-md">
            SabeeApp gives you everything a modern hotel needs. Reservations,
            payments, guest communication, housekeeping, and reporting all work
            together without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(4,minmax(0,auto))] md:gap-6">
          <BentoCell className="sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:row-start-1 lg:col-start-1">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-10">
              <p className="mb-2 text-sm font-semibold">Tools</p>
              <h2 className="mb-4 text-3xl font-bold leading-[1.15] md:mb-5 md:text-4xl lg:text-5xl">
                Reservations and billing
              </h2>
              <p className="max-w-prose text-sm leading-relaxed md:text-base">
                PMS handles your calendar, folios, and front desk operations in
                one place. Channel Manager syncs your inventory to sixty-plus
                OTAs in real time.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link to={routes.pms}>
                  <Button title="Explore" variant="secondary" size="sm">
                    Explore
                  </Button>
                </Link>
                <ExploreLink href={routes.pms} label="View" />
              </div>
            </div>
            <div className="border-t border-border-primary bg-background-secondary/40">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="PMS and channel manager dashboard preview"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </BentoCell>

          <BentoCell className="sm:col-span-2 lg:col-span-2 lg:row-start-1 lg:col-start-3">
            <div className="grid h-full min-h-[18rem] grid-cols-1 sm:grid-cols-2">
              <div className="flex items-center justify-center border-b border-border-primary bg-background-secondary/40 sm:border-b-0 sm:border-r">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Housekeeping and operations app preview"
                  className="aspect-[4/5] h-full max-h-64 w-full object-cover sm:max-h-none"
                />
              </div>
              <div className="flex flex-col justify-center p-5 md:p-6 lg:p-8">
                <p className="mb-2 text-sm font-semibold">Built</p>
                <h2 className="mb-2 text-xl font-bold md:text-2xl">
                  Daily operations
                </h2>
                <p className="text-sm leading-relaxed md:text-base">
                  Housekeeping App keeps your cleaning team coordinated with
                  real-time room status and task assignment. SabeeApp Go and
                  Cash Drawer give you control from anywhere.
                </p>
                <div className="mt-4 md:mt-5">
                  <ExploreLink href={routes.housekeepingApp} label="View" />
                </div>
              </div>
            </div>
          </BentoCell>

          {productMiniCards.map(({ placement, ...product }) => (
            <div key={product.key} className={`h-full ${placement}`}>
              <ProductMiniCard {...product} />
            </div>
          ))}

          <BentoCell className="sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:row-start-3 lg:col-start-3">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-10">
              <p className="mb-2 text-sm font-semibold">Integration</p>
              <h2 className="mb-4 text-3xl font-bold leading-[1.15] md:mb-5 md:text-4xl lg:text-5xl">
                Everything you need runs here
              </h2>
              <p className="max-w-prose text-sm leading-relaxed md:text-base">
                Nine modules. One platform. No wasted motion between systems.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link to={routes.softwareSuite}>
                  <Button title="Discover" variant="secondary" size="sm">
                    Discover
                  </Button>
                </Link>
                <ExploreLink href={routes.softwareSuite} />
              </div>
            </div>
            <div className="border-t border-border-primary bg-background-secondary/40">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="SabeeApp software suite overview"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </BentoCell>
        </div>
      </div>
    </section>
  );
}
