import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getCategories } from "@/lib/products"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Produkty - Systemy Rynnowe, Parapety i Sztachetki",
  description:
    "Oferujemy wysokiej jakości systemy rynnowe, parapety, sztachetki metalowe i obróbki blacharskie. Produkty z miedzi, tytan-cynku i stali ocynkowanej.",
  keywords: [
    "systemy rynnowe",
    "rynny",
    "parapety",
    "sztachetki metalowe",
    "obróbki blacharskie",
    "miedź",
    "tytan-cynk",
    "stal ocynkowana",
  ],
  openGraph: {
    title: "Produkty - Systemy Rynnowe, Parapety i Sztachetki | Carina",
    description:
      "Oferujemy wysokiej jakości systemy rynnowe, parapety, sztachetki metalowe i obróbki blacharskie. Produkty z miedzi, tytan-cynku i stali ocynkowanej.",
    url: "https://www.carina.czest.pl/produkty",
    type: "website",
  },
}

export default function ProduktyPage() {
  const categories = getCategories()

  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nasze produkty</h1>
          <p className="text-xl text-muted-foreground">Produkujemy wysokiej jakości systemy rynnowe i akcesoria</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Produkujemy:</h2>
          <ul className="ml-6 list-disc space-y-2">
            <li className="text-lg">rynny do 4 metrów bieżących</li>
            <li className="text-lg">rury do 3 metrów bieżących</li>
            <li className="text-lg">akcesoria tłoczone</li>
            <li className="text-lg">obróbki blacharskie do 6 metrów bieżących</li>
            <li className="text-lg">parapety do 6 metrów bieżących</li>
            <li className="text-lg">sztachetki metalowe w różnych wzorach i kolorach</li>
          </ul>
          <p className="text-lg font-medium mt-4">Szeroki wybór grubości i kolorów blach</p>
          <p className="text-lg font-medium">Miedź, tytan-cynk, ocynk, ocynk malowany proszkowo</p>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Indywidualne zamówienia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Wykonujemy zlecenia obróbek blacharskich do 6 metrów w indywidualnym kształcie, w tym parapety oraz rynny
              z wulstą do środka pod zamówienie.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {categories.map((category) => (
            <Card key={category.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                {/* Removed the description paragraph */}
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative h-48 w-full overflow-hidden rounded-md bg-white border">
                  {category.products && category.products.length > 0 ? (
                    <Image
                      src={category.products[0].image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt={category.name}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href={`/produkty/${category.id}`}>
                  <Button className="w-full underline hover:opacity-80">Zobacz produkty</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
