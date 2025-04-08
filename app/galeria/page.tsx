import GaleriaClientPage from "./GaleriaClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeria - Carina Systemy Rynnowe",
  description:
    "Galeria zdjęć produktów firmy Carina - systemy rynnowe, parapety, sztachetki metalowe oraz udział w targach branżowych.",
  keywords: ["galeria", "zdjęcia", "systemy rynnowe", "parapety", "sztachetki", "targi", "Carina"],
  openGraph: {
    title: "Galeria - Carina Systemy Rynnowe",
    description:
      "Galeria zdjęć produktów firmy Carina - systemy rynnowe, parapety, sztachetki metalowe oraz udział w targach branżowych.",
    url: "https://www.carina.czest.pl/galeria",
    type: "website",
  },
}

export default function GaleriaPage() {
  return <GaleriaClientPage />
}
