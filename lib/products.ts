export interface Product {
  name: string
  materials: string[]
  sizes: string[]
  image: string
  images?: string[] // Added images array for multiple images
  description: string
}

export interface SztachetkiProduct {
  name: string
  image: string
  alt: string
}

export interface Category {
  id: string
  name: string
  description: string
  products?: Product[]
  sztachetkiProducts?: SztachetkiProduct[]
  contentType?: string
}

export function getCategories(): Category[] {
  return [
    {
      id: "rynny",
      name: "Rynny i elementy spustowe",
      description: "Systemy rynnowe i elementy odprowadzania wody",
      products: [
        {
          name: "Kosz zlewowy",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["250/80", "280/80", "280/100", "333/100", "333/120", "400/150"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o1-removebg-preview-yUk0wWNiqlgGCLjxyUC4hKT8AWQjxN.png",
          description: "Element systemu rynnowego służący do odprowadzania wody z rynny do rury spustowej.",
        },
        {
          name: "Kosz zlewowy",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["250/80", "280/80", "280/100", "333/100", "333/120", "400/150"],
          image:
          "/images/produkty/Rynny_i_elementy_spustowe/kosz1-removebg.png",
          description: "Element systemu rynnowego służący do odprowadzania wody z rynny do rury spustowej.",
        },
        {
          name: "Kosz zlewowy",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["250/80", "280/80", "280/100", "333/100", "333/120", "400/150"],
          image:
          "/images/produkty/Rynny_i_elementy_spustowe/kosz2-removebg.png",
          description: "Element systemu rynnowego służący do odprowadzania wody z rynny do rury spustowej.",
        },
        {
          name: "Kosz zlewowy",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["250/80", "280/80", "280/100", "333/100", "333/120", "400/150"],
          image:
          "/images/produkty/Rynny_i_elementy_spustowe/kosz5-removebg.png",
          description: "Element systemu rynnowego służący do odprowadzania wody z rynny do rury spustowej.",
        },
        {
          name: "Narożnik zew./wew.",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["250", "280", "333"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o3-removebg-preview-x3Zb8VP6RB2UIoG2FkadzTUEm4TWXG.png",
          description:
            "Element łączący odcinki rynny na narożnikach budynku, dostępny w wersji wewnętrznej i zewnętrznej.",
        },
        {
          name: "Narożnik zew./wew.",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["250", "280", "333"],
          image:
          "/images/produkty/Rynny_i_elementy_spustowe/naroznik2-removebg.png",
          description:
            "Element łączący odcinki rynny na narożnikach budynku, dostępny w wersji wewnętrznej i zewnętrznej.",
        },
        {
          name: "Odsadzka",
          materials: ["miedź", "cynk", "stal ocynkowana"],
          sizes: ["fi 80", "fi 100", "fi 120"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o6-removebg-preview-s4LczjnXe5nJ8DcIFT9VKW6DXXPSRQ.png",
          description: "Element umożliwiający odsunięcie rury spustowej od ściany budynku.",
        },
        {
          name: "Łapacz wody",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["fi 80", "fi 100", "fi 120", "fi 150"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o7-removebg-preview-gQsvSobdXNArcyzAWcYipESWPwQzNY.png",
          description: "Element umożliwiający zbieranie wody deszczowej do dalszego wykorzystania.",
        },
        {
          name: "Łapacz wody",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["fi 80", "fi 100", "fi 120", "fi 150"],
          image:
          "/images/produkty/Rynny_i_elementy_spustowe/lapacz1-removebg.png",
          description: "Element umożliwiający zbieranie wody deszczowej do dalszego wykorzystania.",
        },
        {
          name: "Kolano tłoczone",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["72*/80", "72*/100", "72*/120"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o10-removebg-preview-4hcRQOhoWv5vOWNVbmBYXJDCVs3OWE.png",
          description: "Element zmieniający kierunek spływu wody w rurze spustowej.",
        },
        {
          name: "Kolano tłoczone",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["72*/80", "72*/100", "72*/120"],
          image:
          "/images/produkty/Rynny_i_elementy_spustowe/kolanko1-removebg.png",
          description: "Element zmieniający kierunek spływu wody w rurze spustowej.",
        },
        {
          name: "Kolano wylewowe",
          materials: ["miedź", "cynk", "stal ocynkowana"],
          sizes: ["fi 80", "fi 100", "fi 120", "fi 150"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o11-removebg-preview-2WcCWHVZKPhdVDzjaeavUtWRQBbTxy.png",
          description: "Element kończący rurę spustową, kierujący wodę na odpływ.",
        },
        {
          name: "Denko rynny: L i P, dwustronne",
          materials: ["miedź", "cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["105", "127", "153", "192"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o12-removebg-preview-4Cid3kybthiRIsYI2XkAm9GSWBCGNQ.png",
          description: "Element zamykający końce rynny, dostępny w wersji lewej, prawej lub dwustronnej.",
        },
        {
          name: "Rura",
          materials: ["miedź", "tytan-cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["fi 80", "fi 100", "fi 120", "fi 150"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o15-removebg-preview-blYtH8tOnN67ArTs4xG8hyNZ4GIf47.png",
          description: "Rura spustowa odprowadzająca wodę z rynny do kanalizacji lub na grunt.",
        },
        {
          name: "Rynna",
          materials: ["miedź", "tytan-cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["105", "127", "153", "192"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o17-removebg-preview-o4WRnjHPURMzsAZhuQkaCyYY4EvvrJ.png",
          description: "Główny element systemu rynnowego zbierający wodę z dachu.",
        },
      ],
    },
    {
      id: "akcesoria",
      name: "Akcesoria",
      description: "Akcesoria montażowe i uzupełniające do systemów rynnowych",
      products: [
        {
          name: "Głowa wilka",
          materials: ["miedź"],
          sizes: ["fi 65"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o5-removebg-preview-2dUbozgjKYkWLlL6Wk20eKrYB6lvcp.png",
          description: "Ozdobny element odpływowy w kształcie głowy wilka, wykonany z miedzi.",
        },
        {
          name: "Obejma rury",
          materials: ["miedź", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["fi 80", "fi 100", "fi 120", "fi 150"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o13-removebg-preview-3lgN0sBQokNG0ONd6ozAR8QdB9xq8Z.png",
          description: "Element mocujący rurę spustową do ściany budynku.",
        },
        {
          name: "Obejma rury",
          materials: ["miedź", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["fi 80", "fi 100", "fi 120", "fi 150"],
          image:
          "/images/produkty/Akcesoria/obejma1-removebg-preview.png",
          description: "Element mocujący rurę spustową do ściany budynku.",
        },
        {
          name: "Obejma rury",
          materials: ["miedź", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["fi 80", "fi 100", "fi 120", "fi 150"],
          image:
          "/images/produkty/Akcesoria/obejma2-removebg-preview.png",
          description: "Element mocujący rurę spustową do ściany budynku.",
        },
        {
          name: "Obejma rury",
          materials: ["miedź", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["fi 80", "fi 100", "fi 120", "fi 150"],
          image:
          "/images/produkty/Akcesoria/obejma3-removebg-preview.png",
          description: "Element mocujący rurę spustową do ściany budynku.",
        },
        {
          name: "Obejma rury",
          materials: ["miedź", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["fi 80", "fi 100", "fi 120", "fi 150"],
          image:
          "/images/produkty/Akcesoria/obejma5-removebg-preview.png",
          description: "Element mocujący rurę spustową do ściany budynku.",
        },
        {
          name: "Łącznik rynny",
          materials: ["stal ocynkowana"],
          sizes: ["fi 105", "fi 127", "fi 153"],
          image:
          "/images/produkty/Akcesoria/obejma7-removebg-preview.png",
          description: "Element mocujący rurę spustową do ściany budynku.",
        },
        {
          name: "Uchwyt rynny doczołowy",
          materials: ["miedź", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["105 = 8tiy", "127 = 7tiy", "153 = 6tiy", "192 = 5tiy"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o14-removebg-preview-TRZ0NisOXR9nnFQ6AJsavLjcE3E9li.png",
          description: "Element mocujący rynnę do deski czołowej dachu.",
        },
        {
          name: "Uchwyt rynny prosty",
          materials: ["miedź", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["105 = 8tiy", "127 = 7tiy", "153 = 6tiy", "192 = 5tiy"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o16-removebg-preview-A1lmAOVV93eiOhmqvjnms8TuwtZZkS.png",
          description: "Element mocujący rynnę do połaci dachu lub do krokwi.",
        },
      ],
    },
    {
      id: "wentylacyjne",
      name: "Akcesoria wentylacyjne",
      description: "Elementy wentylacyjne i kominowe",
      products: [
        {
          name: "Kapelusz napoleoński",
          materials: ["miedź", "stal nierdzewna"],
          sizes: ["Robiony na zamówienie"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o9-removebg-preview-Z3Om3gx0wmBxd917hzOWTcgVs3e8qc.png",
          description: "Ozdobne zwieńczenie komina chroniące przed opadami atmosferycznymi.",
        },
        {
          name: "Kapelusz napoleoński",
          materials: ["miedź", "stal nierdzewna"],
          sizes: ["Robiony na zamówienie"],
          image:
          "/images/produkty/akcesoria wentylacyjne/kapelusz3-removebg-preview.png",
          description: "Ozdobne zwieńczenie komina chroniące przed opadami atmosferycznymi.",
        },
        {
          name: "Deflektor",
          materials: ["stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["fi 100", "fi 120"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o8-removebg-preview-6aTtGq7FQ5ZlhzxaYJzqfkV4gkmPBX.png",
          description: "Element poprawiający ciąg kominowy, montowany na szczycie komina.",
        },
      ],
    },
    {
      id: "parapety",
      name: "Parapety",
      description: "Parapety zewnętrzne wykonane na wymiar",
      products: [
        {
          name: "Parapet zewnętrzny",
          materials: ["miedź", "tytan-cynk", "stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["Do 6 metrów bieżących"],
          image: "/images/parapety3.jpg",
          images: ["/images/parapety3.jpg", "/images/parapety4.jpg", "/images/parapety2.jpg", "/images/parapety1.jpg"],
          description:
            "Parapety zewnętrzne wykonane z wysokiej jakości materiałów, dostosowane do indywidualnych wymiarów. Dostępne w różnych kolorach: białym, czarnym, brązowym i szarym.",
        },
      ],
    },
    {
      id: "sztachetki",
      name: "Sztachetki blaszane",
      description: "Wysokiej jakości sztachetki metalowe w różnych wzorach i kolorach",
      products: [
        {
          name: "Sztachetki pionowe",
          materials: ["stal ocynkowana", "ocynk malowany proszkowo"],
          sizes: ["Długość według zamówienia"],
          image: "/images/sztachetki3.jpg",
          images: ["/images/sztachetki3.jpg", "/images/sztachetki1.jpg", "/images/sztachetki2.jpg"],
          description: "Sztachetki metalowe w różnych kolorach i wzorach, dostępne w szerokiej gamie kolorystycznej.",
        },
      ],
    },
  ]
}
