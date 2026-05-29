import fs from 'fs'
import path from 'path'

const root = path.resolve(import.meta.dirname, '..')
const navbarPath = path.join(root, 'src/components/layout/Navbar6.jsx')
const footerPath = path.join(root, 'src/components/layout/Footer2.jsx')

const gridLinkOpen =
  /<a\n                            href="#"\n                            className="grid w-full auto-cols-fr grid-cols-\[max-content_1fr\] items-start gap-x-3 py-2"\n                          >/g

const topNavOpen =
  /<a\n              href="#"\n              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"\n            >/g

const mobileNavOpen =
  /<a\n                href="#"\n                className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"\n              >/g

const blogCardOpen = /<a href="#" className="flex flex-col py-2">/g

const mobileGridLinkOpen =
  /<a\n                              href="#"\n                              className="grid w-full auto-cols-fr grid-cols-\[max-content_1fr\] items-start gap-x-3 py-2"\n                            >/g

const footerLinkOpen =
  /<a href="#" className="flex items-center gap-3">/g

function replaceSequential(src, regex, routeKeys) {
  let i = 0
  return src.replace(regex, () => {
    const key = routeKeys[i++]
    if (!key) throw new Error(`Ran out of routes at index ${i - 1}`)
    if (regex === gridLinkOpen) {
      return `<Link to={routes.${key}}\n                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"\n                          >`
    }
    if (regex === topNavOpen) {
      return `<Link to={routes.${key}}\n              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"\n            >`
    }
    if (regex === mobileNavOpen) {
      return `<Link to={routes.${key}}\n                className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"\n              >`
    }
    if (regex === mobileGridLinkOpen) {
      return `<Link to={routes.${key}}\n                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"\n                            >`
    }
    if (regex === footerLinkOpen) {
      return `<Link to={routes.${key}} className="flex items-center gap-3">`
    }
    return `<Link to={routes.${key}} className="flex flex-col py-2">`
  })
}

let nav = fs.readFileSync(navbarPath, 'utf8')

nav = nav.replace(
  '"use client";\n\nimport { Button, useMediaQuery } from "@relume_io/relume-ui";',
  `"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { media } from "@/lib/media";
import { routes } from "@/lib/routes";
import { Link } from "react-router-dom";`,
)

nav = nav.replace(
  `<a href="#">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Logo image"
          />
        </a>`,
  `<Link to={routes.home}>
          <img
            src={media.logo.src}
            alt={media.logo.alt}
          />
        </Link>`,
)

nav = replaceSequential(nav, topNavOpen, ['platform', 'for', 'compare'])
nav = replaceSequential(nav, gridLinkOpen, [
  'pms',
  'channelManager',
  'bookingEngine',
  'sabeepay',
  'guestadvisor',
  'aiFrontDeskAgent',
  'housekeepingApp',
  'sabeeappGo',
  'cashDrawer',
  'independentHotels',
  'hostels',
  'multiProperty',
  'pms',
  'channelManager',
  'bookingEngine',
  'sabeepay',
  'guestadvisor',
  'aiFrontDeskAgent',
  'housekeepingApp',
  'sabeeappGo',
  'cashDrawer',
  'independentHotels',
  'hostels',
  'multiProperty',
])
nav = replaceSequential(nav, blogCardOpen, ['blog', 'blog'])
nav = replaceSequential(nav, mobileNavOpen, ['platform', 'for', 'compare'])
nav = replaceSequential(nav, mobileGridLinkOpen, [
  'pms',
  'channelManager',
  'bookingEngine',
  'sabeepay',
  'guestadvisor',
  'aiFrontDeskAgent',
  'housekeepingApp',
  'sabeeappGo',
  'cashDrawer',
  'independentHotels',
  'hostels',
  'multiProperty',
])

nav = nav.replace(
  `<Button title="Book a demo" size="sm">
              Book a demo
            </Button>`,
  `<Link to={routes.contact}>
              <Button title="Book a demo" size="sm">
                Book a demo
              </Button>
            </Link>`,
)

nav = nav.replace(
  `<Button
                              title="View all articles"
                              variant="link"
                              size="link"
                              iconRight={<RxChevronRight />}
                            >
                              View all articles
                            </Button>`,
  `<Link to={routes.blog}>
                              <Button
                                title="View all articles"
                                variant="link"
                                size="link"
                                iconRight={<RxChevronRight />}
                              >
                                View all articles
                              </Button>
                            </Link>`,
)

nav = nav.replace(
  `<Button
                                title="See all articles"
                                variant="link"
                                size="link"
                                iconRight={<RxChevronRight />}
                              >
                                See all articles
                              </Button>`,
  `<Link to={routes.blog}>
                              <Button
                                title="See all articles"
                                variant="link"
                                size="link"
                                iconRight={<RxChevronRight />}
                              >
                                See all articles
                              </Button>
                            </Link>`,
)

nav = nav.replace('>Link One</a>', '>Platform</Link>')
nav = nav.replace('>Link Two</a>', '>For</Link>')
nav = nav.replace('>Link Three</a>', '>Compare</Link>')
nav = nav.replaceAll('</a>', '</Link>')

fs.writeFileSync(navbarPath, nav)

let footer = fs.readFileSync(footerPath, 'utf8')

footer = footer.replace(
  '"use client";\n\nimport { Button, Input } from "@relume_io/relume-ui";',
  `"use client";

import { Button, Input } from "@relume_io/relume-ui";
import { media } from "@/lib/media";
import { routes } from "@/lib/routes";
import { Link } from "react-router-dom";`,
)

footer = footer.replace(
  `<a
              href="#"
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
              />
            </a>`,
  `<Link
              to={routes.home}
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <img
                src={media.logo.src}
                alt={media.logo.alt}
              />
            </Link>`,
)

footer = replaceSequential(footer, footerLinkOpen, [
  'pms',
  'channelManager',
  'bookingEngine',
  'sabeepay',
  'guestadvisor',
  'housekeepingApp',
  'sabeeappGo',
  'cashDrawer',
  'aiFrontDeskAgent',
  'resources',
  'caseStudies',
  'helpCentre',
  'marketplace',
  'ebooks',
  'community',
])

const social = [
  ['BiLogoFacebookCircle', 'https://facebook.com'],
  ['BiLogoInstagram', 'https://instagram.com'],
  ['FaXTwitter', 'https://x.com'],
  ['BiLogoLinkedinSquare', 'https://linkedin.com'],
  ['BiLogoYoutube', 'https://youtube.com'],
]

for (const [icon, url] of social) {
  footer = footer.replace(
    `<a href="#">
              <${icon}`,
    `<a href="${url}" target="_blank" rel="noreferrer">
              <${icon}`,
  )
}

footer = footer.replaceAll('</a>', '</Link>')

// Fix social links that got broken closing tags
for (const [icon] of social) {
  footer = footer.replace(
    `<${icon} className="size-6" />\n            </Link>`,
    `<${icon} className="size-6" />\n            </a>`,
  )
  footer = footer.replace(
    `<${icon} className="size-6 p-0.5" />\n            </Link>`,
    `<${icon} className="size-6 p-0.5" />\n            </a>`,
  )
}

fs.writeFileSync(footerPath, footer)
console.log('Nav links wired.')
