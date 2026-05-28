"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing27() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-4">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Compare</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            SabeeApp vs others
          </h1>
          <p className="md:text-md">
            See how we stack up on price and features
          </p>
        </div>
        <div className="w-full">
          <Tabs defaultValue="monthly">
            <TabsList className="mx-auto mb-12 flex w-fit md:mb-20">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Starter
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $29
                      </p>
                    </div>
                    <p>Per month, billed monthly</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Start free"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Start free
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Growth
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $59
                      </p>
                    </div>
                    <p>Per month, billed monthly</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Start free"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Start free
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Professional
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $99
                      </p>
                    </div>
                    <p>Per month, billed monthly</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Start free"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Start free
                    </Button>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Core features
              </h3>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Reservations and billing
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Channel manager included
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Guest check-in tools
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Housekeeping app
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Payment processing
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Advanced features
              </h3>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  AI front desk agent
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Multi-property dashboard
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Custom integrations
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Priority support
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  API access
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Support options
              </h3>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Email support
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Phone support available
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Dedicated account manager
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Training sessions
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Community access
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="rt-8 mt-8 grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                <div className="hidden md:block" />
                <Button
                  title="Start free"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Start free
                </Button>
                <Button
                  title="Start free"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Start free
                </Button>
                <Button
                  title="Start free"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Start free
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Starter
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $290
                      </p>
                      <p className="font-semibold">Save 17%</p>
                    </div>
                    <p>Per year, billed annually</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Start free"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Start free
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Growth
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $590
                      </p>
                      <p className="font-semibold">Save 17%</p>
                    </div>
                    <p>Per year, billed annually</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Start free"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Start free
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Professional
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $990
                      </p>
                      <p className="font-semibold">Save 17%</p>
                    </div>
                    <p>Per year, billed annually</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Start free"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Start free
                    </Button>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Core features
              </h3>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Reservations and billing
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Channel manager included
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Guest check-in tools
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Housekeeping app
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Payment processing
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Advanced features
              </h3>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  AI front desk agent
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Multi-property dashboard
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Custom integrations
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Priority support
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  API access
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Support options
              </h3>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Email support
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Phone support available
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Dedicated account manager
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Training sessions
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 rounded-card odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Community access
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="rt-8 mt-8 grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                <div className="hidden md:block" />
                <Button
                  title="Start free"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Start free
                </Button>
                <Button
                  title="Start free"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Start free
                </Button>
                <Button
                  title="Start free"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Start free
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
