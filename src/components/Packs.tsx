import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Packs() {
    return (

        <section id="packs">
            <div className='w-full py-[10rem] px-4 flex flex-col justify-center'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 justify-center  '>
                    <Card className="w-[350px] mx-4 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
                        <CardHeader>
                            <CardTitle className='text-[#00df9a] text-2xl font-bold text-center py-8'>Plano START</CardTitle>
                                <CardDescription className='text-center text-4xl font-bold'>
                                    $299
                                </CardDescription>
                        </CardHeader>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Desenvolvimento de Páginas de Captura</AccordionTrigger>
                                <AccordionContent>
                                    Este serviço envolve a criação de páginas web dedicadas à captação de leads.
                                    Essas páginas são projetadas de forma envolvente e atraente,
                                    com o objetivo de reter a atenção dos visitantes e incentivá-los a fornecer suas informações de contato.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Otimização para Conversões</AccordionTrigger>
                                <AccordionContent>
                                    A otimização para conversões se concentra em aprimorar todos os elementos de
                                    uma página de captura para aumentar a taxa de conversão.
                                    Isso inclui o design, o posicionamento de elementos,
                                    a clareza da mensagem e as chamadas para ação,
                                    tudo projetado para maximizar o número de visitantes que se tornam leads.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Ferramentas de Gestão de Leads</AccordionTrigger>
                                <AccordionContent>
                                    Esse serviço envolve a integração da página de captura com ferramentas de gestão de leads,
                                    como sistemas CRM (Customer Relationship Management) e plataformas de automação de marketing.
                                    Isso permite o armazenamento,
                                    organização e nutrição eficaz dos leads capturados.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>

                    

                    <Card className="w-[350px] mx-4 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
                        <CardHeader>
                            <CardTitle className='text-[#00df9a] text-2xl font-bold text-center py-8'>Plano Premium</CardTitle>
                                <CardDescription className='text-center text-4xl font-bold'>
                                    $699
                                </CardDescription>
                        </CardHeader>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Desenvolvimento de Páginas de Captura</AccordionTrigger>
                                <AccordionContent>
                                    Este serviço envolve a criação de páginas web dedicadas à captação de leads.
                                    Essas páginas são projetadas de forma envolvente e atraente,
                                    com o objetivo de reter a atenção dos visitantes e incentivá-los a fornecer suas informações de contato.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>Otimização para Conversões</AccordionTrigger>
                                <AccordionContent>
                                    A otimização para conversões se concentra em aprimorar todos os elementos de
                                    uma página de captura para aumentar a taxa de conversão.
                                    Isso inclui o design, o posicionamento de elementos,
                                    a clareza da mensagem e as chamadas para ação,
                                    tudo projetado para maximizar o número de visitantes que se tornam leads.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>Ferramentas de Gestão de Leads</AccordionTrigger>
                                <AccordionContent>
                                    Esse serviço envolve a integração da página de captura com ferramentas de gestão de leads,
                                    como sistemas CRM (Customer Relationship Management) e plataformas de automação de marketing.
                                    Isso permite o armazenamento,
                                    organização e nutrição eficaz dos leads capturados.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger>Estratégias de Conteúdo</AccordionTrigger>
                                <AccordionContent>
                                    Essa estratégia foca na criação de conteúdo persuasivo e relevante nas páginas de captura.
                                    Desde títulos envolventes até textos convincentes,
                                    o objetivo é convencer os visitantes a fornecerem suas informações de contato.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger>Testes A/B</AccordionTrigger>
                                <AccordionContent>
                                    Os testes A/B envolvem a criação de diferentes variações de
                                    uma página de captura para determinar qual versão converte melhor.
                                    Com base nos resultados, a página é otimizada continuamente para maximizar a eficácia.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6">
                                <AccordionTrigger>Automatização de Fluxo de Leads</AccordionTrigger>
                                <AccordionContent>
                                    Esse serviço se refere à implementação de sistemas automáticos para nutrir e qualificar leads.
                                    Isso pode envolver respostas automáticas, segmentação e fluxos de comunicação personalizados
                                    para garantir que os leads sejam acompanhados e convertidos de forma eficiente.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                </div>
            </div>
        </section>
    )
}