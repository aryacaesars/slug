import { headers } from "next/headers"
import LandingPage from "./components/LandingPage"
import InvitationPage from "./components/InvitationPage"

// Mock database
const invitations = {
  budi: {
    id: "budi",
    groomName: "Budi Santoso",
    brideName: "Sari Dewi",
    weddingDate: "2024-07-15",
    weddingTime: "10:00",
    venue: "Gedung Serbaguna Melati",
    address: "Jl. Mawar No. 123, Jakarta Selatan",
    story:
      "Kami bertemu di kampus dan telah menjalin kasih selama 5 tahun. Kini saatnya kami melangkah ke jenjang yang lebih serius.",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    template: "elegant",
  },
  andi: {
    id: "andi",
    groomName: "Andi Wijaya",
    brideName: "Maya Putri",
    weddingDate: "2024-08-20",
    weddingTime: "14:00",
    venue: "Hotel Grand Ballroom",
    address: "Jl. Sudirman No. 456, Jakarta Pusat",
    story: "Pertemuan kami dimulai dari aplikasi kencan, dan ternyata takdir mempertemukan kami untuk selamanya.",
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    template: "modern",
  },
}

export default async function HomePage() {
  const headersList = headers()
  const subdomain = headersList.get("x-subdomain")

  // If subdomain exists, show invitation page
  if (subdomain) {
    const invitation = invitations[subdomain]

    if (!invitation) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Undangan Tidak Ditemukan</h1>
            <p className="text-gray-600">Subdomain "{subdomain}" tidak terdaftar.</p>
          </div>
        </div>
      )
    }

    return <InvitationPage invitation={invitation} />
  }

  // Default to landing page for main domain
  return <LandingPage />
}
