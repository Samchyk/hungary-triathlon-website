import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate the data
    if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the contact form submission
    console.log('[v0] Contact form submission:', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      subject: data.subject,
      timestamp: new Date().toISOString()
    })

    // In a real application, you would send an email or store this in a database
    // For now, we just log it and return success
    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
