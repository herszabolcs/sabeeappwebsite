"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1 btn-light alternate logo-alt">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Boutique</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Hospitality refined
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Your guests expect more than a room. They want the story, the
              attention, the moment that makes them return. SabeeApp gives you
              the tools to remember every preference, anticipate every need, and
              deliver the kind of service that turns visitors into loyal
              patrons.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Start">Start</Button>
              <Button title="Demo" variant="secondary">
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
