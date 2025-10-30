import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contato: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    interesse: 'lote-r1',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contato');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send('service_alpfvxk', 'template_veco3g7', formData, 'IkFRnOlg1YmzW0Lwh')
      .then(() => {
        console.log('Email enviado com sucesso!');
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            nome: '',
            email: '',
            whatsapp: '',
            interesse: 'lote-r1',
            mensagem: ''
          });
        }, 3000);
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error);
      });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      value: "(31) 99219-3857",
      description: "Atendimento de segunda a segunda"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      value: "alex.almeida.imob@gmail.com",
      description: "Resposta em até 36 horas"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "Lagoa Santa - MG",
      description: "Próximo ao centro da cidade"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário de Atendimento",
      value: "Seg a Sex: 8h às 18h",
      description: "Sáb: 8h às 12h"
    }
  ];

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-verde-escuro mb-6">
            Solicite
            <span className="gradient-text block mt-2">Atendimento Exclusivo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Preencha o formulário abaixo e receba atendimento personalizado com Alex Ferraz, 
            especialista em loteamentos do Retiro das Águas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-cinza-claro rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-verde-escuro mb-6">
                Formulário de Contato
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="form-label">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Digite seu e-mail"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="form-label">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="(31) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="interesse" className="form-label">
                      Interesse
                    </label>
                    <select
                      id="interesse"
                      name="interesse"
                      value={formData.interesse}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="lote-r1">Lotes R1 (a partir de 360m²)</option>
                      <option value="lote-r2">Lotes R2 (a partir de 500m²)</option>
                      <option value="visita">Agendar visita</option>
                      <option value="informacoes">Mais informações</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="form-label">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Conte-nos mais sobre seu interesse..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center"
                    
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Solicitar Atendimento
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Campos obrigatórios. Seus dados estão protegidos pela LGPD.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-verde-escuro mb-4">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Obrigado pelo seu interesse! Alex Ferraz entrará em contato 
                    em breve para oferecer atendimento personalizado.
                  </p>
                  <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                    <p className="text-green-700 font-medium">
                      ⏰ Tempo de resposta: até 2 horas úteis
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-dourado rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-verde-escuro mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-800 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           {/* Map */}
            <div className="rounded-xl overflow-hidden h-64">
              <iframe
                title="Localização - Retiro das Águas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15034.163879481414!2d-43.9066115!3d-19.62615625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697c03f9a872b%3A0xdde3473d5ad5637c!2sLagoa%20Santa%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1719840000000"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="border-0 w-full h-full"
              ></iframe>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 bg-verde-escuro rounded-xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-4">
                Prefere falar diretamente?
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+5531992193857"
                  className="flex-1 bg-dourado hover:bg-cobre text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora
                </a>
                <a
                  href="https://wa.me/5531992193857 
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

