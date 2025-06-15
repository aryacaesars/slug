"use client"

import { useState } from "react"
import { Heart, Calendar, MapPin, Clock, Users, Send } from "lucide-react"

export default function InvitationPage({ invitation }) {
  const [rsvpData, setRsvpData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: 1,
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRSVPSubmit = async (e) => {
    e.preventDefault()

    // Simulate API call
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...rsvpData,
          invitationId: invitation.id,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Heart className="h-12 w-12 text-gray-900 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">The Wedding of</p>
            <h1 className="text-5xl font-bold mb-4">
              {invitation.groomName}
              <span className="block text-gray-600">&</span>
              {invitation.brideName}
            </h1>
            <div className="flex items-center justify-center text-gray-600 mt-6">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="text-lg">{formatDate(invitation.weddingDate)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{invitation.story}</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {invitation.gallery.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Wedding Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Calendar className="h-12 w-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Date</h3>
              <p className="text-gray-600">{formatDate(invitation.weddingDate)}</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Clock className="h-12 w-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Time</h3>
              <p className="text-gray-600">{invitation.weddingTime} WIB</p>
            </div>
          </div>
          <div className="mt-8 text-center p-8 bg-gray-50 rounded-lg">
            <MapPin className="h-12 w-12 text-gray-900 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Venue</h3>
            <p className="text-gray-900 font-medium">{invitation.venue}</p>
            <p className="text-gray-600 mt-2">{invitation.address}</p>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Users className="h-12 w-12 text-gray-900 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">RSVP</h2>
            <p className="text-gray-600">Please confirm your attendance</p>
          </div>

          {isSubmitted ? (
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600">Your RSVP has been submitted successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleRSVPSubmit} className="bg-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={rsvpData.email}
                    onChange={(e) => setRsvpData({ ...rsvpData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Will you attend? *</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      required
                      onChange={(e) => setRsvpData({ ...rsvpData, attendance: e.target.value })}
                      className="mr-2"
                    />
                    Yes, I'll be there
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      required
                      onChange={(e) => setRsvpData({ ...rsvpData, attendance: e.target.value })}
                      className="mr-2"
                    />
                    Sorry, can't make it
                  </label>
                </div>
              </div>

              {rsvpData.attendance === "yes" && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select
                    value={rsvpData.guests}
                    onChange={(e) => setRsvpData({ ...rsvpData, guests: Number.parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                  </select>
                </div>
              )}

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  value={rsvpData.message}
                  onChange={(e) => setRsvpData({ ...rsvpData, message: e.target.value })}
                  placeholder="Leave a message for the couple..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <div className="mt-8">
                <button type="submit" className="w-full btn-primary flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                  Submit RSVP
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Created with ❤️ using{" "}
            <a href="https://cretivite.com" className="text-gray-900 hover:underline">
              Cretivite
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
