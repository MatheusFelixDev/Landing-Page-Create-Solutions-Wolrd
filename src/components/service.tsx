import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";


export function Service() {
    return (

        <section id="service">
            <div className='w-full  py-16 px-4 '>
                <div className='max-w-[1240px] mx-auto md:grid-cols'>        
                    
                    <div className='flex flex-col justify-center'>

                        <div className="flex justify-center my-8 flex-col items-center text-center">
                            <h1 className='text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl'>Soluções de alto desempenho</h1>
                            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Aumente Sua Taxa de Conversão em até 50% com Nossas Estratégias de Captação de Leads</h1>
                            <p>
                                Potencialize sua estratégia de captação de leads com nossas soluções personalizadas e eficazes.
                                Criamos páginas de captura que transformam visitantes em clientes potenciais qualificados,
                                impulsionando o crescimento do seu negócio.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between my-8 gap-8">
                            <Card className="w-[350px] mx-4">
                                <CardHeader>
                                    <CardTitle className='text-[#00df9a]'>Engajamento</CardTitle>
                                    <CardDescription>
                                        Desenvolvemos páginas de captura envolventes e intuitivas
                                        que prendem a atenção dos visitantes desde o primeiro contato.
                                        Com designs atraentes e chamadas de ação persuasivas,
                                        garantimos uma taxa de conversão mais alta para seus leads.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="w-[350px] mx-4">
                                <CardHeader>
                                    <CardTitle className='text-[#00df9a]'>Otimização</CardTitle>
                                    <CardDescription>
                                        Analisamos e otimizamos cada elemento das suas páginas de captura para maximizar a eficácia da conversão.
                                        Desde o layout até o texto e os formulários,
                                        cada detalhe é ajustado para garantir que sua página gere leads de alta qualidade
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="w-[350px] mx-4">
                                <CardHeader>
                                    <CardTitle className='text-[#00df9a]'>Gestão de Leads</CardTitle>
                                    <CardDescription>
                                        Facilitamos o gerenciamento e a nutrição de leads com integrações perfeitas
                                        com as principais ferramentas de gestão de leads.
                                        Desde CRM até automação de marketing,
                                        garantimos que seus leads sejam capturados e acompanhados de forma eficiente.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}