import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getCategories } from "@/lib/products"
import ImageCarousel from "@/components/image-carousel"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categories = getCategories()
  const category = categories.find((c) => c.id === params.category)

  if (!category) {
    notFound()
  }

  // Special handling for sztachetki and parapety categories
  const isSpecialCategory = params.category === "sztachetki" || params.category === "parapety"

  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-4">
          <Link href="/produkty">
            <Button className="flex items-center gap-1 text-lg">
              <span>←</span> Powrót do wszystkich produktów
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{category.name}</h1>
            <p className="text-xl text-muted-foreground mt-2">{category.description}</p>
          </div>
        </div>

        <div className="mt-8">
          {isSpecialCategory ? (
            // Special layout for sztachetki and parapety with image carousel
            <div className="space-y-8">
              {category.products?.map((product, productIndex) => (
                <div key={productIndex} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <p className="text-lg text-muted-foreground">{product.description}</p>

                    <div className="mt-4 space-y-2">
                      <div>
                        <h4 className="font-medium text-lg">Materiały:</h4>
                        <p className="text-base text-muted-foreground">{product.materials.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Rozmiary:</h4>
                        <p className="text-base text-muted-foreground">{product.sizes.join(", ")}</p>
                      </div>
                    </div>
                  </div>

                  {product.images && <ImageCarousel images={product.images} alt={product.name} className="mt-6" />}
                </div>
              ))}
            </div>
          ) : (
            // Normal layout for other categories
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products?.map((product, index) => (
                <div key={index} className="flex flex-col space-y-4 border rounded-lg p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>

                  <div className="relative h-48 w-full overflow-hidden rounded-md bg-white border">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="space-y-2 mt-auto">
                    <div>
                      <h4 className="font-medium text-sm">Materiały:</h4>
                      <p className="text-xs text-muted-foreground">{product.materials.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Rozmiary:</h4>
                      <p className="text-xs text-muted-foreground">{product.sizes.join(", ")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
