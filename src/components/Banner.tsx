export function Banner(){
    return (
      <section id=" ">
        <div className='text-white bg-black bg-cover'>
          <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            Capitute mais Leads  
            </h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              O Seu Site Precisa de Vida!
              </p>
              
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Transforme sua Presença Online com Soluções Dinâmicas e Atraentes. </p>
            <button className='w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black bg-[#00df9a] hover:bg-green-400 transition-colors'>Solicite sua avaliação</button>
          </div>
        </div>
      </section>
    );
  };