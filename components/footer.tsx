import Link from "next/link"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex items-start">
            <Logo size="xl" color="copper" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Kontakt</h3>
              <p className="text-sm text-muted-foreground">
                42-280 Częstochowa
                <br />
                ul. Tatrzańska 15
                <br />
                tel:{" "}
                <a href="tel:+48572597757" className="underline hover:opacity-80">
                  +48 572 597 757
                </a>
                <br />
                e-mail:{" "}
                <a href="mailto:firma-carina@wp.pl" className="underline hover:opacity-80">
                  firma-carina@wp.pl
                </a>
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Nawigacja</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-sm text-muted-foreground hover:opacity-80 underline">
                  O nas
                </Link>
                <Link href="/produkty" className="text-sm text-muted-foreground hover:opacity-80 underline">
                  Produkty
                </Link>
                <Link href="/galeria" className="text-sm text-muted-foreground hover:opacity-80 underline">
                  Galeria
                </Link>
                <Link href="/kontakt" className="text-sm text-muted-foreground hover:opacity-80 underline">
                  Kontakt
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Carina. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2">
            <Link href="/polityka-prywatnosci" className="underline hover:opacity-80">
              Polityka Prywatności
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
