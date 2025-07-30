import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { ParallaxSection } from "@/components/animations/parallax-section"
import { WebLogo } from "@/components/ui/web-logo"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white px-6 py-6">
      {/* Container for the image with white space around it */}
      <div className="relative w-full max-w-7xl h-[85vh] overflow-hidden rounded-lg">
        {/* Parallax Background Image - Contained with rounded corners */}
        <ParallaxSection speed={0.3} className="absolute inset-0 bg-black">
          <div className="absolute inset-0" >
            <img
              src="https://ext.same-assets.com/1838283741/2047500388.jpeg"
              alt="Sophisticated restaurant interior with modern design"
              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </ParallaxSection>

        {/* Floating logo with scroll reveal */}
        <ScrollReveal direction="down" delay={500}>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:border-white/50">
              <WebLogo className="w-8 h-8 text-white" />
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content with restaurant background - BuildUrWeb text */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 h-full flex items-center justify-center">
          <div>
            <ScrollReveal direction="up" delay={800}>
              <h1 className="font-playfair text-5xl md:text-7xl font-light tracking-widest mb-6 hover:scale-105 transition-transform duration-500">
                BuildUrWeb
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={1200}>
              <p className="font-inter text-lg md:text-xl font-light tracking-wide opacity-90 max-w-2xl mx-auto">
                We Build It. You Own It. We Rock It.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Awards/Stats Section with staggered reveal - positioned within the image container */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
          {[
            { number: "50", label: "PROJECTS" },
            { number: "★★", label: "RATED" },
            { number: "🏆", label: "AWARD" },
          ].map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={1500 + index * 200}>
              <div className="text-center text-white group cursor-pointer">
                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-white/50 transition-all duration-300">
                  <span className="text-sm font-medium">{item.number}</span>
                </div>
                <div className="text-xs opacity-70 tracking-wider">{item.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Right side stats - positioned within the image container */}
        <ScrollReveal direction="right" delay={1000}>
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-right hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="text-3xl font-light mb-1">50</div>
            <div className="text-xs opacity-70 tracking-wider">BEST</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
