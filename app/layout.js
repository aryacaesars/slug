import "./globals.css"

export const metadata = {
  title: "Cretivite - Digital Wedding Invitation",
  description: "Create beautiful digital wedding invitations",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
