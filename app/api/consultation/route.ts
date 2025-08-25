import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema
const consultationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company name is required').max(100, 'Company name too long'),
  phone: z.string().optional().refine(
    (val) => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/\s/g, '')),
    'Invalid phone number'
  ),
  message: z.string().max(1000, 'Message too long').optional(),
  timestamp: z.string(),
  source: z.string()
})

type ConsultationData = z.infer<typeof consultationSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request data
    const validatedData = consultationSchema.parse(body)
    
    // Rate limiting check (basic implementation)
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'
    
    // TODO: Implement proper rate limiting with Redis or similar
    console.log(`Consultation request from IP: ${clientIP}`)
    
    // Process the consultation request
    const result = await processConsultation(validatedData)
    
    if (result.success) {
      // TODO: Send confirmation email
      // TODO: Add to CRM system
      // TODO: Send notification to sales team
      
      return NextResponse.json({
        success: true,
        message: 'Consultation request submitted successfully',
        id: result.id
      }, { status: 200 })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to process consultation request'
      }, { status: 500 })
    }
    
  } catch (error) {
    console.error('Consultation API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.errors
      }, { status: 400 })
    }
    
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { status: 500 })
  }
}

async function processConsultation(data: ConsultationData): Promise<{ success: boolean; id?: string }> {
  try {
    // Generate unique ID
    const id = `consultation_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Log the consultation request (in production, save to database)
    console.log('New consultation request:', {
      id,
      ...data,
      processedAt: new Date().toISOString()
    })
    
    // TODO: Replace with actual database save
    // await saveToDatabase(data)
    
    // TODO: Send email notifications
    // await sendNotificationEmail(data)
    
    // TODO: Add to CRM
    // await addToCRM(data)
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return { success: true, id }
  } catch (error) {
    console.error('Error processing consultation:', error)
    return { success: false }
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({
    success: false,
    message: 'Method not allowed'
  }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({
    success: false,
    message: 'Method not allowed'
  }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({
    success: false,
    message: 'Method not allowed'
  }, { status: 405 })
} 