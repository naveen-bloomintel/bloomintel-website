"use client"

import { useEffect, useRef } from "react"

export function AnimatedRings({ size = 500 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    let t = 0
    let raf: number

    const rings = [
      { r: size * 0.12, speed: 0.004, phase: 0 },
      { r: size * 0.22, speed: 0.003, phase: 1.1 },
      { r: size * 0.33, speed: 0.0025, phase: 2.3 },
      { r: size * 0.44, speed: 0.002, phase: 0.7 },
    ]

    // Dots on rings
    const ringDots = rings.map((ring, ri) =>
      Array.from({ length: 6 + ri * 3 }, (_, i) => ({
        angle: (i / (6 + ri * 3)) * Math.PI * 2,
        speed: ring.speed * (ri % 2 === 0 ? 1 : -1),
      }))
    )

    function render() {
      ctx.clearRect(0, 0, size, size)
      t += 0.008

      rings.forEach((ring, ri) => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.2 + ring.phase)

        // Orbit ring
        ctx.beginPath()
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2)
        ctx.strokeStyle = ri % 2 === 0 ? "#14b8a6" : "#38bdf8"
        ctx.globalAlpha = 0.06 + pulse * 0.08
        ctx.lineWidth = 0.8
        ctx.stroke()

        // Rotating dots on ring
        ringDots[ri].forEach((dot) => {
          dot.angle += dot.speed
          const x = cx + Math.cos(dot.angle) * ring.r
          const y = cy + Math.sin(dot.angle) * ring.r
          ctx.beginPath()
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = ri % 2 === 0 ? "#2dd4bf" : "#7dd3fc"
          ctx.globalAlpha = 0.25 + pulse * 0.35
          ctx.fill()
        })
      })

      // Center dot
      ctx.beginPath()
      ctx.arc(cx, cy, 3, 0, Math.PI * 2)
      ctx.fillStyle = "#14b8a6"
      ctx.globalAlpha = 0.4 + 0.3 * Math.sin(t * 2)
      ctx.fill()

      // Center glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.15)
      grad.addColorStop(0, "rgba(20,184,166,0.06)")
      grad.addColorStop(1, "transparent")
      ctx.globalAlpha = 1
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, size * 0.15, 0, Math.PI * 2)
      ctx.fill()

      raf = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(raf)
  }, [size])

  return <canvas ref={canvasRef} />
}
