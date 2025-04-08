import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt - Carina Systemy Rynnowe",
  description:
    "Skontaktuj się z firmą Carina - producentem systemów rynnowych. Adres: ul. Tatrzańska 15, 42-280 Częstochowa. Telefon: +48 572 597 757. Email: firma-carina@wp.pl",
  keywords: ["kontakt", "Carina", "systemy rynnowe", "Częstochowa", "adres", "telefon", "email"],
  openGraph: {
    title: "Kontakt - Carina Systemy Rynnowe",
    description:
      "Skontaktuj się z firmą Carina - producentem systemów rynnowych. Adres: ul. Tatrzańska 15, 42-280 Częstochowa.",
    url: "https://www.carina.czest.pl/kontakt",
    type: "website",
  },
}

export default function KontaktPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kontakt</h1>
          <p className="text-xl text-muted-foreground">
            Skontaktuj się z nami, aby uzyskać więcej informacji o naszych produktach
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Adres
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Zakład Handlowo - Usługowo - Produkcyjny
                <br />
                <strong>CARINA</strong>
                <br />
                42-280 Częstochowa
                <br />
                ul. Tatrzańska 15
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Telefon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                tel:{" "}
                <a href="tel:+48572597757" className="underline hover:opacity-80">
                  +48 572 597 757
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                <a href="mailto:firma-carina@wp.pl" className="underline hover:opacity-80">
                  firma-carina@wp.pl
                </a>
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Godziny otwarcia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-medium">Poniedziałek - Piątek</h3>
                <p className="text-muted-foreground">Sezon zimowy: 8:00 - 15:00</p>
                <p className="text-muted-foreground">Sezon letni: 7:00 - 15:00</p>
              </div>
              <div>
                <h3 className="font-medium">Sobota</h3>
                <p className="text-muted-foreground">8:00 - 12:00</p>
              </div>
              <div>
                <h3 className="font-medium">Niedziela</h3>
                <p className="text-muted-foreground">Zamknięte</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Jak do nas dojechać</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.6982282646256!2d19.047696376944837!3d50.80165497165622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b5c1f02b5e49%3A0x15a1b7c5a5c0a0a0!2sTatrza%C5%84ska%2015%2C%2042-200%20Cz%C4%99stochowa!5e0!3m2!1spl!2spl!4v1710252024123!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
