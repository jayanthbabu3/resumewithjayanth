import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  src?: string;
  className?: string;
  sizeClass?: string;
  borderClass?: string;
}

export const ProfilePhoto = ({
  src,
  className,
  sizeClass = "h-24 w-24",
  borderClass = "border-4 border-white",
}: ProfilePhotoProps) => {
  if (!src) return null;

  return (
    <div
      className={cn(
        "rounded-full overflow-hidden bg-muted flex items-center justify-center shadow-lg",
        sizeClass,
        borderClass,
        className,
      )}
    >
      <img src={src} alt="Profile" className="h-full w-full object-cover" />
    </div>
  );
};
