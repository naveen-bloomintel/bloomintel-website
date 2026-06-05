"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number; y: number; vx: number; vy: number; r: number; pulse: number
}

export function AnimatedNodes({ width = 800, height = 500 }: { width?: number; height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    const NODE_COUNT = 22
    const CONNECTION_DIST = Math.min(width, height) * 0.28

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 1.5 + Math.random() * 1.5,
      pulse: Math.random() * Math.PI * 2,
    }))

    let raf: number
    let t = 0

    function render() {
      ctx.clearRect(0, 0, width, height)
      t += 0.012

      // Update positions
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.02
        if (n.x < 0 || n.x > width)  n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.18
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = "#14b8a6"
            ctx.globalAlpha = alpha
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const glow = 0.5 + 0.5 * Math.sin(n.pulse)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = "#2dd4bf"
        ctx.globalAlpha = 0.3 + glow * 0.5
        ctx.fill()

        // Glow halo
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2)
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3)
        grad.addColorStop(0, "rgba(20,184,166,0.12)")
        grad.addColorStop(1, "transparent")
        ctx.fillStyle = grad
        ctx.globalAlpha = glow * 0.6
        ctx.fill()
      })

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(raf)
  }, [width, height])

  return <canvas ref={canvasRef} />
}
