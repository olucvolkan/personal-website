import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Briefcase, Calendar, Code, Github, Globe, Instagram, Laptop, Linkedin, MapPin, Twitter, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Volkan Oluc</h1>
              <h2 className="text-xl font-light mb-4 text-gray-600">Senior Software Engineer & Digital Nomad</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
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
          <div className="flex flex-col items-center gap-4">
            <Link
              href="https://youtube.com/@volkanoluc"
              className="flex items-center gap-2 text-lg text-gray-900 hover:text-red-600 transition-colors mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to my YouTube Channel{' '}
              <span className="font-semibold text-red-600">@volkanoluc</span>
              <svg className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
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
              <Link href="https://medium.com/@volkanoluc" target="_blank" aria-label="Medium">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full bg-white hover:bg-black text-black hover:text-white border-2 border-gray-200 hover:border-black flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                  <span className="font-medium">Medium</span>
                </Button>
              </Link>
            </div>
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
                <Link href="https://buymeacoffee.com/volkanoluc" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full bg-white hover:bg-[#FFDD00] text-[#000000] hover:text-black border-2 border-[#FFDD00] hover:border-[#FFDD00] flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                    </svg>
                    <span className="font-medium">Buy me a coffee</span>
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
      </div>
    </div>
  )
}

function getCurrentLocation() {
  // In a real app, this could be dynamically updated
  return "Malta"
}

