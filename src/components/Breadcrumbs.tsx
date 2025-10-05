import { Fragment, useMemo } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  className?: string;
}

export const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
  const location = useLocation();

  const items = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    if (segments.length === 0) return [];

    let currentPath = "";
    const crumbs = [
      { label: "Home", path: "/" },
    ];

    const segmentOverrides: Record<string, { label?: string; path?: string | null }> = {
      editor: { label: "Editor", path: "/dashboard" },
    };

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      const override = segmentOverrides[segment];
      const label = override?.label
        ?? segment
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" ");

      const resolvedPath = override?.path === undefined ? currentPath : override.path;

      crumbs.push({ label, path: isLast ? undefined : resolvedPath || undefined });
    });

    return crumbs;
  }, [location.pathname]);

  if (items.length === 0) return null;

  return (
    <nav className={cn("flex items-center text-xs sm:text-sm text-muted-foreground gap-1", className)} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <Fragment key={`${item.label}-${index}`}>
          {index > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
          {item.path ? (
            <Link to={item.path} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
};
