import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
  } from 'react-icons/fa';

export function Footer() {
    return (
        <section id="contacts">
            <div className='w-full py-4 text-white bg-black px-4 '>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                    <h1 className='w-full my-4 text-center text-3xl font-bold text-[#00df9a]'>CreateSolutionsWorld</h1>
                    <p className='py-4 text-center'>Siga-nos nas nossas redes sociais para ficar atualizado sobre nossos produtos e novidades.  Não perca a oportunidade de se manter conectado!</p>
                    <div className='flex  justify-center md:w-[75%] my-4 gap-8 '>
                        <a href="https://facebook.com/profile.php?id=61552770183294&mibextid=ZbWKwL">
                            <FaFacebookSquare size={30} color='#00df9a' />
                        </a>
                        <a href="https://instagram.com/createsolutionsworld?igshid=MTc4MmM1Yml2Ng==">
                            <FaInstagram size={30} color='#00df9a' />
                        </a>
                        <a href="https://github.com/MatheusFelixDev">
                            <FaGithubSquare size={30} color='#00df9a' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
