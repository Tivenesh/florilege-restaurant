import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { ParallaxSection } from "@/components/animations/parallax-section"

export function HeroSplitSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Sophisticated Two-Tone Background with Gradient Transition */}
      <div className="absolute inset-0">
        {/* Base white background */}
        <div className="absolute inset-0 bg-white" />

        {/* Gradient overlay for smooth transition */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, 
              #FFFFFF 0%, 
              #FFFFFF 45%, 
              #FEFEFE 48%, 
              #FCFCFA 50%, 
              #F9F9F7 52%, 
              #F5F5DC 55%, 
              #F5F5DC 100%)`,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
            {/* Left Section - Content Area (White Background) */}
            <div className="flex items-center justify-center lg:justify-end pr-8">
              <div className="text-center lg:text-right max-w-lg">
                <ScrollReveal direction="left" delay={600}>
                  <div className="space-y-6">
                    <p className="font-serif text-lg text-gray-600 font-light leading-relaxed">
                      Crafting digital experiences that transcend expectations
                    </p>
                    <div className="w-24 h-px bg-gray-300 mx-auto lg:ml-auto lg:mr-0" />
                    <p className="font-serif text-sm text-gray-500 font-light tracking-wide uppercase">Est. 2020</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right Section - Image Area (Cream Background) */}
            <div className="flex items-center justify-center lg:justify-start pl-8">
              <ScrollReveal direction="right" delay={800}>
                <ParallaxSection speed={0.1}>
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=600&width=450"
                      alt="BuildUrWeb Founders - Professional Portrait"
                      className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-[1.02]"
                      style={{
                        aspectRatio: "3/4",
                        objectFit: "cover",
                        filter: "grayscale(10%) contrast(1.05) brightness(0.98)",
                        maxWidth: "400px",
                      }}
                    />

                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-black/5 rounded-3xl transition-opacity duration-500 hover:opacity-0" />

                    {/* Elegant shadow backdrop */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full bg-gray-200/30 rounded-3xl -z-10 blur-sm" />
                  </div>
                </ParallaxSection>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Absolutely Centered Title - Spanning Both Sections */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center">
            <h1
              className="font-playfair font-light leading-tight tracking-wide"
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                background: "linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 50%, #2D2D2D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Behind
              <br />
              <span className="block mt-2">BuildUrWeb</span>
            </h1>

            {/* Elegant underline */}
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollReveal direction="up" delay={1200}>
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            <p className="text-xs font-light tracking-widest uppercase">Scroll</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
