"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Text } from "@/lib/components";
import { Space, Icon } from "@/lib/components/Symbols";
import socials from "@/lib/data/socials.json";

import "./Nav.scss";

const Nav = () => {
  const pathname = usePathname();
  const [mobileExpand, setMobileExpand] = useState(false);
  const toggleMobileExpand = () => {
    setMobileExpand(!mobileExpand);
  };
  if (pathname === "/designathon22/" || pathname === "/designathon22")
    return <></>;

  return (
    <nav>
      <div id="navSpacer" />
      <div id="nav" mobile-expand={mobileExpand ? "true" : "false"}>
        <div className="wrapper center wide">
          <div className="center row group left">
            {pathname === "/" ? (
              <>
                <Space w="8" />
                {socials.map(({ name, icons, link }) => (
                  <a
                    key={name}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={link}
                    className="item social center"
                  >
                    <Icon w="24" h="24" hoverable src={icons.nav} />
                  </a>
                ))}
              </>
            ) : (
              <Link href="/" className="item center brand">
                <Icon w="24" h="24" src="logo.svg" />
                <Space w="16" />
                <Text>Design at UCI</Text>
              </Link>
            )}
          </div>
          <div className="center row group">
            <Link href="/join" className="item center">
              <Text>Join</Text>
            </Link>
            <Link href="/events" className="item center">
              <Text>Events</Text>
            </Link>
            <Link href="/resources" className="item center">
              <Text>Resources</Text>
            </Link>
            <Link href="/merch" className="item center">
              <Text>Merch</Text>
            </Link>
          </div>
          <div className="center row group right">
            <Link href="/about" className="item center">
              <Text>About</Text>
            </Link>
            <Link href="/contact" className="item center">
              <Text>Contact</Text>
            </Link>
          </div>
        </div>
        <div className="wrapper center mobile">
          <div className="center row group left">
            {pathname === "/" ? (
              <>
                <Space w="8" />
                {socials.map(({ name, icons, link }) => (
                  <a key={name} href={link} className="item social center">
                    <Icon w="24" h="24" hoverable src={icons.nav} />
                  </a>
                ))}
              </>
            ) : (
              <Link href="/" className="item center brand">
                <Icon w="24" h="24" src="logo.svg" />
                <Space w="24" />
                <Text>Design at UCI</Text>
              </Link>
            )}
          </div>
          <div className="center row group right">
            <button
              className="item center"
              id="navToggle"
              onClick={toggleMobileExpand}
              style={{
                border: "none",
                display: "inline-block",
                padding: "16px",
              }}
            >
              <Icon w="24" h="24" src="nav-menu.svg" />
            </button>
          </div>
          <div className="links spaceChildren">
            {[
              { label: "Events", url: "/events" },
              { label: "Resources", url: "/resources" },
              { label: "About", url: "/about" },
              { label: "Contact", url: "/contact" },
              { label: "Merch", url: "/merch" },
            ].map(({ label, url }) => (
              <Link key={url} href={url} className="item center">
                <Text size="L">{label}</Text>
              </Link>
            ))}
            <Link href="/join" className="item center button fill sky">
              <Text size="L">Join</Text>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
