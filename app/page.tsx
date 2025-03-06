import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Instagram, Coffee, Calendar, MapPin, Code, Briefcase } from "lucide-react"

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Jane Doe</h1>
              <h2 className="text-xl md:text-2xl font-light mb-4">Software Engineer & Digital Nomad</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-100">
                <MapPin className="h-5 w-5" />
                <span>Currently in {getCurrentLocation()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-200 hover:border-blue-400 flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium">GitHub</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-200 hover:border-blue-400 flex items-center gap-2"
              >
                <Twitter className="h-5 w-5" />
                <span className="font-medium">Twitter</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-200 hover:border-blue-400 flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-medium">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-200 hover:border-blue-400 flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium">Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <main className="grid md:grid-cols-2 gap-8">
          {/* About Me Section */}
          <Card className="bg-white border-none shadow-lg p-8 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-full">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">About Me</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm a passionate software engineer with over 5 years of experience building web applications and
                services. I specialize in React, Node.js, and cloud architecture.
              </p>
              <p>
                In 2020, I embraced the digital nomad lifestyle and have been traveling the world while working
                remotely. So far, I've coded from 12 countries across 4 continents, with my favorite workspaces being
                beachside cafés in Bali and mountain cabins in Switzerland.
              </p>
              <p>
                When I'm not coding, you'll find me hiking, practicing photography, or learning the local language
                wherever I am.
              </p>
            </div>
          </Card>

          {/* Current Projects Section */}
          <Card className="bg-white border-none shadow-lg p-8 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-full">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Current Projects</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="bg-blue-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>Building a travel planning app for digital nomads</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-blue-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>Contributing to open-source projects in the JavaScript ecosystem</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-blue-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>Writing a technical blog about remote work and development</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-blue-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>Mentoring aspiring developers through online platforms</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="https://patreon.com" target="_blank">
                <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-6 rounded-lg shadow-md">
                  <Coffee className="h-5 w-5" />
                  <span className="text-lg">Buy Me a Coffee</span>
                </Button>
              </Link>
            </div>
          </Card>
        </main>

        {/* Visa Consulting Section */}
        <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 border-none shadow-xl p-8 rounded-xl mt-12 text-white overflow-hidden">
          <div className="relative">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-white opacity-10 rounded-full"></div>

            <div className="flex items-center gap-3 mb-6 relative">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Visa Consulting Services</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative">
              <div className="space-y-4">
                <p className="text-blue-50 text-lg">
                  With my extensive experience traveling across the globe, I now offer professional visa consulting
                  services to help fellow digital nomads and remote workers navigate the complex world of international
                  visas and work permits.
                </p>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">My services include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Digital nomad visa application assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Country-specific work permit guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Documentation preparation and review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Interview preparation for visa applications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Personalized travel planning for remote workers</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <h4 className="text-blue-600 font-bold text-xl mb-2">Ready to simplify your visa process?</h4>
                  <p className="text-gray-600 mb-6">
                    Book a consultation and let's discuss how I can help you with your visa needs.
                  </p>
                  <Link href="https://calendly.com" target="_blank">
                    <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-6 rounded-lg">
                      <Calendar className="h-5 w-5" />
                      <span className="text-lg font-medium">Book a Consultation</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Jane Doe • Consulting from {getCurrentLocation()}
          </p>
        </footer>
      </div>
    </div>
  )
}

function getCurrentLocation() {
  // In a real app, this could be dynamically updated
  return "Lisbon, Portugal"
}

