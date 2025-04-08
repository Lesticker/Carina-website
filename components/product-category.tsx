import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface Product {
  id: string
  name: string
  image: string
  description: string
}

interface ProductCategoryProps {
  title: string
  description: string
  products: Product[]
  viewAllLink: string
}

export default function ProductCategory({ title, description, products, viewAllLink }: ProductCategoryProps) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
            <p className="text-muted-foreground max-w-[800px]">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full bg-white rounded-md overflow-hidden border">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/produkty/${product.id}`}>
                  <Button variant="outline" size="sm">
                    Zobacz szczegóły
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href={viewAllLink}>
            <Button>Zobacz wszystkie</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
