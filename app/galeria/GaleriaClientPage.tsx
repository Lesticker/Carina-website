"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

// All images for the gallery
const galleryImages = [
  {
    src: "/images/pokaz4.jpg",
    alt: "Systemy rynnowe z miedzi i tytan-cynku",
  },
  {
    src: "/images/pokaz5.jpg",
    alt: "Ekspozycja parapetów i systemów rynnowych",
  },
  {
    src: "/images/pokaz1.jpg",
    alt: "Magazyn obróbek blacharskich",
  },
  {
    src: "/images/pokaz2.jpg",
    alt: "Magazyn materiałów budowlanych",
  },
  {
    src: "/images/pokaz3.jpg",
    alt: "Magazyn rur i elementów spustowych",
  },
  {
    src: "/images/pokaz6.jpg",
    alt: "Deflektor kominowy - model cylindryczny",
  },
  {
    src: "/images/pokaz7.jpg",
    alt: "Deflektor kominowy - model prostokątny",
  },
  {
    src: "/images/pokaz8.jpg",
    alt: "Deflektor kominowy - model z rozszerzanym wylotem",
  },
  {
    src: "/images/pokaz9.jpg",
    alt: "Różne modele deflektorów kominowych",
  },
  {
    src: "/images/pokaz10.jpg",
    alt: "Magazyn elementów wentylacyjnych i rur",
  },
  {
    src: "/images/targi1.jpg",
    alt: "Stoisko targowe firmy Carina",
  },
  {
    src: "/images/targi2.jpg",
    alt: "Przedstawiciele firmy na targach budowlanych",
  },
  {
    src: "/images/targi4.jpg",
    alt: "Prezentacja systemów rynnowych na targach",
  },
  {
    src: "/images/targi5.jpg",
    alt: "Stoisko z systemami rynnowymi Carina",
  },
  {
    src: "/images/targi3.jpg",
    alt: "Nagrywanie materiału promocyjnego na targach",
  },
]

export default function GaleriaClientPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galeria</h1>
          <p className="text-xl text-muted-foreground">Zdjęcia naszych produktów i udziału w targach</p>
        </div>

        <Card className="mt-8">
          <CardContent className="pt-6">
            <GalleryGrid images={galleryImages} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function GalleryGrid({ images }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openModal = (index) => {
    setCurrentImage(index)
    setIsOpen(true)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="relative aspect-square bg-white">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-screen-lg p-0 bg-black/95 border-none">
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-16 right-4 z-50 rounded-full bg-white/20 p-2 hover:bg-white/40"
          >
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Zamknij</span>
          </button>

          <div className="relative h-[80vh] w-full flex items-center justify-center">
            <button onClick={prevImage} className="absolute left-4 z-50 rounded-full bg-white/20 p-4 hover:bg-white/40">
              <span className="text-white text-2xl">←</span>
              <span className="sr-only">Poprzednie zdjęcie</span>
            </button>

            <div className="relative w-full h-full max-h-screen p-8">
              {images[currentImage] && (
                <Image
                  src={images[currentImage].src || "/placeholder.svg"}
                  alt={images[currentImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 z-50 rounded-full bg-white/20 p-4 hover:bg-white/40"
            >
              <span className="text-white text-2xl">→</span>
              <span className="sr-only">Następne zdjęcie</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
