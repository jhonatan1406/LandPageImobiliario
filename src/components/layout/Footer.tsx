import React from 'react';
import { Phone, Mail, MapPin, Instagram} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Início', href: 'hero' },
    { label: 'Benefícios', href: 'beneficios' },
    { label: 'Galeria', href: 'galeria' },
    { label: 'Lotes', href: 'lotes' },
    { label: 'Por que investir', href: 'por-que-investir' },
    { label: 'Contato', href: 'contato' }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/alexferraz_imoveis/",
      label: "Instagram"
    }
  ];

  return (
    <footer className="bg-verde-escuro text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              Retiro das Águas
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O empreendimento que mais valoriza em Lagoa Santa. 
              Após o sucesso da 1ª fase com valorização de 57%, 
              a 2ª fase oferece novas oportunidades de investimento 
              em um dos locais mais privilegiados da região.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-dourado" />
                <span>(31) 99219-3857 </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-dourado" />
                <span>alex.almeida.imob@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-dourado" />
                <span>Lagoa Santa - MG</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-dourado transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">Fique por Dentro</h4>
            <p className="text-gray-300 mb-4">
              Receba novidades sobre o empreendimento e oportunidades exclusivas.
            </p>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dourado"
              />
              <button className="w-full btn-primary">
                Inscrever-se
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-3">Siga-nos</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dourado transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Retiro das Águas. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-300">
              <span>Desenvolvido por Jhonatan Almeida</span>
              <span className="hidden md:block">|</span>
              <span>CRECI/MG 123.456</span>
              <span className="hidden md:block">|</span>
              <button className="hover:text-dourado transition-colors duration-300">
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=5531992193857&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-600 z-50 "
        aria-label="Falar no WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;

