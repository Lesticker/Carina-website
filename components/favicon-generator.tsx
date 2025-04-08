"use client"

// Ten komponent jest tylko do wygenerowania prawidłowej ikony
// Nie będzie używany w rzeczywistej aplikacji

import { useRef, useEffect } from "react"

export default function FaviconGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ustawienie rozmiaru canvas na 32x32 (standardowy rozmiar favicon)
    canvas.width = 32
    canvas.height = 32

    // Tło przezroczyste
    ctx.clearRect(0, 0, 32, 32)

    // Narysuj gwiazdę/romb w kolorze miedzianym
    const gradient = ctx.createLinearGradient(16, 4, 16, 28)
    gradient.addColorStop(0, "#e6c8b0") // jasny miedziany
    gradient.addColorStop(0.5, "#c87533") // średni miedziany
    gradient.addColorStop(1, "#723c17") // ciemny miedziany

    ctx.fillStyle = gradient
    ctx.beginPath()
    // Rysujemy romb/gwiazdę
    ctx.moveTo(16, 4) // góra
    ctx.lineTo(28, 16) // prawo
    ctx.lineTo(16, 28) // dół
    ctx.lineTo(4, 16) // lewo
    ctx.closePath()
    ctx.fill()

    // Dodaj literę C w środku
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 16px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("C", 16, 16)

    // Możesz pobrać obraz jako data URL
    console.log(canvas.toDataURL("image/png"))
  }, [])

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          border: "1px solid black",
          width: "128px",
          height: "128px",
        }}
      />
      <p>To jest tylko pomocniczy komponent do wygenerowania favicon.</p>
    </div>
  )
}
