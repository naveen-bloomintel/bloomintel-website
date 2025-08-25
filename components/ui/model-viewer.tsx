"use client"

export default function ModelViewer() {
  return (
    <model-viewer
      src="/computer-3d.glb"
      alt="3D Computer - BloomIntel AI Technology"
      auto-rotate
      camera-controls
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "1.5rem",
      }}
      loading="lazy"
      reveal="auto"
      poster="/placeholder.jpg"
    />
  )
} 