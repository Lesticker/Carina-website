"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ImageCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export default function ImageCarousel({ images, alt, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  const openLightbox = () => {
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Main carousel */}
      <div className="relative w-full">
        <div className="relative w-full bg-white p-4 cursor-pointer" style={{ height: "600px" }} onClick={openLightbox}>
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${alt} - zdjęcie ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>

        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Poprzednie zdjęcie</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Następne zdjęcie</span>
            </Button>
          </>
        )}
      </div>

      {/* Thumbnail preview strip - centered */}
      {images.length > 1 && (
        <div className="mt-4 text-center">
          <h4 className="text-sm font-medium mb-2">Podgląd zdjęć:</h4>
          <div className="flex justify-center space-x-4 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "border-2 rounded-md overflow-hidden cursor-pointer",
                  index === currentIndex ? "border-primary" : "border-gray-300 hover:border-gray-400",
                )}
                style={{ padding: 0 }}
              >
                <button
                  onClick={() => goToImage(index)}
                  className="relative h-20 w-20 md:h-24 md:w-24 flex-shrink-0 block"
                  aria-label={`Przejdź do zdjęcia ${index + 1}`}
                >
                  <div className="absolute inset-0 bg-white">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Miniatura ${index + 1}`}
                      fill
                      className="object-contain p-1"
                      sizes="96px"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-screen-xl p-0 bg-black/95 border-none">
          <div className="relative w-full h-screen flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="fixed top-16 right-4 z-50 rounded-full bg-white/20 hover:bg-white/40"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6 text-white" />
              <span className="sr-only">Zamknij</span>
            </Button>

            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/20 hover:bg-white/40 z-10"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                  <span className="sr-only">Poprzednie zdjęcie</span>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/20 hover:bg-white/40 z-10"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                  <span className="sr-only">Następne zdjęcie</span>
                </Button>
              </>
            )}

            <div className="relative w-full h-full max-h-screen p-8">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${alt} - zdjęcie ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
