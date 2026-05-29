"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  useMediaQuery,
} from "@relume_io/relume-ui";
import { useNavContent, useTranslation } from "@/i18n/LocaleProvider";
import { media } from "@/lib/media";
import { routes } from "@/lib/routes";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";

const dropdownMotion = {
  variants: {
    open: {
      opacity: 1,
      display: "block",
      height: "var(--height-open, auto)",
    },
    close: {
      opacity: 0,
      display: "none",
      height: "var(--height-close, 0)",
    },
  },
  initial: "close",
  exit: "close",
  transition: { duration: 0.2 },
};

const chevronMotion = {
  variants: {
    rotated: { rotate: 180 },
    initial: { rotate: 0 },
  },
  transition: { duration: 0.3 },
};

function useNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const openMenu = (menu) => {
    if (isMobile) {
      setActiveMenu((prev) => (prev === menu ? null : menu));
    } else {
      setActiveMenu(menu);
    }
  };

  const closeMenu = () => {
    if (!isMobile) setActiveMenu(null);
  };

  const isMenuOpen = (menu) => activeMenu === menu;

  return {
    isMobile,
    isMobileMenuOpen,
    activeMenu,
    toggleMobileMenu,
    openMenu,
    closeMenu,
    isMenuOpen,
    animateMobileMenu: isMobileMenuOpen ? "open" : "close",
    animateMobileMenuButtonSpan: isMobileMenuOpen
      ? ["open", "rotatePhase"]
      : "closed",
  };
}

function PromoPanel() {
  const { navPromo } = useNavContent();

  return (
    <div className="relative flex flex-1 flex-col justify-between border-t border-border-primary p-6 md:p-8 lg:max-w-sm lg:border-l lg:border-t-0 lg:py-10 lg:pl-10 lg:pr-8">
      <div className="relative z-10 flex flex-col gap-4">
        <div className="relative w-full overflow-hidden rounded-md border border-border-primary pt-[56%]">
          <img
            src={navPromo.imageSrc}
            alt={navPromo.imageAlt}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold leading-snug">
            {navPromo.heading}
          </h4>
          <p className="text-sm leading-relaxed text-text-secondary">
            {navPromo.subtext}
          </p>
        </div>
        <Link to={navPromo.href} className="inline-flex">
          <Button
            title={navPromo.cta}
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
            className="text-sm font-semibold"
          >
            {navPromo.cta}
          </Button>
        </Link>
      </div>
    </div>
  );
}

