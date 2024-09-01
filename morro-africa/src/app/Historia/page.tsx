import HeaderDeslogado from "@/components/Header"
import React from "react"

export default function Historia() {
    return (
        <body className="flex min-h-screen w-full flex-col">
            <HeaderDeslogado />


            <section className="flex flex-col items-center">
                <img className="h-[340px] w-full object-cover opacity-80" src="./historia.jpg" />
                <p className="-mt-36 z-30 font-titulo text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-outline-2 text-verde-header/50">HISTÓRIA</p>
            </section>

            <section className="py-16 lg:py-0 mt-8 lg:mt-12 flex flex-col gap-4 pb-12 px-8 sm:px-36">
                {/* <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 px-8 sm:px-36"> */}
                <h3 className="font-bold text-lg sm:text-xl">História do povoado</h3>
                <p className="text-sm sm:text-base">
                    Segundo o livro Memórias do povoado Morro da África e a história dos negros em Jaraguá do Sul. Emílio Carlos Jourdan um engenheiro belga - junto dos negros que auxiliaram na colonização do município de Jaraguá do Sul - firmou um contrato com a Princesa Isabel, para colonizar quatrocentos e trinta hectares dessas terras. Pretendia estabelecer uma usina de açúcar. Para concretizar o projeto, contratou ferreiros, mecânicos, marceneiros, carpinteiros, pedreiros, padeiros, caixeiros e lavradores. Foi encontrada uma relação de trabalhadores trazidos por Jourdan no IBGE. No documento consta “que além desses vieram ainda com o coronel Jourdan mais 35 negros, cujos nomes não foi possível registrar” [...]. E conclui: “O Coronel Emílio Carlos Jourdan chegou a Jaraguá no ano de 1876, em companhia de 60 trabalhadores destinados à lavoura”. (STULZER, 1973, p. 74-75). Os trabalhadores citados foram os primeiros que vieram para Jaraguá. Não há registro sobre a movimentação desses trabalhadores.
                </p>
                <p className="text-sm sm:text-base">
                    Há afirmativa que com Jourdan “vieram sessenta trabalhadores livres, sendo cinquenta e quatro pretos e seis brancos para montarem o tal engenho de açúcar”. (LEITE, 1988, citado por SABEL, 2003: 36).
                    Na relação trazida há o nome de vários trabalhadores negros, que permaneceram aqui e seus descendentes, ainda hoje, fazem a história de Jaraguá do Sul.
                    Havia escravos entre os trabalhadores de Jourdan? Em 1876, a escravidão ainda existia no Brasil. Eles eram a mão de obra nos engenhos, nas fazendas, nas armações baleeiras, nas estivas dos portos, nas casas-grandes e em tantos outros trabalhos braçais.
                </p>
            </section>


            <section className="py-16 lg:py-0 mt-8 lg:mt-12 flex flex-col gap-4 pb-12 px-8 sm:px-36">
                {/* <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 px-8 sm:px-36"> */}
                <h3 className="font-bold text-lg sm:text-xl">Pioneiros</h3>
                <p className="text-sm sm:text-base">
                    Quem são os pioneiros negros e mulatos que participaram do desbravamento e da história dos primórdios de Jaraguá do Sul? Alguns deles estão citados nominalmente no documento do IBGE, outros ficaram no anonimato.
                </p>
                <div className="flex flex-col gap-6">
                    <div className="p-2 bg-opacity-30 border border-verde-hover rounded-lg w-full gap-2 flex flex-col items-center">
                        <p className="text-sm sm:text-base text-justify">Wenceslau Antônio da Rocha: primeiro morador de Jaraguá, do qual se tem notícia. Ele e seu filho João participaram da demarcação de terras e abertura de estradas na Colônia Hansa Humbold (atual Corupá), nos anos de 1897 a 1900.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 border border-verde-hover rounded-lg w-full gap-2 flex flex-col items-center">
                        <p className="text-sm sm:text-base text-justify">Calixto Domingos Borges: um dos cinco canoeiros da primeira expedição de Jourdan, subindo o rio Itapocu. Sua mãe era uma escrava alforriada e seu pai era um português.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 border border-verde-hover rounded-lg w-full gap-2 flex flex-col items-center">
                        <p className="text-sm sm:text-base text-justify">Maria Umbelina da Silva: era babá dos filhos de Jourdan. Era filha de Manoel Silvestre da Silva e Bárbara Massaneiro. Muito provável que eles fossem escravos alforriados.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 border border-verde-hover rounded-lg w-full gap-2 flex flex-col items-center">
                        <p className="text-sm sm:text-base text-justify">Joaquim Francisco de Paulo: único pedreiro “profissional” (SILVA, 1976, p. 51) trazido por Jourdan. Nasceu no oceano Atlântico, enquanto seus pais eram trazidos em navio negreiro da África para o Brasil.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 border border-verde-hover rounded-lg w-full gap-2 flex flex-col items-center">
                        <p className="text-sm sm:text-base text-justify">Domingos Rosa, Marcos Rosa e Custódio Rosa: Domingos Rosa e seu irmão Marcos Rosa fizeram parte do primeiro grupo de trabalhadores trazidos por Jourdan.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 border border-verde-hover rounded-lg w-full gap-2 flex flex-col items-center">
                        <p className="text-sm sm:text-base text-justify">João Ventura e Justino de Oliveira: Justino de Oliveira era paulista e participou dos trabalhos de desmatamento da área central do Estabelecimento, onde efetuou a plantação de cana-de-açúcar.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 border border-verde-hover rounded-lg w-full gap-2 flex flex-col items-center">
                        <p className="text-sm sm:text-base text-justify">Outros pioneiros: houve ainda outros pioneiros, dos quais não conseguimos descobrir suas histórias. Nem temos certeza se eram negros, mulatos ou brancos. Dentre eles, podemos citar: João da Silva Rondão, José Francisco da Rosa, João Maria Conceição, José Custódio e outros. Mais tarde foram encontrados sobrenomes como Tobias, Bento, Correia, Rita, Cândido e D’Amaceno (citados pela Sra. Maria de Luiza Klinkoski).</p>
                    </div>
                </div>
            </section>

            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 mb-16 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Fotos retiradas do livro "Memórias do povoado Morro da África e a história dos negros em Jaraguá do Sul"</h3>

                <div className="flex flex-wrap gap-6">
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./umbelina.jpg" className="w-[20rem] h-[24rem] object-cover object-top rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Maria Umbelina da Silva.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./calixto.jpg" className="w-[20rem] h-[24rem] object-cover object-top rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Calixto Domingo Borges.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./marlene.png" className="w-[20rem] h-[24rem] object-cover object-top rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">Professora Marlene Rosa dos Santos.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./casacolono.png" className="w-[20rem] object-cover object-top rounded-lg" />
                        <p className="text-slate-600 text-sm sm:text-base">CAsa de um colono da época.</p>
                    </div>
                </div>
            </section>
        </body>
    )
}