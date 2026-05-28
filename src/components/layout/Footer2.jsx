"use client";

import { Button, Input } from "@relume_io/relume-ui";
import { media } from "@/lib/media";
import { routes } from "@/lib/routes";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer2() {
  const formState = useForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4">
            <Link
              to={routes.home}
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <img
                src={media.logo.src}
                alt={media.logo.alt}
              />
            </Link>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Products</h2>
              <ul>
                <li className="py-2 text-sm">
                  <Link to={routes.pms} className="flex items-center gap-3">
                    PMS
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.channelManager} className="flex items-center gap-3">
                    Channel Manager
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.bookingEngine} className="flex items-center gap-3">
                    Booking Engine
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.sabeepay} className="flex items-center gap-3">
                    SabeePay
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.guestadvisor} className="flex items-center gap-3">
                    GuestAdvisor
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Operations</h2>
              <ul>
                <li className="py-2 text-sm">
                  <Link to={routes.housekeepingApp} className="flex items-center gap-3">
                    Housekeeping App
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.sabeeappGo} className="flex items-center gap-3">
                    SabeeApp Go
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.cashDrawer} className="flex items-center gap-3">
                    Cash Drawer
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.aiFrontDeskAgent} className="flex items-center gap-3">
                    AI Front Desk
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.blog} className="flex items-center gap-3">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Blog</h2>
              <ul>
                <li className="py-2 text-sm">
                  <Link to={routes.caseStudies} className="flex items-center gap-3">
                    Case Studies
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.helpCentre} className="flex items-center gap-3">
                    Help Centre
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.marketplace} className="flex items-center gap-3">
                    Marketplace
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to={routes.ebooks} className="flex items-center gap-3">
                    Ebooks
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <a
                    href={routes.communityExternal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4">Updates</h1>
            <p className="mb-3 text-sm md:mb-4">
              Get the latest news on what we're building and how it works for
              your property.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Join" variant="secondary" size="sm">
                  Join
                </Button>
              </form>
              <p className="text-xs">
                By subscribing you agree to our Privacy Policy and consent to
                receive updates from SabeeApp.
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start pb-4 pt-6 text-sm md:justify-start md:pb-0 md:pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">
                © 2024 SabeeApp. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <BiLogoFacebookCircle className="size-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <BiLogoLinkedinSquare className="size-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <BiLogoYoutube className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
