import Link from "next/link";

import EmailForm from "./EmailForm";
import { InView, Text } from "@/lib/components";
import { Section, Icon, PageIcon } from "@/lib/components/Symbols";
import SHORT_SOCIALS from "@/lib/data/shortSocials.json";

import cn from "./page.module.scss";

export const metadata = {
  title: "Join – Design at UCI",
};

const Join = () => (
  <>
    <Section className="center short bareBot">
      <Text size="XXL" className="wait show scale rainbow l3">
        <Text size="XXL" className="wait show dx bold color blue">
          Get Involved
        </Text>
      </Text>
      <Text color="orange" className="wait show dx subtle">
        Design at UCI is free for everyone
      </Text>
      <Text color="gray" className="wait show slim dx subtle">
        Join our newsletter and follow our social media to get notifications
        about what's happening.
        <br />
        Then get invovled with what interests you!
      </Text>
    </Section>
    <Section className="center short bareBot">
      <div
        className="flex wait show card L fill sky slim spaceChildren"
        style={{ boxShadow: "0 12px 24px -12px var(--sky)" }}
      >
        <Text color="blue" className="bold" size="L">
          Newsletter Sign-up
        </Text>
        <EmailForm />
      </div>
      <div className="split4 slim maxWidth" style={{ gap: "32px" }}>
        {SHORT_SOCIALS.map((social) => (
          <InView triggerOnce={true}>
            <a
              key={social.link}
              target="_blank"
              rel="noopener noreferrer"
              href={social.link}
              className="relative flex dx card L slim spaceChildrenSmall"
              style={social.bg}
            >
              <PageIcon color={social.color} className={cn.icon} />
              <Icon w="48" h="48" src={social.icon} />
              <Text className="bold" size="L">
                {social.name}
              </Text>
            </a>
          </InView>
        ))}
      </div>
    </Section>
    <Section className="center">
      <InView triggerOnce={true}>
        <Text className="scale dx" size="XL">
          We can't wait to see you at our next event!
        </Text>
      </InView>
      <InView triggerOnce={true}>
        <Link className="dx" href="/events">
          <Text icon="right" color="blue">
            Check out our events tab
          </Text>
        </Link>
      </InView>
      <InView triggerOnce={true}>
        <Link className="dx" href="/resources">
          <Text icon="right" color="blue">
            Explore our other resources
          </Text>
        </Link>
      </InView>
    </Section>
  </>
);

export default Join;
