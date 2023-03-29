"use client";

import clsx from "clsx";
import useSWRImmutable from "swr/immutable";

import fallback from "./fallback.svg";
import cn from "./OGImage.module.scss";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export interface OGImageProps {
  url: string;
}
const OGImage = ({ url }: OGImageProps) => {
  const searchParams = new URLSearchParams({
    url,
  });

  const { data, error, isLoading } = useSWRImmutable(
    `/api/fetch-og-image?${searchParams.toString()}`,
    fetcher
  );

  return (
    <>
      {isLoading ? (
        <div className={cn.loading} />
      ) : (
        <div className={cn.image}>
          {error && <img className={cn.fallback} src={fallback.src} alt="" />}
          {data?.ogImage && (
            <img
              className={cn.fill}
              src={data.ogImage.url}
              alt={data.ogImage.alt}
            />
          )}
        </div>
      )}
    </>
  );
};

export default OGImage;
