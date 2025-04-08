import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SztachetkiContent() {
  const images = [
    {
      src: "/images/sztachetki3.png",
      alt: "Sztachetki blaszane w różnych kolorach",
    },
    {
      src: "/images/sztachetki2.png",
      alt: "Wzory sztachetek blaszanych",
    },
    {
      src: "/images/sztachetki1.png",
      alt: "Sztachetki blaszane - ekspozycja",
    },
  ]

  return (
    <div className="space-y-8">
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Informacje o sztachetkach</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">Sztachetki wykonywane są w poziomie oraz w pionie.</p>
          <p className="text-lg">Szeroka gama kolorystyczna.</p>
          <p className="text-lg">Długość wykonywana według zamówienia.</p>
        </CardContent>
      </Card>

      <div className="mt-12 space-y-16">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg border bg-white p-6 shadow-md">
            <div className="relative w-full" style={{ height: "600px" }}>
              <Image
                src={image.src || "/placeholder.svg"}
                fill
                alt={image.alt}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={index === 0}
              />
            </div>
            <p className="mt-6 text-center text-xl font-medium">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
