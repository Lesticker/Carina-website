"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import LogoLink from "./logo-link"
import { useState } from "react"

export default function Navbar() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center">
          <LogoLink size="md" color="copper" />
        </div>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-xl font-medium underline hover:opacity-80" onClick={closeSheet}>
                  O nas
                </Link>
                <Link href="/produkty" className="text-xl font-medium underline hover:opacity-80" onClick={closeSheet}>
                  Produkty
                </Link>
                <Link href="/galeria" className="text-xl font-medium underline hover:opacity-80" onClick={closeSheet}>
                  Galeria
                </Link>
                <Link href="/kontakt" className="text-xl font-medium underline hover:opacity-80" onClick={closeSheet}>
                  Kontakt
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-8">
            <Link href="/" className="text-lg font-medium underline hover:opacity-80">
              O nas
            </Link>
            <Link href="/produkty" className="text-lg font-medium underline hover:opacity-80">
              Produkty
            </Link>
            <Link href="/galeria" className="text-lg font-medium underline hover:opacity-80">
              Galeria
            </Link>
            <Link href="/kontakt" className="text-lg font-medium underline hover:opacity-80">
              Kontakt
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
