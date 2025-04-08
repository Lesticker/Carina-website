"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  if (!showConsent) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/90 text-white shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1 pr-4">
          <p className="text-sm">
            Ta strona używa plików cookies, aby zapewnić najlepsze doświadczenie użytkownika. Korzystając z naszej
            strony, wyrażasz zgodę na używanie plików cookies zgodnie z naszą{" "}
            <Link href="/polityka-prywatnosci" className="underline hover:text-gray-300">
              polityką prywatności
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button onClick={acceptCookies} className="whitespace-nowrap">
            Akceptuję
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={acceptCookies}
            className="bg-transparent text-white border-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Zamknij</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
