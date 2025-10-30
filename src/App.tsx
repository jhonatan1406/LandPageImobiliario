import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Beneficios from './components/sections/Beneficios';
import GaleriaFotos from './components/sections/GaleriaFotos';
import Lotes from './components/sections/Lotes';
import PorQueInvestir from './components/sections/PorQueInvestir';
import Corretor from './components/sections/Corretor';
import Contato from './components/sections/Contato';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <GaleriaFotos/>
        < Beneficios />
        <Lotes />
        <PorQueInvestir />
        <Corretor />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;

