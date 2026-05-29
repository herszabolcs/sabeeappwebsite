"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog10_2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Press</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              What people are saying
            </h1>
            <p className="md:text-md">
              SabeeApp in the news and industry publications.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">
            Featured coverage
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
                    Industry
                  </p>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a className="mb-2" href="#">
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                    SabeeApp named leader in hotel tech innovation
                  </h3>
                </a>
                <p>
                  Recognition for platform integration and guest experience
                  features.
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
                      Hospitality
                    </p>
                    <p className="inline text-sm font-semibold">4 min read</p>
                  </div>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      How independent hotels compete with major chains
                    </h3>
                  </a>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-2 flex items-center justify-center gap-x-2"
                  >
                    Read more
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
                      Technology
                    </p>
                    <p className="inline text-sm font-semibold">5 min read</p>
                  </div>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      AI and automation reshape property management
                    </h3>
                  </a>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-2 flex items-center justify-center gap-x-2"
                  >
                    Read more
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
                      Operations
                    </p>
                    <p className="inline text-sm font-semibold">3 min read</p>
                  </div>
                  <a className="mb-2" href="#">
                    <h3 className="text-xl font-bold md:text-2xl">
                      Direct bookings become essential for hotel revenue
                    </h3>
                  </a>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-2 flex items-center justify-center gap-x-2"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">
            Recent mentions
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
                  Industry
                </p>
                <p className="inline text-sm font-semibold">2 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  SabeeApp expands channel manager integrations
                </h2>
              </a>
              <p>Now connected to 60+ online travel agencies.</p>
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
                  Hospitality
                </p>
                <p className="inline text-sm font-semibold">4 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Guest experience technology becomes competitive advantage
                </h2>
              </a>
              <p>Digital check-in and mobile keys gain adoption.</p>
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
                  Technology
                </p>
                <p className="inline text-sm font-semibold">3 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Property management software market grows rapidly
                </h2>
              </a>
              <p>Consolidation and innovation drive the sector forward.</p>
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
                  Operations
                </p>
                <p className="inline text-sm font-semibold">5 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Housekeeping automation reduces labor challenges
                </h2>
              </a>
              <p>
                Digital task management and real-time coordination improve
                efficiency.
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
                  Revenue
                </p>
                <p className="inline text-sm font-semibold">4 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Payment processing becomes critical infrastructure
                </h2>
              </a>
              <p>Hotels need unified systems for all transaction types.</p>
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
                  Industry
                </p>
                <p className="inline text-sm font-semibold">6 min read</p>
              </div>
              <a className="mb-2 flex justify-start text-start" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Multi-property operators seek unified technology platforms
                </h2>
              </a>
              <p>Consolidation of systems reduces complexity and cost.</p>
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
