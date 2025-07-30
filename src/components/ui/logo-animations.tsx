"use client"

import { useState, useEffect } from "react"
import { WebLogo } from "./web-logo"

interface LogoAnimationProps {
  isVisible: boolean
  onComplete: () => void
}

export function LogoAnimation({ isVisible, onComplete }: LogoAnimationProps) {
  const [animationStage, setAnimationStage] = useState<
    "initial" | "sliding" | "fade" | "popup" | "display" | "complete"
  >("initial")

  useEffect(() => {
    if (!isVisible) {
      setAnimationStage("initial")
      return
    }

    // Start the sliding animation immediately
    const startSlide = setTimeout(() => {
      setAnimationStage("sliding")
    }, 50) // Small delay to ensure the initial state is rendered

    // Stage 1: Slide animation completes (2 seconds)
    const slideComplete = setTimeout(() => {
      setAnimationStage("fade")
    }, 2100)

    // Stage 2: Start popup animation (0.3 seconds after slide completes)
    const popupTimer = setTimeout(() => {
      setAnimationStage("popup")
    }, 2400)

    // Stage 3: Display stage (0.8 seconds after popup starts)
    const displayTimer = setTimeout(() => {
      setAnimationStage("display")
    }, 3200)

    // Stage 4: Complete animation (2 seconds after display)
    const completeTimer = setTimeout(() => {
      setAnimationStage("complete")
      onComplete()
    }, 5200)

    return () => {
      clearTimeout(startSlide)
      clearTimeout(slideComplete)
      clearTimeout(popupTimer)
      clearTimeout(displayTimer)
      clearTimeout(completeTimer)
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Sliding white page - starts completely off-screen at bottom */}
      <div
        className={`absolute inset-0 bg-white transition-transform ease-out ${
          animationStage === "initial"
            ? "transform translate-y-full duration-0"
            : animationStage === "sliding" ||
                animationStage === "fade" ||
                animationStage === "popup" ||
                animationStage === "display"
              ? "transform translate-y-0 duration-[2000ms]"
              : "transform translate-y-0 duration-[2000ms]"
        }`}
        style={{
          transformOrigin: "bottom",
        }}
      />

      {/* Logo and text container - with smooth bottom-to-top popup animation */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-800 ease-out ${
          animationStage === "fade"
            ? "opacity-0 transform translate-y-8"
            : animationStage === "popup" || animationStage === "display"
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
        }`}
      >
        <div className="text-center space-y-6">
          {/* Logo with individual popup animation */}
          <div
            className={`flex justify-center transition-all duration-600 ease-out ${
              animationStage === "fade"
                ? "transform translate-y-12 opacity-0"
                : animationStage === "popup" || animationStage === "display"
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: animationStage === "popup" ? "0ms" : "0ms",
            }}
          >
            <div className="w-24 h-24 border-2 border-gray-900 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <WebLogo className="w-12 h-12 text-gray-900" />
            </div>
          </div>

          {/* Main Text with staggered popup animation */}
          <div
            className={`transition-all duration-700 ease-out ${
              animationStage === "fade"
                ? "transform translate-y-16 opacity-0"
                : animationStage === "popup" || animationStage === "display"
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-16 opacity-0"
            }`}
            style={{
              transitionDelay: animationStage === "popup" ? "200ms" : "0ms",
            }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-light tracking-widest florilege-text-dark">
              BuildUrWeb
            </h1>
          </div>

          {/* Tagline with final popup animation */}
          <div
            className={`transition-all duration-600 ease-out ${
              animationStage === "fade"
                ? "transform translate-y-12 opacity-0"
                : animationStage === "popup" || animationStage === "display"
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: animationStage === "popup" ? "400ms" : "0ms",
            }}
          >
            <p className="font-inter text-sm tracking-wide text-gray-600 font-light">Where design meets function</p>
          </div>
        </div>
      </div>
    </div>
  )
}
