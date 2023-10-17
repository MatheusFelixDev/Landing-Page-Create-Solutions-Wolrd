import { Button } from './ui/button'

import { Carousel }from './carousel'

export function Banner() {
  return (
    <section id="banner" className="bg-black text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Capte mais Leads
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-6">
            O Seu Site Precisa de Vida!
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Transforme sua Presença Online com Soluções Dinâmicas e Atraentes.
          </p>
          <div className="flex items-center">
            <Button className="mr-4">Solicite sua avaliação</Button>
            <Button variant="link">Saiba mais</Button>
          </div>
        </div>
        <div className="text-center">
          < Carousel />
        </div>
      </div>
    </section>
  );
}

export default Banner;
