import React, { useEffect, useState } from 'react';
import { Check, Star, MapPin, Ruler, TreePine } from 'lucide-react';

const Lotes: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('lotes');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const lotes = [
    {
      type: "R1",
      title: "Lotes Residenciais R1",
      subtitle: "Melhor custo-benefício",
      area: "360m²",
      areaMin: "a partir de",
      price: "Consulte valores",
      badge: "Mais Procurado",
      badgeColor: "bg-green-500",
      features: [
        "Área mínima de 360m²",
        "Ideal para casas de até 200m²",
        "Excelente custo-benefício",
        "Vista para área verde",
        "Próximo à área de lazer",
        "Fácil acesso à portaria"
      ],
      icon: <TreePine className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      popular: true
    },
    {
      type: "R2",
      title: "Lotes Residenciais R2",
      subtitle: "Para projetos mais amplos",
      area: "500m²",
      areaMin: "a partir de",
      price: "Consulte valores",
      badge: "Premium",
      badgeColor: "bg-dourado",
      features: [
        "Área mínima de 500m²",
        "Ideal para casas de até 300m²",
        "Maior privacidade",
        "Vista panorâmica privilegiada",
        "Topografia favorável",
        "Localização premium"
      ],
      icon: <Star className="w-8 h-8" />,
      color: "from-dourado to-cobre",
      popular: false
    }
  ];

  const advantages = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização Estratégica",
      description: "Próximo a Belo Horizonte com fácil acesso"
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Flexibilidade de Projeto",
      description: "Liberdade para construir sua casa dos sonhos"
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Natureza Preservada",
      description: "Cercado por mata nativa e lagoas"
    }
  ];

  return (
    <section id="lotes" className="section-padding bg-cinza-claro">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-verde-escuro mb-6">
            Escolha seu
            <span className="gradient-text block mt-2">Lote Ideal</span>
          </h2>
        </div>

        {/* Lotes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {lotes.map((lote, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
                lote.popular ? 'ring-4 ring-dourado ring-opacity-50' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Badge */}
              {lote.badge && (
                <div className={`absolute top-4 right-4 ${lote.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold z-10`}>
                  {lote.badge}
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${lote.color} p-8 text-white`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    {lote.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{lote.title}</h3>
                    <p className="text-white/90">{lote.subtitle}</p>
                  </div>
                </div>
                
                <div className="text-center py-6">
                  <div className="text-sm opacity-90 mb-2">{lote.areaMin}</div>
                  <div className="text-5xl font-bold mb-2">{lote.area}</div>
                  <div className="text-lg opacity-90">{lote.price}</div>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {lote.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const element = document.getElementById('contato');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full mt-8 py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    lote.popular 
                      ? 'bg-dourado hover:bg-cobre text-white' 
                      : 'bg-verde-escuro hover:bg-verde-medio text-white'
                  }`}
                >
                  Consultar Disponibilidade
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-dourado rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-verde-escuro mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`bg-verde-escuro rounded-2xl p-8 md:p-12 text-white text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '900ms' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Últimas Unidades Disponíveis!
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Não perca a oportunidade de fazer parte do empreendimento que mais valoriza em Lagoa Santa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Falar com Especialista
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('galeria');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary text-lg px-8 py-4"
            >
              Ver Galeria de Fotos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lotes;

