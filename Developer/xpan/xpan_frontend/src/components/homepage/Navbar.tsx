"use client";
import { Fragment, useState, useEffect, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  callsToActionFeatures,
  callsToActionMarketPlace,
  callsToActionProducts,
  company,
  features,
  marketplace,
  productsList,
} from "@/constants/NavbarMenuFeatures";
import PopoverButton from "./PopoverButton";
import MobileNavbar from "./MobileNavbar";
import LoginModal from "./LoginModal";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState({
    product: false,
    features: false,
    marketplace: false,
    company: false,
  });

  const [mouseOverPopover, setMouseOverPopover] = useState({
    product: false,
    features: false,
    marketplace: false,
    company: false,
  });

  type PopoverName = "product" | "features" | "marketplace" | "company";

  const handleMouseEnter = (name: PopoverName) => {
    setIsPopoverOpen({ ...isPopoverOpen, [name]: true });
  };

  const handleMouseLeave = (name: PopoverName) => {
    setIsPopoverOpen({ ...isPopoverOpen, [name]: false });
  };

  // Header scroll effect.
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerElement = headerRef.current;

      if (headerElement) {
        if (scrollPosition > 50) {
          // Adjust as needed
          headerElement.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Fully opaque white
          headerElement.style.transition = "background-color 0.3s";
        } else {
          headerElement.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Transparent
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 inset-x-0 bg-white bg-opacity-0"
      >
        <nav
          className="mx-auto flex max-w-full items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Xpan</span>
              <Image
                className="h-auto w-auto"
                src="/assets/branding/xpanlite.svg"
                alt="logo"
                width="150"
                height="48"
                priority
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {/* Product Popover */}
            <Popover className="relative">
              <PopoverButton
                handleMouseEnter={() => handleMouseEnter("product")}
                handleMouseLeave={() => handleMouseLeave("product")}
                name="Product"
              />
              <Transition
                as={Fragment}
                show={isPopoverOpen.product}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  onMouseEnter={() => handleMouseEnter("product")}
                  onMouseLeave={() => handleMouseLeave("product")}
                  className="absolute -left-8 top-full z-10 mt-2 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="p-2">
                    {productsList.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-black group-hover:text-yellow-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link href={item.href} passHref>
                            <div className="block font-semibold text-gray-900">
                              {item.name}
                            </div>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToActionProducts.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-black"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            {/* Features Popover */}
            <Popover className="relative">
              <PopoverButton
                handleMouseEnter={() => handleMouseEnter("features")}
                handleMouseLeave={() => handleMouseLeave("features")}
                name="Features"
              />
              <Transition
                as={Fragment}
                show={isPopoverOpen.features}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  onMouseEnter={() => handleMouseEnter("features")}
                  onMouseLeave={() => handleMouseLeave("features")}
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="p-2">
                    {features.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-black group-hover:text-red-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link href={item.href} passHref>
                            <div className="block font-semibold text-gray-900">
                              {item.name}
                            </div>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid divide-x divide-gray-900/5 bg-gray-50">
                    {callsToActionFeatures.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-black"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            {/* MarketPlace */}

            <Popover className="relative">
              <PopoverButton
                handleMouseEnter={() => handleMouseEnter("marketplace")}
                handleMouseLeave={() => handleMouseLeave("marketplace")}
                name="Marketplace"
              />
              <Transition
                as={Fragment}
                show={isPopoverOpen.marketplace}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  onMouseEnter={() => handleMouseEnter("marketplace")}
                  onMouseLeave={() => handleMouseLeave("marketplace")}
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="p-2">
                    {marketplace.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-black group-hover:text-blue-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link href={item.href} passHref>
                            <div className="block font-semibold text-gray-900">
                              {item.name}
                            </div>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid divide-x divide-gray-900/5 bg-gray-50">
                    {callsToActionMarketPlace.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-black"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Link
              className="text-sm font-semibold leading-6 text-gray-900"
              href="/Pricing"
            >
              Pricing
            </Link>

            {/* Company */}
            <Popover className="relative">
              <PopoverButton
                handleMouseEnter={() => handleMouseEnter("company")}
                handleMouseLeave={() => handleMouseLeave("company")}
                name="Company"
              />
              <Transition
                as={Fragment}
                show={isPopoverOpen.company}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  onMouseEnter={() => handleMouseEnter("company")}
                  onMouseLeave={() => handleMouseLeave("company")}
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="p-2">
                    {company.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-black group-hover:text-green-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link href={item.href} passHref>
                            <div className="block font-semibold text-gray-900">
                              {item.name}
                            </div>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-full bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
            {isModalOpen && (
              <LoginModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
              />
            )}
          </div>
        </nav>
        <MobileNavbar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
    </>
  );
};

export default Navbar;
