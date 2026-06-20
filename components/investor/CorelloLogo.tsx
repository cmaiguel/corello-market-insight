import Image from "next/image";

interface Props {
  className?: string;
  /** "light" = white logo for dark backgrounds (default)
   *  "dark"  = black logo for light backgrounds */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  /** Legacy props — ignored, kept for compatibility */
  iconColor?: string;
  textColor?: string;
}

export function CorelloLogo({
  className = "",
  variant = "light",
  size = "md",
}: Props) {
  const heights = { sm: 28, md: 38, lg: 54 };
  const h = heights[size];
  // Logo asset is 542×159 px → aspect ratio ≈ 3.4
  const w = Math.round(h * 3.4);

  const src =
    variant === "dark"
      ? "/brand/corello-logo-dark.png"
      : "/brand/corello-logo-white.png";

  return (
    <div className={`inline-flex items-center ${className}`} style={{ height: h, width: w }}>
      <Image
        src={src}
        alt="Corello"
        width={w}
        height={h}
        style={{ objectFit: "contain", objectPosition: "left center" }}
        priority
      />
    </div>
  );
}