function NavMenuItem({ title, description, href, external = false }) {
  const className =
    "group block rounded-md px-3 py-3 transition-colors hover:bg-background-secondary";

  const content = (
    <>
      <h5 className="font-semibold leading-snug group-hover:text-text-primary">
        {title}
      </h5>
      {description ? (
        <p className="mt-1 hidden text-sm leading-relaxed text-text-secondary md:block">
          {description}
        </p>
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  );
}

function DropdownTrigger({ label, isOpen, onClick }) {
  return (
    <button
      type="button"
      className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span>{label}</span>
      <motion.span animate={isOpen ? "rotated" : "initial"} {...chevronMotion}>
        <RxChevronDown />
      </motion.span>
    </button>
  );
}

function MegaMenuShell({ isOpen, placement, topOffset, children }) {
  const placementClasses =
    placement === "fixed"
      ? "fixed left-0 right-0 z-[998] w-full overflow-hidden border-b border-border-primary px-[5%] lg:[--height-close:auto]"
      : "relative w-full overflow-hidden lg:[--height-close:auto]";

  return (
    <motion.nav
      variants={dropdownMotion.variants}
      initial="close"
      animate={isOpen ? "open" : "close"}
      transition={dropdownMotion.transition}
      style={placement === "fixed" ? { top: topOffset } : undefined}
      className={`scheme-3 bg-background-primary ${placementClasses}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex w-full flex-col lg:flex-row">{children}</div>
      </div>
    </motion.nav>
  );
}

function PlatformMegaMenu({ isOpen, placement = "inline", topOffset = 0 }) {
  const { platformNav } = useNavContent();

  return (
    <MegaMenuShell isOpen={isOpen} placement={placement} topOffset={topOffset}>
      <div className="grid flex-1 grid-cols-1 gap-8 px-4 py-6 md:grid-cols-3 md:gap-10 md:px-6 md:py-10 lg:px-0">
        {platformNav.sections.map((section) => (
          <div key={section.key} className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {section.label}
            </h4>
            <div className="flex flex-col gap-1">
              {section.items.map((item) => (
                <NavMenuItem
                  key={item.key}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <PromoPanel />
    </MegaMenuShell>
  );
}

function SolutionsMegaMenu({ isOpen, placement = "inline", topOffset = 0 }) {
  const { solutionsNav } = useNavContent();

  return (
    <MegaMenuShell isOpen={isOpen} placement={placement} topOffset={topOffset}>
      <div className="grid flex-1 grid-cols-1 gap-10 px-4 py-6 md:grid-cols-2 md:gap-12 md:px-6 md:py-10 lg:px-0">
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            {solutionsNav.propertyTypes.label}
          </h4>
          <div className="flex flex-col gap-1">
            {solutionsNav.propertyTypes.items.map((item) => (
              <NavMenuItem key={item.key} title={item.title} href={item.href} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            {solutionsNav.roles.label}
          </h4>
          <div className="flex flex-col gap-1">
            {solutionsNav.roles.items.map((item) => (
              <NavMenuItem
                key={item.key}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
      <PromoPanel />
    </MegaMenuShell>
  );
}

function CompareDropdown({ isOpen, placement = "inline", topOffset = 0 }) {
  const { compareNav } = useNavContent();

  return (
    <MegaMenuShell isOpen={isOpen} placement={placement} topOffset={topOffset}>
      <div className="w-full px-4 py-4 md:px-6 md:py-6 lg:max-w-md lg:px-0">
        <ul className="flex flex-col gap-1">
          {compareNav.items.map((item) => (
            <li key={item.key}>
              <Link
                to={item.href}
                className="block rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-background-secondary"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MegaMenuShell>
  );
}

function ResourcesMegaMenu({ isOpen, placement = "inline", topOffset = 0 }) {
  const { resourcesNav } = useNavContent();

  return (
    <MegaMenuShell isOpen={isOpen} placement={placement} topOffset={topOffset}>
      <div className="grid flex-1 grid-cols-1 gap-1 px-4 py-6 sm:grid-cols-2 md:px-6 md:py-8 lg:max-w-2xl lg:px-0">
        {resourcesNav.items.map((item) => (
          <NavMenuItem
            key={item.key}
            title={item.title}
            href={item.href}
            external={item.external}
          />
        ))}
      </div>
    </MegaMenuShell>
  );
}

function NavDropdown({ menuKey, label, isMenuOpen, openMenu, inlineMenu }) {
  const open = isMenuOpen(menuKey);

  return (
    <div className="relative" onMouseEnter={() => openMenu(menuKey)}>
      <DropdownTrigger
        label={label}
        isOpen={open}
        onClick={() => openMenu(menuKey)}
      />
      {inlineMenu ? inlineMenu(open) : null}
    </div>
  );
}

function DesktopMegaMenus({ activeMenu, topOffset }) {
  return (
    <>
      <PlatformMegaMenu
        isOpen={activeMenu === "platform"}
        placement="fixed"
        topOffset={topOffset}
      />
      <SolutionsMegaMenu
        isOpen={activeMenu === "solutions"}
        placement="fixed"
        topOffset={topOffset}
      />
      <CompareDropdown
        isOpen={activeMenu === "compare"}
        placement="fixed"
        topOffset={topOffset}
      />
      <ResourcesMegaMenu
        isOpen={activeMenu === "resources"}
        placement="fixed"
        topOffset={topOffset}
      />
    </>
  );
}

function LanguageSelector({ className = "" }) {
  const { locale, setLocale, locales, getLocaleMeta } = useTranslation();

  const currentLocale = getLocaleMeta(locale);

  const selectLocale = (code) => {
    setLocale(code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          title={currentLocale.label}
          aria-label={`Language: ${currentLocale.label}`}
          className={`relative inline-flex items-center gap-2 whitespace-nowrap border-0 bg-transparent py-3 text-md shadow-none outline-none ring-0 focus:outline-none focus-visible:ring-0 lg:px-4 lg:py-6 lg:text-base ${className}`}
        >
          <span aria-hidden="true">{currentLocale.flag}</span>
          <span>{currentLocale.shortLabel}</span>
          <RxChevronDown className="size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        {locales.map((item) => (
          <DropdownMenuItem
            key={item.code}
            onClick={() => selectLocale(item.code)}
            className={locale === item.code ? "font-semibold" : undefined}
          >
            <span className="mr-2" aria-hidden="true">
              {item.flag}
            </span>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NavCtas({ className = "" }) {
  const { navCtas } = useNavContent();

  return (
    <div
      className={`flex shrink-0 items-center gap-4 ${className}`}
    >
      <Link to={navCtas.bookDemoHref}>
        <Button title={navCtas.bookDemo} variant="secondary-alt" size="sm">
          {navCtas.bookDemo}
        </Button>
      </Link>
      <Link to={navCtas.getPricingHref}>
        <Button title={navCtas.getPricing} size="sm">
          {navCtas.getPricing}
        </Button>
      </Link>
      <LanguageSelector />
    </div>
  );
}

function MobileNavCtas() {
  return (
    <NavCtas className="mt-6 w-full flex-col items-stretch gap-4 lg:hidden" />
  );
}

function MobileNavMenus({ renderMenus }) {
  return (
    <div className="flex flex-col">
      {renderMenus()}
      <MobileNavCtas />
    </div>
  );
}

export function Navbar6() {
  const nav = useNavbar();
  const {
    platformNav,
    solutionsNav,
    compareNav,
    resourcesNav,
  } = useNavContent();
  const hoverZoneRef = useRef(null);
  const [navBottom, setNavBottom] = useState(0);

  useLayoutEffect(() => {
    const updateNavBottom = () => {
      if (hoverZoneRef.current) {
        setNavBottom(hoverZoneRef.current.getBoundingClientRect().bottom);
      }
    };

    updateNavBottom();
    window.addEventListener("resize", updateNavBottom);
    return () => window.removeEventListener("resize", updateNavBottom);
  }, []);

  const renderMenuTriggers = (n) => (
    <>
      <NavDropdown
        menuKey="platform"
        label={platformNav.label}
        isMenuOpen={n.isMenuOpen}
        openMenu={n.openMenu}
      />
      <NavDropdown
        menuKey="solutions"
        label={solutionsNav.label}
        isMenuOpen={n.isMenuOpen}
        openMenu={n.openMenu}
      />
      <NavDropdown
        menuKey="compare"
        label={compareNav.label}
        isMenuOpen={n.isMenuOpen}
        openMenu={n.openMenu}
      />
      <NavDropdown
        menuKey="resources"
        label={resourcesNav.label}
        isMenuOpen={n.isMenuOpen}
        openMenu={n.openMenu}
      />
    </>
  );

  const renderMobileMenus = (n) => (
    <>
      <NavDropdown
        menuKey="platform"
        label={platformNav.label}
        isMenuOpen={n.isMenuOpen}
        openMenu={n.openMenu}
        inlineMenu={(open) => <PlatformMegaMenu isOpen={open} />}
      />
      <NavDropdown
        menuKey="solutions"
        label={solutionsNav.label}
        isMenuOpen={n.isMenuOpen}
        openMenu={n.openMenu}
        inlineMenu={(open) => <SolutionsMegaMenu isOpen={open} />}
      />
      <NavDropdown
        menuKey="compare"
        label={compareNav.label}
        isMenuOpen={n.isMenuOpen}
        openMenu={n.openMenu}
        inlineMenu={(open) => <CompareDropdown isOpen={open} />}
      />
      <NavDropdown
        menuKey="resources"
        label={resourcesNav.label}
        isMenuOpen={n.isMenuOpen}
        openMenu={n.openMenu}
        inlineMenu={(open) => <ResourcesMegaMenu isOpen={open} />}
      />
    </>
  );

  return (
    <section
      id="relume"
      className="scheme-1 btn-light alternate logo-alt relative z-[999] flex min-h-16 w-full items-center px-[5%] md:min-h-18"
    >
      <div
        className="relative w-full min-w-0 flex-1"
        ref={hoverZoneRef}
        onMouseLeave={nav.closeMenu}
      >
        <div className="mx-auto flex w-full items-center gap-4 lg:gap-6">
          <Link to={routes.home} className="shrink-0">
            <img src={media.logo.src} alt={media.logo.alt} />
          </Link>

          <nav className="hidden shrink-0 items-center lg:flex">
            {renderMenuTriggers(nav)}
          </nav>

          <div className="hidden min-w-0 flex-1 lg:block" aria-hidden="true" />

          <NavCtas className="hidden shrink-0 lg:flex" />

          <button
            type="button"
            className="-mr-2 ml-auto flex size-12 shrink-0 cursor-pointer flex-col items-center justify-center lg:hidden"
            onClick={nav.toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={nav.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={nav.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-white"
              animate={nav.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>

        <div className="hidden lg:contents">
          <DesktopMegaMenus activeMenu={nav.activeMenu} topOffset={navBottom} />
        </div>
      </div>

      <AnimatePresence>
        {nav.isMobileMenuOpen ? (
          <motion.div
            variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
            animate={nav.animateMobileMenu}
            initial="close"
            exit="close"
            className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
            transition={{ duration: 0.4 }}
          >
            <motion.div
              variants={{ open: { y: 0 }, close: { y: "-100%" } }}
              animate={nav.animateMobileMenu}
              initial="close"
              exit="close"
              transition={{ duration: 0.4 }}
              className="absolute left-0 right-0 top-0 block h-dvh overflow-auto bg-scheme-background px-[5%] pb-8 pt-4"
            >
              <MobileNavMenus renderMenus={() => renderMobileMenus(nav)} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
