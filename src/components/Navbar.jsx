"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { scrollToSection } from "@/lib/smoothScroll";
import { SERVICES_DATA } from "@/data/servicesData";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const servicesDropdownTimeoutRef = useRef(null);
  const projectsDropdownTimeoutRef = useRef(null);

  useEffect(() => {
    if (pathname === "/ve-chung-toi" || pathname === "/gioithieu") {
      setActiveSection("ve-chung-toi");
      return;
    }
    if (pathname.startsWith("/du-an") || pathname.startsWith("/duan")) {
      setActiveSection("du-an");
      return;
    }
    if (pathname.startsWith("/dich-vu") || pathname.startsWith("/dichvu")) {
      setActiveSection("dich-vu");
      return;
    }
    if (pathname === "/tin-tuc" || pathname === "/tintuc") {
      setActiveSection("tin-tuc");
      return;
    }

    if (pathname === "/") {
      setActiveSection("hero");
    }

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (pathname === "/") {
        const scrollPos = window.scrollY;
        if (scrollPos < 500) {
          setActiveSection("hero");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Menu items exactly matching Sun Bright style reference:
  // Trang chủ, Về chúng tôi, Dịch vụ, Dự án, Tin tức (no Hotline, no Vi/En, no Liên hệ in header)
  const navLinks = [
    { label: "Trang chủ", href: "/#hero", id: "hero" },
    { label: "Về chúng tôi", href: "/ve-chung-toi", id: "ve-chung-toi" },
    {
      label: "Dịch vụ",
      href: "/dich-vu",
      id: "dich-vu",
      hasDropdown: true,
      dropdownType: "services",
    },
    {
      label: "Dự án",
      href: "/du-an",
      id: "du-an",
      hasDropdown: true,
      dropdownType: "projects",
    },
    { label: "Tin tức", href: "/tin-tuc", id: "tin-tuc" },
  ];

  const handleMouseEnterServices = () => {
    if (servicesDropdownTimeoutRef.current) clearTimeout(servicesDropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesDropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 160);
  };

  const handleMouseEnterProjects = () => {
    if (projectsDropdownTimeoutRef.current) clearTimeout(projectsDropdownTimeoutRef.current);
    setProjectsDropdownOpen(true);
  };

  const handleMouseLeaveProjects = () => {
    projectsDropdownTimeoutRef.current = setTimeout(() => {
      setProjectsDropdownOpen(false);
    }, 160);
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setServicesDropdownOpen(false);
    setProjectsDropdownOpen(false);

    if (link.id === "hero") {
      if (pathname === "/") {
        scrollToSection("hero");
      } else {
        router.push("/");
      }
      return;
    }

    if (link.id === "ve-chung-toi") {
      if (pathname === "/ve-chung-toi" || pathname === "/gioithieu") {
        scrollToSection("hero");
      } else {
        router.push("/ve-chung-toi");
      }
      return;
    }

    if (link.id === "dich-vu") {
      if (pathname === "/dich-vu" || pathname === "/dichvu") {
        scrollToSection("hero");
      } else {
        router.push("/dich-vu");
      }
      return;
    }

    if (link.id === "du-an") {
      if (pathname === "/du-an" || pathname === "/duan") {
        scrollToSection("hero");
      } else {
        router.push("/du-an");
      }
      return;
    }

    if (link.id === "tin-tuc") {
      if (pathname === "/tin-tuc" || pathname === "/tintuc") {
        scrollToSection("hero");
      } else {
        router.push("/tin-tuc");
      }
      return;
    }

    if (pathname === "/") {
      scrollToSection(link.id);
    } else {
      router.push(`/#${link.id}`);
    }
  };

  const handleSubServiceClick = (e, slug) => {
    e.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    router.push(`/dich-vu/${slug}`);
  };

  const handleSubProjectClick = (e, slug) => {
    e.preventDefault();
    setProjectsDropdownOpen(false);
    setMobileMenuOpen(false);
    router.push(`/du-an/${slug}`);
  };

  const handleMobileNavClick = (e, link) => {
    e.preventDefault();
    if (link.dropdownType === "services") {
      setMobileServicesOpen(!mobileServicesOpen);
      return;
    }

    if (link.dropdownType === "projects") {
      setMobileProjectsOpen(!mobileProjectsOpen);
      return;
    }

    // Đóng menu trước, chờ 140ms cho menu kịp thu lại rồi mới lướt chậm tới vị trí đẹp
    const glideAfterMenuClose = (fn) => {
      setMobileMenuOpen(false);
      setTimeout(fn, 140);
    };

    if (link.id === "hero") {
      glideAfterMenuClose(() => {
        if (pathname === "/") {
          scrollToSection("hero");
        } else {
          router.push("/");
        }
      });
      return;
    }

    if (link.id === "ve-chung-toi") {
      glideAfterMenuClose(() => {
        if (pathname === "/ve-chung-toi" || pathname === "/gioithieu") {
          scrollToSection("hero");
        } else {
          router.push("/ve-chung-toi");
        }
      });
      return;
    }

    if (link.id === "dich-vu") {
      glideAfterMenuClose(() => {
        if (pathname === "/dich-vu" || pathname === "/dichvu") {
          scrollToSection("hero");
        } else {
          router.push("/dich-vu");
        }
      });
      return;
    }

    if (link.id === "du-an") {
      glideAfterMenuClose(() => {
        if (pathname === "/du-an" || pathname === "/duan") {
          scrollToSection("hero");
        } else {
          router.push("/du-an");
        }
      });
      return;
    }

    if (link.id === "tin-tuc") {
      glideAfterMenuClose(() => {
        if (pathname === "/tin-tuc" || pathname === "/tintuc") {
          scrollToSection("hero");
        } else {
          router.push("/tin-tuc");
        }
      });
      return;
    }

    // Các mục section còn lại (VD: Liên hệ)
    glideAfterMenuClose(() => {
      if (pathname === "/") {
        scrollToSection(link.id);
      } else {
        router.push(`/#${link.id}`);
      }
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 transition-all duration-300">
        {/* Seamless backdrop */}
        <div
          className={`absolute inset-0 -z-10 transition-opacity duration-300 ${
            isScrolled
              ? "bg-[#090A0D]/95 backdrop-blur-md border-b border-white/10 shadow-lg opacity-100"
              : "bg-gradient-to-b from-[#090A0D]/80 to-transparent opacity-100"
          }`}
        />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo brand lockup matching user reference image: logo_brand.png + divider + CƠ KHÍ MỸ THUẬT / QUẢNG PHÚ */}
          <a
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              if (pathname === "/") {
                scrollToSection("hero");
              } else {
                router.push("/");
              }
            }}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer select-none"
          >
            <img
              src="/images/logo_brand.png"
              alt="Cơ Khí Mỹ Thuật Quảng Phú"
              className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(211,47,47,0.45)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col border-l border-white/20 pl-2 sm:pl-2.5">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#C1121F] font-extrabold leading-tight">
                CƠ KHÍ MỸ THUẬT
              </span>
              <span className="text-[7.5px] sm:text-[8px] uppercase tracking-wider text-zinc-400 font-normal">
                QUẢNG PHÚ
              </span>
            </div>
          </a>

          {/* Right Navigation Links (Sun Bright layout style: clean, refined, with hand-drawn red sketched oval for active item) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              // Dropdown for Dịch vụ
              if (link.dropdownType === "services") {
                return (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`relative inline-flex items-center gap-1.5 text-[14.5px] tracking-wide transition-colors py-1 cursor-pointer select-none ${
                        isActive
                          ? "text-white font-medium"
                          : "text-zinc-300 hover:text-white font-normal"
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                        {isActive && (
                          <svg
                            className="absolute -inset-x-3 -inset-y-1.5 w-[calc(100%+24px)] h-[calc(100%+12px)] pointer-events-none text-[#C1121F] overflow-visible"
                            viewBox="0 0 110 38"
                            fill="none"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M 16 19 C 12 7, 94 5, 100 18 C 106 30, 14 33, 10 19 C 7 6, 98 7, 104 20 C 108 30, 24 33, 16 23"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              opacity="0.9"
                            />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`text-[8px] transition-transform duration-300 ${
                          servicesDropdownOpen ? "rotate-180 text-[#C1121F]" : "text-zinc-400 group-hover:text-white"
                        }`}
                      >
                        ▼
                      </span>
                    </a>

                    {/* Services Dropdown Menu */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 min-w-60 pt-2 transition-all duration-150 z-50 ${
                        servicesDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#23262C] py-2 shadow-xl">
                        {SERVICES_DATA.map((s) => (
                          <a
                            key={s.id}
                            href={`/dich-vu/${s.slug}`}
                            onClick={(e) => handleSubServiceClick(e, s.slug)}
                            className="block px-5 py-2.5 text-[14px] text-zinc-200 hover:text-white hover:bg-white/5 whitespace-nowrap transition-colors cursor-pointer"
                          >
                            {s.shortTitle}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Dropdown for Dự án
              if (link.dropdownType === "projects") {
                return (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={handleMouseEnterProjects}
                    onMouseLeave={handleMouseLeaveProjects}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`relative inline-flex items-center gap-1.5 text-[14.5px] tracking-wide transition-colors py-1 cursor-pointer select-none ${
                        isActive
                          ? "text-white font-medium"
                          : "text-zinc-300 hover:text-white font-normal"
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                        {isActive && (
                          <svg
                            className="absolute -inset-x-3 -inset-y-1.5 w-[calc(100%+24px)] h-[calc(100%+12px)] pointer-events-none text-[#C1121F] overflow-visible"
                            viewBox="0 0 110 38"
                            fill="none"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M 16 19 C 12 7, 94 5, 100 18 C 106 30, 14 33, 10 19 C 7 6, 98 7, 104 20 C 108 30, 24 33, 16 23"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              opacity="0.9"
                            />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`text-[8px] transition-transform duration-300 ${
                          projectsDropdownOpen ? "rotate-180 text-[#C1121F]" : "text-zinc-400 group-hover:text-white"
                        }`}
                      >
                        ▼
                      </span>
                    </a>

                    {/* Projects Dropdown Menu */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 min-w-60 pt-2 transition-all duration-150 z-50 ${
                        projectsDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#23262C] py-2 shadow-xl">
                        {PROJECTS_DATA.map((p) => (
                          <a
                            key={p.id}
                            href={`/du-an/${p.slug}`}
                            onClick={(e) => handleSubProjectClick(e, p.slug)}
                            className="block px-5 py-2.5 text-[14px] text-zinc-200 hover:text-white hover:bg-white/5 whitespace-nowrap transition-colors cursor-pointer"
                          >
                            {p.shortTitle}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Standard Link (Trang chủ, Về chúng tôi, Tin tức)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative text-[14.5px] tracking-wide transition-colors py-1 cursor-pointer select-none ${
                    isActive
                      ? "text-white font-medium"
                      : "text-zinc-300 hover:text-white font-normal"
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <svg
                        className="absolute -inset-x-3.5 -inset-y-1.5 w-[calc(100%+28px)] h-[calc(100%+12px)] pointer-events-none text-[#C1121F] overflow-visible"
                        viewBox="0 0 120 40"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M 18 20 C 14 7, 102 5, 108 18 C 114 31, 14 34, 10 20 C 7 6, 106 8, 114 22 C 118 32, 28 35, 18 25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.9"
                        />
                      </svg>
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-zinc-200 hover:text-white bg-white/5 border border-white/15 rounded-none cursor-pointer transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0C0D10]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-20 px-6 pb-8 animate-fadeIn overflow-y-auto">
          <div className="flex flex-col">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#C1121F] font-bold mb-4 pb-2 border-b border-white/10 font-mono">
              ĐIỀU HƯỚNG
            </div>
            <nav className="flex flex-col gap-1.5 text-base">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                if (link.dropdownType === "services") {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <button
                        onClick={(e) => handleMobileNavClick(e, link)}
                        className={`flex items-center justify-between font-medium py-3 px-3.5 transition-all cursor-pointer w-full text-left rounded-none ${
                          isActive
                            ? "text-white bg-[#C1121F]/15 border-l-2 border-[#C1121F] font-semibold"
                            : "text-zinc-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className={`text-[10px] transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#C1121F]" : "text-zinc-400"}`}>
                          ▼
                        </span>
                      </button>

                      {/* Sub-services accordion */}
                      {mobileServicesOpen && (
                        <div className="flex flex-col bg-[#23262C] py-1 my-1">
                          {SERVICES_DATA.map((s) => (
                            <a
                              key={s.id}
                              href={`/dich-vu/${s.slug}`}
                              onClick={(e) => handleSubServiceClick(e, s.slug)}
                              className="block px-5 py-2.5 text-[14px] text-zinc-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              {s.shortTitle}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.dropdownType === "projects") {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <button
                        onClick={(e) => handleMobileNavClick(e, link)}
                        className={`flex items-center justify-between font-medium py-3 px-3.5 transition-all cursor-pointer w-full text-left rounded-none ${
                          isActive
                            ? "text-white bg-[#C1121F]/15 border-l-2 border-[#C1121F] font-semibold"
                            : "text-zinc-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className={`text-[10px] transition-transform duration-300 ${mobileProjectsOpen ? "rotate-180 text-[#C1121F]" : "text-zinc-400"}`}>
                          ▼
                        </span>
                      </button>

                      {/* Sub-projects accordion */}
                      {mobileProjectsOpen && (
                        <div className="flex flex-col bg-[#23262C] py-1 my-1">
                          {PROJECTS_DATA.map((p) => (
                            <a
                              key={p.id}
                              href={`/du-an/${p.slug}`}
                              onClick={(e) => handleSubProjectClick(e, p.slug)}
                              className="block px-5 py-2.5 text-[14px] text-zinc-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              {p.shortTitle}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link)}
                    className={`flex items-center justify-between font-medium py-3 px-3.5 transition-all cursor-pointer rounded-none ${
                      isActive
                        ? "text-white bg-[#C1121F]/15 border-l-2 border-[#C1121F] font-semibold"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-[#C1121F]" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href="tel:0961031318"
              className="w-full py-3.5 rounded-none text-white font-semibold text-sm flex items-center justify-center gap-2 bg-[#C1121F] hover:bg-[#A30F1A] transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Hotline: 0961 031 318</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
