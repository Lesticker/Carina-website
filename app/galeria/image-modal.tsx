"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface ImageModalProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ImageModal({ images }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<number>(0)

  const openModal = (index: number) => {
    setCurrentImage(index)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e: React.MouseEvent) => {
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
            <div className="relative aspect-square bg-white border">
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
            onClick={closeModal}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/20 p-2 hover:bg-white/40"
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
