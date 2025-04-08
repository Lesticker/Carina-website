import { Phone } from "lucide-react"

export default function CallBar() {
  return (
    <div className="bg-black text-white py-3 sticky bottom-0 z-50 shadow-lg">
      <div className="container flex justify-between items-center relative z-10">
        <p className="text-sm md:text-base">Masz pytania lub chcesz zrobić indywidualne zlecenie?</p>
        <a
          href="tel:+48572597757"
          className="flex items-center gap-1 font-medium hover:underline transition-opacity duration-200 hover:opacity-80"
        >
          <Phone className="h-4 w-4" />
          <span>Zadzwoń</span>
        </a>
      </div>
    </div>
  )
}
