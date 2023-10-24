import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"

export function Newsletter(){
    return (

        <section id="tips">
            <div className='w-full py-4 text-white bg-black px-4'>
                <div className='max-w-[1240px] mx-auto grid lg:justify-center  '>
                    <div className='lg:col-span-2 my-4 text-center '>
                        <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                            Quer dicas para otimizar seu fluxo?
                        </h1>
                        <p>Assine nosso boletim de noticias e mantenha-se atualizado. É de GRAÇA!!!</p>
                    </div>
                    <div className='my-4 '>
                        <div>
                            <form className='flex w-full max-w-sm items-center space-x-2' method="post" action="https://systeme.io/embedded/11738466/subscription">
                                <Input type="email" placeholder="Email" name="email" />
                                <Button type="submit">Subscribe</Button>
                            </form>
                        </div>
                        <p className="my-2">
                            Nós nos preocupamos com a proteção de seus dados. Leia nossa    
                            <Button variant="link">Política de Privacidade .</Button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}