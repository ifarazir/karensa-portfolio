import { cn } from "@/lib/utils";

/**
 * Decorative macOS-style window title bar used at the top of each section.
 * The three "traffic light" dots are purely cosmetic (kept monochrome to
 * match the black/white brand) and carry no interaction.
 */
export default function WindowBar({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b border-border px-5 py-3 sm:px-8 lg:px-10",
        className
      )}
    >
      <div aria-hidden className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full border border-foreground/25 bg-foreground/[0.07]" />
        <span className="h-3 w-3 rounded-full border border-foreground/25 bg-foreground/[0.07]" />
        <span className="h-3 w-3 rounded-full border border-foreground/25 bg-foreground/[0.07]" />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
