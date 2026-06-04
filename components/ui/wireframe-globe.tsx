"use client"

import { useEffect, useRef } from "react"

export function WireframeGlobe({ size = 440 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctxRaw = canvas.getContext("2d")
    if (!ctxRaw) return
    const ctx = ctxRaw

    let raf: number
    let t = 0

    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    const R = size * 0.38
    const fov = size * 2.2

    function rotateY(x: number, y: number, z: number) {
      const cos = Math.cos(t)
      const sin = Math.sin(t)
      return { x: x * cos - z * sin, y, z: x * sin + z * cos }
    }

    function project(x: number, y: number, z: number) {
      const s = fov / (fov - z)
      return { px: cx + x * s, py: cy + y * s }
    }

    function drawSegment(
      x1: number, y1: number, z1: number,
      x2: number, y2: number, z2: number,
      color: string
    ) {
      const zMid = (z1 + z2) / 2
      const alpha = ((zMid / R) + 1) / 2
      ctx.globalAlpha = 0.04 + alpha * 0.52
      const pa = project(x1, y1, z1)
      const pb = project(x2, y2, z2)
      ctx.beginPath()
      ctx.moveTo(pa.px, pa.py)
      ctx.lineTo(pb.px, pb.py)
      ctx.strokeStyle = color
      ctx.lineWidth = 0.8
      ctx.stroke()
    }

    const SEGS = 60

    function render() {
      ctx.clearRect(0, 0, size, size)
      t += 0.004

      // Meridians — 12 great circles through both poles
      for (let m = 0; m < 12; m++) {
        const phi = (m / 12) * Math.PI
        for (let i = 0; i < SEGS; i++) {
          const a1 = (i / SEGS) * Math.PI * 2
          const a2 = ((i + 1) / SEGS) * Math.PI * 2
          const r1 = rotateY(
            R * Math.sin(a1) * Math.cos(phi),
            R * Math.cos(a1),
            R * Math.sin(a1) * Math.sin(phi)
          )
          const r2 = rotateY(
            R * Math.sin(a2) * Math.cos(phi),
            R * Math.cos(a2),
            R * Math.sin(a2) * Math.sin(phi)
          )
          drawSegment(r1.x, r1.y, r1.z, r2.x, r2.y, r2.z, "#14b8a6")
        }
      }

      // Parallels — 9 latitude rings
      for (let p = 1; p < 9; p++) {
        const theta = (p / 9) * Math.PI
        const rp = R * Math.sin(theta)
        const yp = R * Math.cos(theta)
        for (let i = 0; i < SEGS; i++) {
          const phi1 = (i / SEGS) * Math.PI * 2
          const phi2 = ((i + 1) / SEGS) * Math.PI * 2
          const r1 = rotateY(rp * Math.cos(phi1), yp, rp * Math.sin(phi1))
          const r2 = rotateY(rp * Math.cos(phi2), yp, rp * Math.sin(phi2))
          drawSegment(r1.x, r1.y, r1.z, r2.x, r2.y, r2.z, "#38bdf8")
        }
      }

      raf = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(raf)
  }, [size])

  return <canvas ref={canvasRef} />
}
