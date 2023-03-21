import type { QueryResult } from "./page";
import { Icon } from "@/lib/components/Symbols";

import { client } from "@/lib/sanity/public";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);

import cn from "./Profile.module.scss";

interface ProfileProps {
  textOnly?: boolean;
  member: QueryResult[0]["members"][0] | QueryResult[0]["interns"][0];
}

const Profile = ({ textOnly = false, member }: ProfileProps) => (
  <div className={cn.container}>
    {!textOnly && (
      <div className={cn.aspect}>
        <img
          src={builder
            .image(member.person.image)
            .size(256, 256)
            .format("webp")
            .url()}
          alt={member.person.name + " headshot"}
        />
      </div>
    )}
    <p>
      {member.person.name}
      <br />
      <span>{member.title}</span>
    </p>

    <div className={cn.socials}>
      {member.person.links?.map(({ _key, type, url }) => (
        <a key={_key} target="_blank" rel="noopener noreferrer" href={url}>
          <Icon hoverable src={`nav-${type}.svg`} w="20" h="20" />
        </a>
      ))}
    </div>
  </div>
);

export default Profile;
