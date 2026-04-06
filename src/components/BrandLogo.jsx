import logo from "../assets/bookmyevent-logo.png";

const sizeClass = {
  nav: "h-10 w-10 md:h-11 md:w-11",
  footer: "h-12 w-12",
  auth: "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]",
};

/**
 * Logo: crisp on dark UI — soft ring, cyan glow, light lift shadow.
 * Uses object-contain so the asset is not cropped.
 */
export default function BrandLogo({
  size = "nav",
  alt = "BookMyEvent",
  className = "",
}) {
  return (
    <span
      className={[
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl",
        "bg-black",
        "ring-1 ring-white/20 ring-offset-2 ring-offset-black",
        "shadow-[0_2px_12px_-2px_rgba(0,0,0,0.85),0_0_28px_-6px_rgba(56,189,248,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
        "transition-[box-shadow,transform] duration-300 will-change-transform",
        "hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.9),0_0_40px_-4px_rgba(56,189,248,0.55),inset_0_1px_0_0_rgba(255,255,255,0.15)]",
        "hover:ring-sky-400/40",
        className,
      ].join(" ")}
    >
      <img
        src={logo}
        alt={alt}
        width={256}
        height={256}
        decoding="async"
        className={[
          sizeClass[size] ?? sizeClass.nav,
          "scale-[1.02] object-contain brightness-[1.06] contrast-[1.05] saturate-[1.05]",
          "drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]",
        ].join(" ")}
      />
    </span>
  );
}
