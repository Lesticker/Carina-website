"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export default function ProductGallery({ images, className }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", className)}>
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div
              className="relative h-48 overflow-hidden rounded-md border cursor-pointer transition-all hover:opacity-90 bg-white"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-none">
            <div className="relative h-[80vh] w-full bg-white rounded-lg border">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-contain p-4"
                sizes="80vw"
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
