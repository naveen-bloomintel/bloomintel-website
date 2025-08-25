"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo)
    
    // You can integrate error reporting service here
    if (typeof window !== 'undefined') {
      // Report to analytics or error tracking service
      console.log('Error reported to monitoring service')
    }
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error!} reset={this.reset} />
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="text-center space-y-6 max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Something went wrong</h2>
              <p className="text-white/70">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={this.reset}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              
              <details className="text-sm text-white/50 text-left">
                <summary className="cursor-pointer hover:text-white/70">
                  Technical Details
                </summary>
                <pre className="mt-2 p-3 bg-black/20 rounded text-xs overflow-auto">
                  {this.state.error?.message}
                </pre>
              </details>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

// Custom error fallback for specific components
export function ModelViewerErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="w-full h-full flex items-center justify-center text-white/50 bg-white/5 rounded-3xl border border-white/10">
      <div className="text-center space-y-4 p-6">
        <AlertTriangle className="w-12 h-12 mx-auto text-white/40" />
        <div className="space-y-2">
          <p className="text-sm font-medium">3D Model Failed to Load</p>
          <p className="text-xs text-white/40">Unable to display the 3D visualization</p>
        </div>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={reset}
          className="text-white/70 border-white/20 hover:bg-white/10"
        >
          <RefreshCw className="w-3 h-3 mr-1" />
          Retry
        </Button>
      </div>
    </div>
  )
} 