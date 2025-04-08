import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface ColorSample {
  name: string
  image: string
  thumbnail?: string
}

interface ColorSamplesProps {
  samples: ColorSample[]
  className?: string
}

export default function ColorSamples({ samples, className }: ColorSamplesProps) {
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4", className)}>
      {samples.map((sample, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div className="flex flex-col items-center space-y-2 cursor-pointer">
              <div className="relative h-24 w-24 rounded-full overflow-hidden bg-white border-2 border-muted hover:border-primary transition-colors">
                <Image
                  src={sample.thumbnail || sample.image}
                  alt={sample.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <span className="text-xs font-medium text-center">{sample.name}</span>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-none">
            <div className="relative h-[80vh] w-full bg-white rounded-lg border">
              <Image
                src={sample.image || "/placeholder.svg"}
                alt={sample.name}
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
