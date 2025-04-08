import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Carina - Producent Rynien
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Jesteśmy producentem wysokiej jakości systemów rynnowych oraz sztachetek metalowych.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/produkty">
                  <Button>Zobacz produkty</Button>
                </Link>
                <Link href="/kontakt">
                  <Button variant="outline">Kontakt</Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-xl overflow-hidden bg-white border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o17-removebg-preview-o4WRnjHPURMzsAZhuQkaCyYY4EvvrJ.png"
                fill
                alt="Carina produkty"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Nasze produkty</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Oferujemy szeroki wybór produktów najwyższej jakości
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Systemy rynnowe</CardTitle>
                <CardDescription>Wysokiej jakości rynny i akcesoria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-48 bg-white rounded-md overflow-hidden border">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o17-removebg-preview-o4WRnjHPURMzsAZhuQkaCyYY4EvvrJ.png"
                    fill
                    alt="Systemy rynnowe"
                    className="object-contain p-2"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Produkujemy rynny do 4 metrów bieżących, rury do 3 metrów bieżących oraz akcesoria tłoczone.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/produkty/rynny" className="underline hover:opacity-80">
                  <Button size="sm">Dowiedz się więcej</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sztachetki metalowe</CardTitle>
                <CardDescription>Szeroka gama wzorów i kolorów</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-48 bg-white rounded-md overflow-hidden border">
                  <Image src="/images/sztachetki3.jpg" fill alt="Sztachetki metalowe" className="object-contain p-2" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Oferujemy sztachetki metalowe wykonywane w poziomie oraz w pionie, w szerokiej gamie kolorystycznej.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/produkty/sztachetki" className="underline hover:opacity-80">
                  <Button size="sm">Dowiedz się więcej</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Parapety</CardTitle>
                <CardDescription>Parapety zewnętrzne na wymiar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-48 bg-white rounded-md overflow-hidden border">
                  <Image src="/images/parapety3.jpg" fill alt="Parapety zewnętrzne" className="object-contain p-2" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Wykonujemy parapety zewnętrzne na wymiar do 6 metrów bieżących w różnych kolorach.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/produkty/parapety" className="underline hover:opacity-80">
                  <Button size="sm">Dowiedz się więcej</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Gallery Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Popularne produkty</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Zapoznaj się z naszymi najpopularniejszymi produktami
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-40 rounded-md overflow-hidden bg-white border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o1.jpg-CZc8wrH2b6Pc2KDSSo4M3PnGYMbWVh.jpeg"
                alt="Kosz zlewowy"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="relative h-40 rounded-md overflow-hidden bg-white border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o13-removebg-preview-3lgN0sBQokNG0ONd6ozAR8QdB9xq8Z.png"
                alt="Obejma rury"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="relative h-40 rounded-md overflow-hidden bg-white border">
              <Image src="/images/parapety3.jpg" alt="Parapety zewnętrzne" fill className="object-contain p-2" />
            </div>
            <div className="relative h-40 rounded-md overflow-hidden bg-white border">
              <Image src="/images/sztachetki1.jpg" alt="Sztachetki metalowe" fill className="object-contain p-2" />
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/produkty/rynny" className="underline hover:opacity-80">
              <Button>Systemy rynnowe</Button>
            </Link>
            <Link href="/produkty/sztachetki" className="underline hover:opacity-80">
              <Button>Sztachetki metalowe</Button>
            </Link>
            <Link href="/produkty/parapety" className="underline hover:opacity-80">
              <Button>Parapety</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Skontaktuj się z nami</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Jesteśmy gotowi odpowiedzieć na Twoje pytania i pomóc w wyborze odpowiednich produktów.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/kontakt" className="underline hover:opacity-80">
                <Button>Kontakt</Button>
              </Link>
              <Link href="/produkty" className="underline hover:opacity-80">
                <Button variant="outline">Nasze produkty</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
