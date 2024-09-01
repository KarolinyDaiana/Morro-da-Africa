import HeaderDeslogado from "@/components/Header"
import React from "react";

export default function Geografia() {
    return (
        <body className="flex min-h-screen w-full flex-col text-preto">
            <HeaderDeslogado />
            {/* <section className="bg-gradient-to-b to-transparent from-sky-300 from-1% relative w-full pt-8 md:pt-20 flex flex-col items-center">
                <p className="w-full text-center absolute top-18 left-1/2 transform -translate-x-1/2 font-titulo text-[2rem] md:text-[4rem] lg:text-[5.5rem] font-outline-1 text-transparent">Geografia do morro</p>
                <div className="w-[90%] m-auto">
                    <img src="./morro.svg" className="w-full" alt="Descrição da imagem" />
                </div>
            </section> */}

            <section className="flex flex-col items-center">
                <img className="h-[340px] w-full object-cover opacity-80" src="./parque2.jpg" />
                <p className="-mt-36 z-30 font-titulo text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-outline-2 text-verde-header/50">GEOGRAFIA</p>
            </section>

            {/* <section className="gap-8 pt-16 flex flex-col py-16 lg:py-0 mt-8 lg:mt-24 pb-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Informações básicas do Morro Boa vista</h3>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-base">Altura</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-base">896 metros.</p>
                    </div>

                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-base">Relevo</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-base">Serra.</p>
                    </div>

                    <div className="flex flex-col gap-2 w-full sm:w-[10rem] border-[2px] rounded-lg p-2 border-verde-header">
                        <h4 className="font-bold text-sm sm:text-base">Vegetação</h4>
                        <div className="h-[2px] bg-verde-header" />
                        <p className="text-sm sm:text-base">Mata Atlântica.</p>
                    </div>
                </div>
            </section> */}

            <section className="py-16 lg:py-0 mt-8 lg:mt-12 flex flex-col gap-4 pb-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Informações básicas sobre o Morro Boa Vista</h3>
                <p className="text-sm sm:text-base">O morro possui 896 metros de altura, com o tipo de relevo "serra". A vegetação de mata atlântica é nativa, preservada. A região possui o Rio Jaraguá como principal, o qual tem rumo aos pés do morro.</p>
            </section>

            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 pb-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Cultivos</h3>
                <p className="text-sm sm:text-base">Produziam cachaça, com o objetivo vendê-la em Araquari, São Francisco e Joinville. Faziam pequenas plantações para consumo próprio, como aipim, feijão, milho, abóbora e batata-doce. Extraiam palmito do mato, e podem ter tido pequenas criações de animais, como galinhas, porcos e vacas. A pesca e a caça também eram importantes, desses animais era possível aproveitar a carne para se alimentarem e a pele para fazer objetos. Produziam também farinha de mandioca, que servia para consumo próprio ou para alimentar os animais.</p>
            </section>

            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 pb-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Ocupação econômica das primeiras famílias do povoado</h3>
                <p className="text-sm sm:text-base">Inicialmente não haviam oportunidades de trabalho assalariado. Com o início da colonização em 1890, surgiram algumas oportunidades de trabalho, principalmente em lavouras dos colonos em épocas de colheita e plantio. Com a formação do núcleo urbano, oportunidades de trabalho de empreitada surgiram. Alguns trabalhavam em ferroviárias, as mulheres lavando roupas, homens como serventes de pedreiro, cortando cana e madeira. Nada muito diferente do que é conhecimento atualmente sobre seus afazeres da época.</p>
            </section>

            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Clima</h3>
                <p className="text-sm sm:text-base"> O clima de Jaraguá do Sul é subtropical úmido, com verão quente. Entre os meses de julho a agosto adquire as características de clima temperado, podendo chegar a 5 ºC. A temperatura média na cidade é de 22 ºC, sendo a mínima 2 ºC e a máxima 40 ºC. A precipitação pluviométrica média anual é de 2.000mm.</p>
            </section>

            <section className="gap-2 pt-4 flex flex-col py-16 lg:py-0 mt-8 lg:mt-12 mb-16 px-8 sm:px-36">
                <h3 className="font-bold text-lg sm:text-xl">Fotos</h3>

                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./rio.jpg" className="w-[22rem] rounded-lg"/>
                        <p className="text-slate-600 text-sm sm:text-base">Rio Jaraguá, arquivo pessoal.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./morro.jpg" className="w-[22rem] rounded-lg"/>
                        <p className="text-slate-600 text-sm sm:text-base">Morro Boa Vista, arquivo pessoal.</p>
                    </div>

                    <div className="p-2 bg-opacity-30 bg-green-800 rounded-lg w-fit">
                        <img src="./caminho-viaverde.jpg" className="w-[22rem] rounded-lg"/>
                        <p className="text-slate-600 text-sm sm:text-base">Morro Boa Vista, arquivo pessoal.</p>
                    </div>
                </div>
            </section>
        </body>
    )
}