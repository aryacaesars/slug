import Link from "next/link"
import { ArrowRight, Heart, Users, Calendar, Star } from "lucide-react"

export default function LandingPage() {
  const templates = [
    {
      id: 1,
      name: "Elegant Classic",
      category: "Wedding",
      image: "/placeholder.svg?height=300&width=400",
      preview: "?subdomain=budi", // Update untuk Vercel
    },
    {
      id: 2,
      name: "Modern Minimalist",
      category: "Wedding",
      image: "/placeholder.svg?height=300&width=400",
      preview: "?subdomain=andi", // Update untuk Vercel
    },
    {
      id: 3,
      name: "Floral Romance",
      category: "Wedding",
      image: "/placeholder.svg?height=300&width=400",
      preview: "?subdomain=demo", // Update untuk Vercel
    },
  ]

  const testimonials = [
    {
      name: "Sarah & John",
      text: "Cretivite membuat undangan pernikahan kami menjadi sangat berkesan. Prosesnya mudah dan hasilnya luar biasa!",
      rating: 5,
    },
    {
      name: "Maya & Andi",
      text: "Template yang tersedia sangat beragam dan elegan. Tamu-tamu kami sangat terkesan dengan undangan digitalnya.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-gray-900 mr-2" />
              <span className="text-2xl font-bold">Cretivite</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#templates" className="text-gray-600 hover:text-gray-900">
                Templates
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link href="/register" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Create Beautiful Digital
            <span className="block text-gray-600">Wedding Invitations</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Design stunning, personalized wedding invitations that your guests will love. Easy to create, beautiful to
            share, and eco-friendly too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/templates" className="btn-primary inline-flex items-center">
              Browse Templates <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="#demo" className="btn-secondary">
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Cretivite?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make it easy to create and share beautiful digital invitations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Beautiful Templates</h3>
              <p className="text-gray-600">Choose from dozens of professionally designed templates</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy RSVP</h3>
              <p className="text-gray-600">Guests can RSVP directly from the invitation</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Make changes anytime and guests see updates instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="templates" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Beautiful Templates</h2>
            <p className="text-gray-600">Choose from our collection of stunning designs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <img
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{template.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{template.category}</p>
                  <div className="flex justify-between items-center">
                    <Link href={template.preview} className="text-gray-900 hover:underline text-sm">
                      Preview Demo
                    </Link>
                    <button className="btn-primary text-sm px-4 py-2">Use Template</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Couples Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Invitation?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of couples who have created beautiful digital invitations with Cretivite
          </p>
          <Link
            href="/register"
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-gray-900 mr-2" />
              <span className="text-xl font-bold">Cretivite</span>
            </div>
            <div className="flex space-x-6 text-gray-600">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Cretivite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
