import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  color?: "light" | "dark" | "copper"
}

export default function Logo({ className, size = "md", color = "dark" }: LogoProps) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-16 w-16",
    lg: "h-24 w-24",
    xl: "h-36 w-36",
  }

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  }

  const colors = {
    light: "text-white",
    dark: "text-zinc-900",
    copper: "text-[#b87333]",
  }

  // Copper colors extracted from the image
  const copperHighlight = "#e6c8b0" // Bright copper highlight
  const copperMid = "#c87533" // Medium copper tone
  const copperDark = "#723c17" // Dark copper shadow
  const copperEdge = "#f0d6bc" // Bright edge highlight

  // Default colors for light/dark modes
  const primaryColor = color === "light" ? "#ffffff" : "#18181b" // white or zinc-900
  const lightColor = color === "light" ? "#ffffff" : "#6366f1" // bright highlight
  const midColor = color === "light" ? "#d1d5db" : "#4b5563" // mid tone
  const darkColor = color === "light" ? "#6b7280" : "#1f2937" // dark shadow
  const edgeColor = color === "light" ? "#ffffff" : "#818cf8" // edge highlight

  // Select color scheme based on the color prop
  const useHighlight = color === "copper" ? copperHighlight : lightColor
  const useMid = color === "copper" ? copperMid : midColor
  const useDark = color === "copper" ? copperDark : darkColor
  const useEdge = color === "copper" ? copperEdge : edgeColor

  // Background color for the C
  const bgColor = color === "copper" ? "#f8f0e8" : "white"
  const darkBgColor = color === "copper" ? "#723c17" : "#18181b"

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(sizes[size], "shrink-0")}>
        <defs>
          {/* Top triangle gradient */}
          <linearGradient id="topLeftGradient" x1="14" y1="14" x2="20" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={useMid} />
            <stop offset="100%" stopColor={useHighlight} />
          </linearGradient>
          <linearGradient id="topRightGradient" x1="26" y1="14" x2="20" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={useMid} />
            <stop offset="100%" stopColor={useDark} />
          </linearGradient>

          {/* Right triangle gradient */}
          <linearGradient id="rightTopGradient" x1="26" y1="14" x2="40" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={useMid} />
            <stop offset="100%" stopColor={useHighlight} />
          </linearGradient>
          <linearGradient id="rightBottomGradient" x1="26" y1="26" x2="40" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={useMid} />
            <stop offset="100%" stopColor={useDark} />
          </linearGradient>

          {/* Bottom triangle gradient */}
          <linearGradient id="bottomLeftGradient" x1="14" y1="26" x2="20" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={useMid} />
            <stop offset="100%" stopColor={useDark} />
          </linearGradient>
          <linearGradient id="bottomRightGradient" x1="26" y1="26" x2="20" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={useMid} />
            <stop offset="100%" stopColor={useHighlight} />
          </linearGradient>

          {/* Left triangle gradient */}
          <linearGradient id="leftTopGradient" x1="14" y1="14" x2="0" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={useMid} />
            <stop offset="100%" stopColor={useDark} />
          </linearGradient>
          <linearGradient id="leftBottomGradient" x1="14" y1="26" x2="0" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={useMid} />
            <stop offset="100%" stopColor={useHighlight} />
          </linearGradient>

          {/* Gradient for 3D C letter */}
          <linearGradient id="cGradient" x1="16" y1="16" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={useHighlight} />
            <stop offset="100%" stopColor={useDark} />
          </linearGradient>

          {/* Filter for embossed C */}
          <filter id="emboss" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
            <feOffset in="blur" dx="0.5" dy="0.5" result="offsetBlur" />
            <feSpecularLighting
              in="blur"
              surfaceScale="5"
              specularConstant="0.5"
              specularExponent="20"
              lightingColor="#ffffff"
              result="specOut"
            >
              <fePointLight x="25" y="15" z="20" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
            <feComposite
              in="SourceGraphic"
              in2="specOut"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
              result="litPaint"
            />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="litPaint" />
            </feMerge>
          </filter>
        </defs>

        {/* Top point - split into two faces */}
        <path d="M20 0L14.1436 14.1436L20 20L20 0Z" fill="url(#topLeftGradient)" />
        <path d="M20 0L25.8564 14.1436L20 20L20 0Z" fill="url(#topRightGradient)" />

        {/* Right point - split into two faces */}
        <path d="M40 20L25.8564 14.1436L20 20L40 20Z" fill="url(#rightTopGradient)" />
        <path d="M40 20L25.8564 25.8564L20 20L40 20Z" fill="url(#rightBottomGradient)" />

        {/* Bottom point - split into two faces */}
        <path d="M20 40L14.1436 25.8564L20 20L20 40Z" fill="url(#bottomLeftGradient)" />
        <path d="M20 40L25.8564 25.8564L20 20L20 40Z" fill="url(#bottomRightGradient)" />

        {/* Left point - split into two faces */}
        <path d="M0 20L14.1436 14.1436L20 20L0 20Z" fill="url(#leftTopGradient)" />
        <path d="M0 20L14.1436 25.8564L20 20L0 20Z" fill="url(#leftBottomGradient)" />

        {/* Edge highlights */}
        <path
          d="M20 0L14.1436 14.1436M20 0L25.8564 14.1436M40 20L25.8564 14.1436M40 20L25.8564 25.8564M20 40L14.1436 25.8564M20 40L25.8564 25.8564M0 20L14.1436 14.1436M0 20L14.1436 25.8564"
          stroke={useEdge}
          strokeWidth="0.5"
          strokeOpacity="0.8"
        />

        {/* Circle background for C */}
        <circle
          cx="20"
          cy="20"
          r="7"
          fill={bgColor}
          className={`${color === "copper" ? "" : "fill-white dark:fill-zinc-900"}`}
        />

        {/* 3D C letter with embossed effect */}
        <g filter="url(#emboss)">
          {/* Main C shape with gradient fill */}
          <path
            d="M23.5 17.5C22.3333 16.3333 21 16 20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24C21 24 22.3333 23.6667 23.5 22.5"
            stroke={color === "copper" ? useMid : "currentColor"}
            strokeWidth="2.5"
            strokeLinecap="round"
            className={color === "copper" ? "" : cn("stroke-current", colors[color])}
          />

          {/* Thinner inner C for depth */}
          <path
            d="M23 18C21.8333 16.8333 20.5 16.5 19.5 16.5C17.567 16.5 16 18.067 16.5 20C16.5 21.933 17.567 23.5 19.5 23.5C20.5 23.5 21.8333 23.1667 23 22"
            stroke={color === "copper" ? useHighlight : "currentColor"}
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeOpacity="0.7"
            className={color === "copper" ? "" : cn("stroke-current", colors[color])}
          />
        </g>
      </svg>
      <span className={cn("font-bold tracking-wide mt-1", textSizes[size], colors[color])}>CARINA</span>
    </div>
  )
}
