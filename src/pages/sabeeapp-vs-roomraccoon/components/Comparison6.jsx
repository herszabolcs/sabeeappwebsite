"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Comparison6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 btn-light alternate logo-alt">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Comparison</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Feature by feature
          </h1>
          <p className="md:text-md">
            Where SabeeApp and RoomRaccoon diverge matters most.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
            <Fragment>
              <div className="hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6">
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Feature
                </h2>
              </div>
              <div className="flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Product image 1"
                    className="aspect-square w-full object-cover"
                  />
                  <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                    SabeeApp
                  </h2>
                  <p>Full suite, unified</p>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Product image 2"
                    className="aspect-square w-full object-cover"
                  />
                  <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                    SabeeApp
                  </h2>
                  <p>Full suite, unified</p>
                </div>
              </div>
            </Fragment>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] bg-background-secondary">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                Channel manager integrations
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>60+ OTAs</span>
              </div>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>20+ OTAs</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                AI-powered guest messaging
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiCheck className="size-6" />
                </span>
              </div>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiCheck className="size-6" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] bg-background-secondary">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                Guest experience platform
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiCheck className="size-6" />
                </span>
              </div>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiCheck className="size-6" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                Limited mobile features
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiCheck className="size-6" />
                </span>
              </div>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiX className="size-6" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] bg-background-secondary">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                Direct booking engine
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiCheck className="size-6" />
                </span>
              </div>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiX className="size-6" />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Compare all features" variant="secondary">
              Compare all features
            </Button>
            <Button
              title="View full comparison"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              View full comparison
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
