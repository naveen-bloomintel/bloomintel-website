"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail, Phone, Building, Send, Check } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  phone?: string
  message?: string
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const { toast } = useToast()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }
    
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website_consultation_form'
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        toast({
          title: "Consultation Booked!",
          description: "We&apos;ll contact you within 24 hours to schedule your strategy session.",
        })
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: "", email: "", company: "", phone: "", message: "" })
          setIsSuccess(false)
          onClose()
        }, 2000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Consultation form error:', error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleClose = () => {
    if (!isLoading) {
      setFormData({ name: "", email: "", company: "", phone: "", message: "" })
      setErrors({})
      setIsSuccess(false)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg mx-auto">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl transform transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-normal text-white">
              {isSuccess ? "Success!" : "Book Strategy Session"}
            </h1>
            <button 
              onClick={handleClose}
              disabled={isLoading}
              className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-black/40 transition-all duration-200 hover:scale-110 hover:rotate-90 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:rotate-0"
            >
              <X className="w-5 h-5 text-white/80" />
            </button>
          </div>

          {isSuccess ? (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <div className="space-y-2">
                <p className="text-white/90 text-lg">Consultation Booked Successfully!</p>
                <p className="text-white/70 text-sm">
                  We&apos;ll contact you within 24 hours to schedule your strategy session.
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="text-white/70 mb-8 leading-relaxed">
                Get a free 30-minute consultation to discuss how AI can transform your business operations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white/40 ${errors.name ? 'border-red-400' : ''}`}
                      disabled={isLoading}
                      required
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white/40 pl-10 ${errors.email ? 'border-red-400' : ''}`}
                        disabled={isLoading}
                        required
                      />
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    </div>
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Company Name *"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className={`bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white/40 pl-10 ${errors.company ? 'border-red-400' : ''}`}
                        disabled={isLoading}
                        required
                      />
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    </div>
                    {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <div className="relative">
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white/40 pl-10 ${errors.phone ? 'border-red-400' : ''}`}
                        disabled={isLoading}
                      />
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    </div>
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Tell us about your business challenges and goals..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="w-full bg-black/20 border border-white/20 text-white placeholder-white/50 focus:border-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                    disabled={isLoading}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm h-12 text-base font-medium disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Booking Session...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Book Free Consultation
                    </>
                  )}
                </Button>

                <p className="text-white/40 text-xs text-center">
                  * Required fields. We&apos;ll never share your information.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
} 