import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Briefcase, Calendar, Code, Github, Globe, Instagram, Laptop, Linkedin, MapPin, Twitter, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Volkan Oluc</h1>
              <h2 className="text-xl md:text-2xl font-light mb-4">Senior Software Engineer & Digital Nomad</h2>
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
            <Link href="https://github.com/olucvolkan" target="_blank" aria-label="GitHub">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white hover:bg-gray-900 text-gray-900 hover:text-white border-2 border-gray-200 hover:border-gray-900 flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium">GitHub</span>
              </Button>
            </Link>
            <Link href="https://x.com/olucvolkan" target="_blank" aria-label="X">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white hover:bg-black text-black hover:text-white border-2 border-gray-200 hover:border-black flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Twitter className="h-5 w-5" />
                <span className="font-medium">X</span>
              </Button>
            </Link>
            <Link href="https://youtube.com/@volkanoluc" target="_blank" aria-label="YouTube">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white hover:bg-[#FF0000] text-[#FF0000] hover:text-white border-2 border-[#FF0000] hover:border-[#FF0000] flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-red-200"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="font-medium">YouTube</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/volkan-oluc/" target="_blank" aria-label="LinkedIn">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white hover:bg-[#0077B5] text-[#0077B5] hover:text-white border-2 border-[#0077B5] hover:border-[#0077B5] flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-medium">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/volkanoluc/" target="_blank" aria-label="Instagram">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-white hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] text-[#E1306C] hover:text-white border-2 border-[#E1306C] hover:border-transparent flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
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
                Hey! I'm Volkan, a software engineer with 7 years of experience, specializing in PHP (Laravel, Symfony) and TypeScript (NestJS). I build scalable web applications and leverage AI tools to work efficiently. My expertise includes designing robust microservices architectures, implementing secure authentication systems, and optimizing database performance.
              </p>
              <p>
                As a digital nomad, I explore the world while working remotely. My journey has taken me to coliving spaces across Europe, where I create content on remote work, travel, and digital nomad visas. I'm particularly passionate about building communities and helping others transition into the digital nomad lifestyle, sharing insights about work-life balance and productivity while traveling.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/volkanoluc_cv.pdf" target="_blank" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full bg-white hover:bg-blue-600 text-blue-600 hover:text-white border-2 border-blue-200 hover:border-blue-600 flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="font-medium">Download CV</span>
                  </Button>
                </Link>
              </div>
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
            <ul className="space-y-6 text-gray-600">
              <li className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full mt-1">
                  <Laptop className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Full-Stack Development</h4>
                  <p>Specializing in PHP (Laravel, Symfony) and TypeScript (NestJS). Working on scalable web applications with a strong focus on backend architecture, database design, and API development.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-red-100 p-2 rounded-full mt-1">
                  <Video className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Volkan Oluc (YouTube)</h4>
                  <p>Creating content on digital nomad visas, coliving experiences, and remote work across Europe. Helping others navigate the digital nomad lifestyle.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Malta Digital Nomad Visa Consulting</h4>
                  <p>Assisting individuals in obtaining a Malta digital nomad visa by providing guidance on eligibility, application processes, and relocation tips.</p>
                </div>
              </li>
            </ul>
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
              <h3 className="text-3xl font-bold">Malta Digital Nomad Visa Consulting</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative">
              <div className="space-y-4">
                <p className="text-blue-50 text-lg">
                  Relocating to Malta as a digital nomad? Navigating the visa process can be complex, but with the right guidance, you can secure your visa smoothly and cost-effectively. Having personally gone through the entire process, I've gained valuable insights and learned from costly mistakes—now, I'm here to help you avoid them.
                </p>
                <p className="text-blue-50 text-lg">
                  With my firsthand experience and expertise, I'll provide you with step-by-step support to make your transition to Malta seamless and hassle-free. Let's get started on your digital nomad journey!
                </p>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg mt-6">
                  <h4 className="text-blue-600 font-bold text-xl mb-2">Ready to simplify your visa process?</h4>
                  <p className="text-gray-600 mb-6">
                    Book a consultation and let's discuss how I can help you with your Malta digital nomad visa journey.
                  </p>
                  <Link href="https://calendly.com/volkanoluc" target="_blank">
                    <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-6 rounded-lg">
                      <Calendar className="h-5 w-5" />
                      <span className="text-lg font-medium">Book a Consultation</span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h4 className="font-semibold text-xl mb-4">How I Can Help You:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-xl mt-1">✅</div>
                    <div>
                      <h5 className="font-semibold mb-1">Comprehensive Guidance</h5>
                      <p className="text-blue-50">I'll answer all your questions about the visa requirements, process, and timelines.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-xl mt-1">✅</div>
                    <div>
                      <h5 className="font-semibold mb-1">Application Assistance</h5>
                      <p className="text-blue-50">We'll complete all the necessary paperwork together to ensure accuracy and avoid delays.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-xl mt-1">✅</div>
                    <div>
                      <h5 className="font-semibold mb-1">Health Insurance Support</h5>
                      <p className="text-blue-50">I'll help you find the most cost-effective health insurance that meets the visa requirements.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-xl mt-1">✅</div>
                    <div>
                      <h5 className="font-semibold mb-1">Housing Assistance</h5>
                      <p className="text-blue-50">I'll guide you on the best platforms to find accommodation and connect you with trusted contacts in Malta.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-xl mt-1">✅</div>
                    <div>
                      <h5 className="font-semibold mb-1">Post-Arrival Support</h5>
                      <p className="text-blue-50">Once you arrive, I'll assist you in completing the required documents to obtain your Maltese residence ID card.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Volkan Oluc • Consulting from {getCurrentLocation()}
          </p>
        </footer>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            href="https://youtube.com/@volkanoluc"
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to my YouTube Channel{' '}
            <span className="text-red-600">@volkanoluc</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function getCurrentLocation() {
  // In a real app, this could be dynamically updated
  return "Malta"
}

