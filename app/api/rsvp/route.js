import { NextResponse } from "next/server"

// Mock database untuk menyimpan RSVP
const rsvpDatabase = []

export async function POST(request) {
  try {
    const rsvpData = await request.json()

    // Validasi data
    if (!rsvpData.name || !rsvpData.email || !rsvpData.attendance) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Simpan ke "database"
    const newRSVP = {
      id: Date.now().toString(),
      ...rsvpData,
      submittedAt: new Date().toISOString(),
    }

    rsvpDatabase.push(newRSVP)

    console.log("New RSVP received:", newRSVP)

    return NextResponse.json({ message: "RSVP submitted successfully", id: newRSVP.id }, { status: 200 })
  } catch (error) {
    console.error("Error processing RSVP:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json(rsvpDatabase)
}
