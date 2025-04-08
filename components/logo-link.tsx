import Link from "next/link"
import Logo from "./logo"

interface LogoLinkProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  color?: "light" | "dark" | "copper"
}

export default function LogoLink({ className, size, color = "copper" }: LogoLinkProps) {
  return (
    <Link href="/" className={className}>
      <Logo size={size} color={color} />
    </Link>
  )
}
