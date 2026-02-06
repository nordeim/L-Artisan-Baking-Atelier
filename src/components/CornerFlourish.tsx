import { cn } from "@/utils/cn";

interface CornerFlourishProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  isLight?: boolean;
}

export function CornerFlourish({ position, className, isLight }: CornerFlourishProps) {
  const positionClasses = {
    "top-left": "top-3 left-3",
    "top-right": "top-3 right-3 -scale-x-100",
    "bottom-left": "bottom-3 left-3 -scale-y-100",
    "bottom-right": "bottom-3 right-3 -scale-x-100 -scale-y-100",
  };

  const strokeColor = isLight ? "#8C7A3C" : "#C9A84C";

  return (
    <svg
      className={cn("corner-flourish", positionClasses[position], className)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Peranakan-inspired corner geometry — interlocking diamonds */}
      <path
        d="M2 2 L14 2 L14 6 L6 6 L6 14 L2 14 Z"
        stroke={strokeColor}
        strokeWidth="0.75"
        fill="none"
      />
      <path
        d="M8 8 L20 8 L20 12 L12 12 L12 20 L8 20 Z"
        stroke={strokeColor}
        strokeWidth="0.5"
        fill="none"
        opacity="0.6"
      />
      <line x1="2" y1="2" x2="8" y2="8" stroke={strokeColor} strokeWidth="0.5" opacity="0.4" />
      <circle cx="4" cy="4" r="1" fill={strokeColor} opacity="0.3" />
    </svg>
  );
}
