"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function useVisible() {
  const [isVisible, setIsVisible] = useState(true);

  return {
    isVisible,
    hide: () => setIsVisible(false),
  };
}

export function Banner8() {
  const { isVisible, hide } = useVisible();

  if (!isVisible) return null;

  return (
    <section
      id="relume"
      className="relative border-b border-border-primary bg-manz px-[5%]"
    >
      <div className="flex flex-col justify-start py-4 md:flex-row md:items-center md:py-3">
        <div className="mb-4 mr-7 flex flex-1 items-start md:mb-0 md:mr-8 md:items-center">
          <a href="#">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
              alt="Relume logo"
              className="mr-4 hidden size-8 lg:block"
            />
          </a>
          <div>
            <h2 className="font-semibold">SabeeApp 4.0 is here now</h2>
            <p className="text-sm">The biggest update in our history</p>
          </div>
        </div>
        <div className="flex">
          <Button size="sm" className="mr-4 md:ml-4 md:mr-0">
            Explore
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="mr-4 md:ml-4 md:mr-0"
            onClick={hide}
          >
            Dismiss
          </Button>
        </div>
        <button
          type="button"
          className="absolute right-2 md:static md:ml-4"
          aria-label="Dismiss banner"
          onClick={hide}
        >
          <RxCross2 className="size-8 p-1" />
        </button>
      </div>
    </section>
  );
}
