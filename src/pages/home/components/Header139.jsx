"use client";

import { Button, Dialog, DialogContent, DialogTrigger } from "@relume_io/relume-ui";
import { useTranslation } from "@/i18n/LocaleProvider";
import { media } from "@/lib/media";
import { scrollSpring } from "@/lib/motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FaCirclePlay } from "react-icons/fa6";

const useHeader139Animations = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, scrollSpring);

  const containerMotion = {
    y: useTransform(smoothProgress, [0, 0.35], ["0vh", "-5vh"]),
    width: useTransform(smoothProgress, [0, 0.35], ["90%", "100%"]),
    height: useTransform(smoothProgress, [0, 0.35], ["90vh", "100vh"]),
  };

  const imageTranslate = {
    y: useTransform(smoothProgress, [0.35, 1], ["0%", "45%"]),
  };

  const videoDialogTranslate = {
    y: useTransform(smoothProgress, [0.2, 0.38], ["0%", "130%"]),
  };

  return { sectionRef, containerMotion, imageTranslate, videoDialogTranslate };
};

export function Header139() {
  const animations = useHeader139Animations();
  const { t } = useTranslation();
  const hero = t.home.hero;

  return (
    <section
      ref={animations.sectionRef}
      id="relume"
      className="relative flex h-[150vh] flex-col items-center scheme-1 btn-light alternate logo-alt"
    >
      <motion.div
        className="sticky top-[5vh] z-10 mb-[-5vh] mt-[5vh] flex h-[90vh] w-[90%] flex-col items-start justify-center overflow-hidden rounded-image"
        style={animations.containerMotion}
      >
        <div className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container relative z-10 max-w-md">
            <p className="eyebrow mb-4 md:mb-5">
              {hero.eyebrow}
            </p>
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {hero.title}
            </h1>
            <p className="text-text-alternative md:text-md">
              {hero.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title={hero.explore}>{hero.explore}</Button>
              <Button title={hero.demo} variant="secondary-alt">
                {hero.demo}
              </Button>
            </div>
            <p className="mt-4 text-sm text-text-alternative/80 md:mt-5">
              {hero.reassurance}
            </p>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 z-0 will-change-transform"
          style={animations.imageTranslate}
        >
          <img
            src={media.heroImage.src}
            alt={media.heroImage.alt}
            className="rounded-image size-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <Dialog>
          <DialogTrigger asChild className="hidden md:flex">
            <motion.button
              style={animations.videoDialogTranslate}
              className="absolute bottom-[5%] right-[5%] flex w-full items-center justify-center overflow-hidden rounded-image will-change-transform md:max-w-[14rem] lg:max-w-xxs"
              aria-label="Play SabeeApp video"
            >
              <video
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="rounded-image size-full object-cover"
                aria-hidden="true"
              >
                <source src={media.heroVideo.src} type="video/mp4" />
              </video>
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </motion.button>
          </DialogTrigger>
          <DialogContent>
            <video controls autoPlay playsInline className="mx-auto aspect-video w-full max-w-[940px]">
              <source src={media.heroVideo.src} type="video/mp4" />
            </video>
          </DialogContent>
        </Dialog>
      </motion.div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
