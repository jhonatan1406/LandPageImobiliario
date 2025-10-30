import React, { useEffect, useState } from 'react';
import {  Award, Star } from 'lucide-react';

const Corretor: React.FC = () => {
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

    const element = document.getElementById('corretor');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Especialista em Loteamentos",
      description: "Mais 100 unidades vendidas em empreendimentos de alto padrão."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Atendimento Personalizado",
      description: "Acompanhamento completo desde a escolha até a escritura"
    }
  ];

  

  return (
    <section id="corretor" className="section-padding bg-cinza-claro">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-verde-escuro mb-6">
            Conheça seu
            <span className="gradient-text block mt-2">Especialista</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alex Ferraz é o profissional que vai transformar seu sonho em realidade. 
            Com experiência comprovada e atendimento personalizado.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo and Info */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-dourado">
                <img
                  src="Alexferraz.png"
                  alt="Alex Ferraz - Corretor Especialista"
                  className="w-full h-full object-cover object-[50%_1%]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-dourado text-white p-3 rounded-full shadow-lg">
                <Star className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-verde-escuro mb-2">Alex Ferraz</h3>
            <p className="text-xl text-dourado font-semibold mb-4">Corretor Especialista</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              "Minha missão é encontrar o lote perfeito para cada família, 
              oferecendo orientação completa e transparente em todo o processo de compra."
            </p>

            {/* CRECI */}
            <div className="inline-flex items-center bg-verde-escuro text-white px-4 py-2 rounded-full">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-semibold">CRECI/MG 54.924</span>
            </div>
          </div>

          {/* Achievements */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-dourado rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-verde-escuro mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corretor;

