import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O nas - Carina Systemy Rynnowe",
  description:
    "Z.H.U.P. CARINA zajmuje się produkcją systemów rynnowych oraz obróbek blacharskich pod zamówienie do 6 mb. Tradycja zakładu sięga 1986 roku.",
  keywords: ["Carina", "systemy rynnowe", "obróbki blacharskie", "miedź", "tytan-cynk", "ocynk", "Częstochowa"],
  openGraph: {
    title: "O nas - Carina Systemy Rynnowe",
    description:
      "Z.H.U.P. CARINA zajmuje się produkcją systemów rynnowych oraz obróbek blacharskich pod zamówienie do 6 mb. Tradycja zakładu sięga 1986 roku.",
    url: "https://www.carina.czest.pl",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">O nas</h1>
          <p className="text-xl text-muted-foreground">
            <strong>Systemy rynnowe CARINA</strong> produkowane w Z.H.U.P. CARINA to najtrwalsze systemy odwodnienia
            dachów
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Z.H.U.P. CARINA zajmuje się produkcją systemów rynnowych oraz produkcją obróbek blacharskich pod zamówienie
            do 6 mb. Tradycja zakładu sięga 1986 roku, w którym to właściciel Jerzy Gliński rozpoczął działalność
            gospodarczą.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>OCYNK</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Systemy te wykonane z blachy ocynkowanej są tradycyjnymi systemami rynnowymi. Blacha ocynkowana jest
                stosowana przez dekarzy w naszym kraju od bardzo wielu lat. Ten system jest najpopularniejszym i
                najtańszym, zachowuje dobrą jakość do 30 lat.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TYTAN-CYNK</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Systemy te wykonane z blachy tytanowo-cynkowej wyróżniają się najwyższą jakością i trwałością. Materiał
                ten zawiera około 90% stopu cynku i około 1% tytanu, miedzi i aluminium. Nie konserwowana blacha
                zachowuje dobrą jakość do 80 a nawet 120 lat w zależności od warunków atmosferycznych. Materiał ten
                wystawiony na działanie czynników atmosferycznych pokrywa się patyną.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>MIEDŹ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Systemy te wykonane z miedzi są najtrwalsze. Ich trwałość szacuje się na okres 200 do 300 lat. Materiał
                ten wystawiony na działanie czynników atmosferycznych pokrywa się patyną, która trwale chroni miedź
                przed szkodliwym ich działaniem.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>OCYNK MALOWANY PROSZKOWO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Systemy te wykonane są z blachy ocynkowanej i malowanej proszkowo. Kolory według indywidualnego
                zamówienia. System ten jest bardzo trwały.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">Nasze doświadczenie</h2>
          <p className="text-lg text-muted-foreground">
            Od 1986 roku dostarczamy najwyższej jakości systemy rynnowe i obróbki blacharskie. Nasza wieloletnia
            tradycja i doświadczenie pozwalają nam oferować produkty najwyższej jakości, które spełniają oczekiwania
            nawet najbardziej wymagających klientów.
          </p>
        </div>
      </div>
    </div>
  )
}
