'use client';
import { navBarLinks } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

type SubLink = {
  linkHref: string;
  linkLabel: string;
};

const Navbar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Close mobile menu when route changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);

    setMobileDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActiveLink = (linkHref: string, subLinks?: SubLink[]) => {
    if (subLinks) {
      return subLinks.some((sub) => pathname === sub.linkHref) || pathname === linkHref;
    }
    return pathname === linkHref;
  };

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (index: number) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  return (
    <>
      <div className="w-full bg-[#FBFBFB] h-[70px] md:h-[85px] lg:h-[95px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex items-center relative z-50">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="flex flex-row items-center space-x-4 md:space-x-8 lg:space-x-12">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" className="w-28 md:w-35 lg:w-50" alt="Medgate Logo" />
            </div>

            <ul className="hidden lg:flex flex-row items-center space-x-[30px]">
              {navBarLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => link.subLinks && handleMouseEnter(index)}
                  onMouseLeave={() => link.subLinks && handleMouseLeave()}
                >
                  {link.subLinks ? (
                    <>
                      <div
                        className={`${
                          isActiveLink(link.linkHref, link.subLinks)
                            ? 'text-[16px] font-medium cursor-pointer text-[#F85814]'
                            : 'text-[16px] font-medium cursor-pointer text-[#3D3936]'
                        } flex items-center gap-1`}
                      >
                        <span>{link.linkLabel}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openDropdown === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>

                      <div
                        className={`absolute z-20 top-full left-0 mt-2 min-w-[200px] bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                          openDropdown === index
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 -translate-y-2 invisible'
                        }`}
                      >
                        {link.subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.linkHref}
                            className={`block px-4 py-3 font-medium transition-colors duration-200 ${
                              pathname === subLink.linkHref
                                ? 'text-[14px] text-[#F85814] bg-orange-50'
                                : 'text-[14px] text-[#3D3936] hover:bg-gray-50'
                            }`}
                          >
                            {subLink.linkLabel}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={link.linkHref}>
                      <span
                        className={`${
                          pathname === link.linkHref
                            ? 'text-[16px] font-medium cursor-pointer text-[#F85814]'
                            : 'text-[16px] font-medium cursor-pointer text-[#3D3936] hover:text-[#F85814]'
                        } transition-colors duration-200`}
                      >
                        {link.linkLabel}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Button className="hidden lg:block bg-[#F85814] hover:bg-[#F85814]/90 text-white font-semibold text-base pr-[30px] pl-[30px] pt-[25px] pb-[25px] rounded-full transition-all duration-300 hover:scale-105 min-w-[160px]">
            Get Started
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#3D3936] hover:text-[#F85814] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 md:w-7 md:h-7" />
            ) : (
              <Menu className="w-6 h-6 md:w-7 md:h-7" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" className="w-24 md:w-28" alt="Medgate Logo" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#3D3936] hover:text-[#F85814] transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="p-4 md:p-6">
              <ul className="space-y-1">
                {navBarLinks.map((link, index) => (
                  <li key={index}>
                    {link.subLinks ? (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(index)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                            isActiveLink(link.linkHref, link.subLinks)
                              ? 'text-[#F85814] bg-orange-50'
                              : 'text-[#3D3936] hover:bg-gray-50'
                          }`}
                        >
                          <span className="font-medium text-[15px]">{link.linkLabel}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileDropdownOpen === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            mobileDropdownOpen === index
                              ? 'max-h-96 opacity-100 mt-1'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <ul className="ml-4 space-y-1">
                            {link.subLinks.map((subLink, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subLink.linkHref}
                                  className={`block px-4 py-2.5 rounded-lg font-medium text-[14px] transition-colors duration-200 ${
                                    pathname === subLink.linkHref
                                      ? 'text-[#F85814] bg-orange-50'
                                      : 'text-[#3D3936] hover:bg-gray-50'
                                  }`}
                                >
                                  {subLink.linkLabel}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.linkHref}
                        className={`block px-4 py-3 rounded-lg font-medium text-[15px] transition-colors duration-200 ${
                          pathname === link.linkHref
                            ? 'text-[#F85814] bg-orange-50'
                            : 'text-[#3D3936] hover:bg-gray-50'
                        }`}
                      >
                        {link.linkLabel}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="p-4 md:p-6 border-t border-gray-100">
            <Button className="w-full bg-[#F85814] text-[15px] py-4 rounded-full text-white cursor-pointer hover:bg-[#F85814]/80 transition-all duration-200">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
