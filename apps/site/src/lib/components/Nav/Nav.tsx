"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Text } from "@/lib/components";
import { Space, Icon } from "@/lib/components/Symbols";
import socials from "@/lib/data/socials.json";

import clsx from "clsx";
import cn from "./Nav.module.scss";

const Nav = () => {
  const pathname = usePathname();
  const [mobileExpand, setMobileExpand] = useState(false);
  const toggleMobileExpand = () => {
    setMobileExpand(!mobileExpand);
  };

  return (
    <nav>
      <div className={cn.navSpacer} />
      <div className={cn.nav} mobile-expand={mobileExpand ? "true" : "false"}>
        <div className={clsx("center", cn.wrapper, cn.wide)}>
          <div className={clsx("center", "row", cn.group, cn.left)}>
            {pathname === "/" ? (
              <>
                <Space w="8" />
                {socials.map(({ name, icons, link }) => (
                  <a
                    key={name}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={link}
                    className={clsx("center", cn.item, cn.social)}
                  >
                    <Icon w="24" h="24" hoverable src={icons.nav} />
                  </a>
                ))}
              </>
            ) : (
              <Link href="/" className={clsx("center", cn.item, cn.brand)}>
                <Icon w="24" h="24" src="logo.svg" />
                <Space w="16" />
                <Text>Design at UCI</Text>
              </Link>
            )}
          </div>
          <div className={clsx("center", "row", cn.group)}>
            <Link href="/join" className={clsx("center", cn.item)}>
              <Text>Join</Text>
            </Link>
            <Link href="/events" className={clsx("center", cn.item)}>
              <Text>Events</Text>
            </Link>
            <Link href="/resources" className={clsx("center", cn.item)}>
              <Text>Resources</Text>
            </Link>
            <Link href="/merch" className={clsx("center", cn.item)}>
              <Text>Merch</Text>
            </Link>
          </div>
          <div className={clsx("center", "row", cn.group, cn.right)}>
            <Link href="/about" className={clsx("center", cn.item)}>
              <Text>About</Text>
            </Link>
            <Link href="/contact" className={clsx("center", cn.item)}>
              <Text>Contact</Text>
            </Link>
          </div>
        </div>
        <div className={clsx("center", cn.wrapper, cn.mobile)}>
          <div className={clsx("center", "row", cn.group, cn.left)}>
            {pathname === "/" ? (
              <>
                <Space w="8" />
                {socials.map(({ name, icons, link }) => (
                  <a
                    key={name}
                    href={link}
                    className={clsx("center", cn.item, cn.social)}
                  >
                    <Icon w="24" h="24" hoverable src={icons.nav} />
                  </a>
                ))}
              </>
            ) : (
              <Link href="/" className={clsx("center", cn.item, cn.brand)}>
                <Icon w="24" h="24" src="logo.svg" />
                <Space w="24" />
                <Text>Design at UCI</Text>
              </Link>
            )}
          </div>
          <div className={clsx("center", "row", cn.group, cn.right)}>
            <button
              className={clsx("center", cn.item, cn.navToggle)}
              onClick={toggleMobileExpand}
              style={{
                border: "none",
                display: "inline-block",
                padding: "16px",
              }}
            >
              <Icon w="24" h="24" src="nav-menu.svg" className={cn.icon} />
            </button>
          </div>
          <div className={clsx("spaceChildren", cn.links)}>
            {[
              { label: "Events", url: "/events" },
              { label: "Resources", url: "/resources" },
              { label: "About", url: "/about" },
              { label: "Contact", url: "/contact" },
              { label: "Merch", url: "/merch" },
            ].map(({ label, url }) => (
              <Link key={url} href={url} className={clsx("center", cn.item)}>
                <Text size="L">{label}</Text>
              </Link>
            ))}
            <Link
              href="/join"
              className={clsx(
                "center",
                "fill",
                "sky",
                "button",
                cn.item,
                cn.button
              )}
            >
              <Text size="L">Join</Text>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
