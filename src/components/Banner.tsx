import { Button } from './ui/button'

import { Carousel }from './carousel'

export function Banner() {
  return (
    <section id="banner" className="bg-black text-white py-8 px-4">

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-2 ">
        
        <div className="text-center my-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Capte mais Leads
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-6">
            Crie uma Experiência Online que Conquiste, Engaje e Converta.
          </p>
          <p className="text-lg text-gray-500 mb-8">
          Transforme Seu Site em uma Máquina de Conversões com Soluções Personalizadas e Eficazes que Garantem Resultados Extraordinários. Capte Leads com Maestria e Alcance o Sucesso Online que Você Merece!
          </p>
          <div>
            <Button className="mr-4">Solicite sua avaliação</Button>
            <Button variant="link">Saiba mais</Button>
          </div>
        </div>

        <div >
          < Carousel />
        </div>
        
      </div>
    </section>
  );
}

export default Banner;
