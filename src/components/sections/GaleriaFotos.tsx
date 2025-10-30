import React, { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

const GaleriaFotos: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const element = document.getElementById("galeria")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const images = [
    {
      src: "images/carousel/01.jpg",
      alt: "Vista aérea do empreendimento",
      caption: "Vista aérea do Retiro das Águas - Um paraíso na natureza"
    },
    {
      src: "images/carousel/02.jpg",
      alt: "Área de lazer com piscina",
      caption: "Área de lazer completa com piscina e deck"
    },
    {
      src: "images/carousel/03.jpg",
      alt: "Casa modelo construída",
      caption: "Casa modelo - Arquitetura moderna integrada à natureza"
    },
    {
      src: "images/carousel/07.jpg",
      alt: "Trilha ecológica",
      caption: "Trilhas ecológicas preservadas para caminhadas"
    },
    {
      src: "images/carousel/09.jpg",
      alt: "Vista da lagoa",
      caption: "Vista privilegiada da lagoa cristalina"
    },
    {
      src: "images/carousel/12.jpg",
      alt: "Área verde preservada",
      caption: "Mais de 60% de área verde preservada"
    },
    {
      src: "images/carousel/19.jpg",
      alt: "Quadra de tênis",
      caption: "Quadra de tênis oficial para os moradores"
    },
    {
      src: "images/carousel/20.jpg",
      alt: "Quadra de tênis",
      caption: "Quadra de tênis oficial para os moradores"
    },
     {
      src: "images/carousel/24.jpg",
      alt: "Quadra de tênis",
      caption: "Quadra de tênis oficial para os moradores"
    },
     {
      src: "images/carousel/23.jpg",
      alt: "Quadra de tênis",
      caption: "Quadra de tênis oficial para os moradores"
    }
  ]

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-verde-escuro mb-6">
            Conheça o <span className="gradient-text block mt-2">Retiro das Águas</span>
          </h2>
        </div>

        {/* Carrossel com legenda e zoom */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "300ms" }}>
          <div className="relative max-w-7xl h-[500px] mx-auto">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {images.map((img, i) => (
                  <CarouselItem
                    key={i}
                    index={i}
                    className="flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md h-full"
                  >
                    <div className="w-full h-full">
                      <img
                        src={img.src}
                        alt={img.alt}
                        data-caption={img.caption}
                        className="w-full h-full object-cover rounded-lg cursor-zoom-in"
                      />
                    </div>
                    <p className="mt-2 text-sm text-center text-gray-700">{img.caption}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className={`bg-verde-escuro rounded-2xl p-8 md:p-12 text-white text-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "900ms" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div><div className="text-4xl font-bold text-dourado mb-2">60%</div><div className="text-lg">Área Verde Preservada</div></div>
            <div><div className="text-4xl font-bold text-dourado mb-2">24h</div><div className="text-lg">Segurança Garantida</div></div>
            <div><div className="text-4xl font-bold text-dourado mb-2">100%</div><div className="text-lg">Infraestrutura Completa</div></div>
          </div>
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "1200ms" }}>
          <h3 className="text-2xl md:text-3xl font-bold text-verde-escuro mb-4">Quer conhecer pessoalmente?</h3>
          <p className="text-gray-600 mb-6 text-lg">Agende uma visita e veja de perto tudo que o Retiro das Águas tem a oferecer.</p>
          <button
            onClick={() => {
              const element = document.getElementById("contato")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Agendar visita
          </button>
        </div>
      </div>
    </section>
  )
}

export default GaleriaFotos
