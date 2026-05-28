"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import { smoothTransition } from "@/lib/motion";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

const TabItem = ({ index, activeTab, tabItem }) => {
  if (index !== activeTab) {
    return null;
  }
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={smoothTransition}
    >
      {tabItem.image && (
        <img
          src={tabItem.image.src}
          alt={tabItem.image.alt}
          className="rounded-image object-cover size-full"
        />
      )}
      {tabItem.video && (
        <Dialog>
          <DialogTrigger className="relative flex items-center justify-center w-full">
            <img
              src={tabItem.video.image.src}
              alt={tabItem.video.image.alt}
              className="rounded-image object-cover size-full"
            />
            <span className="absolute inset-0 z-10 bg-black/50" />
            <FaCirclePlay className="absolute z-20 text-white size-16" />
          </DialogTrigger>
          <DialogContent>
            <VideoIframe video={tabItem.video.url} />
          </DialogContent>
        </Dialog>
      )}
    </motion.div>
  );
};

const useRelume = () => {
  const [activeTab, setActiveTab] = useState(0);
  const setActiveTabSetter = (index) => () => setActiveTab(index);
  const getActiveTabButtonStyles = (index) => {
    return clsx("cursor-pointer border-b border-border-primary py-6 transition-opacity duration-300 ease-out", {
      "opacity-100": activeTab === index,
      "opacity-25": activeTab !== index,
    });
  };
  return {
    setActiveTabSetter,
    getActiveTabButtonStyles,
    activeTab,
  };
};

export function Layout491() {
  const useActive = useRelume();
  const tabItems = [
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      video: {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
          alt: "Relume placeholder image 2",
        },
        url: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
      },
    },
    {
      heading: "Short heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 3",
      },
    },
  ];
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">PLATFORM</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Why one platform matters
          </h1>
          <p className="md:text-md">
            Every module shares the same guest data. No duplicate entries. No
            conflicting information. Just one source of truth that flows through
            your entire operation.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Explore" variant="secondary">
              Explore
            </Button>
            <Button
              title="Learn"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Learn
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2 lg:gap-x-20">
          <div className="relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
            <div
              onClick={useActive.setActiveTabSetter(0)}
              className={useActive.getActiveTabButtonStyles(0)}
            >
              <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                Reservations meet billing
              </h2>
              <motion.div
                initial={false}
                animate={{ gridTemplateRows: useActive.activeTab === 0 ? "1fr" : "0fr" }}
                transition={smoothTransition}
                className="grid overflow-hidden"
              >
                <p className="mt-3 min-h-0 md:mt-4">
                  Book a room and the folio appears instantly. Charge a card and
                  the reservation updates. Everything connected.
                </p>
              </motion.div>
            </div>
            <div
              onClick={useActive.setActiveTabSetter(1)}
              className={useActive.getActiveTabButtonStyles(1)}
            >
              <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                Reservations meet billing
              </h2>
              <motion.div
                initial={false}
                animate={{ gridTemplateRows: useActive.activeTab === 1 ? "1fr" : "0fr" }}
                transition={smoothTransition}
                className="grid overflow-hidden"
              >
                <p className="mt-3 min-h-0 md:mt-4">
                  Book a room and the folio appears instantly. Charge a card and
                  the reservation updates. Everything connected.
                </p>
              </motion.div>
            </div>
            <div
              onClick={useActive.setActiveTabSetter(2)}
              className={useActive.getActiveTabButtonStyles(2)}
            >
              <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                Reservations meet billing
              </h2>
              <motion.div
                initial={false}
                animate={{ gridTemplateRows: useActive.activeTab === 2 ? "1fr" : "0fr" }}
                transition={smoothTransition}
                className="grid overflow-hidden"
              >
                <p className="mt-3 min-h-0 md:mt-4">
                  Book a room and the folio appears instantly. Charge a card and
                  the reservation updates. Everything connected.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="flex max-h-full w-full items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <TabItem
                key={useActive.activeTab}
                index={useActive.activeTab}
                activeTab={useActive.activeTab}
                tabItem={tabItems[useActive.activeTab]}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
