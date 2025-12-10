import { cn } from "@/lib/utils";

const SIZE_MAP: Record<string, string> = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-32 w-32",
  xl: "h-40 w-40",
};

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  className?: string;
  sizeClass?: string;
  size?: string | number; // Support both string presets and number
  borderClass?: string;
  style?: React.CSSProperties;
}

export const ProfilePhoto = ({
  src,
  alt = "Profile",
  className,
  sizeClass,
  size,
  borderClass = "border-4 border-white",
  style,
}: ProfilePhotoProps) => {
  if (!src) return null;

  // Determine size class
  let resolvedSize = sizeClass || "h-24 w-24";
  if (size) {
    if (typeof size === "string" && SIZE_MAP[size]) {
      resolvedSize = SIZE_MAP[size];
    } else if (typeof size === "number") {
      resolvedSize = `h-${size} w-${size}`;
    } else if (typeof size === "string") {
      // Direct class string like "h-20 w-20"
      resolvedSize = size;
    }
  }

  return (
    <div
      className={cn(
        "rounded-full overflow-hidden bg-muted flex items-center justify-center shadow-lg",
        resolvedSize,
        borderClass,
        className,
      )}
      style={style}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
};