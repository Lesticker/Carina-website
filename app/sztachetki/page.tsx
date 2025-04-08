import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SztachetkiPage() {
  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sztachetki wystawa",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sztachetki wystawa biała",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Wzory sztachetek",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sztachetki poziome wystawa 1",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sztachetki poziome wystawa 2",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sztachetki poziome wystawa 3",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sztachetki poziome wystawa 4",
    },
  ]

  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sztachetki blaszane</h1>
          <p className="text-xl text-muted-foreground">
            Wysokiej jakości sztachetki metalowe w różnych wzorach i kolorach
          </p>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Informacje o sztachetkach</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">Sztachetki wykonywane są w poziomie oraz w pionie.</p>
            <p className="text-lg">Szeroka gama kolorystyczna.</p>
            <p className="text-lg">Długość wykonywana według zamówienia.</p>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg border">
              <Image
                src={image.src || "/placeholder.svg"}
                width={600}
                height={400}
                alt={image.alt}
                className="w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
