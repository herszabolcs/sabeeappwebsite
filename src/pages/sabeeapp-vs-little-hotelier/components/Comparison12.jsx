"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Comparison12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2 btn-light alternate logo-alt">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Comparison</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Feature by feature breakdown
          </h1>
          <p className="md:text-md">
            See where each platform stands on what matters to you
          </p>
        </div>
        <div className="mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <Fragment>
              <div className="hidden h-full flex-col items-start justify-end py-4 pr-4 sm:py-6 sm:pr-6 md:flex lg:py-6 lg:pr-6">
                <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                  Core features
                </h2>
              </div>
              <div className="flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    alt="Relume image 1"
                    className="max-h-12"
                  />
                </div>
              </div>
              <div className="flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    alt="Relume image 2"
                    className="max-h-12"
                  />
                </div>
              </div>
              <div className="flex h-full flex-col justify-between px-2 py-4 sm:px-4 sm:py-6 lg:p-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    alt="Relume image 3"
                    className="max-h-12"
                  />
                </div>
              </div>
            </Fragment>
          </div>
          <div>
            <div className="grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr] bg-background-secondary">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                Booking engine commission
              </p>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>Zero percent</span>
              </div>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>Two percent</span>
              </div>
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>Two percent</span>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                Channel manager OTA connections
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
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiCheck className="size-6" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr] bg-background-secondary">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                Real-time payment processing
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
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiCheck className="size-6" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                Guest mobile check-in
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
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiX className="size-6" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr] bg-background-secondary">
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                AI-powered messaging inbox
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
              <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                <span>
                  <BiX className="size-6" />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Compare" variant="secondary">
              Compare
            </Button>
            <Button
              title="View"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
