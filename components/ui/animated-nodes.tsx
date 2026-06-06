"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number; y: number; vx: number; vy: number; r: number; pulse: number
}

export function AnimatedNodes({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const stateRef     = useRef<{ nodes: Node[]; raf: number; w: number; h: number } | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas    = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    let raf = 0

    function initNodes(w: number, h: number): Node[] {
      const count = Math.max(14, Math.floor((w * h) / 28000))
      return Array.from({ length: count }, () => ({
        x:     Math.random() * w,
        y:     Math.random() * h,
        vx:    (Math.random() - 0.5) * 0.28,
        vy:    (Math.random() - 0.5) * 0.28,
        r:     1.5 + Math.random() * 1.5,
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    function resize() {
      const w = container.offsetWidth
      const h = container.offsetHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      canvas.style.width  = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
      if (stateRef.current) {
        stateRef.current.nodes = initNodes(w, h)
        stateRef.current.w = w
        stateRef.current.h = h
      } else {
        stateRef.current = { nodes: initNodes(w, h), raf: 0, w, h }
      }
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    function render() {
      const s = stateRef.current
      if (!s) return
      const { nodes, w, h } = s
      const CONN = Math.min(w, h) * 0.26

      ctx.clearRect(0, 0, w, h)

      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy; n.pulse += 0.018
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      })

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x
          const dy   = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONN) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = "#14b8a6"
            ctx.globalAlpha = (1 - dist / CONN) * 0.22
            ctx.lineWidth   = 0.7
            ctx.stroke()
          }
        }
      }

      // Nodes
      nodes.forEach((n) => {
        const glow = 0.5 + 0.5 * Math.sin(n.pulse)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle  = "#2dd4bf"
        ctx.globalAlpha = 0.3 + glow * 0.5
        ctx.fill()

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4)
        grad.addColorStop(0, "rgba(20,184,166,0.14)")
        grad.addColorStop(1, "transparent")
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2)
        ctx.fillStyle   = grad
        ctx.globalAlpha = glow * 0.5
        ctx.fill()
      })

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(render)
      s.raf = raf
    }

    render()
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="block" />
    </div>
  )
}
