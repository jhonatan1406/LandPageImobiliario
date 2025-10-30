import React, { useEffect, useState } from 'react';
import { Shield, Dumbbell, Eye, Zap, MapPin, Wifi } from 'lucide-react';

const Beneficios: React.FC = () => {
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

    const element = document.getElementById('beneficios');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const beneficios = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança 24h",
      description: "Portaria com controle de acesso e monitoramento completo para sua tranquilidade e de sua família.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Lazer Completo",
      description: "Quadra de tênis, academia panorâmica, playground e áreas de convivência para toda a família.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vista Deslumbrante",
      description: "Paisagens naturais preservadas com vista para montanhas e lagoas cristalinas.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Infraestrutura Completa",
      description: "Energia elétrica, água tratada, esgoto, pavimentação e iluminação pública.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Localização Privilegiada",
      description: "A apenas 15 minutos do aeroporto, pertinho de Belo Horizonte e cercado por vistas deslumbrantes das montanhas.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Conectividade",
      description: "Fibra óptica disponível e cobertura completa de internet de alta velocidade.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-cinza-claro">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-verde-pdf mb-6 font-sans">
            Por que escolher o
            <span className="gradient-text block mt-2">Retiro das Águas?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Um empreendimento pensado nos mínimos detalhes para oferecer qualidade de vida, 
            segurança e valorização do seu investimento.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${beneficio.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {beneficio.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-verde-pdf mb-4 group-hover:text-verde-medio transition-colors duration-300 font-sans">
                {beneficio.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                {beneficio.description}
              </p>

              {/* Hover effect line */}
              <div className="w-0 h-1 bg-gradient-to-r from-verde-vibrante to-verde-pdf mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '900ms' }}>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-verde-pdf mb-4 font-sans">
              Pronto para fazer parte desta história de sucesso?
            </h3>
            <p className="text-gray-600 mb-6 text-lg font-sans">
              Mais de 180 famílias já escolheram o Retiro das Águas. 
              Seja a próxima a conquistar seu lugar no paraíso.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-verde-pdf text-lg px-8 py-4"
            >
              Quero saber mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;

