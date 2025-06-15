import Link from "next/link"
import { ArrowLeft, Eye } from "lucide-react"

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: "Elegant Classic",
      category: "Wedding",
      image: "/placeholder.svg?height=300&width=400",
      preview: "?subdomain=budi",
      description: "Timeless elegance with classic typography",
    },
    {
      id: 2,
      name: "Modern Minimalist",
      category: "Wedding",
      image: "/placeholder.svg?height=300&width=400",
      preview: "?subdomain=andi",
      description: "Clean and contemporary design",
    },
    {
      id: 3,
      name: "Floral Romance",
      category: "Wedding",
      image: "/placeholder.svg?height=300&width=400",
      preview: "#",
      description: "Beautiful floral elements and romantic colors",
    },
    {
      id: 4,
      name: "Rustic Charm",
      category: "Wedding",
      image: "/placeholder.svg?height=300&width=400",
      preview: "#",
      description: "Warm and cozy rustic theme",
    },
    {
      id: 5,
      name: "Luxury Gold",
      category: "Wedding",
      image: "/placeholder.svg?height=300&width=400",
      preview: "#",
      description: "Sophisticated gold accents and premium feel",
    },
    {
      id: 6,
      name: "Beach Vibes",
      category: "Wedding",
      image: "/placeholder.svg?height=300&width=400",
      preview: "#",
      description: "Perfect for beach and outdoor weddings",
    },
  ]

  const categories = ["All", "Wedding", "Birthday", "Corporate", "Baby Shower"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold">Choose Template</h1>
            <Link href="/login" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  category === "All"
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative group">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      href={`//${template.preview}`}
                      target="_blank"
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{template.category}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                  <div className="flex gap-2">
                    <Link href={template.preview} className="flex-1 btn-secondary text-center text-sm py-2">
                      Preview
                    </Link>
                    <button className="flex-1 btn-primary text-sm py-2">Use Template</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
