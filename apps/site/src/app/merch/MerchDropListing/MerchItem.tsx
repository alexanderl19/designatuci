import Link from "next/link";

import { Text } from "@/lib/components";

import cn from "./MerchItem.module.scss";

const MerchItem = ({ path, ...item }) => (
  <div key={item.name} className={cn.container}>
    <div className={cn.aspect}>
      <img
        className={cn.photo}
        // Leaving photos in public folder until content in migrated to Sanity.
        src={`/merch/${path}/${item.photo}`}
        alt={item.name}
      />
    </div>
    {/* Currently not adding the holo effect since it requires some planning to incorporate cleanly. @TODO */}
    {/* {item?.type === 'holo' && (
			<>
				<Photo
					className={clsx(cn['holo-effect1'], 'background')}
					src='Sf21-frozen-effect1.png'
				/>
				<Photo
					className={clsx(cn['holo-effect2'], 'background')}
					src='Sf21-frozen-effect2.png'
				/>
			</>
		)} */}
    <div className={cn.content}>
      <Text>{item?.name}</Text>
      {item?.note?.type === "link" ? (
        <Link href={"/merch" + item.note.href}>
          <Text className="color blue">{item.note.content}</Text>
        </Link>
      ) : (
        <Text className="color blue">{item?.note}</Text>
      )}
    </div>
  </div>
);

export default MerchItem;
