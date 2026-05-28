"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Resources</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Tools to run better
            </h1>
            <p className="md:text-md">
              Guides, case studies, and insights built for hospitality.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">
            Essential guides
          </h2>
          <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 sm:gap-y-14 md:mb-16 lg:mb-20 lg:grid-cols-2">
            <div>
              <div className="flex h-full flex-col items-start justify-center">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder featured image"
                    className="rounded-image mb-6 aspect-[3/2] size-full object-cover"
                  />
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    Guides
                  </p>
                  <p className="inline text-sm font-semibold">15 pages</p>
                </div>
                <a className="mb-2" href="#">
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                    The complete PMS buyer's guide
                  </h3>
                </a>
                <p>
                  What to look for when choosing property management software.
                </p>
                <Button
                  title="Download"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Download
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 lg:gap-y-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder featured small image"
                    className="rounded-image aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-center">
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Ebooks
                    </p>
                    <p className="inline text-sm font-semibold">12 pages</p>
                  </div>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Revenue optimization for independent hotels
                    </h3>
                  </a>
                  <Button
                    title="Download"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-2 flex items-center justify-center gap-x-2"
                  >
                    Download
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder featured small image"
                    className="rounded-image aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-center">
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Guides
                    </p>
                    <p className="inline text-sm font-semibold">8 pages</p>
                  </div>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Channel manager comparison framework
                    </h3>
                  </a>
                  <Button
                    title="Download"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-2 flex items-center justify-center gap-x-2"
                  >
                    Download
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4">
                <a href="#" className="w-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder featured small image"
                    className="rounded-image aspect-square size-full object-cover"
                  />
                </a>
                <div className="flex h-full flex-col items-start justify-center">
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Ebooks
                    </p>
                    <p className="inline text-sm font-semibold">10 pages</p>
                  </div>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Guest experience trends in 2024
                    </h3>
                  </a>
                  <Button
                    title="Download"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-2 flex items-center justify-center gap-x-2"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">
            Success stories
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Case studies
                </p>
                <p className="inline text-sm font-semibold">5 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  How a 40-room hotel cut labor costs by 20 percent
                </h2>
              </a>
              <p>Automation and better scheduling made the difference.</p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Case studies
                </p>
                <p className="inline text-sm font-semibold">6 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Boutique hotel increased direct bookings by 35 percent
                </h2>
              </a>
              <p>A better booking engine and smarter channel management.</p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Case studies
                </p>
                <p className="inline text-sm font-semibold">4 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Hostel chain streamlined operations across 12 locations
                </h2>
              </a>
              <p>One system for all properties. Visibility everywhere.</p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Case studies
                </p>
                <p className="inline text-sm font-semibold">7 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Vacation rental manager cut check-in time in half
                </h2>
              </a>
              <p>
                Digital check-in and automated messaging transformed the
                process.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Case studies
                </p>
                <p className="inline text-sm font-semibold">5 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Independent hotel owner reclaimed 10 hours per week
                </h2>
              </a>
              <p>Better reporting and mobile access changed how they work.</p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
            <div className="flex size-full flex-col items-start justify-start text-start">
              <a href="#" className="mb-6 w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="rounded-image aspect-[3/2] size-full object-cover"
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Case studies
                </p>
                <p className="inline text-sm font-semibold">6 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Multi-property group unified their tech stack
                </h2>
              </a>
              <p>One platform replaced five different systems.</p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
