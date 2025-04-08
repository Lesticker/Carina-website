import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-gray-900 shadow-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        copper:
          "relative text-white before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#e6c8b0] before:via-[#c87533] before:to-[#723c17] before:rounded-md before:-z-10 after:absolute after:inset-0 after:bg-gradient-to-tr after:from-[#f0d6bc]/30 after:via-transparent after:to-[#723c17]/40 after:rounded-md after:-z-10 hover:before:brightness-110 hover:after:brightness-110 shadow-md",
        copperOutline: "border-[3px] border-[#c87533] text-[#c87533] hover:bg-[#f8f0e8] hover:text-[#b06020]",
        copperShiny:
          "relative overflow-hidden text-white bg-gradient-to-br from-[#f0d6bc] via-[#d68035] to-[#a05010] before:brightness-110 after:opacity-70 shadow-md transition-all duration-200 hover:from-[#e0b8a0] hover:via-[#b86525] hover:to-[#804000]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
