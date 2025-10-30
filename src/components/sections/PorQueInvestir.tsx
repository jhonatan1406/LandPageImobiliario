import React, { useEffect, useState } from 'react';
import { TrendingUp, Award, Users, MapPin, Shield, Clock } from 'lucide-react';

const PorQueInvestir: React.FC = () => {
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

    const element = document.getElementById('por-que-investir');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "57%",
      label: "Valorização na 1ª Fase",
      description: "Crescimento comprovado em apenas 2 anos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "180+",
      label: "Famílias Satisfeitas",
      description: "Já escolheram o Retiro das Águas"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Anos de Experiência",
      description: "Alez Ferraz no mercado imobiliário"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: "100%",
      label: "Infraestrutura Entregue",
      description: "Conforme prometido na 1ª fase"
    }
  ];

  const reasons = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança do Investimento",
      description: "Empreendimento com documentação completa, licenças ambientais e registro no cartório. Seu investimento está protegido."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Potencial de Valorização",
      description: "Localização estratégica em região de crescimento acelerado, próxima a Belo Horizonte e com infraestrutura em expansão."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tradição de Entrega",
      description: "Guerra participações possui histórico comprovado de entrega de empreendimentos com qualidade e dentro do prazo estabelecido."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidade Consolidada",
      description: "Mais de 180 famílias já vivem no empreendimento, criando uma comunidade sólida e harmoniosa."
    }
  ];

  return (
    <section id="por-que-investir" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-verde-escuro mb-6">
            Por que
            <span className="gradient-text block mt-2">Investir Agora?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O sucesso da 1ª fase comprova o potencial do empreendimento. 
            A 2ª fase oferece a última oportunidade de investir com preços de lançamento.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-cinza-claro rounded-xl hover:bg-white hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-dourado rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-verde-escuro mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 4) * 150}ms` }}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-verde-escuro rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-verde-escuro mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className={`bg-verde-escuro rounded-2xl p-8 md:p-12 text-white text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-dourado mb-6">"</div>
            <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
              O Retiro das Águas não é apenas um empreendimento imobiliário, 
              é um projeto de vida. Cada detalhe foi pensado para proporcionar 
              qualidade de vida e valorização do investimento.
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <div className="text-xl font-bold text-dourado">Alex Ferraz</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1500ms' }}>
          <div className="bg-gradient-to-r from-dourado to-cobre rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Oportunidade Única de Investimento
            </h3>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              A 2ª fase do Retiro das Águas oferece a última chance de investir 
              em um dos empreendimentos mais valorizados de Lagoa Santa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-dourado hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              >
                Quero Investir Agora
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('corretor');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dourado font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueInvestir;

