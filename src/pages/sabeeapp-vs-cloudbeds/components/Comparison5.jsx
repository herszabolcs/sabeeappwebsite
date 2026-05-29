"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Comparison5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 btn-light alternate logo-alt">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Comparison</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Feature by feature
          </h1>
          <p className="md:text-md">
            See how SabeeApp and Cloudbeds stack up across the modules that
            matter most
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <div className="grid grid-cols-2 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr]">
            <Fragment>
              <div className="hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6">
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Core features
                </h2>
              </div>
              <div className="flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6 bg-background-secondary">
                <div className="flex flex-col items-center gap-2 text-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Product image 1"
                    className="aspect-square w-full object-cover"
                  />
                  <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                    SabeeApp
                  </h2>
                  <p>Built for modern hospitality</p>
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
                  <p>Built for modern hospitality</p>
                </div>
              </div>
            </Fragment>
          </div>
          <div>
            <div className="grid grid-cols-2 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr]">
              <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
                Reservation and folio management
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-background-secondary">
                <span>Yes</span>
              </div>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>Yes</span>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr]">
              <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
                Channel manager with real-time sync
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-background-secondary">
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
            <div className="grid grid-cols-2 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr]">
              <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
                Commission-free booking engine
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-background-secondary">
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
            <div className="grid grid-cols-2 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr]">
              <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
                Integrated payment processing
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-background-secondary">
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
            <div className="grid grid-cols-2 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr]">
              <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-none md:pr-6">
                AI-powered guest communication
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6 bg-background-secondary">
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
            <Button title="View" variant="secondary">
              View
            </Button>
            <Button
              title="All"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              All
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
