"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { panelSpring, smoothTransition } from "@/lib/motion";
import { media } from "@/lib/media";
import { routes } from "@/lib/routes";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxChevronRight } from "react-icons/rx";

const propertyTypes = [
  {
    label: "Independent Hotels",
    href: routes.hotelOperationsSoftware,
  },
  {
    label: "Hostel Operations",
    href: routes.hostelManagementSystem,
  },
  {
    label: "Vacation Rentals",
    href: routes.apartmentManagementSoftware,
  },
  {
    label: "Multi Property",
    href: routes.softwareSuite,
  },
];

const PanelContent = ({ index, activeIndex, isMobile, className, children }) => {
  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={false}
      animate={{ gridTemplateRows: activeIndex === index ? "1fr" : "0fr" }}
      transition={smoothTransition}
      className={`grid overflow-hidden ${className}`}
    >
      <div className="min-h-0">{children}</div>
    </motion.div>
  );
};

const useRelume = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const animateWidth = (index) => {
    return isMobile ? "100%" : index === activeIndex ? "100%" : "5rem";
  };
  const handleSetIsActive = (index) => () => {
    setActiveIndex(index);
  };
  return {
    activeIndex,
    handleSetIsActive,
    animateWidth,
    isMobile,
  };
};

export function Layout351() {
  const useSctoll = useRelume();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 btn-light alternate logo-alt">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Who is SabeeApp built for</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Find the right setup for your property
          </h1>
          <p className="md:text-md">
            Whether you run a single independent hotel or manage properties across
            regions, SabeeApp adapts to your operation. Choose your path and get
            started.
          </p>
        </div>
        <div className="flex w-full flex-col overflow-hidden border-b border-l border-r border-border-primary lg:h-[90vh] lg:flex-row lg:border-r-0 lg:border-t">
          {propertyTypes.map((propertyType, index) => (
            <motion.div
              key={propertyType.label}
              className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-border-primary"
              onClick={useSctoll.handleSetIsActive(index)}
              initial={false}
              animate={{ width: useSctoll.animateWidth(index) }}
              transition={useSctoll.isMobile ? smoothTransition : panelSpring}
            >
              <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-border-primary py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
                <p className="absolute left-6 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:text-2xl lg:font-bold">
                  {propertyType.label}
                </h2>
                <p className="text-xl font-bold md:text-2xl lg:hidden">
                  {propertyType.label}
                </p>
              </div>
              <PanelContent
                index={index}
                activeIndex={useSctoll.activeIndex}
                isMobile={useSctoll.isMobile}
                className="w-full lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
              >
                <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Made for short-term
                  </h3>
                  <p className="md:text-md">
                    Turnover management, cleaning schedules, and multi-unit
                    coordination. Everything designed for properties that turn
                    over fast.
                  </p>
                  <div className="rt-8 mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
                    <img
                      src={
                        index === 2
                          ? media.homeVacationRentals.src
                          : "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      }
                      alt={
                        index === 2
                          ? media.homeVacationRentals.alt
                          : `${propertyType.label} placeholder`
                      }
                      className="rounded-image size-full object-cover"
                    />
                  </div>
                  <div className="mt-8 md:mt-10">
                    <Link to={propertyType.href}>
                      <Button
                        title="Explore"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Explore
                      </Button>
                    </Link>
                  </div>
                </div>
              </PanelContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
