import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> & {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  onError?: ImgHTMLAttributes<HTMLImageElement>["onError"];
};

export function Image({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority,
  sizes: _sizes,
  ...rest
}: ImageProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
        {...rest}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      {...rest}
    />
  );
}

export default Image;
